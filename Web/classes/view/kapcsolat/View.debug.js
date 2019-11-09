Ext.define('Web.view.kapcsolat.View' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.kapcsolatview',

    layout: {
		type: 'container'
	},
	cls: 'scrollview',
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
				cls: 'web-content web-content-contact',
				xtype: 'container',
				items: [{
					items: Ext.create('Web.view.shared.ContentHeadPartial', {
						panelDefaults: this.contentDefaults,
						panelItems: {
							name: 'contactGMap',
							xtype: 'panel',
							width: 922,
							height: 348,
							items: []
						}
					}),
					defaults: this.contentDefaults
				}]
			}, {
				name: 'content2',
				cls: 'web-content2 web-content-contact',
				xtype: 'container',
				items: [Ext.create('Web.view.shared.ContentFooterPartial', {
					panelDefaults: this.contentDefaults,
					panelItems: {
						name: 'contactContentFooter',
						xtype: 'panel'
					},
					layout: 'column'
				}), {
					xtype:'fieldset',
					name: 'fieldset-webmail',
					defaultType: 'textfield',
					defaults: {
						size: 50
					},
					layout: 'anchor',
					items :[{
						name: 'name',
						fieldLabel: 'Név',
						beforeLabelTextTpl: '<i class="fa fa-male"></i>',
						invalidText: 'A név kitöltése kötelező.',
						allowBlank: false,
						minLength: 4
					}, {
						name: 'email',
						fieldLabel: 'Email cím',
						beforeLabelTextTpl: '<i class="fa fa-envelope-o"></i>',
						invalidText: 'Az email cím megadása kötelező.',
						vtype: 'email',
						allowBlank: false
					}, {
						name: 'message',
						fieldLabel: 'Üzenet',
						beforeLabelTextTpl: '<i class="fa fa-comment-o"></i>',
						xtype: 'textareafield',
						width: '495px',
						height: '150px',
						grow      : true,
						allowBlank: true,
						listeners: {
							render: {
								fn: function(f){
									f.resizer=new Ext.Resizable(f.getEl(),{handles:'s,se,e',wrap:true});
									f.resizer.on('resize',function(){delete f.anchor;});
								}
							}
						},
						onResize: function(){
							Ext.form.TextArea.superclass.onResize.apply(this, arguments);
							var r = this.resizer;
							var csize = r.getResizeChild().getSize();
							r.el.setSize(csize.width, csize.height);
						},
						anchor: "100% 100%"
					}, {
						xtype: 'button',
						action: 'send',
						text: 'Küldés'
					}]
				}],
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