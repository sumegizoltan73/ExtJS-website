Ext.define('Web.model.AbstractModel', {
    extend: 'Ext.data.Model',
	
    fields: ['id'],
	
	idgen: {
        type: 'sequential',
        id: 'id'
    }
});