sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";
	
	return Controller.extend("sapui5.demo.mvcapp.controller.Detail", {
		
		onNavPress: function() {
			oApp.back();
		}
	});
});