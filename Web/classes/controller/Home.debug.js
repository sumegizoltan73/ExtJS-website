Ext.define('Web.controller.Home', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Article',
		'ArticleNews'
    ],
    models: [
		'Article'
	],
	views: [
        'home.View'
    ],
	
    init: function() {
        this.control({
			'contentpartial panel[name=homeContent]': {
				render: this.onContentRendered
			},
			'contentfooterpartial panel[name=homeContentFooter]': {
				render: this.onContentFooterRendered
			}
        });
    },

    onContentRendered: function(panel) {
		Ext.Web.Util.createArticles(panel, this.getArticleStore(), { 
			filterFn: function(item) { 
				return /home|all/.test(item.get("view")) && 
						item.get("target") === "content"; 
			},
			isAddSeparator: true
		});
    },

    onContentFooterRendered: function(panel) {
		Ext.Web.Util.createArticles(panel, this.getArticleStore(), { 
			filterFn: function(item) { 
				return /home|all/.test(item.get("view")) && 
						item.get("target") === "content-footer"; 
			},
			itemCallback: [{
				test: function(item) { 
					return /multicontent-officenews/.test(item.get("name")) && 
							item.get("target") === "content-footer"; 
				},
				fn: Ext.bind(this.onOfficeNewsRendered, this)
			}, {
				test: function(item) { 
					return /multicontent-news/.test(item.get("name")) && 
							item.get("target") === "content-footer"; 
				},
				fn: Ext.bind(this.onNewsRendered, this)
			}]
		});
    },

	onOfficeNewsRendered: function(panel){
		return Ext.Web.Util.createArticles(panel, this.getArticleNewsStore(), { 
			filterFn: function(item){
				return /home|all/.test(item.get("view")) && 
							item.get("target") === "content-footer-office-news";
			},
			tagArticleContainer: false,
			clsArticleContainer: false,
			isArticleItemsAsChildren: true
		});
	},

	onNewsRendered: function(panel){
		return Ext.Web.Util.createArticles(panel, this.getArticleNewsStore(), { 
			filterFn: function(item){
				return /home|all/.test(item.get("view")) && 
							item.get("target") === "content-footer-multicontent-news";
			},
			tagArticleContainer: false,
			clsArticleContainer: false,
			isArticleItemsAsChildren: true
		});
	}
});