Ext.define('Web.store.Category', {
    extend: 'Ext.data.Store',
	model: 'Web.model.Article',
	id: 'CategoryStore',
    //autoLoad: true,

	data: {
		"success": true,
		"articles": [
			{ "lang": "hu-HU", "html": "Közszolgáltatások hatósági ügyei.<br/>Kisajátítási hatósági ügyek.<br/>Okmánykiadási hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Polgármesterek hatáskörébe tartozó hatósági ügyek.<br />Földügyi, ingatlan-nyilvántartási hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Fogyasztóvédelmi hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Kultúrális örökségvédelmi hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Élelmiszerlánc-biztonsági hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Állatvédelmi, állategészségügyi hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Épített környezet alakításával, védelmével kapcsolatos hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Építésügyi engedélyezési, kötelezési, végrehajtási, fenntartási, használati és értékvédelmi hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Energiaügyi, vízügyi, környezetvédelmi, zaj-, lvegőtisztasági és rezgésvédelmi, természetvédelmi hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Kereskedelmi, vendéglátási, iparigazgatási, telepengdélyezési hatósági ügyek.<br />Halászati hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Hulladékgazdálkodási hatósági ügyek.<br />Vadászati hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Egészségügyi, szociális ellátási, szociális szolgáltatási, szociális vállalkozási hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Lakáscélú kölcsönnel kapcsolatos hatósági ügyek.<br /> Hagyatéki hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Gyámügyi, gyermekvédelmi hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Közúti közlekedési és vízi közlekedési hatósági ügyek." },
			{ "lang": "hu-HU", "html": "Oktatási intézmények működési engedélyezésével kapcsolatos hatósági ügyek.<br /><br />Általános települési önkormányzati hatósági ügyek." }
		]
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