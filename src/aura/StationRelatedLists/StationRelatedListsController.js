({
    showRelated : function(component, event, helper) {
        var newView = event.getParam("new");
        if (newView) {
            component.set("v.show",false);
        } else {
            var station = event.getParam("station");
            component.set("v.station",station);
            component.set("v.show",true);
        }    
    },
    switchTab : function(component, event, helper) {
        $A.util.toggleClass(component.find("tab1"),"slds-active");
        $A.util.toggleClass(component.find("tab2"),"slds-active");
        $A.util.toggleClass(component.find("content1"),"slds-show");
        $A.util.toggleClass(component.find("content1"),"slds-hide");
        $A.util.toggleClass(component.find("content2"),"slds-show");
        $A.util.toggleClass(component.find("content2"),"slds-hide");
    }
})