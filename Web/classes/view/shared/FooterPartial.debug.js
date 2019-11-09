Ext.define('Web.view.shared.FooterPartial' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.footerpartial',

    initComponent: function() {
		Ext.apply(this, {
            items: [{
				name: 'footerContent',
				cls: 'web-footercontent'
			}]
		});
        this.callParent(arguments);
    }
});