Ext.define('Web.view.shared.HeaderPartial' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.headerpartial',
	
	
	
    initComponent: function() {
		Ext.apply(this, {
            items: [{
				xtype: 'panel',
				layout: {
					type: 'table',
					columns: 2
				},
				items: [{
					name: 'title',
					rowspan: '2',
					colspan: '1'
				}, {
					margin: '0 20px 0 20px',
					cls: 'web-menu',
					xtype: 'menupartial',
					rowspan: '1',
					colspan: '1'
				}, {
					name: 'langmenu',
					cls: 'web-langmenu',
					xtype: 'splitbutton',
					iconClass: 'fa-flag-o',
					menu: Ext.create('Ext.menu.Menu'),
					cellCls: 'web-langmenu-cell',
					rowspan: '1',
					colspan: '1'
				}]
			}]
		});
        this.callParent(arguments);
    }
});