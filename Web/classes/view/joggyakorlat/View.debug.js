Ext.define('Web.view.joggyakorlat.View' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.joggyakorlatview',
	
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
				cls: 'web-content web-content-jog',
				xtype: 'container',
				items: [{
					items: Ext.create('Web.view.shared.ContentHeadPartial', {
						panelDefaults: this.contentDefaults,
						panelItems: {
							name: 'jogContentHead',
							xtype: 'panel'
						},
						layout: 'column'
					}),
					defaults: this.contentDefaults
				}]
			}, {
				name: 'content2',
				cls: 'web-content2 web-content-jog',
				xtype: 'container',
				items: Ext.create('Web.view.shared.ContentFooterPartial', {
					panelDefaults: this.contentDefaults,
					panelItems: {
						name: 'jogContentFooter',
						xtype: 'panel'
					},
					layout: 'column'
				}),
				defaults: this.contentDefaults
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