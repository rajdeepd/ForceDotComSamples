({
    loadStations : function(component, event, helper) {
        var action = component.get("c.getStations");
        action.setCallback(this, function(response){
            if(response.getState()==="SUCCESS" && component.isValid()){
                component.set("v.stations",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    loadNew : function(component, event, helper) {
        var loadEvent = $A.get("e.c:StationClickEvent");
        loadEvent.setParams({"new":true});
        loadEvent.fire();
    },
})