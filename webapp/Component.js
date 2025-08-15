sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel" // Dependencia declarada
], function (UIComponent, JSONModel) {
  "use strict";

  return UIComponent.extend("osmanager.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      var sUrl = sap.ui.require.toUrl("osmanager/model/orders.json");
      var oModel = new JSONModel(sUrl);
      this.setModel(oModel); 
    }
  });
});
