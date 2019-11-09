Ext.define('Web.store.Office', {
    extend: 'Ext.data.Store',
	model: 'Web.model.Article',
	id: 'officeStore',
    //autoLoad: true,

	data: {
		"success": true,
		"articles": [
			{ "lang": "hu-HU", "html": "<i class=\"fa fa-road\"></i>6500 Baja, Molnár utca 13." },
			{ "lang": "hu-HU", "html": "<i class=\"fa fa-phone\"></i>Telefon/ üzenetrögzítő: 79/951-823" },
			{ "lang": "hu-HU", "html": "<i class=\"fa fa-print\"></i>fax: 79/951-823" },
			{ "lang": "hu-HU", "html": "<i class=\"fa fa-mobile\"></i>mobil: 30/459-59-93" },
			{ "lang": "hu-HU", "html": "<i class=\"fa fa-envelope-o\"></i>email: <a href=\"mailto:info@drnagymatyas.hu\">info@drnagymatyas.hu</a>" },
			{ "lang": "hu-HU", "html": "<i class=\"fa fa-clock-o\"></i>Ügyfélfogadás (ha nem ütközik egyéb ügyvédi ügyintézési kötelezettséggel) hétköznap 8-17,30 között. A biztos személyes találkozáshoz célszerű előzetesen időpontot egyeztetni." },
			{ "lang": "hu-HU", "html": "<i class=\"fa fa-skype\"></i>Skype: dr.nagy.matyas1" },
			
			{ "lang": "en-US", "html": "<i class=\"fa fa-road\"></i>6500 Baja, Molnár utca 13." },
			{ "lang": "en-US", "html": "<i class=\"fa fa-phone\"></i>Telefon/ üzenetrögzítő: 79/951-823" },
			{ "lang": "en-US", "html": "<i class=\"fa fa-print\"></i>fax: 79/951-823" },
			{ "lang": "en-US", "html": "<i class=\"fa fa-mobile\"></i>mobil: 30/459-59-93" },
			{ "lang": "en-US", "html": "<i class=\"fa fa-envelope-o\"></i>email: <a href=\"mailto:info@drnagymatyas.hu\">info@drnagymatyas.hu</a>" },
			{ "lang": "en-US", "html": "<i class=\"fa fa-clock-o\"></i>Ügyfélfogadás (ha nem ütközik egyéb ügyvédi ügyintézési kötelezettséggel) hétköznap 8-17,30 között. A biztos személyes találkozáshoz célszerű előzetesen időpontot egyeztetni." },
			{ "lang": "en-US", "html": "<i class=\"fa fa-skype\"></i>Skype: dr.nagy.matyas1" },
			
			{ "lang": "de-DE", "html": "<i class=\"fa fa-road\"></i>6500 Baja, Molnár utca 13." },
			{ "lang": "de-DE", "html": "<i class=\"fa fa-phone\"></i>Telefon/ üzenetrögzítő: 79/951-823" },
			{ "lang": "de-DE", "html": "<i class=\"fa fa-print\"></i>fax: 79/951-823" },
			{ "lang": "de-DE", "html": "<i class=\"fa fa-mobile\"></i>mobil: 30/459-59-93" },
			{ "lang": "de-DE", "html": "<i class=\"fa fa-envelope-o\"></i>email: <a href=\"mailto:info@drnagymatyas.hu\">info@drnagymatyas.hu</a>" },
			{ "lang": "de-DE", "html": "<i class=\"fa fa-clock-o\"></i>Ügyfélfogadás (ha nem ütközik egyéb ügyvédi ügyintézési kötelezettséggel) hétköznap 8-17,30 között. A biztos személyes találkozáshoz célszerű előzetesen időpontot egyeztetni." },
			{ "lang": "de-DE", "html": "<i class=\"fa fa-skype\"></i>Skype: dr.nagy.matyas1" },
			
			{ "lang": "hr-HR", "html": "<i class=\"fa fa-road\"></i>6500 Baja, Molnár utca 13." },
			{ "lang": "hr-HR", "html": "<i class=\"fa fa-phone\"></i>Telefon/ üzenetrögzítő: 79/951-823" },
			{ "lang": "hr-HR", "html": "<i class=\"fa fa-print\"></i>fax: 79/951-823" },
			{ "lang": "hr-HR", "html": "<i class=\"fa fa-mobile\"></i>mobil: 30/459-59-93" },
			{ "lang": "hr-HR", "html": "<i class=\"fa fa-envelope-o\"></i>email: <a href=\"mailto:info@drnagymatyas.hu\">info@drnagymatyas.hu</a>" },
			{ "lang": "hr-HR", "html": "<i class=\"fa fa-clock-o\"></i>Ügyfélfogadás (ha nem ütközik egyéb ügyvédi ügyintézési kötelezettséggel) hétköznap 8-17,30 között. A biztos személyes találkozáshoz célszerű előzetesen időpontot egyeztetni." },
			{ "lang": "hr-HR", "html": "<i class=\"fa fa-skype\"></i>Skype: dr.nagy.matyas1" },
			
			{ "lang": "pl-PL", "html": "<i class=\"fa fa-road\"></i>6500 Baja, Molnár utca 13." },
			{ "lang": "pl-PL", "html": "<i class=\"fa fa-phone\"></i>Telefon/ üzenetrögzítő: 79/951-823" },
			{ "lang": "pl-PL", "html": "<i class=\"fa fa-print\"></i>fax: 79/951-823" },
			{ "lang": "pl-PL", "html": "<i class=\"fa fa-mobile\"></i>mobil: 30/459-59-93" },
			{ "lang": "pl-PL", "html": "<i class=\"fa fa-envelope-o\"></i>email: <a href=\"mailto:info@drnagymatyas.hu\">info@drnagymatyas.hu</a>" },
			{ "lang": "pl-PL", "html": "<i class=\"fa fa-clock-o\"></i>Ügyfélfogadás (ha nem ütközik egyéb ügyvédi ügyintézési kötelezettséggel) hétköznap 8-17,30 között. A biztos személyes találkozáshoz célszerű előzetesen időpontot egyeztetni." },
			{ "lang": "pl-PL", "html": "<i class=\"fa fa-skype\"></i>Skype: dr.nagy.matyas1" },
			
			{ "lang": "ro-RO", "html": "<i class=\"fa fa-road\"></i>6500 Baja, Molnár utca 13." },
			{ "lang": "ro-RO", "html": "<i class=\"fa fa-phone\"></i>Telefon/ üzenetrögzítő: 79/951-823" },
			{ "lang": "ro-RO", "html": "<i class=\"fa fa-print\"></i>fax: 79/951-823" },
			{ "lang": "ro-RO", "html": "<i class=\"fa fa-mobile\"></i>mobil: 30/459-59-93" },
			{ "lang": "ro-RO", "html": "<i class=\"fa fa-envelope-o\"></i>email: <a href=\"mailto:info@drnagymatyas.hu\">info@drnagymatyas.hu</a>" },
			{ "lang": "ro-RO", "html": "<i class=\"fa fa-clock-o\"></i>Ügyfélfogadás (ha nem ütközik egyéb ügyvédi ügyintézési kötelezettséggel) hétköznap 8-17,30 között. A biztos személyes találkozáshoz célszerű előzetesen időpontot egyeztetni." },
			{ "lang": "ro-RO", "html": "<i class=\"fa fa-skype\"></i>Skype: dr.nagy.matyas1" },
			
			{ "lang": "ru-RU", "html": "<i class=\"fa fa-road\"></i>6500 Baja, Molnár utca 13." },
			{ "lang": "ru-RU", "html": "<i class=\"fa fa-phone\"></i>Telefon/ üzenetrögzítő: 79/951-823" },
			{ "lang": "ru-RU", "html": "<i class=\"fa fa-print\"></i>fax: 79/951-823" },
			{ "lang": "ru-RU", "html": "<i class=\"fa fa-mobile\"></i>mobil: 30/459-59-93" },
			{ "lang": "ru-RU", "html": "<i class=\"fa fa-envelope-o\"></i>email: <a href=\"mailto:info@drnagymatyas.hu\">info@drnagymatyas.hu</a>" },
			{ "lang": "ru-RU", "html": "<i class=\"fa fa-clock-o\"></i>Ügyfélfogadás (ha nem ütközik egyéb ügyvédi ügyintézési kötelezettséggel) hétköznap 8-17,30 között. A biztos személyes találkozáshoz célszerű előzetesen időpontot egyeztetni." },
			{ "lang": "ru-RU", "html": "<i class=\"fa fa-skype\"></i>Skype: dr.nagy.matyas1" },
			
			{ "lang": "sk-SK", "html": "<i class=\"fa fa-road\"></i>6500 Baja, Molnár utca 13." },
			{ "lang": "sk-SK", "html": "<i class=\"fa fa-phone\"></i>Telefon/ üzenetrögzítő: 79/951-823" },
			{ "lang": "sk-SK", "html": "<i class=\"fa fa-print\"></i>fax: 79/951-823" },
			{ "lang": "sk-SK", "html": "<i class=\"fa fa-mobile\"></i>mobil: 30/459-59-93" },
			{ "lang": "sk-SK", "html": "<i class=\"fa fa-envelope-o\"></i>email: <a href=\"mailto:info@drnagymatyas.hu\">info@drnagymatyas.hu</a>" },
			{ "lang": "sk-SK", "html": "<i class=\"fa fa-clock-o\"></i>Ügyfélfogadás (ha nem ütközik egyéb ügyvédi ügyintézési kötelezettséggel) hétköznap 8-17,30 között. A biztos személyes találkozáshoz célszerű előzetesen időpontot egyeztetni." },
			{ "lang": "sk-SK", "html": "<i class=\"fa fa-skype\"></i>Skype: dr.nagy.matyas1" },
			
			{ "lang": "sr-SR", "html": "<i class=\"fa fa-road\"></i>6500 Baja, Molnár utca 13." },
			{ "lang": "sr-SR", "html": "<i class=\"fa fa-phone\"></i>Telefon/ üzenetrögzítő: 79/951-823" },
			{ "lang": "sr-SR", "html": "<i class=\"fa fa-print\"></i>fax: 79/951-823" },
			{ "lang": "sr-SR", "html": "<i class=\"fa fa-mobile\"></i>mobil: 30/459-59-93" },
			{ "lang": "sr-SR", "html": "<i class=\"fa fa-envelope-o\"></i>email: <a href=\"mailto:info@drnagymatyas.hu\">info@drnagymatyas.hu</a>" },
			{ "lang": "sr-SR", "html": "<i class=\"fa fa-clock-o\"></i>Ügyfélfogadás (ha nem ütközik egyéb ügyvédi ügyintézési kötelezettséggel) hétköznap 8-17,30 között. A biztos személyes találkozáshoz célszerű előzetesen időpontot egyeztetni." },
			{ "lang": "sr-SR", "html": "<i class=\"fa fa-skype\"></i>Skype: dr.nagy.matyas1" }
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