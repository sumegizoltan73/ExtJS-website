Ext.define("Web.view.shared.ContentFooterPartial",{extend:"Ext.panel.Panel",alias:"widget.contentfooterpartial",panelDefaults:{},panelItems:{},initComponent:function(){Ext.apply(this,{items:[{cls:"web-contentfooter",defaults:this.panelDefaults,items:this.panelItems}]});this.callParent(arguments)}});