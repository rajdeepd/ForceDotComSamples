({
	myAction : function(component, event, helper) {
		
	},
    afterRender: function( cmp, h ) {
    cmp.getElement().addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0];
        console.log('touchstart', touchobj); // when locker service is on, touchobj is empty
    }, false);
   }

})