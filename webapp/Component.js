sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
	], function(UIComponent, JSONModel, Device) {
		"use strict";
	
	return UIComponent.extend("sapui5.demo.mvcapp.Component", {

		metadata: {
			manifest: "json"
		},
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
		
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "Device");
		
			this.getRouter().initialize();
		}
	});	
});