({
    loadSupplies : function(component, event, helper) {
        var action = component.get("c.getSupplies");
        action.setParams({
            "stationId" : component.get("v.station").Id
        });
        action.setCallback(this, function(response){
            if(response.getState()==="SUCCESS" && component.isValid()){
                component.set("v.supplies",response.getReturnValue());
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
    createSupply : function(component, event, helper) {
        var action = component.get("c.insertSupply");
        var supply = component.get("v.newSupply");
        action.setParams({
            "name" : supply.Name,
            "unitCost" : supply.Unit_Cost__c,
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