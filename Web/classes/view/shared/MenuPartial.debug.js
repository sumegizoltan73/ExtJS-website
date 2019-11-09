Ext.define('Web.view.shared.MenuPartial' ,{
    extend: 'Ext.menu.Menu',
    alias: 'widget.menupartial',
	
	cls: 'web-menu',
	floating: false,
	hidden: false,
	autoShow: true,
	plain: true,
	
    initComponent: function() {

        this.callParent(arguments);
    }
});