Ext.ns('Ext.Web');

Ext.Web.Msg = new function(){
	var Msg = this;
	
	Ext.apply(Msg, {
		config: {
			id: 'web-msg',
			delay: 3000,
			remove: false,
			msgElement: {
				tag: 'div',
				style: 'position:absolute; left: 35%; top: 90px; z-index: 10000; padding: 10px; font-weight: bold; background-color: #dfeaf2; border: 1px solid #42339f; color: #42339f;display:none;'
			}
		},
		
		createMsgElement: function(){
			return Ext.DomHelper.insertFirst(
				Ext.getBody(),
				Ext.apply(this.config.msgElement, {id: this.config.id}),
				true
			);
		},
		
		showMsg: function(msg){
			var scrolltop, el = Ext.get(this.config.id);
			if (!el) { el = this.createMsgElement(); }
			
			scrolltop = Ext.getBody().getScrollTop();
			
			Ext.DomHelper.applyStyles(el, { marginTop: scrolltop + 'px' });
			el.update(msg).slideIn('t').ghost("t", { delay: this.config.delay, remove: this.config.remove});
		}
	});
};
