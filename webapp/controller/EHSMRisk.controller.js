sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("AnandEHSM_ARR.controller.EHSMRisk", {

		onPrevious: function(evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Dashboard");
		},

		onNext: function(evt) {

			var user = this.getView().byId("user").getValue();
			var url = "/sap/opu/odata/sap/ZEHSM_PORTAL_87_SRV/";
			var d;
			var oe = new sap.ui.model.odata.ODataModel(url, true);
			oe.read("ZEHSM_PORTAL_RISK_87Set?$filter=InciRecNo eq '" + user + "'&$format=json", {
				context: null,
				urlParameter: null,
				async: false,
				success: function(oData, oResponse) {
					d = oData.results;
					window.console.log(d);
				}
			});
			var oen = new sap.ui.model.json.JSONModel();
			oen.setData({
				"results": d
			});
			this.getView().byId("Risk").setModel(oen);

		},
		onSub: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("test");
		}

	});

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.

	 */

	//  onInit: function() {

	// var url = "/sap/opu/odata/sap/ZODATA_ARR_EHSM_SRV/";
	// var list;
	// var res1 = new sap.ui.model.odata.ODataModel(url,true);
	// res1.read("ZARR_EHSM_RISKSet?$filter=InciRecNo eq '1000004' &$format=json",{
	// 	context:null,
	// 	urlParameter:null,
	// 	async:false,
	// 	success:function(oData,oResponse)
	// 	{
	// 		list = oData.results;
	// 		window.console.log(list);

	// 	}
	// }
	// );
	// var result = new sap.ui.model.json.JSONModel();
	// result.setData({
	// 	"results":list
	// });
	// this.getView().byId("Risk").setModel(result);

	// 	}

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf AnandEHSM_ARR.view.EHSMRisk
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf AnandEHSM_ARR.view.EHSMRisk
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf AnandEHSM_ARR.view.EHSMRisk
	 */
	//	onExit: function() {
	//
	//	}

});