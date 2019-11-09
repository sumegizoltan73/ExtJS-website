Ext.define('Web.controller.Kapcsolat', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Article',
		'Office',
		'Website'
    ],
    models: [
		'Article',
		'Website'
	],
	views: [
        'kapcsolat.View'
    ],
	
	config: {
		gmaptimeout: 100,
		timeoutCnt: 20,
		panel: null
	},
	
    init: function() {
        this.control({
			'contentheadpartial panel[name=contactGMap]': {
				render: this.onGMapRendered
			},
            'contentfooterpartial panel[name=contactContentFooter]': {
				render: this.onContentFooterRendered
			},
			'kapcsolatview button[action=send]': {
                click: this.onSend
            }
        });
    },
	
	onSend: function(button) {
		// View/Controller alapján módosítás szükséges
		var conn, fieldset, name, email, message, isNameValid, isEmailValid, 
			errorMsg = "",
			successText='Üzenetét továbbítottuk.',
			errorText='Az üzenet továbbítása sikertelen.';
		fieldset = button.up('fieldset');
		name = fieldset.down('[name=name]');
		email = fieldset.down('[name=email]');
		
		isNameValid = name.validate();
		isEmailValid = email.validate();
		
		if (isEmailValid && isNameValid){
			message = fieldset.down('[name=message]').value;
			name = name.value;
			email = email.value;
			
			conn = new Ext.data.Connection();
			conn.request({
				method: 'POST',
				url: 'Web/classes/server/send.php',
				params: {
					name: name,
					email: email,
					message: message
				},
				success: function(response, params) {
					if (response.responseText === 'success'){
						Ext.Web.Msg.showMsg(successText);
					}
					else {
						if (console){ console.log(response.responseText); }
						Ext.Web.Msg.showMsg(errorText);
					}
				},
				failure: function(response, params) { 
					if (response.responseText){
						if (console){ console.log(response.responseText); }
					}
					Ext.Web.Msg.showMsg(errorText);
				}
			});
		}
		else {
			errorMsg += (name.activeError)  ? Ext.String.format('<div>{0}:&nbsp;{1}</div>', name.fieldLabel , name.activeError) : '';
			errorMsg += (email.activeError) ? Ext.String.format('<div>{0}:&nbsp;{1}</div>', email.fieldLabel, email.activeError) : '';
			
			Ext.Web.Msg.showMsg(errorMsg);
		}
	},

    onGMapRendered: function(panel) {
		if (!this.config.panel){ this.config.panel = panel; }
		
		if (!google.maps.MapTypeId && this.config.gmaptimeout){
			this.config.gmaptimeout--;
			setTimeout(Ext.bind(this.onGMapRendered, this), 100);
		}
		else if (google.maps.MapTypeId){
			this.createGMap();
		}
		else {
			if (console){ console.log('gmap api loading error!'); }
		}
    },
	
	createGMap: function(){
		var web, map, marker, mapOptions, latlng, lat, lng;
		
		Ext.DomHelper.append(this.config.panel.body, {
			tag: 'div',
			id: 'map',
			children: [{
				tag: 'div',
				id: 'map_canvas'
			}]
		});

		web = Ext.Web.Util.findRecord(this.getWebsiteStore(), [
			{ fieldName: "site", value: "Web" },
			{ fieldName: "lang", value: this.getApplication().lang }
	    ]);
		
		latlng = web.get('gmapLatLng');
		if (latlng){
			latlng = latlng.split(',');
			lat = parseFloat(latlng[0], 10);
			lng = parseFloat(latlng[1], 10);
			
			mapOptions = {
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				streetViewControl: true,
				center: new google.maps.LatLng(lat, lng)
			};
			marker = new google.maps.Marker({ map: null, draggable: false });
			map = new google.maps.Map(Ext.get('map_canvas').dom, mapOptions);
			marker.setMap(map);
			marker.setPosition(mapOptions.center);
			marker.setIcon('img/gmap_marker.png');
			marker.setTitle(web.get('gmaptitle'));
		}
		else {
			if (console){ console.log('missing store.Website -> gmapLatLng'); }
		}
		
		this.config.panel = null;
	},

    onContentFooterRendered: function(panel) {
		Ext.Web.Util.createArticles(panel, this.getArticleStore(), { 
			filterFn: function(item) { 
				return /kapcsolat|all/.test(item.get("view")) && 
						item.get("target") === "content-footer"; 
			},
			itemCallback: [{
				test: function(item) { 
					return /office-contact/.test(item.get("name")); 
				},
				fn: Ext.bind(this.onOfficeContactRendered, this)
			}]
		});
    },

	onOfficeContactRendered: function(panel){
		return Ext.Web.Util.createArticles(panel, this.getOfficeStore(), { 
			filterFn: function(item){
				return true;
			},
			tagArticleContainer: false,
			clsArticleContainer: false,
			isArticleItemsAsChildren: true
		});
	}
});