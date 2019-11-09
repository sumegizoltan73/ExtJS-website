Ext.define('Web.store.AppConfig', {
    extend: 'Ext.data.Store',
	model: 'Web.model.AppConfig',

	data: {
		"success": true,
		"sites": [{
            site: "Web",
			defaultLang: "hu-HU",
			defaultView: "home"
        }]
    },
	
	proxy: {
		type: 'memory',
		reader: {								
			type: 'json',
			root: 'sites',
			successProperty: 'success'
		}
	}
});