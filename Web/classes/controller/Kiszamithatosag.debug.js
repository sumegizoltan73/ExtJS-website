Ext.define('Web.controller.Kiszamithatosag', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Article',
		'Price',
		'Category'
    ],
    models: [
		'Article'
	],
	views: [
        'kiszamithatosag.View'
    ],
	
    init: function() {
        this.control({
            'contentpartial panel[name=kiszamithatosagContent]': {
				render: this.onContentRendered
			},
			'contentfooterpartial panel[name=kiszamithatosagContentFooter]': {
				render: this.onContentFooterRendered
			}
        });
    },

    onContentRendered: function(panel) {
		Ext.Web.Util.createArticles(panel, this.getArticleStore(), { 
			filterFn: function(item) { 
				return /kiszamithatosag|all/.test(item.get("view")) && 
						item.get("target") === "content"; 
			},
			itemCallback: [{
				test: function(item) { 
					return /price/.test(item.get("name")); 
				},
				fn: Ext.bind(this.onPriceRendered, this)
			}, {
				test: function(item) { 
					return /category/.test(item.get("name")); 
				},
				fn: Ext.bind(this.onCategoryRendered, this)
			}]
		});
    },

	onPriceRendered: function(panel){
		var tbody;
		
		panel.children = [];
		panel.children.push({ 
			tag: 'table', 
			children: [{ 
				tag: 'thead', 
				children: [{ 
					tag: 'tr', 
					children: [
						{ tag: 'th', html: 'Munkák (pl.)'},
						{ tag: 'th', html: 'Tervezett díj'}
					] 
				}]
			}]
		});
		
		tbody = Ext.Web.Util.createArticles({ tag: 'tbody' }, this.getPriceStore(), { 
			filterFn: function(item){ return true; },
			tagArticleContainer: 'tr',
			clsArticleContainer: false,
			tagTitle: 'td',
			tagHtml: 'td',
			isArticleItemsAsChildren: true
		});
		
		panel.children[0].children.push(tbody);
		
		return panel;
	},

	onCategoryRendered: function(panel){
		var tbody;
		
		panel.children = [];
		panel.children.push({ 
			tag: 'table', 
			children: [{ 
				tag: 'thead', 
				children: [{ 
					tag: 'tr', 
					children: [
						{ tag: 'th', html: 'Hatósági közvetítői tevékenységi kör (ebben az oszlopban)'}
					] 
				}]
			}]
		});
		
		tbody = Ext.Web.Util.createArticles({ tag: 'tbody' }, this.getCategoryStore(), { 
			filterFn: function(item){ return true; },
			tagArticleContainer: 'tr',
			clsArticleContainer: false,
			tagHtml: 'td',
			isArticleItemsAsChildren: true
		});
		
		panel.children[0].children.push(tbody);
		
		return panel;
	},

    onContentFooterRendered: function(panel) {
		Ext.Web.Util.createArticles(panel, this.getArticleStore(), { 
			filterFn: function(item) { 
				return /kiszamithatosag|all/.test(item.get("view")) && 
						item.get("target") === "content-footer"; 
			}
		});
    }
});