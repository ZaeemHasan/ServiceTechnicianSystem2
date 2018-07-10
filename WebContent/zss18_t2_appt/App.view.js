sap.ui.jsview("ZSS18_T2_APPT.zss18_t2_appt.App", {

	getControllerName: function () {
		return "ZSS18_T2_APPT.zss18_t2_appt.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.SplitApp();

		// load the master page
		var master = sap.ui.xmlview("idtechnician_main1", "ZSS18_T2_APPT.zss18_t2_appt.technician_main");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		return this.app;
	}
});