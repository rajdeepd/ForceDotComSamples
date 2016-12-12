<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>Activated_Date_Today</fullName>
        <field>Activated_Date__c</field>
        <formula>TODAY()</formula>
        <name>Activated Date Today</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Purchased_Date_Today</fullName>
        <description>Set the Purchase Date to today</description>
        <field>PurchaseDate</field>
        <formula>TODAY()</formula>
        <name>Purchased Date Today</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
    </fieldUpdates>
    <rules>
        <fullName>Set Asset Status to Activated</fullName>
        <actions>
            <name>Activated_Date_Today</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <description>Set the the field Activated Date to TODAY when the field Status = Activated</description>
        <formula>ISPICKVAL( Status, &quot;Activated&quot;)</formula>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Set Asset Status to Purchased</fullName>
        <actions>
            <name>Purchased_Date_Today</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <description>Set the Purchase Date field when the field Status = Purchased</description>
        <formula>ISPICKVAL( Status, &quot;Purchased&quot;)</formula>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
