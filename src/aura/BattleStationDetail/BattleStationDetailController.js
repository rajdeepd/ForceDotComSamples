({
    showStation : function(component, event, helper) {
        var newView = event.getParam("new");
        var station = event.getParam("station");
        component.set("v.station",station);
        if (newView) {
            helper.toggleView(component, "create");  
        } else {
            helper.toggleView(component, "detail");
        }
    },
    makeEdit : function(component, event, helper) {
        helper.toggleView(component, "edit");
    },
    saveStation : function(component, event, helper) {       
        component.find("recedit").get("e.recordSave").fire();
    },
    saveSuccess : function(component, event, helper) {
        $A.get("e.c:updatedListEvent").fire();
        helper.toggleView(component, "detail");       
    },
    cancelEdit : function(component, event, helper) {
        helper.toggleView(component, "detail");
    },
    cancelCreate : function(component, event, helper) {
        helper.toggleView(component, "none");
    },
    makeNew : function(component, event, helper) {
        helper.toggleView(component, "create");
    },
    insertStation : function(component, event, helper) {
        var action = component.get("c.createStation");
        var station = component.get("v.station");
        action.setParams({
            "name" : station.Name,
            "projectStatus" : station.Project_Status__c,
            "weaponsStatus" : station.Weapons_Status__c
        });
        action.setCallback(this, function(response){
            $A.get("e.c:updatedListEvent").fire();
            $A.get("e.c:StationClickEvent").setParams({"new":false,"station":response.getReturnValue()}).fire();
            helper.toggleView(component, "detail");
        });
        $A.enqueueAction(action);
    },
    removeStation : function(component, event, helper) {
        var action = component.get("c.deleteStation");
        action.setParams({"Id":component.get("v.station").Id});
        action.setCallback(this, function(response){
            $A.get("e.force:showToast").setParams({"message":"Battle Station Deleted","duration":"2500"}).fire();
            helper.toggleView(component, "none");
            $A.get("e.c:updatedListEvent").fire();
        })
        $A.enqueueAction(action);
    },
})