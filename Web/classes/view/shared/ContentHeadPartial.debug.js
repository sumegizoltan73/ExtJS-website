Ext.define('Web.view.shared.ContentHeadPartial' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.contentheadpartial',

	panelDefaults: {},
	panelItems: {},
	
    initComponent: function() {
		Ext.apply(this, {
            items: [{
				cls: 'web-contentheader',
				defaults: this.panelDefaults,
				items: this.panelItems
			}]
		});
        this.callParent(arguments);
    }
});