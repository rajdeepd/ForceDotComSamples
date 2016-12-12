trigger BookProcessingTrigger on Book__c (before insert) {
    Book__c[] books = Trigger.new;
    BookPriceProcessing.applyDiscount(books);
}