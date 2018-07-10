sap.ui.jsview("ZSS18_T2_APPT.zss18_t2_appt.App", {

	getControllerName: function () {
		return "ZSS18_T2_APPT.zss18_t2_appt.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		//this.app = new sap.m.SplitApp();
		var app = new sap.m.App("myApp", {
			initialPage: "idtechnician_main1"});
		//this.app.setInitialPage("idtechnician_main1");
		// load the master page
		//var master = sap.ui.xmlview("idtechnician_main1", "ZSS18_T2_APPT.zss18_t2_appt.technician_main");
		//master.getController().nav = this.getController();
		//this.app.addPage(master, true);
		
		// create the first page
		var page1 = new sap.m.Page("idtechnician_main1", {
			title : "Technician App",
			width : "100%"
			//showNavButton : false,
			/*content : new sap.m.Button({
				text : "Go to Page 2",
				press : function () {
					// navigate to page2
					app.to("page2");
				}
			})*/
		});
		
		app.addPage(page1);
//		app.placeAt("content");
		
		return this.app;
	}
});