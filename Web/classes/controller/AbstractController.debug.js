Ext.define('Web.controller.AbstractController', {
    extend: 'Ext.app.Controller',
	
	modelErrMsg: '',
	
    initBase: function(cmp){
		this.modelErrMsg = this.getApplication().modelErrorMsg;
    }
});