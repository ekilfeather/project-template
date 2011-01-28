(function(){

	var Common = this.Common = new Class({
		
		Implements: [Options, Events],
		
		options: {},
		
		initialize: function(options){
			this.setOptions(options);
			this.setup();
		},
		
		setup: function(){
			console.log('Boing!');
		}
		
	});

})();
