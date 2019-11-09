Ext.define('Web.view.ingatlan.View' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.ingatlanview',

	cls: 'scrollview',
    initComponent: function() {
		Ext.apply(this, {
            items: []
		});
        this.callParent(arguments);
    }
});