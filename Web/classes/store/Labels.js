/**
 * @class Web.store.Labels
 * @extends Ext.data.Store
 */
Ext.define('Web.store.Labels', {
    extend: 'Ext.data.Store',
	model: 'Web.model.Label',
	id: 'LabelStore',
    //autoLoad: true,

	data: {
		"success": true,
		"labels": [
			{ "lang": "hu-HU", "label": "header.languagesText", "text": "Nyelvek" },
			{ "lang": "hu-HU", "label": "footer.emailText", "text": "email" },
			{ "lang": "hu-HU", "label": "footer.homepageText", "text": "weblap" },
			
			{ "lang": "en-US", "label": "header.languagesText", "text": "Languages" },
			{ "lang": "en-US", "label": "footer.emailText", "text": "email" },
			{ "lang": "en-US", "label": "footer.homepageText", "text": "website" },
			
			{ "lang": "de-DE", "label": "header.languagesText", "text": "Sprachen" },
			{ "lang": "de-DE", "label": "footer.emailText", "text": "email" },
			{ "lang": "de-DE", "label": "footer.homepageText", "text": "Webseite" },
			
			{ "lang": "hr-HR", "label": "header.languagesText", "text": "Jezici" },
			{ "lang": "hr-HR", "label": "footer.emailText", "text": "email" },
			{ "lang": "hr-HR", "label": "footer.homepageText", "text": "website" },
			
			{ "lang": "pl-PL", "label": "header.languagesText", "text": "Języki" },
			{ "lang": "pl-PL", "label": "footer.emailText", "text": "email" },
			{ "lang": "pl-PL", "label": "footer.homepageText", "text": "witryna internetowa" },
			
			{ "lang": "ro-RO", "label": "header.languagesText", "text": "Limbi" },
			{ "lang": "ro-RO", "label": "footer.emailText", "text": "email" },
			{ "lang": "ro-RO", "label": "footer.homepageText", "text": "website" },
			
			{ "lang": "ru-RU", "label": "header.languagesText", "text": "Языки" },
			{ "lang": "ru-RU", "label": "footer.emailText", "text": "Электронная почта" },
			{ "lang": "ru-RU", "label": "footer.homepageText", "text": "сайт" },
			
			{ "lang": "sk-SK", "label": "header.languagesText", "text": "Jazyky" },
			{ "lang": "sk-SK", "label": "footer.emailText", "text": "E-mailová adresa" },
			{ "lang": "sk-SK", "label": "footer.homepageText", "text": "webové stránky" },
			
			{ "lang": "sr-SR", "label": "header.languagesText", "text": "Jezici" },
			{ "lang": "sr-SR", "label": "footer.emailText", "text": "email" },
			{ "lang": "sr-SR", "label": "footer.homepageText", "text": "vebsajt" }
		]
	},
	
	proxy: {
		type: 'memory',
		//url: '/Web/classes/data/article-links.json',
		reader: {								
			type: 'json',
			root: 'labels',
			successProperty: 'success'
		}
	}
});