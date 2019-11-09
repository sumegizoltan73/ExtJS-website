Ext.define('Web.model.Website', {
    extend: 'Web.model.AbstractLocalized',
    fields: ['site','name', 'email', 'siteurl', 'copyright','gmapClientId', 'gmapgeoCodeAddr', 'gmapLatLng', 'gmaptitle'],
	getSiteName: function(){
		var url, name = '';
		url = this.get('siteurl').split('//');
		if (url.length){
			name = (url.length > 1) ? url[1] : url[0];
		}
		return name;
	}
});