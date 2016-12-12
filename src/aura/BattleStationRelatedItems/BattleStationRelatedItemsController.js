({
    loadResources : function(component, event, helper) {
        var action = component.get("c.getResources");
        action.setParams({
            "stationId" : component.get("v.station").Id
        });
        action.setCallback(this, function(response){
            if(response.getState()==="SUCCESS" && component.isValid()){
                component.set("v.resources",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    createView : function(component, event, helper) {
        component.set("v.createView",true);
    },
    cancelSave : function(component, event, helper) {
        component.set("v.createView",false);
    },
    createResource : function(component, event, helper) {
        var action = component.get("c.insertResource");
        var supply = component.get("v.newResource");
        action.setParams({
            "name" : supply.Name,
            "utilization" : supply.Utilization__c,
            "quantity" : supply.Quantity__c,
            "stationId" : component.get("v.station").Id
        });
        action.setCallback(this, function(response){
            if(response.getState()==="SUCCESS" && component.isValid()) {
                component.set("v.createView",false);
                $A.get("e.c:StationClickEvent").setParams({"new":false,"station":component.get("v.station")}).fire();
            }
        });
            
        $A.enqueueAction(action);
    }
})