;(function ($, window, document, undefined) {

    $.fn.boomPasswd = function (options) {
        var pluginInstance = $.data(this[0], "boomPasswdInstance"),
            args = Array.prototype.slice.call(arguments, 1);

        // method call
        if (pluginInstance && pluginInstance[options]) {
            args.unshift(this);
            return pluginInstance[options].apply(pluginInstance, args);
        }

        return this.map(function (i, elem) {
            return new boomPasswd.init(elem, options, args);
        });
    };

    var boomPasswd = {

        init: function (elem, options, args) {
            var App = this;

            if (!elem.type === "password") {
                return elem;
            }

            App.defaults = $.extend({
                width: 155,
                height: 155,
                padding: 25,
				radius: 14,
                styles: {
                    circle: {
                        borderGradient: {
                            from: '#313131',
                            to: '#232323'
                        },
                        innerColor: '#fff'
                    },
                    line: {
                        color: '#fff'
                    }
                },

                //advanced options
                minDirectionChange: 1,
                minConnections: 3,
				convertMap : [1,2,3,4,5,6,7,8,9],
				reParse : false,

                // callbacks
                inputEnd: function (input) {},
                inputStart: function () {},
				noSupport : function (){
						// include ExCanvas	 locally
						/*var s = document.createElement('script');
    						s.src = 'excanvasBig.js'; 
							s.type = 'text/javascript';
							document.getElementsByTagName("head")[0].appendChild(s)*/
				}

            }, options);

            if (App.checkSupport()) {
              	App.input = $(elem).hide(); 
                App.setup( App.input )
            } else {
                App.defaults.noSupport.call()
				App.noSupport = true;
				App.input = $(elem).hide();
				App.setup( App.input );			
            }
			
			// Return the new password field
            //return self.$field[0];
        },

        hittedPoints: [],

        points: [],
		
		checkSupport: function () {
            return !!document.createElement('canvas').getContext;
        },
		
		updateInput : function(){
			var passwd = '', App = this;
			$.each( App.hittedPoints, function(i,val){
				passwd += App.defaults.convertMap[val[1]*3 + val[0]]
			});
			
			$(this.input).val(passwd);	
		},
		
        setup: function (field) {
            var App = this;
				
				canvas = document.createElement('canvas'), ctx = false;
				canvas.width = App.defaults.width;
				canvas.height = App.defaults.height;
				canvas.id = 'boomPasswdCtx';	
			
				document.getElementsByTagName('body')[0].appendChild(canvas);
				
			if( !document.createElement('canvas').getContext ){
					space = G_vmlCanvasManager.fixDynamicElement(document.getElementById('boomPasswdCtx'));
					var ctx = App.ctx = space.getContext('2d');
			}
			
			

            $(document.getElementById('boomPasswdCtx')).data({
                'boomPasswdInstance': App
            }).bind('mousedown mouseup mousemove mouseout', function (event) {
                var x = event.pageX - this.offsetLeft,
                    y = event.pageY - this.offsetTop;

                switch (event.type) {
                case 'mousedown':
                    App.mousedown = true;
					
                    if(App.hittedPoints.length){
						App.connect(x,y)
					}
					else {
						App.start(x, y);
					}
                    break;
                case 'mouseup':
                case 'mouseout':
                    App.mousedown = false;
                    break;
                case 'mousemove':
                    App.mousedown && App.connect(x, y);
                    break;
                }
            });
			
			/*if ( !ctx ){
          		var ctx = document.getElementById('ctx')				
			}*/
			
			//App.ctx = ctx = ctx.getContext('2d');
			
            App.pixelSteps = Math.floor((App.defaults.width)  / 3);

            // calculate and draw points
            $.each([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]], function (i, v) {
                App.drawPoint.call(App, [App.defaults.padding + (App.pixelSteps * v[1]), App.defaults.padding + (App.pixelSteps * v[0])],false);			
            });		
			      
        },
		drawPoint : function(point, isActive){
			var point = point, isActive = isActive;
			with( this.ctx ){
					beginPath();			

					if( isActive ){
						globalCompositeOperation = 'destination-over';
						arc(point[0], point[1], this.defaults.radius + 2, 0, 2.0 * Math.PI , false);
						fillStyle = "#7bd93e";
						
					} 	else /* default state*/ {						
						arc(point[0], point[1], this.defaults.radius, 0, Math.PI * 2.0, true);
						var lg = createLinearGradient(point[0], point[1], point[0], point[1] + 40);
						lg.addColorStop(0, 'rgba(49,49,49,0.95)');
						lg.addColorStop(0.7, 'rgba(35,35,35,0.95)');
						fillStyle = lg;
					}
					
					fill();
					closePath();						
					beginPath();
					
					if ( isActive ){
						arc(point[0], point[1], this.defaults.radius + 3, 0, 2.0 * Math.PI , false);
						fillStyle = "#acacac";
						
					} else {
						globalCompositeOperation = 'source-over';
						arc(point[0], point[1], 6, 0, Math.PI * 2.0, true);
						fillStyle = 'black';
						fill();
						closePath();	
					}
			}
		},
       
	    notUsed: function (point) {
            if (this.hittedPoints.length) {
                return !$.grep(this.hittedPoints, function (p, i) {
                    return p[0] === point[0] && p[1] === point[1]
                }).length;
            } else {
                return true;
            }
        },
		
		clear : function(x,y,width,height){
			x = x || 0;
			y = y || 0;
			width = width || this.defaults.width;
			height = height || this.defaults.height;
			
			this.ctx.clearRect(x,y,height,width);
		},

        hit: function (x, y) {
            var pixelSteps = this.pixelSteps,
                xF = Math.floor(x / pixelSteps),
                yF = Math.floor(y / pixelSteps),
				point = [ this.defaults.padding + xF * pixelSteps, this.defaults.padding + yF * pixelSteps],
				rad = this.defaults.radius;
				
				// debug: this.ctx.strokeRect(point[0] - this.defaults.radius, point[1] - this.defaults.radius ,2*this.defaults.radius, 2* this.defaults.radius );				
				return (x> (point[0]-rad) && x < (point[0]+rad) && y > (point[1]-rad) && y < (point[1]+rad) && x < this.defaults.width && y < this.defaults.height && this.notUsed([xF, yF])) ?					
						point : false;
						
        },
        connect: function (x, y) {
            var App = this,
				point = App.hit(x, y),
                ctx = App.ctx,
                points = App.hittedPoints,
                len = points.length;

            if ( !! point) {
				this.crossing();
                this.drawPoint(point, /* active: */ true);
                this.hittedPoints.push(point);
				this.updateInput();

                //draw connection line
                ctx.globalCompositeOperation = 'source-over';
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(207,207,207,0.85)';
                ctx.lineCap = 'round';
                ctx.lineWidth = 14;
                ctx.moveTo( points[len - 1][0], points[len - 1][1] );
                ctx.lineTo( points[len][0], points[len][1] );
                ctx.stroke();
				

            }
        },

        start: function (x, y) {
            var point = this.hit(x, y),
                ctx = this.ctx;

            // if hit && not used yet
            if ( !! point) {
				this.crossing();
                this.drawPoint(point,true)
                this.hittedPoints.push(point);
				this.updateInput();
            }
        },
		
		crossing : function(){	
								
		}
    };
    boomPasswd.init.prototype = boomPasswd;

})(jQuery, this, this.document);