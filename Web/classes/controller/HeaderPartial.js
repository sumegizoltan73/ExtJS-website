Ext.define("Web.controller.HeaderPartial",{extend:"Web.controller.AbstractController",stores:["Labels","Languages","LocationParams"],models:["Website","Label","Lang","LocationParam"],views:["shared.HeaderPartial"],init:function(){this.initBase(this);this.control({'headerpartial panel[name="title"]':{beforerender:this.onTitleRendered},'headerpartial button[name="langmenu"]':{beforerender:this.onLangMenuRendered}})},onTitleRendered:function(a){var b=this.getApplication().getWebsiteInstance();if(b){a.html=Ext.String.format("<h1>{0}</h1>",b.get("name"))}else{if(console){console.log(this.modelErrMsg)}}},onLangMenuRendered:function(a){var c,b=this.getApplication().view;c=this.getLocationParamsStore();c.clearFilter(true);a.text=Ext.Web.Util.getLabel("header.languagesText","",this.getLabelsStore());this.getLanguagesStore().each(function(d,h){var f,j,e,g;f=this.get("langid");j=this.get("name");e=this.get("img");g=Ext.Web.Util.findRecord(c,[{fieldName:"view",value:b},{fieldName:"lang",value:f}]);if(!g){if(console){console.log(this.modelErrMsg)}g=b}else{g=g.get("localizedViewParam")||b}a.menu.add({lang:f,href:Ext.String.format("?view={0}&lang={1}",g,f),text:j,icon:e,iconCls:"lang-flag"})})}});