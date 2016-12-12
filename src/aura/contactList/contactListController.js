({
	myAction : function(component, event, helper) {
		
	},
    gotoRecord : function(component, event, helper) {
        // Fire the event to navigate to the contact record
        var sObjectEvent = $A.get("e.force:navigateToSObject");
        sObjectEvent.setParams({
            "recordId": component.get("v.contact.Id"),
            "slideDevName": 'related'
        })
        sObjectEvent.fire();
    },
    
    editRecord : function(component, event, helper) {
        // Fire the event to navigate to the edit contact page
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": component.get("v.contact.Id")
        });
        editRecordEvent.fire();
    },
   
    relatedList : function (component, event, helper) {
        // Navigate to the related cases
        var relatedListEvent = $A.get("e.force:navigateToRelatedList");
        relatedListEvent.setParams({
            "relatedListId": "Cases",
            "parentRecordId": component.get("v.contact.Id")
        });
        relatedListEvent.fire();
    },
    createRecord : function (component, event, helper) {
    // Open the create record page
    var createRecordEvent = $A.get("e.force:createRecord");
    createRecordEvent.setParams({
        "entityApiName": "Contact"
    });
    createRecordEvent.fire();
},
    select : function(component, event, helper){
        // Get the selected value of the ui:inputSelect component
        var selectCmp = component.find("selection");
        var selectVal = selectCmp.get("v.value");
        
        // Display all primary contacts or all contacts
        if (selectVal==="All Primary"){
            var action = component.get("c.getPrimary");
            action.setCallback(this, function(response){
                var state = response.getState();
                if (component.isValid() && state === "SUCCESS") {
                    component.set("v.contacts", response.getReturnValue());
                }
            });
            $A.enqueueAction(action);
        }
        else {
            // Return all contacts
            helper.getContacts(component);
        }
    }
})