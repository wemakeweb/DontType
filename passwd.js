window.count = 0;
;(function ($, window, document, undefined) {
	
	$.fn.boomPasswd = function ( options ) {
		var pluginInstance = $.data( this[0], "boomPasswdInstance" ),
			args = Array.prototype.slice.call( arguments, 1 );
		
		// method call
		if ( pluginInstance && pluginInstance[options] ) {
			args.unshift( this );
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
			//this.grid();
			
			// Return the new password field
			//return self.$field[0];
		},
		hittedPoints : [],
		
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
			// cache
			var	App = this, ctx;
			
			$(field).hide();
	
			$('<canvas />', {
				id : 'boomPasswdCtx',
				//width : App.defaults.width,
				//height : App.defaults.height,	
				mousedown : App.uiEvent,
				mouseup : App.uiEvent,
				mousemove : App.uiEvent,
				mouseout : App.uiEvent,
				css : {
					'display' : 'block' ,		
				}
				}).data({	
					'boomPasswdInstance': App, 
				}).bind('mousedown mouseup mousemove mouseout', function( event ){
						 var x = event.pageX - this.offsetLeft,
					 		 y = event.pageY - this.offsetTop;
					
						 switch( event.type ){
							case 'mousedown' : 
								App.mousedown = true;
								App.start(x, y);
							break;										
							case 'mouseup' : case 'mouseout' :
								App.mousedown = false;
							break;					
							case 'mousemove' :
								 App.mousedown && App.connect(x, y);
							break;
					 	}					
				})
				.appendTo(
							$(field).parent()
				);
			
				ctx = App.ctx = document.getElementById('boomPasswdCtx').getContext('2d');		
				App.pixelSteps =  Math.floor(App.defaults.width/4);
	
				// calculate point cords
				for( var y = 0; y <= 2; y++){
					for( var x = 0; x <= 2; x++){
						App.points.push([ App.defaults.paddingTop + App.pixelSteps * y, App.defaults.paddingLeft + App.pixelSteps * x])
					}					
				}
				
				// draw point base aka default state
				$.each( App.points, function(i, point){
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
			
		
		active : function( point ){
				var ctx = this.ctx;			  
			  	ctx.globalCompositeOperation = 'destination-over';
                ctx.beginPath();
                ctx.arc( this.defaults.paddingLeft + point[0] * this.pixelSteps, this.defaults.paddingLeft + point[1] * this.pixelSteps, 16, 0, 360, false );
                ctx.fillStyle = "#7BD93E";
                ctx.fill();		
		},
					
		grid : function(){
			for( var y = 0; y <= 2; y++){
					for( var x = 0; x <= 2; x++){
						this.ctx.strokeRect( this.pixelSteps * x + 4.5 ,  this.pixelSteps * y + 4.5, this.pixelSteps -7 , this.pixelSteps -7);
					}					
			}
			
			
		},	
			

    notUsed: function ( point ) {
		var not = true;
		$.each( this.hittedPoints , function(i,val){
			if(val[0] === point[0] && val[1] === point[1]) not = false;
		});
		return not;
    },

    hit: function (x, y) {
        var pixelSteps =  this.pixelSteps,
			xF = Math.floor(x / pixelSteps),
            yF = Math.floor(y / pixelSteps);
			
			// debug
			//console.log('[' + (xF * pixelSteps + 4), x , (xF * pixelSteps) + pixelSteps + ']','[' + (yF * pixelSteps + 4),y ,(yF * pixelSteps) + pixelSteps + ']')  
		
			if( ((xF * pixelSteps + 4) < x && x < (xF * pixelSteps + pixelSteps )) && ((yF * pixelSteps + 4) < y && y < (yF * pixelSteps + pixelSteps )) && this.notUsed([ xF, yF ]) ){
				return [ xF, yF ]; 
			}
			
			return false;
    },
	connect : function(x,y){
		var point = this.hit(x, y), ctx = this.ctx, points = this.hittedPoints , len = points.length;

		if( !!point ){	
			this.active(point);
			this.hittedPoints.push(point);
	
			//draw connection line
            ctx.globalCompositeOperation = 'source-over';
            ctx.beginPath();
            ctx.strokeStyle = '#E5E5E5';
            ctx.lineCap = 'round';
            ctx.lineWidth = 20;
			console.log(points.join('|'),points.length,len);
            ctx.moveTo(this.defaults.paddingLeft + points[len-1][0] * this.pixelSteps,this.defaults.paddingTop + points[len-1][1] * this.pixelSteps);
            ctx.lineTo(this.defaults.paddingLeft + points[len][0] * this.pixelSteps, this.defaults.paddingTop + points[len][1] * this.pixelSteps);
		
			
            ctx.stroke();
			
		}
	},

    start: function (x, y) {
			var point = this.hit(x,y), ctx = this.ctx;
									
			// if hit && not used yet
			if( !!point ){           
            	this.active(point)
            	this.hittedPoints.push(point);
	       }
    },

		
		
	};
	boomPasswd.init.prototype = boomPasswd;
	
	
	

})(jQuery, this, this.document);
