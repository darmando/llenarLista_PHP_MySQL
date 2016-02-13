sap.ui.jsview("apps.App", {
	getControllerName: function() {
		return "apps.App";
	},
	createContent: function(oController) {
		var currentView,footer,miFooter,miPagina,miLista,miApp;
		currentView=this;

        miFooter = new sap.m.Bar("idMiBar");
		miPagina = new sap.m.Page("idMiPagina", {
            title: "Ejemplo Llenar Lista - Desarrollo Hidrocálido",
            showNavButton: false,
            showHeader: true,
            showFooter: true
        });
        var miLista = new sap.m.List("listaBebidas", {
            headerText: "Lista de Bebidas",
            mode: sap.m.ListMode.SingleSelectMaster,
            itemPress: [oController.eventoPress, oController]
        });           
        miPagina.setFooter(miFooter);
        miPagina.addContent(miLista);
     
        miApp = new sap.m.App("idMiApp");
        miApp.addPage(miPagina);

        currentView.destroyContent();
        currentView.addContent(miApp);
    }    
});