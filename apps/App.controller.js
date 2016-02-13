// sap.ui.controller("apps.App", {
//     onInit : function () {

// 	},
// 	eventoPress : function () {
// 		var txtNombre;
// 		txtNombre = sap.ui.getCore("txtNombre");
// 		if (txtNombre.getValue()!=''){
// 			MessageToast.show("Hola: "+txtNombre.getValue());			
// 		}else{
// 			MessageToast.show("Hello World");			
// 		}
// 	}
// });

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("apps.App", {
		onInit : function () {
                var oController = this;
	        var aData = jQuery.ajax({
	            type : "GET",
	            contentType : "application/json",
	            url : "php/index.php",
	            dataType : "json",
	            async: false, 
	            success : oController.renderDataCat,
                    error: function (xhr, ajaxOptions, thrownError) {
                     console.log(xhr);
                     console.log(ajaxOptions);
                     console.log(thrownError);
                    }

	        });
		},
		renderDataCat: function (data) {
                    var listaBebidas,oModel;
   	            oModel = new sap.ui.model.json.JSONModel(data);
  		    listaBebidas = sap.ui.getCore().byId("listaBebidas");
                    listaBebidas.setModel(oModel);
                    listaBebidas.bindAggregation("items", {
                        path: "/categorias",
                        factory: function(id,data) {
                            var items = new sap.m.ObjectListItem({
                              type : "Active",
                              productId: data.getProperty("idCategoria"),
                              attributes: [new sap.m.ObjectAttribute({
                              text: data.getProperty("descripcion")
                              })]
                            });
                            return items;
                        }
                    });
		},
                eventoPress: function(evt){
                    var idbebidaSeleccionada,bebidaSeleccionada;
                    bebidaSeleccionada = evt.getParameter("listItem").getBindingContext().getProperty("descripcion");
                    idbebidaSeleccionada = evt.getParameter("listItem").getBindingContext().getProperty("idCategoria");
		    MessageToast.show("bebida seleccionada: "+bebidaSeleccionada+" Y su ID: "+idbebidaSeleccionada  );
                }	
	});

});