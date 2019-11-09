Ext.define('Web.controller.Ingatlan', {
    extend: 'Ext.app.Controller',
	
	stores: [
    ],
    models: [
	],
	views: [
        'ingatlan.View'
    ],
	
    init: function() {
        //console.log('Initialized Users! This happens before the Application launch function is called');
		this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        //console.log('The panel was rendered');
    }
});