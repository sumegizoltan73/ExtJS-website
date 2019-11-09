Ext.define('Web.store.LocationParams', {
    extend: 'Ext.data.Store',
	model: 'Web.model.LocationParam',
	id: 'LocationParamStore',
    //autoLoad: true,

	data: {
		"success": true,
		"params": [
			{ "lang": "hu-HU", "view": "home", "localizedViewParam": "home" }, 
			{ "lang": "hu-HU", "view": "ingatlan", "localizedViewParam": "ingatlan" }, 
			{ "lang": "hu-HU", "view": "joggyakorlat", "localizedViewParam": "joggyakorlat" }, 
			{ "lang": "hu-HU", "view": "kapcsolat", "localizedViewParam": "kapcsolat" }, 
			{ "lang": "hu-HU", "view": "kiszamithatosag", "localizedViewParam": "kiszamithatosag" },
			
			{ "lang": "en-US", "view": "home", "localizedViewParam": "home" }, 
			{ "lang": "en-US", "view": "ingatlan", "localizedViewParam": "real-estate" }, 
			{ "lang": "en-US", "view": "joggyakorlat", "localizedViewParam": "jurisprudence" }, 
			{ "lang": "en-US", "view": "kapcsolat", "localizedViewParam": "contact" }, 
			{ "lang": "en-US", "view": "kiszamithatosag", "localizedViewParam": "predictability" },
			
			{ "lang": "de-DE", "view": "home", "localizedViewParam": "zuhause" }, 
			{ "lang": "de-DE", "view": "ingatlan", "localizedViewParam": "immobilien" }, 
			{ "lang": "de-DE", "view": "joggyakorlat", "localizedViewParam": "jurisprudenz" }, 
			{ "lang": "de-DE", "view": "kapcsolat", "localizedViewParam": "contact" }, 
			{ "lang": "de-DE", "view": "kiszamithatosag", "localizedViewParam": "vorhersagbarkeit" },
			
			{ "lang": "hr-HR", "view": "home", "localizedViewParam": "dom" }, 
			{ "lang": "hr-HR", "view": "ingatlan", "localizedViewParam": "svojstvo" }, 
			{ "lang": "hr-HR", "view": "joggyakorlat", "localizedViewParam": "jurisprudencija" }, 
			{ "lang": "hr-HR", "view": "kapcsolat", "localizedViewParam": "link" }, 
			{ "lang": "hr-HR", "view": "kiszamithatosag", "localizedViewParam": "predvidljivost" },
			
			{ "lang": "pl-PL", "view": "home", "localizedViewParam": "dom" }, 
			{ "lang": "pl-PL", "view": "ingatlan", "localizedViewParam": "wlasciwosc" }, 
			{ "lang": "pl-PL", "view": "joggyakorlat", "localizedViewParam": "prawoznawstwo" }, 
			{ "lang": "pl-PL", "view": "kapcsolat", "localizedViewParam": "polaczenie" }, 
			{ "lang": "pl-PL", "view": "kiszamithatosag", "localizedViewParam": "przewidywalnosc" },
			
			{ "lang": "ro-RO", "view": "home", "localizedViewParam": "acasa" }, 
			{ "lang": "ro-RO", "view": "ingatlan", "localizedViewParam": "proprietate" }, 
			{ "lang": "ro-RO", "view": "joggyakorlat", "localizedViewParam": "jurisprudenta" }, 
			{ "lang": "ro-RO", "view": "kapcsolat", "localizedViewParam": "legatura" }, 
			{ "lang": "ro-RO", "view": "kiszamithatosag", "localizedViewParam": "previzibilitatea" },
			
			{ "lang": "ru-RU", "view": "home", "localizedViewParam": "domoy" }, 
			{ "lang": "ru-RU", "view": "ingatlan", "localizedViewParam": "imushchestvo" }, 
			{ "lang": "ru-RU", "view": "joggyakorlat", "localizedViewParam": "yurisprudentsiya" }, 
			{ "lang": "ru-RU", "view": "kapcsolat", "localizedViewParam": "ssylka" }, 
			{ "lang": "ru-RU", "view": "kiszamithatosag", "localizedViewParam": "predskazuyemost" },
			
			{ "lang": "sk-SK", "view": "home", "localizedViewParam": "domace" }, 
			{ "lang": "sk-SK", "view": "ingatlan", "localizedViewParam": "vlastnost" }, 
			{ "lang": "sk-SK", "view": "joggyakorlat", "localizedViewParam": "pravna-veda" }, 
			{ "lang": "sk-SK", "view": "kapcsolat", "localizedViewParam": "odkaz" }, 
			{ "lang": "sk-SK", "view": "kiszamithatosag", "localizedViewParam": "predvidatelnost" },
			
			{ "lang": "sr-SR", "view": "home", "localizedViewParam": "dom" }, 
			{ "lang": "sr-SR", "view": "ingatlan", "localizedViewParam": "imovina" }, 
			{ "lang": "sr-SR", "view": "joggyakorlat", "localizedViewParam": "jurisprudencija" }, 
			{ "lang": "sr-SR", "view": "kapcsolat", "localizedViewParam": "link" }, 
			{ "lang": "sr-SR", "view": "kiszamithatosag", "localizedViewParam": "predvidljivost" }
		]
	},
	
	proxy: {
		type: 'memory',
		reader: {								
			type: 'json',
			root: 'params',
			successProperty: 'success'
		}
	}
});