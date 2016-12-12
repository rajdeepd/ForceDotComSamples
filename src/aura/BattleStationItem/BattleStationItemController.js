({
    loadDetail : function(component, event, helper) {
        var station = component.get("v.stationItem");
        var loadEvent = $A.get("e.c:StationClickEvent");
        loadEvent.setParams({"station":station,"new":false});
        loadEvent.fire();
    },
})