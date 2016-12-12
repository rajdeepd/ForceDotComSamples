public class BattleStationUtil {
    @auraEnabled
    public static list<battle_station__c> getStations(){
        return [select id,name,project_status__c,weapons_status__c from battle_station__c order by createdDate desc];
    }
    @auraEnabled
    public static list<resource__c> getResources(string stationId){
        return [select name, utilization__c, quantity__c from resource__c where battle_station__c = :stationId order by createdDate desc];
    }
    @auraEnabled
    public static list<supply__c> getSupplies(string stationId){
        return [select name, unit_cost__c, quantity__c, total_cost__c from supply__c where battle_station__c = :stationId order by createdDate];
    }
    @auraEnabled
    public static Battle_Station__c createStation(string name, string projectStatus, string weaponsStatus){
        battle_station__c station = new battle_station__c();
        station.Name = name;
        station.Project_Status__c = projectStatus;
        station.Weapons_Status__c = weaponsStatus;
        insert station;
        return [select id, name, project_status__c, weapons_status__c from battle_station__c order by createdDate desc limit 1];
    }
    @auraEnabled
    public static Battle_Station__c deleteStation(String Id) {
        battle_station__c station = [select id from battle_station__c where id = :Id];
        delete station;
        return station;
    }
    @auraEnabled
    public static Supply__c insertSupply(string name, integer unitCost, integer quantity, string stationId){
        supply__c supply = new supply__c();
        supply.name = name;
        supply.Battle_Station__c = stationId;
        supply.Quantity__c = quantity;
        supply.Unit_Cost__c = unitCost;
        insert supply;
        return supply;
    }
    @auraEnabled
    public static Resource__c insertResource(string name, integer utilization, integer quantity, string stationId){
        Resource__c resource = new Resource__c();
        resource.name = name;
        resource.Battle_Station__c = stationId;
        resource.Quantity__c = quantity;
        resource.Utilization__c = utilization;
        insert resource;
        return resource;
    }
}