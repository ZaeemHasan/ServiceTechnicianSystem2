/*jQuery.sap.declare("ZSS18_T2_APPT.Component");
sap.ui.define(['jquery.sap.global','sap/ui/core/UIComponent'],
	function(jQuery, UIComponent) {
	"use strict";

	var Component = UIComponent.extend("ZSS18_T2_APPT.Component", {
		metadata : {
			manifest : "json"
		},
		init : function ()

		  {

		  sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		  }
	});
	return Component;
});*/

jQuery.sap.declare("ZSS18_T2_APPT.Component");
sap.ui.core.UIComponent.extend("ZSS18_T2_APPT.Component", {
	
	metadata : {
        stereotype 	: "component", 
        "abstract"	: true,  
        version 	: "1.0",   
        includes	: ["libs/moment.js"],
        dependencies: { 			 //external dependencies
            libs 	: ["sap.m", 
                 	   "sap.ui.commons", 
                 	   "sap.ui.ux3",
                 	   "sap.ui.table", 
                 	   "sap.ui.layout"], 	//the libraries that component will be using            
            library	: "sap.ui.core",	//what library belongs your component to              
        },        
	},	
	
	createContent : function() {
		// create root view
		var oView = sap.ui.view({
			id 		: "app",
			viewName 	: "ZSS18_T2_APPT.zss18_t2_appt.App",
			type 		: "JS",
			viewData 	: { component : this }
		});
					
		// set device model
		/*var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone 	: jQuery.device.is.phone,
			listMode 	: (jQuery.device.is.phone) ? "None" 	: "SingleSelectMaster",
			listItemType: (jQuery.device.is.phone) ? "Active" 	: "Inactive"
		});*/
		//deviceModel.setDefaultBindingMode("OneWay");
		//oView.setModel(deviceModel, "device");

		// done
		
		// set device model
		var oDeviceModel = new sap.ui.model.json.JSONModel(sap.ui.Device);
		oDeviceModel.setDefaultBindingMode("OneWay");
		this.setModel(oDeviceModel, "device");
		
		
		return oView;
	}
});

