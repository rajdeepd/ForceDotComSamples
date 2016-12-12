public with sharing class ApexTypes {
	public void test() {
		Boolean bool = true;
		Double d=3.14159;
		Integer i = 100000;
		ID id='00300000003T2PGAA0';
		Long l = 2147483648L;
		String s = 'This is a string.';
		Date myDate = Date.newInstance(1999, 1, 1);
		
		System.debug('Boolean:' + bool);
		System.debug('Double:' + d);
		System.debug('Integer:' + i);
		System.debug('Long:' + l);
		System.debug('String:' + s);
		System.debug('Date:' + myDate);
		
		Object o = 20;
		System.Type t = Object.class;
		
		System.debug('Object.class Type' + t.getName());
	}
}