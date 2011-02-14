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
                padding: 20,
				radius: 14,
                styles: {
                    circle: {
                        borderGradient: {
                            from: '#313131',
                            to: '#232323',
                        },
                        innerColor: '#fff',
                    },
                    line: {
                        color: '#fff',
                    },
                },

                //advanced options
                minDirectionChange: 1,
                minConnections: 3,
				convertMap : [1,2,3,4,5,6,7,8,9],
				reParse : false,

                // callbacks
                inputEnd: function (input) {},
                inputStart: function () {},

            }, options);

            if (App.checkSupport()) {
              	App.input = $(elem)//.hide();
                App.setup($(elem));
            } else {
                // include mordernizer
            }
			
			//this.grid();
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
            // cache
            var App = this,
                ctx = document.createElement('canvas');					
				ctx.width = App.defaults.width;
				ctx.height = App.defaults.height;
				ctx.id = 'boomPasswdCtx';			
				
            $(ctx, {
                mousedown: App.uiEvent,
                mouseup: App.uiEvent,
                mousemove: App.uiEvent,
                mouseout: App.uiEvent,
            }).data({
                'boomPasswdInstance': App,
            }).bind('mousedown mouseup mousemove mouseout', function (event) {
                var x = event.pageX - this.offsetLeft,
                    y = event.pageY - this.offsetTop;

                switch (event.type) {
                case 'mousedown':
                    App.mousedown = true;
                    App.start(x, y);
                    break;
                case 'mouseup':
                case 'mouseout':
                    App.mousedown = false;
                    break;
                case 'mousemove':
                    App.mousedown && App.connect(x, y);
                    break;
                }
            }).appendTo($(field).parent());

            ctx = App.ctx = document.getElementById('boomPasswdCtx').getContext('2d');
			
            App.pixelSteps = Math.floor((App.defaults.width - (App.defaults.padding)) / 3);
console.log(App.pixelSteps);

            // calculate point cords
            $.each([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]], function (i, v) {
                App.points.push([App.defaults.padding + App.pixelSteps * v[1], App.defaults.padding + App.pixelSteps * v[0]])
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
            var ctx = this.ctx;
            ctx.globalCompositeOperation = 'destination-over';
            ctx.beginPath();
            ctx.arc(this.defaults.padding + point[0] * this.pixelSteps, this.defaults.padding + point[1] * this.pixelSteps, this.defaults.radius + 2, 0, 360, false);
            ctx.fillStyle = "#7bd93e";
            ctx.fill();
			
            ctx.beginPath();
            ctx.arc(this.defaults.padding + point[0] * this.pixelSteps, this.defaults.padding + point[1] * this.pixelSteps, this.defaults.radius + 3, 0, 360, false);
            ctx.fillStyle = "#acacac";
            ctx.fill();
		},

        grid: function () {
            for (var y = 0; y <= 2; y++) {
                for (var x = 0; x <= 2; x++) {
                    this.ctx.strokeRect(this.pixelSteps * x  + this.pixelSteps*0.1, this.pixelSteps * y + this.pixelSteps*0.1, this.pixelSteps-this.pixelSteps*0.3, this.pixelSteps - this.pixelSteps*0.3);
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

        hit: function (x, y) {
            var pixelSteps = this.pixelSteps,
                xF = Math.floor(x / pixelSteps),
                yF = Math.floor(y / pixelSteps),
				point = [ this.defaults.padding + xF * pixelSteps, this.defaults.padding + yF * pixelSteps],
				rad = this.defaults.radius;
				
				// debug: this.ctx.strokeRect(point[0] - this.defaults.radius, point[1] - this.defaults.radius ,2*this.defaults.radius, 2* this.defaults.radius );				
				return (x> (point[0]-rad) && x < (point[0]+rad) && y > (point[1]-rad) && y < (point[1]+rad) && x < this.defaults.width && y < this.defaults.height && this.notUsed([xF, yF])) ?					
						[xF, yF] : false;
						
        },
        connect: function (x, y) {
            var point = this.hit(x, y),
                ctx = this.ctx,
                points = this.hittedPoints,
                len = points.length;

            if ( !! point) {
                this.active(point);
                this.hittedPoints.push(point);
				this.updateInput();

                //draw connection line
                ctx.globalCompositeOperation = 'source-over';
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(207,207,207,0.85)';
                ctx.lineCap = 'round';
                ctx.lineWidth = 14;
                ctx.moveTo(this.defaults.padding + points[len - 1][0] * this.pixelSteps, this.defaults.padding + points[len - 1][1] * this.pixelSteps);
                ctx.lineTo(this.defaults.padding + points[len][0] * this.pixelSteps, this.defaults.padding + points[len][1] * this.pixelSteps);
                ctx.stroke();
				

            }
        },

        start: function (x, y) {
            var point = this.hit(x, y),
                ctx = this.ctx;

            // if hit && not used yet
            if ( !! point) {
                this.active(point)
                this.hittedPoints.push(point);
				this.updateInput();
            }
        },
    };
    boomPasswd.init.prototype = boomPasswd;

})(jQuery, this, this.document);