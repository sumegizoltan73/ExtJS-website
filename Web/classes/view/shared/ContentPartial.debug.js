Ext.define('Web.view.shared.ContentPartial' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.contentpartial',
	
	panelDefaults: {},
	panelItems: {},
	
    initComponent: function() {
		Ext.apply(this, {
            items: [{
				cls: 'web-contentcenter',
				defaults: this.panelDefaults,
				items: this.panelItems
			}]
		});
        this.callParent(arguments);
    }
});