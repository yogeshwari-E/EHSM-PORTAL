sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, History, MessageBox, MessageToast, UIComponent) {
	"use strict";

	return Controller.extend("AnandEHSM_ARR.controller.EHSMLogin", {

		onNext: function(evt) {

			var username = this.getView().byId("username").getValue();
			var passwd = this.getView().byId("passwd").getValue();
			window.console.log(username);
			window.console.log(passwd);
			if (username !== "" && passwd !== "") {
				var surl = "/sap/opu/odata/sap/ZEHSM_PORTAL_87_SRV/";
				var oModel = new sap.ui.model.odata.ODataModel(surl, true);
				var uri = "Userid='" + username + "'" + ',' + "Password='" + passwd + "'";
				window.console.log(uri);
				var status;
				var UName;
				var UPass;
				oModel.read("/ZEHSM_PORTAL_87Set(" + uri + ")", {
					context: null,
					urlParameters: null,
					async: false,
					success: function(oData, oResponse) {
						UName = oData["Userid"];
						UPass = oData["Password"];
						window.console.log(UName);
						window.console.log(UPass);
						status = oData["LoginResult"];
						window.console.log(status);
					}
				});
				if (status === "LOGIN SUCCESS") {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("Dashboard");
					window.console.log("login");

				} else if (status === "LOGIN FAILED") {
					MessageBox.alert("Invalid User ID & Password");
				}
			} else {
				MessageToast.show("Enter User Id and Password");
			}

		},
		onSubmit: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Risk");
		}

	});
});