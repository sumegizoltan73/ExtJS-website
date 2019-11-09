Ext.define('Web.store.Languages', {
    extend: 'Ext.data.Store',
	model: 'Web.model.Lang',
	
    data: {
		"success": true,
		"languages": [
			{ langid:'de-DE', name:'Deutsch   (de)', img: 'img/de.gif' },
			{ langid:'en-US', name:'English   (en)', img: 'img/en.gif' },
			{ langid:'hr-HR', name:'Hrvatski  (hr)', img: 'img/hr.gif' },
			{ langid:'hu-HU', name:'Magyar    (hu)', img: 'img/hu.gif' },
			{ langid:'pl-PL', name:'Polski    (pl)', img: 'img/pl.gif' },
			{ langid:'ro-RO', name:'Român     (ro)', img: 'img/ro.gif' },
			{ langid:'ru-RU', name:'Pусский   (ru)', img: 'img/ru.gif' },
			{ langid:'sk-SK', name:'Slovenský (sk)', img: 'img/sk.gif' },
			{ langid:'sr-SR', name:'Srpski    (sr)', img: 'img/sr.gif' }
		]
	},
	
	proxy: {
		type: 'memory',
		reader: {								
			type: 'json',
			root: 'languages',
			successProperty: 'success'
		}
	}
});