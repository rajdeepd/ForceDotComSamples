<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Support_Case_Closed</fullName>
        <description>Support: Case Closed</description>
        <protected>false</protected>
        <recipients>
            <field>ContactEmail</field>
            <type>email</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Concaria_Email_Templates/Support_Case_Closed</template>
    </alerts>
    <alerts>
        <fullName>Support_Case_Received</fullName>
        <description>Support: Case Received</description>
        <protected>false</protected>
        <recipients>
            <field>ContactEmail</field>
            <type>email</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Concaria_Email_Templates/Support_Case_Received</template>
    </alerts>
    <rules>
        <fullName>Case Closed</fullName>
        <actions>
            <name>Support_Case_Closed</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Case.Status</field>
            <operation>equals</operation>
            <value>Closed</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Case Received</fullName>
        <actions>
            <name>Support_Case_Received</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Case.Asset_Name_text__c</field>
            <operation>contains</operation>
            <value>AirSoClean 3000</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
    </rules>
</Workflow>
