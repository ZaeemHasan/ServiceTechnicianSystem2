sap.ui.jsview("ZSS18_T2_APPT.zss18_t2_appt.App", {

	getControllerName: function () {
		return "ZSS18_T2_APPT.zss18_t2_appt.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App("myApp", {
			initialPage: "idtechnician_main1"});
		
		//create page
		var page1 = sap.ui.view({id:"idtechnician_main1", viewName:"ZSS18_T2_APPT.zss18_t2_appt.technician_main", type:sap.ui.core.mvc.ViewType.XML});
		page1.getController().nav = this.getController();
		this.app.addPage(page1);
		
		//return app
		return this.app;
	}
});