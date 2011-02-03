/*!

 {description}

 @version	1.0
 @author	Oskar Krawczyk (thereis@nouincolor.com)

*/

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
