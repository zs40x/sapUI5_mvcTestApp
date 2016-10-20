sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	return Controller.extend("sapui5.demo.mvcapp.controller.Master", {
		
		logError: function() {
			jQuery.sap.log.error("Error log", "This is an error log", "controller initialized");
		},
		onListPress: function(oEvent) {
			var sPageId = "detailPage";
			oApp.to(sPageId);
			
			var oPage = oApp.getPage(sPageId);
			var oContext = oEvent.getSource().getBindingContext();
			oPage.setBindingContext(oContext);
		}
	});
});