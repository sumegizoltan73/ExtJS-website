Ext.define('Web.store.FAQ', {
    extend: 'Ext.data.Store',
	model: 'Web.model.Article',
	id: 'FAQStore',
    //autoLoad: true,

	data: {
		"success": true,
		"articles": [{ 
			"lang":  "hu-HU", 
			"view": "joggyakorlat", 
			"target": "jog-faq-questions", 
			"title": "1.",
			"html": "Ingyenes jogi segítséget hol lehet kapni, ha van egyáltalán?"
		},{ 
			"lang":  "hu-HU", 
			"view": "joggyakorlat", 
			"target": "jog-faq-answers", 
			"title": "1.",
			"html": "Keresse a <a href=\"http://www.kih.gov.hu\" target=\"_blank\">www.kih.gov.hu</a> illetőleg a <a href=\"http://www.kimisz.gov.hu\" target=\"_blank\">www.kimisz.gov.hu</a> honlapot, ahol megoldást találhat.<br />Ha kérdez-felelek helyet szeretne, akkor ajánlom a <a href=\"http://www.jogiforum.hu\" target=\"_blank\">www.jogiforum.hu</a>-t, vagy a <a href=\"http://www.gyakorikerdesek.hu\" target=\"_blank\">www.gyakorikerdesek.hu</a>-t, ha  konkrét ügyéhez keres pertársat, akkor nézzen be a <a href=\"http://www.pertarskereso.hu\" target=\"_blank\">www.pertarskereso.hu</a> oldalra."
		},
	
		{ 
			"lang":  "en-US", 
			"view": "joggyakorlat", 
			"target": "jog-faq-questions", 
			"title": "1.",
			"html": "Ingyenes jogi segítséget hol lehet kapni, ha van egyáltalán?"
		},{ 
			"lang":  "en-US", 
			"view": "joggyakorlat", 
			"target": "jog-faq-answers", 
			"title": "1.",
			"html": "Keresse a <a href=\"http://www.kih.gov.hu\" target=\"_blank\">www.kih.gov.hu</a> illetőleg a <a href=\"http://www.kimisz.gov.hu\" target=\"_blank\">www.kimisz.gov.hu</a> honlapot, ahol megoldást találhat.<br />Ha kérdez-felelek helyet szeretne, akkor ajánlom a <a href=\"http://www.jogiforum.hu\" target=\"_blank\">www.jogiforum.hu</a>-t, vagy a <a href=\"http://www.gyakorikerdesek.hu\" target=\"_blank\">www.gyakorikerdesek.hu</a>-t, ha  konkrét ügyéhez keres pertársat, akkor nézzen be a <a href=\"http://www.pertarskereso.hu\" target=\"_blank\">www.pertarskereso.hu</a> oldalra."
		},
	
		{ 
			"lang":  "de-DE", 
			"view": "joggyakorlat", 
			"target": "jog-faq-questions", 
			"title": "1.",
			"html": "Ingyenes jogi segítséget hol lehet kapni, ha van egyáltalán?"
		},{ 
			"lang":  "de-DE", 
			"view": "joggyakorlat", 
			"target": "jog-faq-answers", 
			"title": "1.",
			"html": "Keresse a <a href=\"http://www.kih.gov.hu\" target=\"_blank\">www.kih.gov.hu</a> illetőleg a <a href=\"http://www.kimisz.gov.hu\" target=\"_blank\">www.kimisz.gov.hu</a> honlapot, ahol megoldást találhat.<br />Ha kérdez-felelek helyet szeretne, akkor ajánlom a <a href=\"http://www.jogiforum.hu\" target=\"_blank\">www.jogiforum.hu</a>-t, vagy a <a href=\"http://www.gyakorikerdesek.hu\" target=\"_blank\">www.gyakorikerdesek.hu</a>-t, ha  konkrét ügyéhez keres pertársat, akkor nézzen be a <a href=\"http://www.pertarskereso.hu\" target=\"_blank\">www.pertarskereso.hu</a> oldalra."
		},
	
		{ 
			"lang":  "hr-HR", 
			"view": "joggyakorlat", 
			"target": "jog-faq-questions", 
			"title": "1.",
			"html": "Ingyenes jogi segítséget hol lehet kapni, ha van egyáltalán?"
		},{ 
			"lang":  "hr-HR", 
			"view": "joggyakorlat", 
			"target": "jog-faq-answers", 
			"title": "1.",
			"html": "Keresse a <a href=\"http://www.kih.gov.hu\" target=\"_blank\">www.kih.gov.hu</a> illetőleg a <a href=\"http://www.kimisz.gov.hu\" target=\"_blank\">www.kimisz.gov.hu</a> honlapot, ahol megoldást találhat.<br />Ha kérdez-felelek helyet szeretne, akkor ajánlom a <a href=\"http://www.jogiforum.hu\" target=\"_blank\">www.jogiforum.hu</a>-t, vagy a <a href=\"http://www.gyakorikerdesek.hu\" target=\"_blank\">www.gyakorikerdesek.hu</a>-t, ha  konkrét ügyéhez keres pertársat, akkor nézzen be a <a href=\"http://www.pertarskereso.hu\" target=\"_blank\">www.pertarskereso.hu</a> oldalra."
		},
	
		{ 
			"lang":  "pl-PL", 
			"view": "joggyakorlat", 
			"target": "jog-faq-questions", 
			"title": "1.",
			"html": "Ingyenes jogi segítséget hol lehet kapni, ha van egyáltalán?"
		},{ 
			"lang":  "pl-PL", 
			"view": "joggyakorlat", 
			"target": "jog-faq-answers", 
			"title": "1.",
			"html": "Keresse a <a href=\"http://www.kih.gov.hu\" target=\"_blank\">www.kih.gov.hu</a> illetőleg a <a href=\"http://www.kimisz.gov.hu\" target=\"_blank\">www.kimisz.gov.hu</a> honlapot, ahol megoldást találhat.<br />Ha kérdez-felelek helyet szeretne, akkor ajánlom a <a href=\"http://www.jogiforum.hu\" target=\"_blank\">www.jogiforum.hu</a>-t, vagy a <a href=\"http://www.gyakorikerdesek.hu\" target=\"_blank\">www.gyakorikerdesek.hu</a>-t, ha  konkrét ügyéhez keres pertársat, akkor nézzen be a <a href=\"http://www.pertarskereso.hu\" target=\"_blank\">www.pertarskereso.hu</a> oldalra."
		},
	
		{ 
			"lang":  "ro-RO", 
			"view": "joggyakorlat", 
			"target": "jog-faq-questions", 
			"title": "1.",
			"html": "Ingyenes jogi segítséget hol lehet kapni, ha van egyáltalán?"
		},{ 
			"lang":  "ro-RO", 
			"view": "joggyakorlat", 
			"target": "jog-faq-answers", 
			"title": "1.",
			"html": "Keresse a <a href=\"http://www.kih.gov.hu\" target=\"_blank\">www.kih.gov.hu</a> illetőleg a <a href=\"http://www.kimisz.gov.hu\" target=\"_blank\">www.kimisz.gov.hu</a> honlapot, ahol megoldást találhat.<br />Ha kérdez-felelek helyet szeretne, akkor ajánlom a <a href=\"http://www.jogiforum.hu\" target=\"_blank\">www.jogiforum.hu</a>-t, vagy a <a href=\"http://www.gyakorikerdesek.hu\" target=\"_blank\">www.gyakorikerdesek.hu</a>-t, ha  konkrét ügyéhez keres pertársat, akkor nézzen be a <a href=\"http://www.pertarskereso.hu\" target=\"_blank\">www.pertarskereso.hu</a> oldalra."
		},
	
		{ 
			"lang":  "ru-RU", 
			"view": "joggyakorlat", 
			"target": "jog-faq-questions", 
			"title": "1.",
			"html": "Ingyenes jogi segítséget hol lehet kapni, ha van egyáltalán?"
		},{ 
			"lang":  "ru-RU", 
			"view": "joggyakorlat", 
			"target": "jog-faq-answers", 
			"title": "1.",
			"html": "Keresse a <a href=\"http://www.kih.gov.hu\" target=\"_blank\">www.kih.gov.hu</a> illetőleg a <a href=\"http://www.kimisz.gov.hu\" target=\"_blank\">www.kimisz.gov.hu</a> honlapot, ahol megoldást találhat.<br />Ha kérdez-felelek helyet szeretne, akkor ajánlom a <a href=\"http://www.jogiforum.hu\" target=\"_blank\">www.jogiforum.hu</a>-t, vagy a <a href=\"http://www.gyakorikerdesek.hu\" target=\"_blank\">www.gyakorikerdesek.hu</a>-t, ha  konkrét ügyéhez keres pertársat, akkor nézzen be a <a href=\"http://www.pertarskereso.hu\" target=\"_blank\">www.pertarskereso.hu</a> oldalra."
		},
	
		{ 
			"lang":  "sk-SK", 
			"view": "joggyakorlat", 
			"target": "jog-faq-questions", 
			"title": "1.",
			"html": "Ingyenes jogi segítséget hol lehet kapni, ha van egyáltalán?"
		},{ 
			"lang":  "sk-SK", 
			"view": "joggyakorlat", 
			"target": "jog-faq-answers", 
			"title": "1.",
			"html": "Keresse a <a href=\"http://www.kih.gov.hu\" target=\"_blank\">www.kih.gov.hu</a> illetőleg a <a href=\"http://www.kimisz.gov.hu\" target=\"_blank\">www.kimisz.gov.hu</a> honlapot, ahol megoldást találhat.<br />Ha kérdez-felelek helyet szeretne, akkor ajánlom a <a href=\"http://www.jogiforum.hu\" target=\"_blank\">www.jogiforum.hu</a>-t, vagy a <a href=\"http://www.gyakorikerdesek.hu\" target=\"_blank\">www.gyakorikerdesek.hu</a>-t, ha  konkrét ügyéhez keres pertársat, akkor nézzen be a <a href=\"http://www.pertarskereso.hu\" target=\"_blank\">www.pertarskereso.hu</a> oldalra."
		},
	
		{ 
			"lang":  "sr-SR", 
			"view": "joggyakorlat", 
			"target": "jog-faq-questions", 
			"title": "1.",
			"html": "Ingyenes jogi segítséget hol lehet kapni, ha van egyáltalán?"
		},{ 
			"lang":  "sr-SR", 
			"view": "joggyakorlat", 
			"target": "jog-faq-answers", 
			"title": "1.",
			"html": "Keresse a <a href=\"http://www.kih.gov.hu\" target=\"_blank\">www.kih.gov.hu</a> illetőleg a <a href=\"http://www.kimisz.gov.hu\" target=\"_blank\">www.kimisz.gov.hu</a> honlapot, ahol megoldást találhat.<br />Ha kérdez-felelek helyet szeretne, akkor ajánlom a <a href=\"http://www.jogiforum.hu\" target=\"_blank\">www.jogiforum.hu</a>-t, vagy a <a href=\"http://www.gyakorikerdesek.hu\" target=\"_blank\">www.gyakorikerdesek.hu</a>-t, ha  konkrét ügyéhez keres pertársat, akkor nézzen be a <a href=\"http://www.pertarskereso.hu\" target=\"_blank\">www.pertarskereso.hu</a> oldalra."
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