sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("osmanager.controller.Main", {
    onPress: function () {
      MessageToast.show("Botão clicado!");
    }
  });
});
