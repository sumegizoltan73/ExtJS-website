Ext.define('Web.controller.Joggyakorlat', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Article',
		'FAQ'
    ],
    models: [
		'Article'
	],
	views: [
        'joggyakorlat.View'
    ],
	
    init: function() {
        this.control({
            'contentheadpartial panel[name=jogContentHead]': {
				render: this.onContentHeadRendered
			},
            'contentfooterpartial panel[name=jogContentFooter]': {
				render: this.onContentFooterRendered
			}
        });
    },

    onContentHeadRendered: function(panel) {
		Ext.Web.Util.createArticles(panel, this.getArticleStore(), { 
			filterFn: function(item) { 
				return /joggyakorlat|all/.test(item.get("view")) && 
						item.get("target") === "content-head"; 
			}
		});
    },

    onContentFooterRendered: function(panel) {
		Ext.Web.Util.createArticles(panel, this.getArticleStore(), { 
			filterFn: function(item) { 
				return /joggyakorlat|all/.test(item.get("view")) && 
						item.get("target") === "content-footer"; 
			},
			itemCallback: [{
				test: function(item) { 
					return /jog-faq-questions/.test(item.get("name")) && 
							item.get("target") === "content-footer"; 
				},
				fn: Ext.bind(this.onFAQquestionsRendered, this)
			}, {
				test: function(item) { 
					return /jog-faq-answers/.test(item.get("name")) && 
							item.get("target") === "content-footer"; 
				},
				fn: Ext.bind(this.onFAQanswersRendered, this)
			}]
		});
		
		Ext.DomHelper.append(panel.body, {
			tag: 'div',
			cls: 'web-x-column web-x-column-small',
			html: '<img src="img/n-01.jpg" style="border-radius: 3px; box-shadow: -11px 12px 33px #000000;" alt="dr. Nagy Mátyás" />'
		});
    },

	onFAQquestionsRendered: function(panel){
		return Ext.Web.Util.createArticles(panel, this.getFAQStore(), { 
			filterFn: function(item){
				return /joggyakorlat/.test(item.get("view")) && 
							item.get("target") === "jog-faq-questions";
			},
			tagArticleContainer: false,
			clsArticleContainer: false,
			tagTitle: 'span',
			tagHtml: 'span',
			clsTitle: 'title faq',
			isArticleItemsAsChildren: true
		});
	},

	onFAQanswersRendered: function(panel){
		return Ext.Web.Util.createArticles(panel, this.getFAQStore(), { 
			filterFn: function(item){
				return /joggyakorlat/.test(item.get("view")) && 
							item.get("target") === "jog-faq-answers";
			},
			tagArticleContainer: false,
			clsArticleContainer: false,
			tagTitle: 'span',
			tagHtml: 'span',
			clsTitle: 'title faq',
			isArticleItemsAsChildren: true
		});
	}
});