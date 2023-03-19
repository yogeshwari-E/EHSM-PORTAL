sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("AnandEHSM_ARR.controller.EHSMIncident", {
		
			onPrevious: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Dashboard");
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf AnandEHSM_ARR.view.EHSMIncident
		 */
			onInit: function() {
				
		var url = "/sap/opu/odata/sap/ZEHSM_PORTAL_INCPLANT_87_SRV/";
		var list;
		var res1 = new sap.ui.model.odata.ODataModel(url,true);
		res1.read("ZEHSM_PORTAL_INCIDENT_87Set?$filter=IncidentPlant eq '0001' &$format=json",{
			context:null,
			urlParameter:null,
			async:false,
			success:function(oData,oResponse)
			{
				list = oData.results;
				window.console.log(list);
				
			}
		}
		);
		var result = new sap.ui.model.json.JSONModel();
		result.setData({
			"results":list
		});
		this.getView().byId("Incident").setModel(result);
		
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf AnandEHSM_ARR.view.EHSMIncident
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf AnandEHSM_ARR.view.EHSMIncident
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf AnandEHSM_ARR.view.EHSMIncident
		 */
		//	onExit: function() {
		//
		//	}

	});

});