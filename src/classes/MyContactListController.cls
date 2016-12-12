public class MyContactListController {
    @AuraEnabled
    public static List<Contact> getContacts() {
        List<Contact> listContact =  [Select Id, Name, Email, Title, Phone From Contact];
        //List<Contact> listContact =  [Select * From Contact];
        return listContact;
    }
}