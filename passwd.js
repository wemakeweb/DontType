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
                convertMap: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                reParse: false,

                // callbacks
                inputEnd: function (input) {},
                inputStart: function () {},
                noSupport: function () {
                    // include ExCanvas	 locally
                    var s = document.createElement('script');
                    s.src = 'excanvas.js';
                    s.type = 'text/javascript';
                    document.getElementsByTagName("head")[0].appendChild(s)
                }

            }, options);

            if (App.checkSupport()) {
                App.input = $(elem).hide();
                App.setup(App.input)
            } else {
                App.defaults.noSupport.call()
                App.noSupport = true;
                App.input = $(elem).hide();
                App.setup(App.input);
            }

            // Return the new password field
            //return self.$field[0];
        },

        hittedPoints: [],

        points: [],

        checkSupport: function () {
            return !!document.createElement('canvas').getContext;
        },

        updateInput: function () {
            var passwd = '',
                App = this;
            $.each(App.hittedPoints, function (i, val) {
                passwd += App.defaults.convertMap[val[1] * 3 + val[0]]
            });

            $(this.input).val(passwd);
        },
		getTouches : function (e) {
					if (e.originalEvent) {
						if (e.originalEvent.touches && e.originalEvent.touches.length) {
							return e.originalEvent.touches;
						} else if (e.originalEvent.changedTouches && e.originalEvent.changedTouches.length) {
							return e.originalEvent.changedTouches;
						}
					}
					return e.touches;
		},
        setup: function (field) {
            var App = this,
                canvas = document.createElement('canvas'),
                ctx = false;
            canvas.width = App.defaults.width;
            canvas.height = App.defaults.height;
            canvas.id = 'boomPasswdCtx';
            $(field).parent().append(canvas)

            if (!document.createElement('canvas').getContext) {
                ctx = G_vmlCanvasManager.initElement(canvas);
            }

            $(document.getElementById('boomPasswdCtx')).data({
                'boomPasswdInstance': App
            }).bind('mousedown mouseup mousemove mouseout touchstart touchmove touchend touchcancel', function (event) {               				      
					if( event.type === 'touchstart' || event.type === 'touchmove' ){
						var x = event.originalEvent.touches[0].pageX - this.offsetLeft,
							y = event.originalEvent.touches[0].pageY - this.offsetTop;
							
							event.preventDefault();
					} else {
						 var x = event.pageX - this.offsetLeft,
				    		y = event.pageY - this.offsetTop;
					}
					
				switch (event.type) {
					case 'mousedown':
					case 'touchstart':
						App.mousedown = true;
						if (App.hittedPoints.length) {
							App.connect(x, y)
						} else {
							App.start(x, y);
						}
						break;
					case 'mouseup':
					case 'mouseout':
					case 'touchcancel':
					case 'touchend':
						App.mousedown = false;
						break;
					
					case 'mousemove':
					case 'touchmove':
						App.mousedown && App.connect(x, y);
						break;				
				}
            });
			
			if (!ctx) {
                ctx = document.getElementById('boomPasswdCtx');
            }
			
			
            App.ctx = ctx = ctx.getContext('2d');

            App.pixelSteps = Math.floor((App.defaults.width) / 3);

            // calculate point cords
            $.each([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]], function (i, v) {
                App.points.push([App.defaults.padding + (App.pixelSteps * v[1]), App.defaults.padding + (App.pixelSteps * v[0])])

            });

            // draw point base 
            $.each(App.points, function (i, point) {
                ctx.beginPath();
                ctx.arc(point[0], point[1], App.defaults.radius, 0, 360, false);

                var lg = ctx.createLinearGradient(point[0], point[1], point[0], point[1] + 40);
                lg.addColorStop(0, 'rgba(49,49,49,0.95)');
                lg.addColorStop(0.7, 'rgba(35,35,35,0.95)');

                ctx.fillStyle = lg;
                ctx.fill();

                ctx.beginPath();
                ctx.globalCompositeOperation = 'source-over';
                ctx.arc(point[0], point[1], 6, 0, 360, false);
                ctx.fillStyle = 'white';
                ctx.fill();
            });

        },

        active: function (point) {
            var App = this,
                ctx = App.ctx;
            ctx.globalCompositeOperation = 'destination-over';
            ctx.beginPath();
            ctx.arc(App.defaults.padding + point[0] * App.pixelSteps, App.defaults.padding + point[1] * App.pixelSteps, App.defaults.radius + 2, 0, 360, false);
            ctx.fillStyle = "#7bd93e";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(App.defaults.padding + point[0] * App.pixelSteps, App.defaults.padding + point[1] * App.pixelSteps, App.defaults.radius + 3, 0, 360, false);
            ctx.fillStyle = "#acacac";
            ctx.fill();
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

        hit: function (x, y) {
            var pixelSteps = this.pixelSteps,
                xF = Math.floor(x / pixelSteps),
                yF = Math.floor(y / pixelSteps),
                point = [this.defaults.padding + xF * pixelSteps, this.defaults.padding + yF * pixelSteps],
                rad = this.defaults.radius;

            // debug: this.ctx.strokeRect(point[0] - this.defaults.radius, point[1] - this.defaults.radius ,2*this.defaults.radius, 2* this.defaults.radius );				
            return (x > (point[0] - rad) && x < (point[0] + rad) && y > (point[1] - rad) && y < (point[1] + rad) && x < this.defaults.width && y < this.defaults.height && this.notUsed([xF, yF])) ? [xF, yF] : false;

        },
        connect: function (x, y) {
            var App = this,
                point = App.hit(x, y),
                ctx = App.ctx,
                points = App.hittedPoints,
                len = points.length;

            if ( !! point) {
                this.crossing();
                this.active(point);
                this.hittedPoints.push(point);
                this.updateInput();

                //draw connection line
                ctx.globalCompositeOperation = 'source-over';
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(207,207,207,0.85)';
                ctx.lineCap = 'round';
                ctx.lineWidth = 14;
                ctx.moveTo(App.defaults.padding + points[len - 1][0] * App.pixelSteps, App.defaults.padding + points[len - 1][1] * App.pixelSteps);
                ctx.lineTo(App.defaults.padding + points[len][0] * App.pixelSteps, App.defaults.padding + points[len][1] * App.pixelSteps);
                ctx.stroke();


            }
        },

        start: function (x, y) {
            var point = this.hit(x, y),
                ctx = this.ctx;

            // if hit && not used yet
            if ( !! point) {
                this.crossing();
                this.active(point)
                this.hittedPoints.push(point);
                this.updateInput();
            }
        },

        crossing: function () {

        },
    };
    boomPasswd.init.prototype = boomPasswd;

})(jQuery, this, this.document);