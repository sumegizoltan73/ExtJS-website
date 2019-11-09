Ext.define('Web.view.home.View' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.homeview',
	
	cls: 'scrollview',
	layout: {
		type: 'container'
	},
	width: '100%',
	border: false,
	contentDefaults:{
		style: 'margin-left:auto;margin-right:auto;',
		width: 960,
		border: false
	},
	
    initComponent: function() {
		Ext.apply(this, {
            items: [{
				name: 'header',
				cls: 'web-header',
				xtype: 'container',
				items: [{
					defaults: this.contentDefaults,
					xtype: 'headerpartial'
				}]
			}, {
				name: 'content',
				cls: 'web-content web-content-home',
				xtype: 'container',
				items: [{
					items: Ext.create('Web.view.shared.ContentHeadPartial', {
						panelDefaults: this.contentDefaults,
						panelItems: {
							xtype: 'image',
							src: 'img/t1.jpg',
							margin: 20,
							width: 920,
							height: 350,
							border: false,
							style: 'border-radius: 3px; box-shadow: 0px 0px 22px #000000;'
						}
					}),
					defaults: this.contentDefaults
				}, {
					items: Ext.create('Web.view.shared.ContentPartial', {
						panelDefaults: this.contentDefaults,
						panelItems: {
							name: 'homeContent',
							xtype: 'panel'
						},
						layout: 'column'
					}),
					defaults: this.contentDefaults
				}, {
					items: Ext.create('Web.view.shared.ContentFooterPartial', {
						panelDefaults: this.contentDefaults,
						panelItems: {
							name: 'homeContentFooter',
							xtype: 'panel'
						},
						layout: 'column'
					}),
					defaults: this.contentDefaults
				}]
			}, {
				name: 'footer',
				cls: 'web-footer',
				xtype: 'container',
				items: [{
					defaults: this.contentDefaults,
					xtype: 'footerpartial'
				}]
			}]
		});
        this.callParent(arguments);
    }
});