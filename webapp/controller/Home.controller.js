sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("com.app.rfdeviceapplication.controller.Home", {
            onInit: function () {

            },
            loadFragment: async function (sFragmentName) {
                const oFragment = await Fragment.load({
                    id: this.getView().getId(),
                    name: `com.app.rfdeviceapplication.fragments.${sFragmentName}`,
                    controller: this
                });
                this.getView().addDependent(oFragment);
                return oFragment
            },
            onLoginPress: function () {
                debugger
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteUsermenu")
            },
            onPressSignupBtn: async function () {
                if (!this.oActiveLoansDialog) {
                    this.oActiveLoansDialog = await this.loadFragment("SignUpDetails")
                }
                this.oActiveLoansDialog.open();
            },

            //Register Dialog close Btn...
            onCloseRegisterSubmitDialog: function () {
                this.oActiveLoansDialog.close();
            },

            //clearing the Details of registration...
            onClearRegisterSubmitDialog: function () {
                var oView = this.getView();

                // Clear the value of each input field
                oView.byId("idPhoneNumberInput").setValue("");
                oView.byId("idCreatePasswordInput").setValue("");
                oView.byId("idInputuserType").setValue("");
                oView.byId("idInputuserType8").setValue("");

                // Clear the value of each ComboBox
                oView.byId("_IDGenComboBox1").setSelectedKey("");
                oView.byId("_IDGenComboBox2").setSelectedKey("");
                oView.byId("_IDGenComboBox3").setSelectedKey("");
            }

        });
    });
