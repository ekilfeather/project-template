/*!

 Common object extensions

 @version	1.0
 @author	Oskar Krawczyk (thereis@nouincolor.com)

*/

(function(){

	Window.implement({
		$log: function(){
			if (typeof console !== 'undefined' && typeof console.log !== 'undefined'){
				console.log(arguments.length <= 1 ? arguments[0] : arguments);
			}
		}
	});
	
	Elements.implement({
		
		placeholder: function(fromAttr){
			var events = {
				focus: function(){
					if (this.get('value') === this.get(fromAttr)){
						this.set('value', '').removeClass('placeholder');
					}
				},

				blur: function(){
					if (this.get('value').trim() === ''){
						this.set('value', this.get(fromAttr)).addClass('placeholder');
					}
				}
			};
			
			var setup = function(input){
				input.set('value', input.get(fromAttr)).addClass('placeholder');
				input.addEvents(events);
			};
			this.each(setup);
		}
	});
	
	// Add a custom Validator to take in account the placeholder value
	Form.Validator.add('withPlaceholder', {
		errorMsg: false,
		test: function(element, props){
			if (element.get('data-placeholder') === element.get('value')){
				return false;
			} else {
				return true;
			}
		}
	});

})();