Ext.define('Web.controller.HeaderPartial', {
    extend: 'Web.controller.AbstractController',
	
	stores: [
		'Labels',
		'Languages',
		'LocationParams'
    ],
    models: [
		'Website',
		'Label',
		'Lang',
		'LocationParam'
	],
	views: [
        'shared.HeaderPartial'
    ],
	
    init: function() {
		this.initBase(this);
        this.control({
            'headerpartial panel[name="title"]': {
                beforerender: this.onTitleRendered
            },
			'headerpartial button[name="langmenu"]': {
                beforerender: this.onLangMenuRendered
            }
        });
    },

    onTitleRendered: function(panel) {
		var model = this.getApplication().getWebsiteInstance();
		if (model){
			panel.html = Ext.String.format(
				'<h1>{0}</h1>', 
				model.get("name")
			);
		}
		else {
			if (console){ console.log(this.modelErrMsg); }
		}
    },
	
	onLangMenuRendered: function(splitbutton) {
		var paramstore, view = this.getApplication().view;
		
		paramstore = this.getLocationParamsStore();
		paramstore.clearFilter(true);
		
		// button label
		splitbutton.text = Ext.Web.Util.getLabel('header.languagesText', 
												 '', 
												 this.getLabelsStore());
		
		// splitbutton menuitems as selectable languages
		this.getLanguagesStore().each(function(record, i){
			var langcode, text, img, viewparam;
			
			langcode = this.get('langid');
            text = this.get('name');
            img = this.get('img');
			viewparam = Ext.Web.Util.findRecord(paramstore, [
				 { fieldName: "view", value: view },
				 { fieldName: "lang", value: langcode }
			]);
			
			if (!viewparam){
				if (console){ console.log(this.modelErrMsg); }
				viewparam = view;
			}
			else {
				viewparam = viewparam.get('localizedViewParam') || view;
			}
				
            splitbutton.menu.add({
                lang: langcode,
                href: Ext.String.format('?view={0}&lang={1}', viewparam, langcode),
                text: text,
                icon: img,
                iconCls: 'lang-flag'
            });
		});
	}
});