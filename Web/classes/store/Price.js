Ext.define('Web.store.Price', {
    extend: 'Ext.data.Store',
	model: 'Web.model.Article',
	id: 'FAQStore',
    //autoLoad: true,

	data: {
		"success": true,
		"articles": [{
			"lang": "hu-HU", 
			"title": "Jogi tanácsadás 30 perces időtartamig,<br/> és folytatólagosan 30 percen túl.",
			"html" : "5.000Ft/30 perc<br/>2.500Ft/30 perc"
		},{
			"lang": "hu-HU", 
			"title": "Közigazgatási eljárásban képviselet.",
			"html" : "Az alapjául szolgáló eljárás illetéke + 3.000Ft/ óra."
		},{
			"lang": "hu-HU", 
			"title": "Ingatlan tulajdonjogának átruházása.",
			"html" : "Még nem, de irányár lenne az alábbi:"
		},{
			"lang": "hu-HU", 
			"title": "3 millió forint értékig",
			"html" : "1%"
		},{
			"lang": "hu-HU", 
			"title": "3 millió fölött 30.000Ft + a 3M Ft felett",
			"html" : "+0,1%"
		},{
			"lang": "hu-HU", 
			"title": "Önálló ingatlan-nyilvántartási eljárás",
			"html" : "7500Ft+ ált. óradíj"
		},{
			"lang": "hu-HU", 
			"title": "Cégeljárás",
			"html" : "Még nem."
		},{
			"lang": "hu-HU", 
			"title": "Önálló levelezés (felszólítás, stb.)",
			"html" : "Tanácsadási díj+3.000Ft"
		},{
			"lang": "hu-HU", 
			"title": "Hagyatéki ügyek, munkaviszonnyal kapcsolatos ügyek, egyéb szerződések,<br/> végrehajtási ügyek",
			"html" : "Közjegyzői tarifa 85%-a"
		},{
			"lang": "hu-HU", 
			"title": "Közigazgatási ügyekben beadványok",
			"html" : "Az illeték összegével azonos, de minimum<br /> 5.500Ft"
		},{
			"lang": "hu-HU", 
			"title": "Perek: a bíróság által megítélhető ügyvédi díjak szerint",
			"html" : "32/2003 (VIII.22.)IM.r."
		},{
			"lang": "hu-HU", 
			"title": "Csoportos prezentációs tájékoztatás",
			"html" : "Max: a tanácsadási díj kétszerese"
		},{
			"lang": "hu-HU", 
			"title": "Büntetőügyek",
			"html" : "Egyedi megállapodás szerint."
		},{
			"lang": "hu-HU", 
			"title": "Internetes Web-kommunikáció",
			"html" : "ingyenes"
		},{
			"lang": "hu-HU", 
			"title": "Jogi közreműködés (pl. fiz. meghagyásos ügyben)",
			"html" : "A tanácsadás+ ált. óradíj"
		},{
			"lang": "hu-HU", 
			"title": "Hatósági közvetítés (mediáció).",
			"html" : "A következő oszlopban lévő tevékenységekre és jogszabály által megállapított díjon."
		},{
			"lang": "hu-HU", 
			"title": "Letétkezelés",
			"html" : "A bank díja+általános óradíj+felmerült egyéb költség"
		},{
			"lang": "hu-HU", 
			"title": "A tevékenységi általános óradíja.",
			"html" : "7.500Ft/óra"
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