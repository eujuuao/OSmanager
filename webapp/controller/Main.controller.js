sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";

    return Controller.extend("osmanager.controller.Main", {
        onPress: function () {
            sap.m.MessageToast.show("Botão clicado!");
        }
    });
});  