sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("osmanager.controller.Main", {
    onPress: function () {
      MessageToast.show("Botão clicado!");
    },

    formatStatusState: function (sStatus) {
      switch (sStatus) {
        case "Aberta": return "Warning";
        case "Em Andamento": return "Information";
        case "Concluída": return "Success";
        case "Cancelada": return "Error";
        default: return "None";
      }
    },

    formatStatusIcon: function (sStatus) {
      switch (sStatus) {
      case "Aberta": return "sap-icon://add-document";
      case "Em andamento": return "sap-icon://process";
      case "Concluída": return "sap-icon://accept";
      case "Cancelada": return "sap-icon://decline";
      default: return "";
    }
  }
  });
});