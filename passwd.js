;(function ($, window, document, undefined) {
	
	$.fn.boomPasswd = function ( options ) {
		var pluginInstance = $.data( this[0], "boomPasswdInstance" ),
			args = Array.prototype.slice.call( arguments, 1 );
		
		// method call
		if ( pluginInstance && pluginInstance[options] ) {
			args.unshift( this );
			console.log('method');
			return pluginInstance[ options ].apply( pluginInstance, args );
		}
		
		
		return this.map(function( i, elem ) {
			return new boomPasswd.init( elem, options, args );
		});
	};
	
	var boomPasswd = {
		
		init: function( $elem, options, args ) {			
			var that = this;
					
			if ( !$elem.type === "password" ) {
				return $elem;
			}			
			
			that.defaults = $.extend({
				width : 155,
				height : 155,
				paddingLeft : 20,
				paddingTop : 20,
				styles : {	
					circle : {
						borderGradient : {	
							from: '#313131',
							to: '#232323',
						},
						innerColor: '#fff',
					},
					line: {
						color : '#fff',
					},
				},
				
				//advanced options
				minDirectionChange : 1,					 
				minConnections : 3,
				
				// callbacks
				inputEnd: function (input) {},
				inputStart: function () {},
							
			}, options);
			
			//this.checkSupport();
			this.setup( $elem );
			window.setInterval(function(){ that.drawPoints.call(that)},1000);
			
			// Return the new password field
			//return self.$field[0];
		},
		
		points : [
			/*[20, 30],
			[50, 30],
			[80, 30],
	
			[20, 70],
			[50, 70],
			[80, 70],
	
			[20, 100],
			[50, 440],
			[80, 80]	*/	  
		],
		
		setup : function( field ) {
			var	App = this;
			$(field).hide();
	
			$('<canvas />', {
				id : 'boomPasswdCtx',
				width : App.defaults.width,
				height : App.defaults.height,	
				css : {
					'display' : 'block' ,		
				}
				}).data({	
					'boomPasswdInstance': App, 
				}).appendTo(
							$(field).parent()
				);
			
			var ctx = this.ctx = document.getElementById('boomPasswdCtx').getContext('2d'),			
				pixelSteps =  Math.floor(this.defaults.width/4);
	
				
				for( var y = 0; y <= 2; y++){
					for( var x = 0; x <= 2; x++){
						this.points.push([ this.defaults.paddingTop + pixelSteps * y, this.defaults.paddingLeft + pixelSteps * x])
					}					
				}				
			},	
			
			drawPoints : function(){ 
				var ctx = this.ctx;
				$.each( this.points, function(i, point){
					ctx.beginPath();					 
					ctx.arc(point[0], point[1], 14, 0, 360, false);
					
					var lg = ctx.createLinearGradient(point[0], point[1], point[0], point[1] + 40);
						lg.addColorStop(0, '#313131');
						lg.addColorStop(0.7, '#232323');
					
					ctx.fillStyle = lg;
					ctx.fill();
					
					ctx.beginPath();
					ctx.globalCompositeOperation = 'source-over';
					ctx.arc(point[0], point[1], 6, 0, 360, false);
					ctx.fillStyle = 'white';
					ctx.fill();
				});      
			},
					
		

	
		/**
		*	Destroys everything password123 has done and
		*	sets the original password field back in place
		*	@return The original password field
		*/
		destroy: function( elem ) {
			var val = this.$hidden.remove().val();
			return this.$oldField.val( val ).replaceAll( elem );
		},
		
		
	};
	boomPasswd.init.prototype = boomPasswd;
	
	
	

})(jQuery, this, this.document);
