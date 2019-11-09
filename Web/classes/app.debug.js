Ext.Loader.setPath('Ext.Web', 'Web/classes');
Ext.Loader.setPath('Ext.Web.shared', 'Web/classes/view/shared');
Ext.Loader.setPath('Ext.Ingatlan', 'Ingatlan/classes');

Ext.application({
    requires: [
		'Ext.container.Viewport',
		'Ext.menu.*',
		'Ext.Web.Util',
		'Ext.Web.Msg'
		
	],
    name: 'Web',
	
	defaultView: '',
	defaultLang: '',
	lang: '',
	view: '',
	
	modelErrorMsg: 'Missing localized label for this language!',

    appFolder: 'Web/classes',

	controllers: [
		'Home',
		'Ingatlan',
		'Joggyakorlat',
		'Kapcsolat',
		'Kiszamithatosag',
		'HeaderPartial',
		'MenuPartial',
		'FooterPartial'
    ],
	views: [
		'shared.ContentHeadPartial',
		'shared.ContentPartial',
		'shared.ContentFooterPartial',
		'shared.FooterPartial',
		'shared.HeaderPartial',
		'shared.MenuPartial',
		'home.View',
		'joggyakorlat.View',
		'kapcsolat.View',
		'kiszamithatosag.View',
		'ingatlan.View'
    ],
	stores: [
		'Website',
		'AppConfig',
		'Labels',
		'LocationParams'
    ],
    models: [
		'Website',
		'AppConfig',
		'Label',
		'LocationParam'
	],

	_instanceWebsite: null,
	getWebsiteInstance: function(){
		if (!this._instanceWebsite){
			this._instanceWebsite = Ext.Web.Util.findRecord(this.getWebsiteStore(), [
				 { fieldName: "site", value: "Web" },
				 { fieldName: "lang", value: this.lang }
			]);
		}
		return this._instanceWebsite;
	},
	
    launch: function() {
		var appconfig, localizedViewParam;
		
		this.defaultLang = 'hu-HU';
		this.defaultView = 'home';
		this._instanceWebsite = null;
		
		appconfig = this.getAppConfigStore().findRecord('site', 'Web');
		
		if (appconfig){
			this.defaultLang = appconfig.get('defaultLang');
			this.defaultView = appconfig.get('defaultView');
		}
		
		this.view = Ext.Web.Util.getLocationParam('view', this.defaultView);
		this.lang = Ext.Web.Util.getLocationParam('lang', this.defaultLang);
		
		localizedViewParam = Ext.Web.Util.findRecord(this.getLocationParamsStore(), [
			{ fieldName: "localizedViewParam", value: this.view },
			{ fieldName: "lang", value: this.lang }
	    ]);
		if (!localizedViewParam){
			if (console){ console.log(this.modelErrMsg); }
		}
		else {
			this.view = localizedViewParam.get('view');
		}
		
		// application
		Ext.create('Ext.container.Viewport', {
			layout: 'anchor',
			border: false,
			items: [
				{
					xtype: this.view + 'view'
				}
			]
		});
    }
});