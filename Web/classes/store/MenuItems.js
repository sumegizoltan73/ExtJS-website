Ext.define('Web.store.MenuItems', {
    extend: 'Ext.data.Store',
	model: 'Web.model.MenuItem',
	id: 'MenuItemsStore',

	data:{ 'items':[
        {"lang": "hu-HU", "text": "Nyitó Lap",		"action": "Home",			"iconCls": "fa-home"},
        {"lang": "hu-HU", "text": "Joggyakorlat",   "action": "Joggyakorlat",	"iconCls": "fa-briefcase"},
        {"lang": "hu-HU", "text": "Kiszámíthatóság","action": "Kiszamithatosag","iconCls": "fa-thumbs-o-up"},
        {"lang": "hu-HU", "text": "Kapcsolat",		"action": "Kapcsolat",		"iconCls": "fa-envelope-o"},
        {"lang": "hu-HU", "text": "Ingatlan",		"url": "http://www.bravoingatlan.hu", "urlTarget": "_blank", "urlHasLangParam": true, "iconCls": "fa-building"},
		
		{"lang": "en-US", "text": "Home",			"action": "Home",			"iconCls": "fa-home"},
        {"lang": "en-US", "text": "Jurisprudence",  "action": "Joggyakorlat",	"iconCls": "fa-briefcase"},
        {"lang": "en-US", "text": "Predictability",	"action": "Kiszamithatosag","iconCls": "fa-thumbs-o-up"},
        {"lang": "en-US", "text": "Contact",		"action": "Kapcsolat",		"iconCls": "fa-envelope-o"},
        {"lang": "en-US", "text": "Real Estate",	"url": "http://www.bravoingatlan.hu", "urlTarget": "_blank", "urlHasLangParam": true, "iconCls": "fa-building"},
		
		{"lang": "de-DE", "text": "Zuhause",		"action": "Home",			"iconCls": "fa-home"},
        {"lang": "de-DE", "text": "Jurisprudenz",   "action": "Joggyakorlat",	"iconCls": "fa-briefcase"},
        {"lang": "de-DE", "text": "Vorhersagbarkeit","action": "Kiszamithatosag","iconCls": "fa-thumbs-o-up"},
        {"lang": "de-DE", "text": "Contact",		"action": "Kapcsolat",		"iconCls": "fa-envelope-o"},
        {"lang": "de-DE", "text": "Immobilien",		"url": "http://www.bravoingatlan.hu", "urlTarget": "_blank", "urlHasLangParam": true, "iconCls": "fa-building"},
		
		{"lang": "hr-HR", "text": "Dom",			"action": "Home",			"iconCls": "fa-home"},
        {"lang": "hr-HR", "text": "Jurisprudencija","action": "Joggyakorlat",	"iconCls": "fa-briefcase"},
        {"lang": "hr-HR", "text": "Predvidljivost",	"action": "Kiszamithatosag","iconCls": "fa-thumbs-o-up"},
        {"lang": "hr-HR", "text": "Link",			"action": "Kapcsolat",		"iconCls": "fa-envelope-o"},
        {"lang": "hr-HR", "text": "Svojstvo",		"url": "http://www.bravoingatlan.hu", "urlTarget": "_blank", "urlHasLangParam": true, "iconCls": "fa-building"},
		
		{"lang": "pl-PL", "text": "Dom",			"action": "Home",			"iconCls": "fa-home"},
        {"lang": "pl-PL", "text": "Prawoznawstwo",  "action": "Joggyakorlat",	"iconCls": "fa-briefcase"},
        {"lang": "pl-PL", "text": "Przewidywalność","action": "Kiszamithatosag","iconCls": "fa-thumbs-o-up"},
        {"lang": "pl-PL", "text": "Połączenie",		"action": "Kapcsolat",		"iconCls": "fa-envelope-o"},
        {"lang": "pl-PL", "text": "Właściwość",		"url": "http://www.bravoingatlan.hu", "urlTarget": "_blank", "urlHasLangParam": true, "iconCls": "fa-building"},
		
		{"lang": "ro-RO", "text": "Acasă",			"action": "Home",			"iconCls": "fa-home"},
        {"lang": "ro-RO", "text": "Jurisprudență",  "action": "Joggyakorlat",	"iconCls": "fa-briefcase"},
        {"lang": "ro-RO", "text": "Previzibilitatea","action": "Kiszamithatosag","iconCls": "fa-thumbs-o-up"},
        {"lang": "ro-RO", "text": "Legătură",		"action": "Kapcsolat",		"iconCls": "fa-envelope-o"},
        {"lang": "ro-RO", "text": "Proprietate",	"url": "http://www.bravoingatlan.hu", "urlTarget": "_blank", "urlHasLangParam": true, "iconCls": "fa-building"},
		
		{"lang": "ru-RU", "text": "домой",			"action": "Home",			"iconCls": "fa-home"},
        {"lang": "ru-RU", "text": "юриспруденция",  "action": "Joggyakorlat",	"iconCls": "fa-briefcase"},
        {"lang": "ru-RU", "text": "Предвидљивост",	"action": "Kiszamithatosag","iconCls": "fa-thumbs-o-up"},
        {"lang": "ru-RU", "text": "Cсылка",			"action": "Kapcsolat",		"iconCls": "fa-envelope-o"},
        {"lang": "ru-RU", "text": "имущество",		"url": "http://www.bravoingatlan.hu", "urlTarget": "_blank", "urlHasLangParam": true, "iconCls": "fa-building"},
		
		{"lang": "sk-SK", "text": "Domáce",			"action": "Home",			"iconCls": "fa-home"},
        {"lang": "sk-SK", "text": "Právna veda",    "action": "Joggyakorlat",	"iconCls": "fa-briefcase"},
        {"lang": "sk-SK", "text": "Predvídateľnosť","action": "Kiszamithatosag","iconCls": "fa-thumbs-o-up"},
        {"lang": "sk-SK", "text": "Odkaz",			"action": "Kapcsolat",		"iconCls": "fa-envelope-o"},
        {"lang": "sk-SK", "text": "Vlastnosť",		"url": "http://www.bravoingatlan.hu", "urlTarget": "_blank", "urlHasLangParam": true, "iconCls": "fa-building"},
		
		{"lang": "sr-SR", "text": "Dom",			"action": "Home",			"iconCls": "fa-home"},
        {"lang": "sr-SR", "text": "Jurisprudencija","action": "Joggyakorlat",	"iconCls": "fa-briefcase"},
        {"lang": "sr-SR", "text": "Predvidljivost",	"action": "Kiszamithatosag","iconCls": "fa-thumbs-o-up"},
        {"lang": "sr-SR", "text": "Link",			"action": "Kapcsolat",		"iconCls": "fa-envelope-o"},
        {"lang": "sr-SR", "text": "Imovina",		"url": "http://www.bravoingatlan.hu", "urlTarget": "_blank", "urlHasLangParam": true, "iconCls": "fa-building"}
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});