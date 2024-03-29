Ext.define('Web.store.ArticleLink', {
    extend: 'Ext.data.Store',
	model: 'Web.model.ArticleLink',
	id: 'ArticleLinkStore',
    //autoLoad: true,

	data: {
		"success": true,
		"articles": [
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarorszag.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.parlament.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kormany.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.munka.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarugyvedikamara.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.nav.gov.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.njt.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.lb.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.birosag.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.ksh.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mklu.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www-police.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.bvop.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.miszk.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mbvk.hu" }, 
			{ "lang": "hu-HU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kozjegyzo.hu"},
			
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarorszag.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.parlament.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kormany.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.munka.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarugyvedikamara.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.nav.gov.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.njt.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.lb.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.birosag.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.ksh.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mklu.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www-police.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.bvop.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.miszk.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mbvk.hu" }, 
			{ "lang": "en-US", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kozjegyzo.hu"},
			
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarorszag.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.parlament.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kormany.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.munka.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarugyvedikamara.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.nav.gov.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.njt.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.lb.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.birosag.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.ksh.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mklu.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www-police.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.bvop.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.miszk.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mbvk.hu" }, 
			{ "lang": "de-DE", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kozjegyzo.hu"},
			
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarorszag.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.parlament.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kormany.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.munka.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarugyvedikamara.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.nav.gov.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.njt.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.lb.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.birosag.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.ksh.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mklu.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www-police.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.bvop.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.miszk.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mbvk.hu" }, 
			{ "lang": "hr-HR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kozjegyzo.hu"},
			
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarorszag.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.parlament.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kormany.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.munka.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarugyvedikamara.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.nav.gov.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.njt.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.lb.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.birosag.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.ksh.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mklu.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www-police.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.bvop.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.miszk.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mbvk.hu" }, 
			{ "lang": "pl-PL", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kozjegyzo.hu"},
			
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarorszag.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.parlament.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kormany.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.munka.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarugyvedikamara.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.nav.gov.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.njt.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.lb.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.birosag.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.ksh.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mklu.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www-police.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.bvop.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.miszk.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mbvk.hu" }, 
			{ "lang": "ro-RO", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kozjegyzo.hu"},
			
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarorszag.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.parlament.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kormany.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.munka.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarugyvedikamara.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.nav.gov.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.njt.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.lb.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.birosag.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.ksh.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mklu.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www-police.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.bvop.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.miszk.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mbvk.hu" }, 
			{ "lang": "ru-RU", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kozjegyzo.hu"},
			
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarorszag.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.parlament.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kormany.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.munka.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarugyvedikamara.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.nav.gov.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.njt.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.lb.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.birosag.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.ksh.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mklu.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www-police.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.bvop.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.miszk.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mbvk.hu" }, 
			{ "lang": "sk-SK", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kozjegyzo.hu"},
			
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarorszag.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.parlament.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kormany.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.munka.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.magyarugyvedikamara.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.nav.gov.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.njt.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.lb.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.birosag.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.ksh.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mklu.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www-police.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.bvop.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.miszk.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.mbvk.hu" }, 
			{ "lang": "sr-SR", "view": "all", "target": "footer-multicontent", "cls": "links", "href": "http://{0}", "html": "www.kozjegyzo.hu"}
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