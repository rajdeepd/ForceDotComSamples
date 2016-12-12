@isTest
class BookPriceProcessingTest {
    static testMethod void validatePriceProcessing() {   
        Book__c b = new Book__c(Name='Programming in Go', Price__c=100);
        System.debug('Price before inserting new book: ' + b.Price__c);
        insert b;
        b = [SELECT Price__c FROM Book__c WHERE Id =:b.Id];
        System.debug('Price after trigger fired: ' + b.Price__c);
        System.assertEquals(b.Price__c, 80);
    }
}