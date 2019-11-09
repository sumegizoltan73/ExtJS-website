Ext.define('Web.store.Website', {
    extend: 'Ext.data.Store',
	model: 'Web.model.Website',

	data: {
		"success": true,
		"sites": [{
            site: "Web",
			lang: "hu-HU",
            name: "dr. Nagy Mátyás<br />ügyvéd, Baja",    
            email: "info@drnagymatyas.hu",
			siteurl: 'http://www.drnagymatyas.hu',
            copyright: "&copy;dr. Nagy Mátyás, 2013-2014",
			gmapClientId: "",	// nem szükséges havi 25000 lekérdezésig (?)
			gmapgeoCodeAddr: '6500 Baja, Molnár utca 13.',
			gmapLatLng: '46.185379,18.930223',
			gmaptitle: 'Dr. Nagy Mátyás - 6500 Baja, Molnár utca 13.'
        }, {
            site: "Web",
			lang: "en-US",
            name: "dr. Mátyás Nagy<br />lawyer, Baja",    
            email: "info@drnagymatyas.hu",
			siteurl: 'http://www.drnagymatyas.hu',
            copyright: "&copy;dr. Mátyás Nagy, 2013-2014",
			gmapClientId: "",	// nem szükséges havi 25000 lekérdezésig (?)
			gmapgeoCodeAddr: '6500 Baja, Molnár utca 13.',
			gmapLatLng: '46.185379,18.930223',
			gmaptitle: 'Dr. Mátyás Nagy - 6500 Baja, Molnár utca 13.'
        }, {
            site: "Web",
			lang: "de-DE",
            name: "dr. Mátyás Nagy<br />Anwalt, Baja",    
            email: "info@drnagymatyas.hu",
			siteurl: 'http://www.drnagymatyas.hu',
            copyright: "&copy;dr. Mátyás Nagy, 2013-2014",
			gmapClientId: "",	// nem szükséges havi 25000 lekérdezésig (?)
			gmapgeoCodeAddr: '6500 Baja, Molnár utca 13.',
			gmapLatLng: '46.185379,18.930223',
			gmaptitle: 'Dr. Mátyás Nagy - 6500 Baja, Molnár utca 13.'
        }, {
            site: "Web",
			lang: "hr-HR",
            name: "dr. Mátyás Nagy<br />odvjetnik, Baja",    
            email: "info@drnagymatyas.hu",
			siteurl: 'http://www.drnagymatyas.hu',
            copyright: "&copy;dr. Mátyás Nagy, 2013-2014",
			gmapClientId: "",	// nem szükséges havi 25000 lekérdezésig (?)
			gmapgeoCodeAddr: '6500 Baja, Molnár utca 13.',
			gmapLatLng: '46.185379,18.930223',
			gmaptitle: 'Dr. Mátyás Nagy - 6500 Baja, Molnár utca 13.'
        }, {
            site: "Web",
			lang: "pl-PL",
            name: "dr. Mátyás Nagy<br />prawnik, Baja",    
            email: "info@drnagymatyas.hu",
			siteurl: 'http://www.drnagymatyas.hu',
            copyright: "&copy;dr. Mátyás Nagy, 2013-2014",
			gmapClientId: "",	// nem szükséges havi 25000 lekérdezésig (?)
			gmapgeoCodeAddr: '6500 Baja, Molnár utca 13.',
			gmapLatLng: '46.185379,18.930223',
			gmaptitle: 'Dr. Mátyás Nagy - 6500 Baja, Molnár utca 13.'
        }, {
            site: "Web",
			lang: "ro-RO",
            name: "dr. Mátyás Nagy<br />avocat, Baja",    
            email: "info@drnagymatyas.hu",
			siteurl: 'http://www.drnagymatyas.hu',
            copyright: "&copy;dr. Mátyás Nagy, 2013-2014",
			gmapClientId: "",	// nem szükséges havi 25000 lekérdezésig (?)
			gmapgeoCodeAddr: '6500 Baja, Molnár utca 13.',
			gmapLatLng: '46.185379,18.930223',
			gmaptitle: 'Dr. Mátyás Nagy - 6500 Baja, Molnár utca 13.'
        }, {
            site: "Web",
			lang: "ru-RU",
            name: "dr. Mátyás Nagy<br />адвокат, Baja",    
            email: "info@drnagymatyas.hu",
			siteurl: 'http://www.drnagymatyas.hu',
            copyright: "&copy;dr. Mátyás Nagy, 2013-2014",
			gmapClientId: "",	// nem szükséges havi 25000 lekérdezésig (?)
			gmapgeoCodeAddr: '6500 Baja, Molnár utca 13.',
			gmapLatLng: '46.185379,18.930223',
			gmaptitle: 'Dr. Mátyás Nagy - 6500 Baja, Molnár utca 13.'
        }, {
            site: "Web",
			lang: "sk-SK",
            name: "dr. Mátyás Nagy<br />právnik, Baja",    
            email: "info@drnagymatyas.hu",
			siteurl: 'http://www.drnagymatyas.hu',
            copyright: "&copy;dr. Mátyás Nagy, 2013-2014",
			gmapClientId: "",	// nem szükséges havi 25000 lekérdezésig (?)
			gmapgeoCodeAddr: '6500 Baja, Molnár utca 13.',
			gmapLatLng: '46.185379,18.930223',
			gmaptitle: 'Dr. Mátyás Nagy - 6500 Baja, Molnár utca 13.'
        }, {
            site: "Web",
			lang: "sr-SR",
            name: "dr. Mátyás Nagy<br />pravnik, Baja",    
            email: "info@drnagymatyas.hu",
			siteurl: 'http://www.drnagymatyas.hu',
            copyright: "&copy;dr. Mátyás Nagy, 2013-2014",
			gmapClientId: "",	// nem szükséges havi 25000 lekérdezésig (?)
			gmapgeoCodeAddr: '6500 Baja, Molnár utca 13.',
			gmapLatLng: '46.185379,18.930223',
			gmaptitle: 'Dr. Mátyás Nagy - 6500 Baja, Molnár utca 13.'
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