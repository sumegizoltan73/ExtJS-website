Ext.define('Web.controller.MenuPartial', {
    extend: 'Web.controller.AbstractController',
	
	stores: [
		'MenuItems',
		'LocationParams'
    ],
    models: [
		'MenuItem',
		'LocationParam'
	],
	views: [
        'shared.MenuPartial'
    ],
	
    init: function(){
        this.control({
            'menupartial': {
				render: this.onMenuRendered
            }
        });
    },

	onMenuRendered: function(menu){
		var lang, icon, text, action, view, href, target, url, menuitem, localizedViewParam, paramstore;
		
		lang = this.getApplication().lang;

		// lang filter for menu items
		this.getMenuItemsStore().clearFilter(true);
		this.getMenuItemsStore().filter('lang', lang);
		
		// lang filter for location view params
		paramstore = this.getLocationParamsStore();
		paramstore.clearFilter(true);
		paramstore.filter('lang', lang);
		
		// menu items
		this.getMenuItemsStore().each(function(record, i){
			target = null;
			icon = this.get('iconCls');
            text = this.get('text');
            action = this.get('action');
			if (action){
				localizedViewParam = paramstore.findRecord('view', action);
			
				if (!localizedViewParam){
					if (console){ console.log(this.modelErrMsg); }
					view = action;
				}
				else {
					view = localizedViewParam.get('localizedViewParam');
				}
				
				href = Ext.String.format('?view={0}&lang={1}', view, lang);
			}
			else {
				url = this.get("url") || '#';
				if (this.get("urlHasLangParam") === true) {
					url += (/\?/.test(url)) ? '&' : '?';
					url += 'lang=' + lang;
				}
				href = url;
				target = this.get('urlTarget');
			}
			
			menuitem = {
                text: Ext.String.format('<i class="fa {0}"></i><span>{1}</span>', icon, text),
				href: href
            };
			
			if (target){
				menuitem.hrefTarget = target;
			}
			
            menu.add(menuitem);
		});
		menu.show();
	}
});