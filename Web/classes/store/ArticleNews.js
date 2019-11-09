Ext.define('Web.store.ArticleNews', {
    extend: 'Ext.data.Store',
	model: 'Web.model.Article',
	id: 'ArticleNewsStore',
    //autoLoad: true,

	data: {
		"success": true,
		"articles": [{ 
			"lang": "hu-HU", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "1.",
			"html": "Az Európai Bíróság újabb és ezúttal magyar vonatkozást tartalmazó ügyben hozott ítéletet (megerősítve a korábbi C-3506362005.okt.25.sz-t.) előzetes döntéshozatali eljárásban. Eszerint ha pl. jelzáloghitel-szerződést nem a bankfiókban kötik, vagy a szerződéses ajánlat nem a hitelfelvevő kérésére történt, akkor 7 napos elállási jogot kell adni a hitelt felvevőnek. Ha az erről szóló írásos tájékoztatás elmaradt, nemzeti bíróságok a jogvitában az eseti döntéssel értelmezett uniós irányelvet alkalmazzák."
		}, { 
			"lang": "hu-HU", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "2.",
			"html": "Az Európai Parlament és a Tanács elfogadta a 2012/13/EU Irányelvet (2012. május 22) a büntetőerljárás során a tájékoztatáshoz való jogról." 
		}, { 
			"lang": "hu-HU", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;A jogi segítői névjegyzékbe vételem megtörtént. (Tanácsadás, peres képviselet, okiratszerkeszkesztés, büntetőeljárási közreműködés.)<br /> 2013. január" 
		}, { 
			"lang": "hu-HU", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;Hatósági közvetítői névjegyzékbe felvételem megtörtént. tevékenységek a \"Kiszámíthatóság-rovatban.\"" 
		},
	
		{ 
			"lang": "en-US", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "1.",
			"html": "Az Európai Bíróság újabb és ezúttal magyar vonatkozást tartalmazó ügyben hozott ítéletet (megerősítve a korábbi C-3506362005.okt.25.sz-t.) előzetes döntéshozatali eljárásban. Eszerint ha pl. jelzáloghitel-szerződést nem a bankfiókban kötik, vagy a szerződéses ajánlat nem a hitelfelvevő kérésére történt, akkor 7 napos elállási jogot kell adni a hitelt felvevőnek. Ha az erről szóló írásos tájékoztatás elmaradt, nemzeti bíróságok a jogvitában az eseti döntéssel értelmezett uniós irányelvet alkalmazzák."
		}, { 
			"lang": "en-US", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "2.",
			"html": "Az Európai Parlament és a Tanács elfogadta a 2012/13/EU Irányelvet (2012. május 22) a büntetőerljárás során a tájékoztatáshoz való jogról." 
		}, { 
			"lang": "en-US", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;A jogi segítői névjegyzékbe vételem megtörtént. (Tanácsadás, peres képviselet, okiratszerkeszkesztés, büntetőeljárási közreműködés.)<br /> 2013. január" 
		}, { 
			"lang": "en-US", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;Hatósági közvetítői névjegyzékbe felvételem megtörtént. tevékenységek a \"Kiszámíthatóság-rovatban.\"" 
		},
	
		{ 
			"lang": "de-DE", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "1.",
			"html": "Az Európai Bíróság újabb és ezúttal magyar vonatkozást tartalmazó ügyben hozott ítéletet (megerősítve a korábbi C-3506362005.okt.25.sz-t.) előzetes döntéshozatali eljárásban. Eszerint ha pl. jelzáloghitel-szerződést nem a bankfiókban kötik, vagy a szerződéses ajánlat nem a hitelfelvevő kérésére történt, akkor 7 napos elállási jogot kell adni a hitelt felvevőnek. Ha az erről szóló írásos tájékoztatás elmaradt, nemzeti bíróságok a jogvitában az eseti döntéssel értelmezett uniós irányelvet alkalmazzák."
		}, { 
			"lang": "de-DE", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "2.",
			"html": "Az Európai Parlament és a Tanács elfogadta a 2012/13/EU Irányelvet (2012. május 22) a büntetőerljárás során a tájékoztatáshoz való jogról." 
		}, { 
			"lang": "de-DE", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;A jogi segítői névjegyzékbe vételem megtörtént. (Tanácsadás, peres képviselet, okiratszerkeszkesztés, büntetőeljárási közreműködés.)<br /> 2013. január" 
		}, { 
			"lang": "de-DE", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;Hatósági közvetítői névjegyzékbe felvételem megtörtént. tevékenységek a \"Kiszámíthatóság-rovatban.\"" 
		},
	
		{ 
			"lang": "hr-HR", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "1.",
			"html": "Az Európai Bíróság újabb és ezúttal magyar vonatkozást tartalmazó ügyben hozott ítéletet (megerősítve a korábbi C-3506362005.okt.25.sz-t.) előzetes döntéshozatali eljárásban. Eszerint ha pl. jelzáloghitel-szerződést nem a bankfiókban kötik, vagy a szerződéses ajánlat nem a hitelfelvevő kérésére történt, akkor 7 napos elállási jogot kell adni a hitelt felvevőnek. Ha az erről szóló írásos tájékoztatás elmaradt, nemzeti bíróságok a jogvitában az eseti döntéssel értelmezett uniós irányelvet alkalmazzák."
		}, { 
			"lang": "hr-HR", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "2.",
			"html": "Az Európai Parlament és a Tanács elfogadta a 2012/13/EU Irányelvet (2012. május 22) a büntetőerljárás során a tájékoztatáshoz való jogról." 
		}, { 
			"lang": "hr-HR", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;A jogi segítői névjegyzékbe vételem megtörtént. (Tanácsadás, peres képviselet, okiratszerkeszkesztés, büntetőeljárási közreműködés.)<br /> 2013. január" 
		}, { 
			"lang": "hr-HR", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;Hatósági közvetítői névjegyzékbe felvételem megtörtént. tevékenységek a \"Kiszámíthatóság-rovatban.\"" 
		},
	
		{ 
			"lang": "pl-PL", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "1.",
			"html": "Az Európai Bíróság újabb és ezúttal magyar vonatkozást tartalmazó ügyben hozott ítéletet (megerősítve a korábbi C-3506362005.okt.25.sz-t.) előzetes döntéshozatali eljárásban. Eszerint ha pl. jelzáloghitel-szerződést nem a bankfiókban kötik, vagy a szerződéses ajánlat nem a hitelfelvevő kérésére történt, akkor 7 napos elállási jogot kell adni a hitelt felvevőnek. Ha az erről szóló írásos tájékoztatás elmaradt, nemzeti bíróságok a jogvitában az eseti döntéssel értelmezett uniós irányelvet alkalmazzák."
		}, { 
			"lang": "pl-PL", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "2.",
			"html": "Az Európai Parlament és a Tanács elfogadta a 2012/13/EU Irányelvet (2012. május 22) a büntetőerljárás során a tájékoztatáshoz való jogról." 
		}, { 
			"lang": "pl-PL", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;A jogi segítői névjegyzékbe vételem megtörtént. (Tanácsadás, peres képviselet, okiratszerkeszkesztés, büntetőeljárási közreműködés.)<br /> 2013. január" 
		}, { 
			"lang": "pl-PL", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;Hatósági közvetítői névjegyzékbe felvételem megtörtént. tevékenységek a \"Kiszámíthatóság-rovatban.\"" 
		},
	
		{ 
			"lang": "ro-RO", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "1.",
			"html": "Az Európai Bíróság újabb és ezúttal magyar vonatkozást tartalmazó ügyben hozott ítéletet (megerősítve a korábbi C-3506362005.okt.25.sz-t.) előzetes döntéshozatali eljárásban. Eszerint ha pl. jelzáloghitel-szerződést nem a bankfiókban kötik, vagy a szerződéses ajánlat nem a hitelfelvevő kérésére történt, akkor 7 napos elállási jogot kell adni a hitelt felvevőnek. Ha az erről szóló írásos tájékoztatás elmaradt, nemzeti bíróságok a jogvitában az eseti döntéssel értelmezett uniós irányelvet alkalmazzák."
		}, { 
			"lang": "ro-RO", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "2.",
			"html": "Az Európai Parlament és a Tanács elfogadta a 2012/13/EU Irányelvet (2012. május 22) a büntetőerljárás során a tájékoztatáshoz való jogról." 
		}, { 
			"lang": "ro-RO", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;A jogi segítői névjegyzékbe vételem megtörtént. (Tanácsadás, peres képviselet, okiratszerkeszkesztés, büntetőeljárási közreműködés.)<br /> 2013. január" 
		}, { 
			"lang": "ro-RO", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;Hatósági közvetítői névjegyzékbe felvételem megtörtént. tevékenységek a \"Kiszámíthatóság-rovatban.\"" 
		},
	
		{ 
			"lang": "ru-RU", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "1.",
			"html": "Az Európai Bíróság újabb és ezúttal magyar vonatkozást tartalmazó ügyben hozott ítéletet (megerősítve a korábbi C-3506362005.okt.25.sz-t.) előzetes döntéshozatali eljárásban. Eszerint ha pl. jelzáloghitel-szerződést nem a bankfiókban kötik, vagy a szerződéses ajánlat nem a hitelfelvevő kérésére történt, akkor 7 napos elállási jogot kell adni a hitelt felvevőnek. Ha az erről szóló írásos tájékoztatás elmaradt, nemzeti bíróságok a jogvitában az eseti döntéssel értelmezett uniós irányelvet alkalmazzák."
		}, { 
			"lang": "ru-RU", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "2.",
			"html": "Az Európai Parlament és a Tanács elfogadta a 2012/13/EU Irányelvet (2012. május 22) a büntetőerljárás során a tájékoztatáshoz való jogról." 
		}, { 
			"lang": "ru-RU", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;A jogi segítői névjegyzékbe vételem megtörtént. (Tanácsadás, peres képviselet, okiratszerkeszkesztés, büntetőeljárási közreműködés.)<br /> 2013. január" 
		}, { 
			"lang": "ru-RU", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;Hatósági közvetítői névjegyzékbe felvételem megtörtént. tevékenységek a \"Kiszámíthatóság-rovatban.\"" 
		},
	
		{ 
			"lang": "sk-SK", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "1.",
			"html": "Az Európai Bíróság újabb és ezúttal magyar vonatkozást tartalmazó ügyben hozott ítéletet (megerősítve a korábbi C-3506362005.okt.25.sz-t.) előzetes döntéshozatali eljárásban. Eszerint ha pl. jelzáloghitel-szerződést nem a bankfiókban kötik, vagy a szerződéses ajánlat nem a hitelfelvevő kérésére történt, akkor 7 napos elállási jogot kell adni a hitelt felvevőnek. Ha az erről szóló írásos tájékoztatás elmaradt, nemzeti bíróságok a jogvitában az eseti döntéssel értelmezett uniós irányelvet alkalmazzák."
		}, { 
			"lang": "sk-SK", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "2.",
			"html": "Az Európai Parlament és a Tanács elfogadta a 2012/13/EU Irányelvet (2012. május 22) a büntetőerljárás során a tájékoztatáshoz való jogról." 
		}, { 
			"lang": "sk-SK", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;A jogi segítői névjegyzékbe vételem megtörtént. (Tanácsadás, peres képviselet, okiratszerkeszkesztés, büntetőeljárási közreműködés.)<br /> 2013. január" 
		}, { 
			"lang": "sk-SK", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;Hatósági közvetítői névjegyzékbe felvételem megtörtént. tevékenységek a \"Kiszámíthatóság-rovatban.\"" 
		},
	
		{ 
			"lang": "sr-SR", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "1.",
			"html": "Az Európai Bíróság újabb és ezúttal magyar vonatkozást tartalmazó ügyben hozott ítéletet (megerősítve a korábbi C-3506362005.okt.25.sz-t.) előzetes döntéshozatali eljárásban. Eszerint ha pl. jelzáloghitel-szerződést nem a bankfiókban kötik, vagy a szerződéses ajánlat nem a hitelfelvevő kérésére történt, akkor 7 napos elállási jogot kell adni a hitelt felvevőnek. Ha az erről szóló írásos tájékoztatás elmaradt, nemzeti bíróságok a jogvitában az eseti döntéssel értelmezett uniós irányelvet alkalmazzák."
		}, { 
			"lang": "sr-SR", 
			"view": "home", 
			"target": "content-footer-multicontent-news", 
			"title": "2.",
			"html": "Az Európai Parlament és a Tanács elfogadta a 2012/13/EU Irányelvet (2012. május 22) a büntetőerljárás során a tájékoztatáshoz való jogról." 
		}, { 
			"lang": "sr-SR", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;A jogi segítői névjegyzékbe vételem megtörtént. (Tanácsadás, peres képviselet, okiratszerkeszkesztés, büntetőeljárási közreműködés.)<br /> 2013. január" 
		}, { 
			"lang": "sr-SR", 
			"view": "home", 
			"target": "content-footer-office-news", 
			"cls": "office-news",
			"html": "<i class=\"fa fa-info-circle\"></i>&nbsp;Hatósági közvetítői névjegyzékbe felvételem megtörtént. tevékenységek a \"Kiszámíthatóság-rovatban.\"" 
		}]
	},
	
	proxy: {
		type: 'memory',
		//url: '/Web/classes/data/article-links.json',
		reader: {								
			type: 'json',
			root: 'articles',
			successProperty: 'success'
		}
	}
});