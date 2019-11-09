Ext.define('Web.controller.FooterPartial', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Article',
		'ArticleLink'
    ],
    models: [
		'Article',
		'ArticleLink'
	],
	views: [
        'shared.FooterPartial'
    ],
	
    init: function(){
        this.control({
            'footerpartial panel[name=footerContent]': {
				render: this.onFooterRendered
            }
        });
    },

	onFooterRendered: function(panel){
		Ext.Web.Util.createArticles(panel, this.getArticleStore(), { 
			filterFn: function(item) { 
				return /all/.test(item.get("view")) && 
						item.get("target") === "footer"; 
			},
			tagTitle: 'span',
			tagHtml: 'span',
			itemCallback: [{
				test: function(item) { 
					return /multicontent/.test(item.get("name")) && 
							item.get("target") === "footer"; 
				},
				fn: Ext.bind(this.onMultiContentRendered, this)
			}]
		});
	},

	onMultiContentRendered: function(panel){
		return Ext.Web.Util.createArticles(panel, this.getArticleLinkStore(), { 
			filterFn: function(item) { 
				return /all/.test(item.get("view")) && 
						item.get("target") === "footer-multicontent"; 
			},
			tagHtml: 'a',
			tagContainer: false,
			tagArticleContainer: false,
			clsArticleContainer: false,
			isArticleItemsAsChildren: true
		});
	}
});