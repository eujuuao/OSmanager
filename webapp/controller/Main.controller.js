sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("osmanager.controller.Main", {
    onPress: function () {
      MessageToast.show("Botão clicado!");
    },

    formatDate: function (sDate) {
      if (!sDate) {
        return "";
      }
      var oDate = new Date(sDate);
      var dia = String(oDate.getDate()).padStart(2, "0");
      var mes = String(oDate.getMonth() + 1).padStart(2, "0");
      var ano = oDate.getFullYear();
      return dia + "/" + mes + "/" + ano;
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
    },

    formatPriorityState: function (sPriority) {
      switch (sPriority) {
        case "A": return "Error";      // Alta prioridade - vermelho
        case "M": return "Warning";    // Média prioridade - amarelo
        case "B": return "Information"; // Baixa prioridade - azul
        case "C": return "None";       // Crítica ou Cancelada - sem cor
        default: return "None";
      }
    },

    formatPriorityIcon: function (sPriority) {
      switch (sPriority) {
        case "A": return "sap-icon://priority-high";
        case "M": return "sap-icon://priority-medium";
        case "B": return "sap-icon://priority-low";
        case "C": return "sap-icon://decline";
        default: return "";
      }
    }
  });
});