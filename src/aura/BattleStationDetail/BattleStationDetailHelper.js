({
    toggleView : function(component, view) {
        component.set("v.createView",false);
        component.set("v.detailView",false);
        component.set("v.editView",false);
            
        if ( view === "create" ) component.set("v.createView",true);
        if ( view === "edit" ) component.set("v.editView",true);
        if ( view === "detail" ) component.set("v.detailView",true);
    }
})