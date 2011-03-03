/*	Copyright (c) 2011 Sebastian Otto, http://wemakeweb.de/

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;(function ($, window, document, undefined) {
    $.fn.dontType = function (options) {
        var pluginInstance = $.data(this[0], "dontTypeInstance"),
            pid = $.data(document.body, 'dontTypePid'),
            args = Array.prototype.slice.call(arguments, 1);

        if (pid) {
            $.data(document.body, 'dontTypePid', pid++);
        } else {
            pid = $.data(document.body, 'dontTypePid', 1);
        }

        return this.map(function (i, elem) {
            return new dontType.init(elem, options, pid, args);
        });
    };

    var dontType = {
        init: function (elem, options, pid, args) {
            var App = this;
            App.pid = pid, App.hittedPoints = [];

            if (elem.type !== "password") {
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
                convertMap: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                noSupport: function () {},

            }, options);

            if (App.checkSupport()) {
                App.input = $(elem).hide();
                App.setup(App.input);
            } else {
                App.defaults.noSupport.call();
                App.noSupport = true;
            }

            return $(this);
        },

        checkSupport: function () {
            return !!document.createElement('canvas').getContext;
        },

        updateInput: function () {
            var passwd = '',
                App = this;
            $.each(App.hittedPoints, function (i, val) {
                passwd += App.defaults.convertMap[val[1] * 3 + val[0]];
            });

            $(this.input).val(passwd);
        },
        setup: function (field) {
            var App = this,
                canvas = document.createElement('canvas'),
                ctx = false;

            canvas.width = App.defaults.width;
            canvas.height = App.defaults.height;
            canvas.id = 'dontTypeCtx' + App.pid;

            $(field).parent().append(canvas);

            $(document.getElementById('dontTypeCtx' + App.pid)).data({
                'dontTypeInstance': App
            }).bind('mousedown mouseup mousemove mouseout touchstart touchmove touchend touchcancel', function (event) {
                var x, y;
                if (event.type === 'touchstart' || event.type === 'touchmove') {
                    x = event.originalEvent.touches[0].pageX - this.offsetLeft;
                    y = event.originalEvent.touches[0].pageY - this.offsetTop;

                    event.preventDefault();
                } else {
                    x = event.pageX - this.offsetLeft;
                    y = event.pageY - this.offsetTop;
                }

                switch (event.type) {
                case 'mousedown':
                case 'touchstart':
                    App.mousedown = true;
                    if (App.hittedPoints.length) {
                        App.connect(x, y);
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
            App.ctx = ctx = document.getElementById('dontTypeCtx' + App.pid).getContext('2d');

            // calculate the steps size depending on the with/height of canvas
            App.pixelSteps = Math.floor((App.defaults.width) / 3);

            // calculate point cords
            $.each([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]], function (i, v) {
                App.drawPoint.call(App, [App.defaults.padding + (App.pixelSteps * v[1]), App.defaults.padding + (App.pixelSteps * v[0])], false);
            });
        },

        drawPoint: function (point, isActive) {
            var App = this,
                ctx = App.ctx;
            ctx.beginPath();

            if (isActive) {
                ctx.globalCompositeOperation = 'destination-over';
                ctx.arc(point[0], point[1], App.defaults.radius + 2, 0, 2.0 * Math.PI, false);
                ctx.fillStyle = App.defaults.styles.dotActiveInner;

            } else {
                ctx.arc(point[0], point[1], App.defaults.radius, 0, Math.PI * 2.0, true);
                var lg = ctx.createLinearGradient(point[0], point[1], point[0], point[1] + 40);
                lg.addColorStop(0, App.defaults.styles.dotGradient.from);
                lg.addColorStop(0.7, App.defaults.styles.dotGradient.to);
                ctx.fillStyle = lg;
            }

            ctx.fill();
            ctx.closePath();
            ctx.beginPath();

            if (isActive) {
                ctx.globalCompositeOperation = 'destination-over';
                ctx.arc(point[0], point[1], App.defaults.radius + 3, 0, 2.0 * Math.PI, false);
                ctx.fillStyle = App.defaults.styles.dotActiveBorder;

            } else {
                ctx.globalCompositeOperation = 'source-over';
                ctx.arc(point[0], point[1], 6, 0, Math.PI * 2.0, true);
                ctx.fillStyle = App.defaults.styles.dotInner;

            }

            ctx.fill();
            ctx.closePath();
        },

        notUsed: function (point) {
            if (this.hittedPoints.length) {
                return !$.grep(this.hittedPoints, function (p, i) {
                    return p[0] === point[0] && p[1] === point[1];
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
                this.hittedPoints.push(point);
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
                point = App.hit(x, y);

            // if hit && not used yet
            if ( !! point) {
                App.drawPoint([App.defaults.padding + (point[0] * App.pixelSteps), App.defaults.padding + (point[1] * App.pixelSteps)], true);
                this.hittedPoints.push(point);
                App.updateInput();
            }
        },
    };
    dontType.init.prototype = dontType;
})(jQuery, this, this.document);