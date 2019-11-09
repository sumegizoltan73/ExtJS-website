Ext.ns('Ext.Web');

Ext.Web.Util = new function(){
	var Util = this;
	
	Ext.apply(Util, {
		config: {
			filterFn: function(item) { 
				return /home|all/.test(item.get("view")) && 
						item.get("target") === "content"; 
			},
			clsContainer: 'web-x-column',
			clsArticleContainer: 'x-container x-column x-container-default',
			clsTitle: 'title',
			tagSeparator: 'hr',
			tagContainer: 'div',
			tagArticleContainer: 'div',
			tagTitle: 'h2',
			tagHtml: 'div',
			fieldTitle: 'title',
			fieldCls: 'cls',
			fieldClsContainer: 'clsContainer',
			fieldHtml: 'html',
			fieldName: 'name',
			fieldHref: 'href',
			isAddSeparator: false,
			isSeparataFirst: false,
			isArticleItemsAsChildren: false,
			itemCallback: false
		},
		
		/**
		 * Get label text by labelId.
		 * 
		 *     var text = Ext.Web.Util.getLabel('footer.emailText');
		 *        or
		 *     var text = Ext.Web.Util.getLabel('footer.emailText', 'en-US');
		 *        or
		 *     var text = Ext.Web.Util.getLabel('footer.emailText', 'en-US', this.getLabelsStrore());
		 *     
		 * @param  {string} [id] id of label
		 * @param  {string} [lang] language id
		 * @param  {Ext.data.Store} [store] The Store object of labels.
		 * @return {string}
		 */
		getLabel: function(id, lang, store){
			var text = '', model, data, lng = lang, app;
			
			if (!lng){
				app = Web.getApplication();
				lng = app.lang;
			}
			
			data = store || Ext.data.StoreManager.lookup('LabelStore');
			
			if (data){
				model = this.findRecord(data, [
					{ fieldName: "label", value: id },
					{ fieldName: "lang", value: lng }
				]);
			}
			else {
				if (console){ console.log('parameter "store" invalid for label: "' + id + '"'); }
			}
			
			if (model){
				text = model.get('text');
			}
			
			return text;
		},
		
		/**
		 * Find the first filtered record in the store.
		 * 
		 *     var model = Ext.Web.Util.findRecord(store, [
		 *	      { fieldName: "site", value: "Web" },
		 *	      { fieldName: "lang", value: "hu-HU" }
		 *     ]);
		 *     
		 * @param  {Ext.data.Store} [data] Store object.
		 * @param  {Array} [fields] Array with filter Object. The filter object like this: { fieldName: "id", value: "Web" }
		 * @return {Ext.data.Model}
		 */ 
		findRecord: function(data, fields){
			var fn, index, model = null;
			
			if (Array.isArray(fields)){
				fn = function(record, id){
					var i, result = (this.length > 0);
					
					// filter by all fields from the parameter "fields"
					for (i = 0; i < this.length; i++){
						result = result && (record.get(this[i].fieldName) == this[i].value);
					}
					
					return result;
				};
				
				index = data.findBy(fn, fields);
				if (index > -1){
					model = data.getAt(index);
				}
			}
			else {
				if (console){ console.log('parameter "fields" isn\'t Array'); }
			}
			
			return model;
		},
		
		/**
		 * Find parameter in Url, and return it's value, or the default value.
		 * 
		 *     // Url = http://localhost?view=contact&lang=en-US
		 *     var view = Ext.Web.Util.getLocationParam('view', 'home');
		 *     
		 * @param  {string} [paramName] The finded parameter.
		 * @param  {string} [defaultValue] The default value for return, if the finded parameter not exists in the Url.
		 * @return {string}
		 */ 
		getLocationParam: function(paramName, defaultValue){
			var param, urlparams, params, i;
			
			param = defaultValue || '';
		
			// menu parameters
			if (location.search){
				urlparams = location.search.replace('?', '&').split('&');

				for(i=0; i<urlparams.length; i++){
					params = urlparams[i].split('=');
					
					if (params[0].toLowerCase() === paramName){
						param = params[1] || defaultValue;
						break;
					}
				};
			}
			
			return param;
		},
		
		createArticles: function(panel, store, config){
			var container, store, articleConfig = {};
			
			Ext.apply(articleConfig, config, this.config);
		
			store.clearFilter(true);
			store.filter("lang", Web.getApplication().lang);
			store.filter([{ filterFn: articleConfig.filterFn }]);
			if (panel.body && articleConfig.tagContainer) {
				container = Ext.DomHelper.append(panel.body, {
					tag: articleConfig.tagContainer,
					cls: articleConfig.clsContainer
				});
			}
			else {
				container = panel;
			}

			if (articleConfig.isArticleItemsAsChildren){
				container.children = [];
				container = this.createArticleItems(container, store, articleConfig);
			}
			else {
				this.createArticleItems(container, store, articleConfig);
			}
			
			return container;
		},
		
		createArticleItems: function(container, store, config){
			store.each(function(record, i){
				var i, articleContainer, title, html, name, cls, clsContainer, href, childHtml, children = [];

				if ((config.isSeparataFirst && i < 1) || (config.isAddSeparator)) {
					children.push({ tag: config.tagSeparator });
				}
				title = this.get(config.fieldTitle);
				if (title){
					children.push({ tag: config.tagTitle, cls: config.clsTitle, html: title});
				}
				html = this.get(config.fieldHtml) || '';
				name = this.get(config.fieldName) || '';
				cls = this.get(config.fieldCls);
				clsContainer = this.get(config.fieldClsContainer);
				if (html || name){
					childHtml = { tag: config.tagHtml};
					href = this.get(config.fieldHref);
					if (html){
						childHtml.html = html;
					}
					if (name){
						childHtml.name = name;
					}
					if (cls){
						childHtml.cls = cls;
					}
					
					if (href){
						if (/\{0\}/.test(href)) {
							childHtml.href = Ext.String.format(href, html);
						}
						else {
							childHtml.href = href;
						}
					}
					
					if (config.itemCallback){
						for (i=0; i<config.itemCallback.length; i++){
							if (config.itemCallback[i].test(this)){
								//add children to multicontent
								childHtml = config.itemCallback[i].fn(childHtml);
							}
						}
					}
				
					// the children items: [title, html]
					// max children.length: 2 (title, html)
					// min children.length: 1 (html)
					children.push(childHtml);
					if (href){
						children.push({ tag: 'span', html: ' '});
					}
				}

				if (config.tagArticleContainer){
					articleContainer = {
						tag: config.tagArticleContainer,
						children: children
					};
				
					if (config.clsArticleContainer || clsContainer){
						articleContainer.cls = config.clsArticleContainer;
						// container class from the child settings
						if (!articleContainer.cls){
							articleContainer.cls = clsContainer;
						}
						else if (clsContainer){
							articleContainer.cls += " " + clsContainer;
						}
					}

					if (config.isArticleItemsAsChildren){
						container.children.push(articleContainer);
					}
					else {
						Ext.DomHelper.append(container, articleContainer);
					}
				}
				else if (config.isArticleItemsAsChildren){
					// the container not a dom element, only an object
					container.children.push(children);
					
					if (clsContainer){
						// container class from the child settings
						if (!container.cls){ 
							container.cls = clsContainer; 
						}
						else {
							container.cls = container.cls + " " + clsContainer; 
						}
					}
				}
			});
			
			return container;
		}
	});
};