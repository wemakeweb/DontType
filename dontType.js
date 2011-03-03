/*!
 * jQuery DontType Plugin v0.9
 * 
 * Copyright 2011, Sebstian Otto
 * wemakeweb / sotto@wemakeweb.de
 *
 */

;(function ($, window, document, undefined) {

    $.fn.dontType = function (options) {
        var pluginInstance = $.data(this[0], "dontTypeInstance"),
            args = Array.prototype.slice.call(arguments, 1);

        // method call
        if (pluginInstance && pluginInstance[options]) {
            args.unshift(this);
            return pluginInstance[options].apply(pluginInstance, args);
        }

        return this.map(function (i, elem) {
            return new dontType.init(elem, options, args);
        });
    };

    var dontType = {

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
                    dotGradient: {
                        from: 'rgba(49,49,49,0.95)',
                        to: 'rgba(35,35,35,0.95)'
                    },
                    dotInner: 'rgb(255,255,255)',
                    dotActiveInner: 'rgb(123,217,62)',
                    dotActiveBorder: 'rgb(172,172,172)',
                    lineColor: 'rgba(207,207,207,0.85)'
                },

                //advanced options
                minDirectionChange: 1,
                minConnections: 3,
                convertMap: [1, 2, 3, 4, 5, 6, 7, 8, 9],

                noSupport: function () {
                    // include ExCanvas	 locally
                    var s = document.createElement('script');
                    s.src = 'excanvasMod.js';
                    s.type = 'text/javascript';
                    document.getElementsByTagName("head")[0].appendChild(s);
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

            return $(this);
        },

        hittedPoints: [],

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
        setup: function (field) {
            var App = this,
                canvas = document.createElement('canvas'),
                ctx = false;

            canvas.width = App.defaults.width;
            canvas.height = App.defaults.height;
            canvas.id = 'dontTypeCtx';
            $(field).parent().append(canvas)

            if (!document.createElement('canvas').getContext) {
                ctx = G_vmlCanvasManager.initElement(canvas);
            }

            $(document.getElementById('dontTypeCtx')).data({
                'boomPasswdInstance': App
            }).bind('mousedown mouseup mousemove mouseout touchstart touchmove touchend touchcancel', function (event) {
                if (event.type === 'touchstart' || event.type === 'touchmove') {
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
                ctx = document.getElementById('dontTypeCtx');
            }

            App.ctx = ctx = ctx.getContext('2d');
            App.pixelSteps = Math.floor((App.defaults.width) / 3);

            // calculate point cords
            $.each([[0, 0],[1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]], function (i, v) {
                App.drawPoint.call(App, [App.defaults.padding + (App.pixelSteps * v[1]), App.defaults.padding + (App.pixelSteps * v[0])], false);
            });
        },

        drawPoint: function (point, isActive) {
            var point = point,
                isActive = isActive;

            with(this.ctx) {
                beginPath();

                if (isActive) {
                    globalCompositeOperation = 'destination-over';
                    arc(point[0], point[1], this.defaults.radius + 2, 0, 2.0 * Math.PI, false);
                    fillStyle = this.defaults.styles.dotActiveInner;

                } else {
                    arc(point[0], point[1], this.defaults.radius, 0, Math.PI * 2.0, true);
                    var lg = createLinearGradient(point[0], point[1], point[0], point[1] + 40);
                    lg.addColorStop(0, this.defaults.styles.dotGradient.from);
                    lg.addColorStop(0.7, this.defaults.styles.dotGradient.to);
                    fillStyle = lg;
                }

                fill();
                closePath();
                beginPath();

                if (isActive) {
                    globalCompositeOperation = 'destination-over';
                    arc(point[0], point[1], this.defaults.radius + 3, 0, 2.0 * Math.PI, false);
                    fillStyle = this.defaults.styles.dotActiveBorder;

                } else {
                    globalCompositeOperation = 'source-over';
                    arc(point[0], point[1], 6, 0, Math.PI * 2.0, true);
                    fillStyle = this.defaults.styles.dotInner;

                }

                fill();
                closePath();
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
                point = [this.defaults.padding + xF * pixelSteps, this.defaults.padding + yF * pixelSteps],
                rad = this.defaults.radius;

            return (x > (point[0] - rad) && x < (point[0] + rad) && y > (point[1] - rad) && y < (point[1] + rad) && x < this.defaults.width && y < this.defaults.height && this.notUsed([xF, yF])) ? [xF, yF] : false;

        },
        connect: function (x, y) {
            var App = this,
                point = App.hit(x, y),
                ctx = App.ctx,
                points = App.hittedPoints,
                len = points.length;

            if ( !! point) {
                App.drawPoint([App.defaults.padding + (point[0] * App.pixelSteps), App.defaults.padding + (point[1] * App.pixelSteps)], true);
                App.hittedPoints.push(point);
                App.updateInput();

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
            var App = this,
                point = App.hit(x, y),
                ctx = App.ctx;

            // if hit && not used yet
            if ( !! point) {
                App.drawPoint([App.defaults.padding + (point[0] * App.pixelSteps), App.defaults.padding + (point[1] * App.pixelSteps)], true);
                App.hittedPoints.push(point);
                App.updateInput();
            }
        },
    };
    dontType.init.prototype = dontType;

})(jQuery, this, this.document);