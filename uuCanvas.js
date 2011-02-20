/*!{id:"uuCanvas.js",ver:2.03,license:"MIT",author:"uupaa.js@gmail.com"}*/

var uu;
uu || (function(win, doc) {
uu = uumix(uujamfactory, {
	ver: _version(0.7),
	plugin: uuplugin,
	require: uurequire,
	like: uulike,
	type: uumix(uutype, {
		HASH: 0x001,
		NODE: 0x002,
		FAKEARRAY: 0x004,
		DATE: 0x008,
		NULL: 0x010,
		UNDEFINED: 0x020,
		BOOLEAN: 0x040,
		FUNCTION: 0x080,
		NUMBER: 0x100,
		STRING: 0x200,
		ARRAY: 0x400,
		REGEXP: 0x800,
		CSS: 0x1000
	}),
	isNumber: uuisnumber,
	isString: uuisstring,
	isFunction: uuisfunction,
	arg: uuarg,
	mix: uumix,
	each: uueach,
	keys: uukeys,
	values: uuvalues,
	hash: uumix(uuhash, {
		has: uuhas,
		nth: uunth,
		size: uusize,
		clone: uuclone,
		indexOf: uuindexof
	}),
	array: uumix(uuarray, {
		has: uuhas,
		nth: uunth,
		size: uusize,
		sort: uusort,
		clean: uuclean,
		clone: uuclone,
		toHash: uutohash,
		unique: uuunique
	}),
	attr: uumix(uuattr, {
		get: uuattrget,
		set: uuattrset,
		getAll: uuattrgetall
	}),
	css: uumix(uucss, {
		get: uucssget,
		set: uucssset,
		opacity: uumix(uucssopacity, {
			get: uucssopacityget,// uu.css.opacity.get(node:Node):Number
			set: uucssopacityset
		})
	}),
	style: uumix(uustyle, {
		quick: uustylequick
	}),
	id: uuid,
	tag: uutag,
	query: uuquery,
	klass: uumix(uuklass, {
		has: uuklasshas,
		add: uuklassadd,
		sub: uuklasssub,
		toggle: uuklasstoggle
	}),
	color: uumix(uucolor, {
		add: uucoloradd,
		fix: uucolorfix,
		expire: uucolorexpire
	}),
	event: uumix(uuevent, {
		has: uueventhas,
		fire: uueventfire,
		stop: uueventstop,
		unbind: uueventunbind,
		attach: uueventattach,
		detach: uueventdetach
	}),
	node: uumix(uunode, {
		add: uunodeadd,
		has: uunodehas,
		root:       doc.documentElement || doc.html,
		bulk: uunodebulk,
		swap: uunodeswap,
		wrap: uunodewrap,
		clear: uunodeclear,
		clone: uunodebulk,
		remove: uunoderemove,
		fromPoint: uunodefrompoint
	}),
	nodeid: uumix(uunodeid, {
		toNode: uunodeidtonode,
		remove: uunodeidremove
	}),
	fix: uufix,
	trim: uumix(uutrim, {
		tag: uutrimtag,
		url: uutrimurl,
		inner: uutriminner,
		quote: uutrimquote,
		bracket: uutrimbracket
	}),
	split: uumix(uusplit, {
		comma: uusplitcomma,
		toHash: uusplittohash
	}),
	format: uuformat,
	json: uumix(uujson, {
		decode: uujsondecode
	}),
	date: uumix(uudate, {
		toISOString: uudatetoiso,
		toRFCString: uudatetorfc
	}),
	puff: uupuff,
	trace: uumix(uutrace, {
		clear: uutraceclear
	}),
	ready: uumix(uuready, {
		gone: {
			dom: 0,
			win: 0,
			audio: 0,
			video: 0,
			canvas: 0,
			storage: 0,
			blackout: 0
		}
	}),
	lazy: uumix(uulazy, {
		fire: uulazyfire
	}),
	js: uujs,
	win: {
		size: uuwinsize
	},
	nop:            function() {},
	dmz: {},
	guid: uuguid
});
Array.isArray || (Array.isArray = uuisarray);
uumix(Array.prototype, {
	map:            arraymap,
	some:           arraysome,
	every:          arrayevery,
	filter:         arrayfilter,
	forEach:        arrayforeach,
	indexOf:        arrayindexof,
	lastIndexOf:    arraylastindexof// lastIndexOf(search:Mix, fromIndex:Number = this.length):Number
}, 0, 0);
uumix(Array.prototype, {
	reduce:         arrayreduce,
	reduceRight:    arrayreduceright// reduceRight(evaluator:Function, initialValue:Mix = undefined):Mix
}, 0, 0);
uumix(Boolean.prototype, {
	toJSON:         numbertojson
}, 0, 0);
uumix(Date.prototype, {
	toISOString:    datetoisostring,// toISOString():String
	toJSON:         datetoisostring
}, 0, 0);
uumix(Number.prototype, {
	toJSON:         numbertojson
}, 0, 0);
uumix(String.prototype, {
	trim:           stringtrim,
	toJSON:         stringtojson
}, 0, 0);
uu.ver.gecko && win.HTMLElement && !win.HTMLElement.prototype.innerText &&
(function(proto) {
	proto.__defineGetter__("innerText", innertextgetter);
	proto.__defineSetter__("innerText", innertextsetter);
	proto.__defineGetter__("outerHTML", outerhtmlgetter);
	proto.__defineSetter__("outerHTML", outerhtmlsetter);
})(win.HTMLElement.prototype);
uu.ie       = uu.ver.ie;
uu.opera    = uu.ver.opera;
uu.gecko    = uu.ver.gecko;
uu.webkit   = uu.ver.webkit;
uu.config   = uuarg(win.xconfig, {
	aria: 0,
	debug: 0,
	right: 0,
	altcss: 0,
	visited: 0,
	baseDir: uutag("script").pop().src.replace(/[^\/]+$/, "")
});
doc.html || (doc.html = uutag("html")[0]);
doc.head || (doc.head = uutag("head")[0]);
win.xver && win.xver(uu.ver);
function uujamfactory(expression, context) {
	return new uu.jam(expression, context);
}
function uuplugin() {
	return uukeys(uuplugin);
}
function uurequire(url) {
	try {
		var xhr = win.ActiveXObject  ? new ActiveXObject("Microsoft.XMLHTTP") :
				 win.XMLHttpRequest ? new XMLHttpRequest() : 0;
		xhr.open("GET", url, false);
		xhr.send(null);
		if (!xhr.status || (xhr.status >= 200 && xhr.status < 300)) {
			return true;
		}
	} catch (err) {}
	return false;
}
function uulike(lhs, rhs) {
	var type1 = uutype(lhs);
	if (type1 !== uutype(rhs)) {
		return false;
	}
	switch (type1) {
	case 0x080:   return false;
	case 0x008:       return uudatetoiso(uudate(lhs)) ===
								 uudatetoiso(uudate(rhs));
	case 0x001:       return (uusize(lhs) === uusize(rhs) && uuhas(lhs, rhs));
	case 0x004:
	case 0x400:      return uuarray(lhs) + "" == uuarray(rhs);
	}
	return lhs === rhs;
}
function uutype(search, match) {
	var rv = uutype._TYPEOF[typeof search] ||
			 uutype._TYPEOF[Object.prototype.toString.call(search)] ||
			 (!search ? 0x010 : search.nodeType ? 0x002 :
			 "length" in search ? 0x004 : 0x001);
	return match ? !!(match & rv) : rv;
}
uutype._TYPEOF = {
	"undefined":        0x020,
	"[object Boolean]": 0x040,     "boolean":   0x040,
	"[object Number]":  0x100,      "number":    0x100,
	"[object String]":  0x200,      "string":    0x200,
	"[object Function]":0x080,    "function":  0x080,
	"[object RegExp]":  0x800,
	"[object Array]":   0x400,
	"[object Date]":    0x008,
	"[object CSSStyleDeclaration]":         0x1000,
	"[object ComputedCSSStyleDeclaration]": 0x1000
};
function uuisnumber(search) {
	return typeof search === "number";
}
function uuisstring(search) {
	return typeof search === "string";
}
function uuisarray(search) {
	return Object.prototype.toString.call(search) === "[object Array]";
}
function uuisdate(search) {
	return Object.prototype.toString.call(search) === "[object Date]";
}
function uuisfunction(search) {
	return Object.prototype.toString.call(search) === "[object Function]";
}
function uuarg(arg1, arg2, arg3) {
	return uumix(uumix({}, arg1 || {}), arg2, arg3, 0);
}
function uumix(base, flavor, aroma, override) {
	var i;
	if (override === void 0 || override) {
		for (i in flavor) {
			base[i] = flavor[i];
		}
	} else {
		for (i in flavor) {
			i in base || (base[i] = flavor[i]);
		}
	}
	return aroma ? uumix(base, aroma, 0, override) : base;
}
function uueach(source, callback) {
	if (Array.isArray(source)) {
		source.forEach(callback);
	} else {
		for (var i in source) {
			callback(source[i], i);
		}
	}
}
function uukeys(source, _enumValues) {
	var rv = [], ri = -1, i, iz;
	if (Array.isArray(source)) {
		for (i = 0, iz = source.length; i < iz; ++i) {
			i in source && (rv[++ri] = _enumValues ? source[i] : i);
		}
	} else {
		if (!_enumValues && Object.keys) {
			return Object.keys(source);
		}
		for (i in source) {
			if (source.hasOwnProperty(i)) {
				rv[++ri] = _enumValues ? source[i] : i;
			}
		}
	}
	return rv;
}
function uuvalues(source) {
	return uukeys(source, true);
}
function uuhash(key, value) {
	if (arguments.length === 1) {
		return key;
	}
	var rv = {};
	rv[key] = value;
	return rv;
}
_makeMapping("0123456789",       uuhash._dd2num = {}, uuhash._num2dd = {});
_makeMapping("0123456789abcdef", uuhash._hh2num = {}, uuhash._num2hh = {});
function uuarray(source) {
	var type = uutype(source), rv, i, iz;
	if (type === 0x004) {
		for (rv = [], i = 0, iz = source.length; i < iz; ++i) {
			rv[i] = source[i];
		}
		return rv;
	}
	return (type === 0x400) ? source : [source];
}
function uuhas(source, search) {
	if (source && search) {
		var i, iz;
		if (Array.isArray(source)) {
			search = uuarray(search);
			for (i = 0, iz = search.length; i < iz; ++i) {
				if (i in search && source.indexOf(search[i]) < 0) {
					return false;
				}
			}
			return true;
		}
		for (i in search) {
			if (!(i in source)) {
				return false;
			}
			if (source[i] !== search[i]
				&& _jsoninspect(source[i]) !== _jsoninspect(search[i])) {
				return false;
			}
		}
		return true;
	}
	return false;
}
function uunth(source, nth) {
	var i, j = 0;
	if (Array.isArray(source)) {
		if (nth in source) {
			return [nth, source[nth]];
		}
	} else {
		for (i in source) {
			if (j++ === nth) {
				return [i, source[i]];
			}
		}
	}
	return [,];
}
function uusize(source) {
	return Array.isArray(source) ? source.length : uukeys(source).length;
}
function uuclone(source) {
	return Array.isArray(source) ? source.concat() : uumix({}, source);
}
function uuindexof(source, search) {
	for (var i in source) {
		if (source.hasOwnProperty(i) && source[i] === search) {
			return i;
		}
	}
	return void 0;
}
function uusort(source, method) {
	function _numericsort(a, b) {
		return a - b;
	}
	if (Array.isArray(source)) {
		switch (method || "0-9") {
		case "0-9": source.sort(_numericsort); break;
		case "9-0": source.sort(_numericsort).reverse(); break;
		case "A-Z": source.sort(); break;
		case "Z-A": source.sort().reverse(); break;
		default:    source.sort(method);
		}
	}
	return source;
}
function uuclean(source) {
	if (Array.isArray(source)) {
		var rv = [], i = 0, iz = source.length;
		for (; i < iz; ++i) {
			if (i in source) {
				if (source[i] != null) {
					rv.push(source[i]);
				}
			}
		}
		return rv;
	}
	return source;
}
function uuunique(source, literalOnly) {
	literalOnly = literalOnly ? true : false;
	if (Array.isArray(source)) {
		var rv = [], ri = -1, v, i = 0, j, iz = source.length,
			found,
			unique = {};
		for (; i < iz; ++i) {
			v = source[i];
			if (v != null) {
				if (literalOnly) {
					unique[v] || (unique[v] = 1, rv[++ri] = v);
				} else {
					for (found = 0, j = i - 1; !found && j >= 0; --j) {
						found = (v === source[j]);
					}
					!found && (rv[++ri] = v);
				}
			}
		}
		return rv;
	}
	return source;
}
function uutohash(key, value, toNumber) {
	var rv = {}, i = 0, iz = key.length, val;
	if (Array.isArray(value)) {
		for (; i < iz; ++i) {
			rv[key[i]] = toNumber ? +(value[i]) : value[i];
		}
	} else {
		val = toNumber ? +(value) : value;
		for (; i < iz; ++i) {
			rv[key[i]] = val;
		}
	}
	return rv;
}
function uuattr(node, key, value) {
	return (value === void 0 && uuisstring(key) ? uuattrget
												: uuattrset)(node, key, value);
}
uuattr._HASH = uusplittohash(
	uu.ver.ie67 ? "for,htmlFor,className,class"
				: ("class,className,for,htmlFor,colspan,colSpan," +
				 "accesskey,accessKey,rowspan,rowSpan,tabindex,tabIndex")
);
function uuattrget(node, attrs) {
	var rv = {}, ary = attrs.split(","), v, w, i = 0, iz = ary.length,
		HASH = uuattr._HASH;
	for (; i < iz; ++i) {
		v = ary[i];
		w = HASH[v] || v;
		if (uu.ie) {
			if (uu.ver.ie89 || v === "href" || v === "src") {
				rv[v] = node.getAttribute(v, 2) || "";
			} else {
				rv[v] = node[w] || "";
			}
		} else {
			rv[v] = node.getAttribute(w) || "";
		}
	}
	return (ary.length === 1) ? rv[ary[0]] : rv;
}
function uuattrset(node, key, value) {
	var hash, i, HASH = uuattr._HASH;
	uuisstring(key) ? (hash = {}, hash[key] = value) : (hash = key);
	for (i in hash) {
		node.setAttribute(HASH[i] || i, hash[i]);
	}
	return node;
}
function uuattrgetall(node, filter) {
	filter = filter ? true : false;
	var rv = {}, ary = node.attributes, v, w, i = -1;
	while ( (v = ary[++i]) ) {
		w = v.name;
		if (!filter) {
			rv[w] = v.value;
		} else if (v.specified && w !== "style" && w.indexOf("uu")) {
			rv[w] = v.value;
		}
	}
	return rv;
}
function uucss(node, key, value) {
	return (value === void 0 && uuisstring(key) ? uucssget
												: uucssset)(node, key, value);
}
function uucssget(node, styles) {
	var rv = {}, ary = styles.split(","), v, i = -1,
		ns = uustyle(node), fixdb = uufix._db;
	while ( (v = ary[++i]) ) {
		rv[v] = ns[fixdb[v] || v] || "";
	}
	return (ary.length === 1) ? rv[ary[0]] : rv;
}
function uucssset(node, key, value) {
	var hash = uuhash(key, value),
		ns = node.style, p, v, i, n,
		fixdb = uufix._db, hook = uucssset._hook;
	for (i in hash) {
		v = hash[i];
		p = fixdb[i] || i;
		if (typeof v === "string") {
			ns[p] = v;
		} else {
			n = hook[p];
			if (n === 2) {
				uucssopacityset(node, v);
			} else {
				ns[p] = n ? v : (v + "px");
			}
		}
	}
	return node;
}
uucssset._hook = { opacity: 2, lineHeight: 1, fontWeight: 1,
				 fontSizeAdjust: 1, zIndex: 1, zoom: 1 };
function uucssopacity(node, opacity, isRelativeValue) {
	return (opacity === void 0 ? uucssopacityget
							 : uucssopacityset)(node, opacity, isRelativeValue);
}
function uucssopacityget(node) {
	if (uu.ie) {
		var v = node.uucssopacity;
		return v === void 0 ? 1 : (v - 1);
	}
	return parseFloat(node.style.opacity ||
					 win.getComputedStyle(node, null).opacity);
}
function uucssopacityset(node, opacity, isRelativeValue) {
	var ns;
	if (uu.ver.ie678) {
		ns = node.style;
		if (node.uucssopacity === void 0) {
			if (uu.ver.ie67) {
				if ((node.currentStyle || {}).width === "auto") {
					ns.zoom = 1;
				}
			}
		}
	}
	isRelativeValue && (opacity += uucssopacityget(node));
	opacity = (opacity > 0.999) ? 1
			: (opacity < 0.001) ? 0 : opacity;
	node.style.opacity = opacity;
	if (uu.ver.ie678) {
		node.uucssopacity = opacity + 1;
		ns.visibility = opacity ? "" : "hidden";
		ns.filter = ((opacity > 0 && opacity < 1)
				 ? "alpha(opacity=" + (opacity * 100) + ") " : "")
				 + ns.filter.replace(uucssopacityset._alpha, "");
	}
	return node;
}
uucssopacityset._alpha = /^alpha\([^\x29]+\) ?/;
function uustyle(node, mode) {
	if (uu.ver.ie678) {
		if (mode === 4) {
			return node.currentStyle;
		}
		if (!node.currentStyle) {
			return {};
		}
		var rv = {},
			ns = node.style,
			cs = node.currentStyle,
			rs = node.runtimeStyle,
			box = uustyle._HASH.box, UNITS = uustyle._UNITS,
			RECTANGLE = uustyle._RECTANGLE,
			em, rect, ut, v, w, x, i = -1, j = -1, m1, m2,
			ary = !mode ? uustyle._HASH.full
						: (mode === 1) ? uustyle._HASH.more
									 : 0,
			stock = { "0px": "0px", "1px": "1px", "2px": "2px", "5px": "5px",
					 thin: "1px", medium: "3px", thick: uustyle._THICK_FIX };
		if (ary) {
			while ( (w = ary[++j]) ) {
				rv[w] = cs[w];
			}
		}
		em = parseFloat(cs.fontSize) *
					(uustyle._UNIT_PT.test(cs.fontSize) ? 4 / 3 : 1);
		rect = node.getBoundingClientRect();
		while ( (w = box[++i]) ) {
			v = cs[w];
			if (!(v in stock)) {
				x = v;
				switch (ut = UNITS[v.slice(-1)]) {
				case 1: x = parseFloat(v) * em; break;
				case 2: x = parseFloat(v) * 4 / 3; break;
				case 3: m1 = ns.left, m2 = rs.left;
						rs.left = cs.left, ns.left = v;
						x = ns.pixelLeft, ns.left = m1, rs.left = m2;
				}
				stock[v] = ut ? x + "px" : x;
			}
			rv[w] = stock[v];
		}
		for (w in RECTANGLE) {
			v = cs[w];
			switch (ut = UNITS[v.slice(-1)]) {
			case 1: v = parseFloat(v) * em; break;
			case 2: v = parseFloat(v) * 4 / 3; break;
			case 3:
				switch (RECTANGLE[w]) {
				case 1: v = node.offsetTop; break;
				case 2: v = node.offsetLeft; break;
				case 3: v = (node.offsetWidth  || rect.right - rect.left)
						 - parseInt(rv.borderLeftWidth)
						 - parseInt(rv.borderRightWidth)
						 - parseInt(rv.paddingLeft)
						 - parseInt(rv.paddingRight);
						v = v > 0 ? v : 0;
						break;
				case 4: v = (node.offsetHeight || rect.bottom - rect.top)
						 - parseInt(rv.borderTopWidth)
						 - parseInt(rv.borderBottomWidth)
						 - parseInt(rv.paddingTop)
						 - parseInt(rv.paddingBottom);
						v = v > 0 ? v : 0;
				}
			}
			rv[w] = ut ? v + "px" : v;
		}
		rv.fontSize = em + "px";
		rv.cssFloat = cs.styleFloat;
		return rv;
	}
	return win.getComputedStyle(node, null);
}
uustyle._HASH = uu.ver.ie678 ? _builduustylehash() : {};
uustyle._UNITS = { m: 1, t: 2, "%": 3, o: 3 };
uustyle._UNIT_PT = /pt$/;
uustyle._THICK_FIX = uu.ver.ie89 ? "5px" : "6px";
uustyle._RECTANGLE = { top: 1, left: 2, width: 3, height: 4 };
function uustylequick(node) {
	return uustyle(node, 4);
}
function _builduustylehash() {
	var rv = { full: [], more: [], box: [] },
		ary = [" "], i, w, trim = /^\s+|\s+$/g,
		cs = doc.html.currentStyle;
	for (i in cs) {
		ary.push(i);
	}
	ary.sort();
	w = ary.join(" ").replace(/ (?:accelerator|behavior|hasLayout|zoom)/g, "");
	rv.full = w.replace(trim, "").split(" ");
	rv.more = w.replace(/ (?:lay\w+|rub\w+|text\w+|pageB\w+|ms\w+|scr\w+)/g, "").
		replace(/ (?:blockDirection|orphans|quotes|widows|filter|styleFloat)/g, "").
		replace(/ (?:imeMode|writingMode|unicodeBidi|emptyCells|tableLayout)/g, "").
		replace(/ (?:border(?:Color|Style|Width)|margin|padding|outline) /g, " ").
		replace(/ (border\w+Width|margin\w+|padding\w+)/g, function(_, m) {
		 return rv.box.push(m), _;
		}).replace(trim, "").concat(" textAlign textOverflow textIndent").
		split(" ").sort();
	return rv;
}
function uuklasshas(node, classNames) {
	var m, ary, cn = node.className;
	if (!classNames || !cn) {
		return false;
	}
	if (classNames.indexOf(" ") < 0) {
		return (" " + cn + " ").indexOf(" " + classNames + " ") >= 0;
	}
	ary = uusplit(classNames);
	m = cn.match(_classNameMatcher(ary));
	return m && m.length >= ary.length;
}
function uuklassadd(node, classNames) {
	node.className += " " + classNames;
	return node;
}
function uuklasssub(node, classNames) {
	node.className = uutriminner(
			node.className.replace(_classNameMatcher(uusplit(classNames)), ""));
	return node;
}
function uuklasstoggle(node, classNames) {
	(uuklasshas(node, classNames) ? uuklasssub : uuklassadd)(node, classNames);
	return node;
}
function uucolor(source) {
	var v, m, n, r, g, b, a = 1, add = 0, rgb = 0,
		rv = uucolor._db[source] || uucolor._cache[source] ||
			 uucolor._db[++add, v = source.toLowerCase()];
	if (!rv) {
		switch ({ "#": 1, r: 2, h: 3 }[v.charAt(0)]) {
		case 1:
			if (!uucolor._HEX_FORMAT.test(v)) {
				return 0;
			}
			m = v.split("");
			switch (m.length) {
			case 4: n = parseInt(m[1]+m[1] + m[2]+m[2] + m[3]+m[3], 16); break;
			case 7: n = parseInt(v.slice(1), 16); break;
			case 9: n = parseInt(v.slice(3), 16);
					a = ((parseInt(v.slice(1, 3), 16) / 2.55) | 0) / 100;
			}
			n !== void 0 &&
				(rv = { r: n >> 16, g: (n >> 8) & 255,
						b: n & 255, a: a, num: n });
			break;
		case 2:
			++rgb;
		case 3:
			m = (rgb ? uucolor._RGBA_FORMAT
					 : uucolor._HSLA_FORMAT).exec(
						v.indexOf("%") < 0 ? v
										 : v.replace(uucolor._PERCENT,
													 rgb ? _percent255
														 : _percent100));
			if (m) {
				r = m[1] | 0, g = m[2] | 0, b = m[3] | 0;
				a = m[4] ? parseFloat(m[4]) : 1;
				rv = rgb ? { r: r > 255 ? 255 : r,
							 g: g > 255 ? 255 : g,
							 b: b > 255 ? 255 : b, a: a }
						 : uu.color.hsla2rgba({
							 h: r > 360 ? 360 : r,
							 s: g > 100 ? 100 : g,
							 l: b > 100 ? 100 : b, a: a });
			}
		}
	}
	add && rv && (uucolor._cache[source] = uucolorfix(rv));
	return rv || 0;
}
uucolor._db = {
	transparent: { r: 0, g: 0, b: 0, a: 0, argb: "#00000000", num: 0,
				 hex: "#000000", rgba: "rgba(0,0,0,0)" }
};
uucolor._cache = {};
uucolor._HEX_FORMAT = /^#(?:[\da-f]{3,8})$/;
uucolor._HSLA_FORMAT = /^hsla?\(\s*([\d\.]+)\s*,\s*([\d\.]+)\s*,\s*([\d\.]+)\s*(?:,\s*([\d\.]+))?\s*\)/;
uucolor._RGBA_FORMAT = /^rgba?\(\s*([\d\.]+)\s*,\s*([\d\.]+)\s*,\s*([\d\.]+)\s*(?:,\s*([\d\.]+))?\s*\)/;
uucolor._PERCENT = /([\d\.]+)%/g;
function _percent255(_, n) {
	return (n * 2.555) & 255;
}
function _percent100(_, n) {
	n = n | 0;
	return n > 100 ? 100 : n;
}
function uucoloradd(source) {
	var ary = source.split(","), i = -1, v, w, n, r, g, b;
	while ( (v = ary[++i]) ) {
		w = v.slice(0, 6);
		n = parseInt(w, 16);
		r = n >> 16;
		g = (n >> 8) & 0xff;
		b = n & 0xff;
		uucolor._db[v.slice(6)] = {
			hex: "#" + w,
			num: n,
			r: r,
			g: g,
			b: b,
			a: 1,
			argb: "#ff" + w,
			rgba: "rgba(" + r + "," + g + "," + b + ",1)"
		};
	}
}
function uucolorfix(c) {
	var num2hh = uuhash._num2hh;
	c.num  || (c.num  = (c.r << 16) + (c.g << 8) + c.b);
	c.hex  || (c.hex  = "#" + num2hh[c.r] + num2hh[c.g] + num2hh[c.b]);
	c.argb || (c.argb = "#" + num2hh[(c.a * 255) & 0xff] +
							 num2hh[c.r] + num2hh[c.g] + num2hh[c.b]);
	c.rgba || (c.rgba = "rgba(" + c.r + "," + c.g + "," +
								 c.b + "," + c.a + ")");
	return c;
}
function uucolorexpire() {
	uucolor._cache = {};
}
function uuevent(node, namespaceAndEventTypes, evaluator, detach) {
	function _uueventclosure(evt, fromCustomEvent) {
		evt = evt || win.event;
		if (!fromCustomEvent && !evt.code) {
			var src = evt.srcElement || evt.target,
				iebody;
			src = (uu.webkit && src.nodeType === 3) ? src.parentNode : src;
			evt.code = (EVENT_CODE[evt.type] || 0) & 255;
			evt.node = node;
			evt.src = src;
			if (uu.ie) {
				iebody = uu.quirks ? doc.body : uu.node.root;
				evt.px = evt.clientX + iebody.scrollLeft;
				evt.py = evt.clientY + iebody.scrollTop;
			} else {
				evt.px = evt.pageX;
				evt.py = evt.pageY;
			}
			evt.ox = evt.offsetX || evt.layerX || 0;
			evt.oy = evt.offsetY || evt.layerY || 0;
		}
		isInstance ? handler.call(evaluator, evt, node, src)
				 : evaluator(evt, node, src);
	}
	var types = node.uueventtypes || (node.uueventfn = {},
									 node.uueventtypes = ","),
		nstype = namespaceAndEventTypes.split(","), v, i = -1, m,
		type, capt, closure, handler,
		isInstance = false, EVENT_CODE = uuevent._CODE;
	if (detach) {
		closure = evaluator.uueventclosure || evaluator;
	} else {
		handler = uuisfunction(evaluator)
				? evaluator
				: (isInstance = true, evaluator.handleEvent);
		closure = evaluator.uueventclosure = _uueventclosure;
	}
	while ( (v = nstype[++i]) ) {
		m = uuevent._PARSE.exec(v);
		if (m) {
			type = m[2];
			capt = m[3];
			if (uu.ie) {
				if (capt && type === "mousemove") {
					uuevent(node, "losecapture", closure, detach);
				}
			}
			if (types.indexOf("," + v + ",") >= 0) {
				if (detach) {
					if (uu.ie) {
						if (type === "losecapture" && node.releaseCapture) {
							node.releaseCapture();
						}
					}
					node.uueventtypes =
							node.uueventtypes.replace("," + v + ",", ",");
					node.uueventfn[v] = void 0;
					uueventdetach(node, type, closure, capt);
				}
			} else if (!detach) {
				uu.ie && type === "losecapture"
					 && node.setCapture
					 && node.setCapture();
				node.uueventtypes += v + ",";
				node.uueventfn[v] = closure;
				uueventattach(node, type, closure, capt);
			}
		}
	}
	return node;
}
uuevent._PARSE = /^(?:(\w+)\.)?(\w+)(\+)?$/;
uuevent._LIST = ("mousedown,mouseup,mousemove,mousewheel,click,dblclick," +
	"keydown,keypress,keyup,change,submit,focus,blur,contextmenu").split(",");
uuevent._CODE = {
	mousedown: 1, mouseup: 2, mousemove: 3, mousewheel: 4, click: 5,
	dblclick: 6, keydown: 7, keypress: 8, keyup: 9, mouseenter: 10,
	mouseleave: 11, mouseover: 12, mouseout: 13, contextmenu: 14,
	focus: 15, blur: 16, resize: 17,
	losecapture: 0x102, DOMMouseScroll: 0x104
};
function uueventhas(node, namespaceAndEventTypes) {
	return (node.uueventtypes || "").indexOf("," + namespaceAndEventTypes + ",") >= 0;
}
function uueventfire(node, eventType, param) {
	if (uu.event.has(node, eventType)) {
		node.uueventfn[eventType].call(node, {
			stopPropagation: uu.nop,
			preventDefault: uu.nop,
			node:   node,
			name:   eventType,
			code: 0,
			src:    node,
			rel:    node,
			px: 0,
			py: 0,
			ox: 0,
			oy: 0,
			type:   eventType,
			param:  param
		}, true);
	}
	return node;
}
function uueventstop(eventObject) {
	uu.ie ? (eventObject.cancelBubble = true) : eventObject.stopPropagation();
	uu.ie ? (eventObject.returnValue = false) : eventObject.preventDefault();
	return eventObject;
}
function uueventunbind(node, namespaceAndEventTypes) {
	function _eachnamespace(w) {
		!w.indexOf(ns) && uuevent(node, w, node.uueventfn[w], true);
	}
	var types = node.uueventtypes, nstype, v, i = -1, ns;
	if (types && types.length > 1) {
		if (namespaceAndEventTypes) {
			nstype = uusplitcomma(namespaceAndEventTypes);
			while ( (v = nstype[++i]) ) {
				if (v.lastIndexOf(".*") > 1) {
					 ns = v.slice(0, -1);
					 uusplitcomma(types).forEach(_eachnamespace);
				} else {
					 (types.indexOf("," + v + ",") >= 0) &&
						 uuevent(node, v, node.uueventfn[v], true);
				}
			 }
		} else {
			nstype = uusplitcomma(types);
			while ( (v = nstype[++i]) ) {
				uuevent(node, v, node.uueventfn[v], true);
			}
		}
	}
	return node;
}
function uueventattach(node, eventType, evaluator, capture) {
	eventType = uueventattach._FIX[eventType] || eventType;
	if (node.addEventListener) {
		node.addEventListener(eventType, evaluator, !!(capture || 0));
	} else {
		node.attachEvent("on" + eventType, evaluator);
	}
}
uueventattach._FIX = uu.gecko ? { mousewheel: "DOMMouseScroll" } :
					 uu.opera ? { contextmenu: "mousedown" } : {};
function uueventdetach(node, eventType, evaluator, capture) {
	eventType = uueventattach._FIX[eventType] || eventType;
	if (node.removeEventListener) {
		node.removeEventListener(eventType, evaluator, !!(capture || 0));
	} else {
		node.detachEvent("on" + eventType, evaluator);
	}
}
function uuready(evaluator, order) {
	if (evaluator !== void 0 && !uuready.gone.blackout) {
		uuready.gone.dom ? evaluator(uu)
						 : uulazy("boot", evaluator, order || 0);
	}
}
function uunode(tagName) {
	return doc.createElement(tagName || "div");
}
function uunodeadd(source, context, position) {
	context = context || doc.body;
	var node = !source ? doc.createElement("div")
			 : source.nodeType ? source
			 : !source.indexOf("<") ? uunodebulk(source)
			 : doc.createElement(source),
		parentNode = context.parentNode,
		rv = (node.nodeType === 11) ? node.firstChild : node;
	switch (position || 6) {
	case 1: parentNode.insertBefore(node, parentNode.firstChild); break;
	case 2: parentNode.insertBefore(node, context); break;
	case 3: parentNode.insertBefore(node, context.nextSibling); break;
	case 4: parentNode.appendChild(node); break;
	case 5: context.insertBefore(node, context.firstChild); break;
	case 6: context.appendChild(node);
	}
	return rv;
}
function uunodeid(node) {
	if (!node.uuguid) {
		uunodeid._db[node.uuguid = ++uunodeid._num] = node;
	}
	return node.uuguid;
}
uunodeid._num = 0;
uunodeid._db = {};
function uunodeidtonode(nodeid) {
	return uunodeid._db[nodeid];
}
function uunodeidremove(node) {
	node.uuguid && (uunodeid._db[node.uuguid] = null, node.uuguid = null);
	return node;
}
function uunodehas(node, context) {
	for (var c = node; c && c !== context;) {
		c = c.parentNode;
	}
	return node !== context && c === context;
}
function uunodebulk(source) {
	var rv = doc.createDocumentFragment(),
		placeholder = uunode();
	placeholder.innerHTML = uuisstring(source) ? source
											 : source.outerHTML;
	while (placeholder.firstChild) {
		rv.appendChild(placeholder.removeChild(placeholder.firstChild));
	}
	return rv;
}
function uunodeswap(swapin, swapout) {
	return swapout.parentNode.replaceChild(swapin, swapout);
}
function uunodewrap(innerNode, outerNode) {
	return outerNode.appendChild(uunodeswap(outerNode, innerNode));
}
function uunodeclear(context) {
	var rv = uu.tag("*", context), v, i = -1;
	while ( (v = rv[++i]) ) {
		uunodeidremove(v);
		uueventunbind(v);
	}
	rv = [];
	while (context.firstChild) {
		context.removeChild(context.firstChild);
	}
	return context;
}
function uunoderemove(node) {
	if (node && node.parentNode) {
		uunodeidremove(node);
		return node.parentNode.removeChild(node);
	}
	return node;
}
function uunodefrompoint(x, y, context) {
	return (context || doc).elementFromPoint(x | 0, y | 0);
}
function uuquery(expression, context) {
	if (context && doc.querySelectorAll && context.nodeType
				&& !uuquery._NGWORD.test(expression)) {
		try {
			var rv = [],
				nodeList = (context || doc).querySelectorAll(expression),
				i = 0, iz = nodeList.length;
			for (; i < iz; ++i) {
				rv[i] = nodeList[i];
			}
			return rv;
		} catch(err) {}
	}
	return uuquery.selectorAll(expression, context || doc);
}
uuquery._NGWORD = /(:(a|b|co|dig|first-l|li|mom|ne|p|sc|t|v))|!=|\/=|<=|>=|&=|x7b/;
function uuid(expression, context) {
	return (context || doc).getElementById(expression);
}
function uutag(expression, context) {
	var nodeList = (context || doc).getElementsByTagName(expression),
		rv = [], ri = -1, v, i = 0, iz = nodeList.length;
	if (uu.ie && expression === "*") {
		for (; i < iz; ++i) {
			(v = nodeList[i]).nodeType === 1 && (rv[++ri] = v);
		}
	} else {
		for (; i < iz; ++i) {
			rv[i] = nodeList[i];
		}
	}
	return rv;
}
uutag.HTML4 = ("a,b,br,dd,div,dl,dt,h1,h2,h3,h4,h5,h6,i,img,iframe," +
			 "input,li,ol,option,p,pre,select,span,table,tbody,tr," +
			 "td,th,tfoot,textarea,u,ul").split(",");
uutag.HTML5 = ("abbr,article,aside,audio,bb,canvas,datagrid,datalist," +
			 "details,dialog,eventsource,figure,footer,header,hgroup," +
			 "mark,menu,meter,nav,output,progress,section,time,video").split(",");
function uuklass(expression, context) {
	context = context || doc;
	var rv = [], ri = -1, i = 0, iz, v,
		nodeList, match, cn, nz, rex, name;
	if (context.getElementsByClassName) {
		nodeList = context.getElementsByClassName(expression);
		for (iz = nodeList.length; i < iz; ++i) {
			rv[i] = nodeList[i];
		}
	} else {
		nodeList = context.getElementsByTagName("*");
		name = uusplit(expression);
		name.length > 1 && (name = uuunique(name, 1));
		rex = _classNameMatcher(name);
		for (nz = name.length, iz = nodeList.length; i < iz; ++i) {
			v = nodeList[i];
			cn = v.className;
			if (cn) {
				match = cn.match(rex);
				(match && match.length >= nz) && (rv[++ri] = v);
			}
		}
	}
	return rv;
}
function uufix(source) {
	return uufix._db[source] || source;
}
uufix._db = {};
function uutrim(source) {
	return source.replace(uutrim._TRIM, "");
}
uutrim._TAG     = /<\/?[^>]+>/g;
uutrim._TRIM    = /^\s+|\s+$/g;
uutrim._QUOTE   = /^\s*["']?|["']?\s*$/g;
uutrim._SPACES  = /\s\s+/g;
uutrim._BRACKET = /^\s*[\(\[\{<]?|[>\}\]\)]?\s*$/g;
function uutrimtag(source) {
	return source.replace(uutrim._TRIM, "").
				 replace(uutrim._TAG, "").
				 replace(uutrim._SPACES, " ");
}
function uutrimurl(source) {
	return (!source.indexOf("url(") && source.indexOf(")") === source.length - 1) ?
			source.slice(4, -1).replace(uutrim._QUOTE, "") : source;
}
function uutriminner(source) {
	return source.replace(uutrim._TRIM, "").replace(uutrim._SPACES, " ");
}
function uutrimquote(source) {
	return source.replace(uutrim._QUOTE, "");
}
function uutrimbracket(source) {
	return source.replace(uutrim._BRACKET, "");
}
function uusplit(source) {
	return source.replace(uutrim._SPACES, " ").
				 replace(uutrim._TRIM, "").split(" ");
}
uusplit._MANY_COMMAS           = /,,+/g;
uusplit._TRIM_SPACE_AND_COMMAS = /^[ ,]+|[ ,]+$/g;
function uusplitcomma(source) {
	return source.replace(uusplit._MANY_COMMAS, ",").
				 replace(uusplit._TRIM_SPACE_AND_COMMAS, "").split(",");
}
function uusplittohash(source, splitter, toNumber) {
	var rv = {}, ary = source.split(splitter || ","), i = 0, iz = ary.length,
		num = toNumber ? true : false;
	for (; i < iz; i += 2) {
		rv[ary[i]] = num ? +(ary[i + 1]) : ary[i + 1];
	}
	return rv;
}
function uuformat(format) {
	var i = 0, args = arguments;
	return format.replace(uuformat._PLACEHOLDER, function() {
		return args[++i];
	});
}
uuformat._PLACEHOLDER = /\?/g;
function uupuff(source) {
	alert(_jsoninspect(source));
}
function uutrace(titleOrSource, source) {
	var output = uuid("trace"), json, title = "";
	if (output) {
		if (source !== void 0) {
			title = titleOrSource;
			json = _jsoninspect(source);
		} else {
			json = _jsoninspect(titleOrSource);
		}
		if (output.tagName.toLowerCase() === "textarea") {
			output.value += title + json;
		} else {
			output.innerHTML += "<p>" + title + json + "</p>";
		}
	}
}
function uutraceclear() {
	var output = uuid("trace");
	if (output) {
		if (output.tagName.toLowerCase() === "textarea") {
			output.value = "";
		} else {
			output.innerHTML = "";
		}
	}
}
function uujson(source, useNativeJSON, callback) {
	return useNativeJSON && win.JSON ? win.JSON.stringify(source) || ""
									 : _jsoninspect(source, callback);
}
function uujsondecode(jsonString, useNativeJSON) {
	var str = uutrim(jsonString);
	if (useNativeJSON && win.JSON) {
		return win.JSON.parse(str);
	}
	return uujsondecode._NGWORD.test(str.replace(uujsondecode._UNESCAPE, ""))
				? false : uujs("return " + str + ";");
}
uujsondecode._NGWORD = /[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/;
uujsondecode._UNESCAPE = /"(\\.|[^"\\])*"/g;
function _str2json(str, addQuote) {
	function _swap(m) {
		return _str2json._SWAP[m];
	}
	function _ucs2(str, c) {
		c = str.charCodeAt(0);
		return "\\u" + uuhash._num2hh[(c >> 8) & 255] +
					 uuhash._num2hh[ c       & 255];
	}
	var rv = str.replace(_str2json._ESCAPE, _swap).
				 replace(_str2json._ENCODE, _ucs2);
	return addQuote ? '"' + rv + '"' : rv;
}
_str2json._SWAP = uusplittohash('",\\",\b,\\b,\f,\\f,\n,\\n,\r,\\r,\t,\\t,\\,\\\\');
_str2json._ESCAPE = /(?:\"|\\[bfnrt\\])/g;
_str2json._ENCODE = /[\x00-\x1F\u0080-\uFFEE]/g;
function _jsoninspect(mix, fn) {
	var ary, type = uutype(mix), w, ai = -1, i, iz;
	if (mix === win) {
		return '"window"';
	}
	switch (type) {
	case 0x1000:
	case 0x001:       ary = []; break;
	case 0x002:       return '"uuguid":' + uunodeid(mix);
	case 0x010:       return "null";
	case 0x020:  return "undefined";
	case 0x008:       return uudatetoiso(uudate(mix));
	case 0x040:
	case 0x080:
	case 0x100:     return mix.toString();
	case 0x200:     return _str2json(mix, 1);
	case 0x400:
	case 0x004:
		for (ary = [], i = 0, iz = mix.length; i < iz; ++i) {
			ary[++ai] = _jsoninspect(mix[i], fn);
		}
		return "[" + ary + "]";
	default:
		return fn ? (fn(mix) || "") : "";
	}
	if (type === 0x1000) {
		w = uu.webkit;
		for (i in mix) {
			if (typeof mix[i] === "string" && (w || i != (+i + ""))) {
				w && (i = mix.item(i));
				ary[++ai] = '"' + i + '":' + _str2json(mix[i], 1);
			}
		}
	} else {
		for (i in mix) {
			ary[++ai] = _str2json(i, 1) + ":" + _jsoninspect(mix[i], fn);
		}
	}
	return "{" + ary + "}";
}
function uudate(source) {
	return source === void 0  ? _date2hash(new Date())
		 : uuisdate(source)   ? _date2hash(source)
		 : uuisnumber(source) ? _date2hash(new Date(source))
		 : _date2hash(_str2date(source) || new Date(source));
}
function _date2hash(date) {
	return { Y:  date.getUTCFullYear(),     M:    date.getUTCMonth() + 1,
			 D:  date.getUTCDate(),         h:    date.getUTCHours(),
			 m:  date.getUTCMinutes(),      s:    date.getUTCSeconds(),
			 ms: date.getUTCMilliseconds(), time: date.getTime() };
}
function _str2date(str) {
	function _toDate(_, dayOfWeek, day, month) {
		return dayOfWeek + " " + month + " " + day;
	}
	var m = _str2date._PARSE.exec(str);
	if (m) {
		return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3],
								 +m[4], +m[5], +m[6], +m[7]));
	} else {
		if (uu.ie && str.indexOf("GMT") > 0) {
			str = str.replace(/GMT/, "UTC");
		}
		return new Date(str.replace(",", "").
							replace(_str2date._DATE, _toDate));
	}
	return 0;
}
_str2date._PARSE = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(?:\.(\d*))?Z$/;
_str2date._DATE = /^([\w]+) (\w+) (\w+)/;
function uudatetoiso(dateHash) {
	var v = dateHash === void 0 ? _date2hash(new Date()) : dateHash,
		padZero = (v.ms < 10) ? "00" : (v.ms < 100) ? "0" : "",
		dd = uuhash._num2dd;
	return uuformat("?-?-?T?:?:?.?Z", v.Y, dd[v.M], dd[v.D],
									 dd[v.h], dd[v.m], dd[v.s], padZero + v.ms);
}
function uudatetorfc(dateHash) {
	var rv;
	if (dateHash === void 0) {
		rv = (new Date()).toUTCString();
	} else {
		rv = (new Date(dateHash.time)).toUTCString();
	}
	if (uu.ie && rv.indexOf("UTC") > 0) {
		rv = rv.replace(/UTC/, "GMT");
		(rv.length < 29) && (rv = rv.replace(/, /, ", 0"));
	}
	return rv;
}
function uujs(javascriptExpression) {
	return (new Function(javascriptExpression))();
}
function uuwinsize() {
	if (uu.ie) {
		var iebody = uu.quirks ? doc.body : uu.node.root;
		return { innerWidth:  iebody.clientWidth,
				 innerHeight: iebody.clientHeight,
				 pageXOffset: iebody.scrollLeft,
				 pageYOffset: iebody.scrollTop };
	}
	return { innerWidth:  win.innerWidth,
			 innerHeight: win.innerHeight,
			 pageXOffset: win.pageXOffset,
			 pageYOffset: win.pageYOffset };
}
function uuguid() {
	return ++uuguid._num;
}
uuguid._num = 0;
function uulazy(id, evaluator, order) {
	uulazy._db[id] || (uulazy._db[id] = [[], [], []]);
	uulazy._db[id][order || 0].push(evaluator);
}
uulazy._db = {};
function uulazyfire(id) {
	if (uulazy._db[id]) {
		var fn, i = -1, db = uulazy._db[id],
			ary = db[2].concat(db[1], db[0]);
		uulazy._db[id] = null;
		while ( (fn = ary[++i]) ) {
			fn(uu);
		}
	}
}
function arrayindexof(search, fromIndex) {
	var iz = this.length, i = fromIndex || 0;
	i = (i < 0) ? i + iz : i;
	for (; i < iz; ++i) {
		if (i in this && this[i] === search) {
			return i;
		}
	}
	return -1;
}
function arraylastindexof(search, fromIndex) {
	var iz = this.length, i = fromIndex;
	i = (i < 0) ? i + iz + 1 : iz;
	while (--i >= 0) {
		if (i in this && this[i] === search) {
			return i;
		}
	}
	return -1;
}
function arrayevery(evaluator, that) {
	for (var i = 0, iz = this.length; i < iz; ++i) {
		if (i in this && !evaluator.call(that, this[i], i, this)) {
			return false;
		}
	}
	return true;
}
function arraysome(evaluator, that) {
	for (var i = 0, iz = this.length; i < iz; ++i) {
		if (i in this && evaluator.call(that, this[i], i, this)) {
			return true;
		}
	}
	return false;
}
function arrayforeach(evaluator, that) {
	var i = 0, iz = this.length;
	if (that) {
		for (; i < iz; ++i) {
			i in this && evaluator.call(that, this[i], i, this);
		}
	} else {
		for (; i < iz; ++i) {
			i in this && evaluator(this[i], i, this);
		}
	}
}
function arraymap(evaluator, that) {
	for (var iz = this.length, rv = Array(iz), i = 0; i < iz; ++i) {
		i in this && (rv[i] = evaluator.call(that, this[i], i, this));
	}
	return rv;
}
function arrayfilter(evaluator, that) {
	for (var rv = [], ri = -1, v, i = 0, iz = this.length; i < iz; ++i) {
		i in this && evaluator.call(that, v = this[i], i, this)
				 && (rv[++ri] = v);
	}
	return rv;
}
function arrayreduce(evaluator, initialValue) {
	var z, f = 0, rv = initialValue === z ? z : (++f, initialValue),
		i = 0, iz = this.length;
	for (; i < iz; ++i) {
		i in this && (rv = f ? evaluator(rv, this[i], i, this) : (++f, this[i]));
	}
	if (!f) {
		throw new Error(arrayreduce._MSG);
	}
	return rv;
}
arrayreduce._MSG = "reduce of empty array with no initial value";
function arrayreduceright(evaluator, initialValue) {
	var z, f = 0, rv = initialValue === z ? z : (++f, initialValue),
		i = this.length;
	while (--i >= 0) {
		i in this && (rv = f ? evaluator(rv, this[i], i, this) : (++f, this[i]));
	}
	if (!f) {
		throw new Error(arrayreduce._MSG);
	}
	return rv;
}
function datetoisostring() {
	return uudatetoiso(uudate(this));
}
function numbertojson() {
	return this.toString();
}
function stringtrim() {
	return this.replace(uutrim._TRIM, "");
}
function stringtojson() {
	return _str2json(this);
}
function innertextgetter() {
	return this.textContent;
}
function innertextsetter(text) {
	while (this.hasChildNodes()) {
		this.removeChild(this.lastChild);
	}
	this.appendChild(doc.createTextNode(text));
}
function outerhtmlgetter() {
	var rv, me = this, p = me.parentNode,
		r = doc.createRange(), div = doc.createElement("div");
	p || doc.body.appendChild(me);
	r.selectNode(me);
	div.appendChild(r.cloneContents());
	rv = div.innerHTML;
	p || me.parentNode.removeChild(me);
	return rv;
}
function outerhtmlsetter(html) {
	var r = doc.createRange();
	r.setStartBefore(this);
	this.parentNode.replaceChild(r.createContextualFragment(html), this);
}
uuevent._LIST.forEach(function(eventType) {
	uu[eventType] = function bindEvent(node, fn) {
		return uuevent(node, eventType, fn);
	};
	uu["un" + eventType] = function unbindEvent(node) {
		return uuevent(node, eventType, 0, true);
	};
});
try {
	uu.ver.ie6 && doc.execCommand("BackgroundImageCache", false, true);
} catch(err) {}
function _ready() {
	if (!uuready.gone.blackout && !uuready.gone.dom++) {
		uulazyfire("boot");
		uuisfunction(win.xboot || 0) && win.xboot(uu);
	}
}
function _winload() {
	uuready.gone.win = 1;
	_ready();
	uuisfunction(win.xwin || 0) && win.xwin(uu);
	uulazyfire("canvas");
	uulazyfire("audio");
	uulazyfire("video");
}
function _domreadyie() {
	try {
		doc.firstChild.doScroll("up"), _ready();
	} catch(err) { setTimeout(_domreadyie, 64); }
}
uueventattach(win, "load", _winload);
uu.ie ? _domreadyie() : uueventattach(doc, "DOMContentLoaded", _ready);
function _winunload() {
	var nodeid, node, ary, i, v;
	for (nodeid in uunodeid._db) {
		try {
			node = uunodeid._db[nodeid];
			ary = node.attributes, i = -1;
			while ( (v = ary[++i]) ) {
				!v.name.indexOf("uu") && (node[v.name] = null);
			}
		} catch (err) {}
	}
	doc.html = null;
	doc.head = null;
	win.detachEvent("onload", _winload);
	win.detachEvent("onunload", _winunload);
}
uu.ie && win.attachEvent("onunload", _winunload);
uuready(function() {
	var nodeList = doc.html.getElementsByTagName("*"), v, i = -1,
		styles = uusplittohash((uu.ie ? "float,styleFloat,cssFloat,styleFloat"
									 : "float,cssFloat,styleFloat,cssFloat") +
				",pos,position,w,width,h,height,x,left,y,top,o,opacity," +
				"bg,background,bgcolor,backgroundColor,bgimg,backgroundImage," +
				"bgrpt,backgroundRepeat,bgpos,backgroundPosition");
	uumix(_camelhash(uufix._db, uu.webkit ? uustyle(doc.html)
										 : doc.html.style),
					 styles, uuattr._HASH);
	uunodeid(doc.html);
	while ( (v = nodeList[++i]) ) {
		v.nodeType === 1 && uunodeid(v);
	}
}, 2);
function _camelhash(rv, props) {
	function _camelize(m, c) {
		return c.toUpperCase();
	}
	function _decamelize(m, c, C) {
		return c + "-" + C.toLowerCase();
	}
	var k, v, CAMELIZE = /-([a-z])/g, DECAMELIZE = /([a-z])([A-Z])/g;
	for (k in props) {
		if (typeof props[k] === "string") {
			if (uu.webkit) {
				v = k = props.item(k);
				k.indexOf("-") >= 0 && (v = k.replace(CAMELIZE, _camelize));
				(k !== v) && (rv[k] = v);
			} else {
				v = ((uu.gecko && !k.indexOf("Moz")) ? "-moz" + k.slice(3) :
					 (uu.ie    && !k.indexOf("ms"))  ? "-ms"  + k.slice(2) :
					 (uu.opera && !k.indexOf("O"))   ? "-o"   + k.slice(1) : k).
					replace(DECAMELIZE, _decamelize);
				(k !== v) && (rv[v] = k);
			}
		}
	}
	return rv;
}
function _classNameMatcher(ary) {
	return RegExp("(?:^| )(" + ary.join("|") + ")(?:$|(?= ))", "g");
}
function _makeMapping(seed, s2n, n2s) {
	var i = 0, j, k = -1, v, ary = seed.split(""), iz = ary.length;
	for (; i < iz; ++i) {
		for (j = 0; j < iz; ++j) {
			v = ary[i] + ary[j];
			s2n[v] = ++k;
			n2s[k] = v;
		}
	}
}
function _version(libraryVersion) {
	function detectRenderingEngineVersion(userAgent) {
		var ver = ((/(?:rv\:|ari\/|sto\/)(\d+\.\d+(\.\d+)?)/.exec(userAgent)
						|| [,0])[1]).toString()
		return parseFloat(ver.replace(/[^\d\.]/g, "").
							 replace(/^(\d+\.\d+)(\.(\d+))?$/,"$1$3"));
	}
	function detectUserAgentVersion(userAgent) {
		var opera = window.opera || false;
		return opera ? +(opera.version().replace(/\d$/, ""))
					 : parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.
								 exec(userAgent) || [,0])[1]);
	}
	function detectFlashVersion(ie) {
		var rv = 0, obj, ver, m;
		try {
			obj = ie ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
					 : navigator.plugins["Shockwave Flash"];
			ver = ie ? obj.GetVariable("$version").replace(/,/g, ".")
					 : obj.description;
			m = /\d+\.\d+/.exec(ver);
			rv = m ? parseFloat(m[0]) : 0;
		} catch(err) {}
		return rv < 7 ? 0 : rv;
	}
	function detectSilverlightVersion(ie) {
		var rv = 0, obj, check = 3;
		try {
			if (ie) {
				obj = new ActiveXObject("AgControl.AgControl");
				while (obj.IsVersionSupported(check + ".0")) {
					rv = check++;
				}
			} else {
				obj = navigator.plugins["Silverlight Plug-In"];
				rv = parseInt(/\d+\.\d+/.exec(obj.description)[0]);
			}
		} catch(err) {}
		return rv < 3 ? 0 : rv;
	}
	var rv = { library: libraryVersion },
		ie = !!doc.uniqueID, userAgent = navigator.userAgent;
	rv.render       = detectRenderingEngineVersion(userAgent);
	rv.browser      = detectUserAgentVersion(userAgent);
	rv.flash        = detectFlashVersion(ie);
	rv.silverlight  = detectSilverlightVersion(ie);
	rv.ie           = ie;
	rv.ie6          = ie && rv.browser === 6;
	rv.ie7          = ie && rv.browser === 7;
	rv.ie8          = ie && (doc.documentMode || 0) === 8;
	rv.ie9          = ie && (doc.documentMode || 0) === 9;
	rv.ie67         = rv.ie6 || rv.ie7;
	rv.ie678        = rv.ie6 || rv.ie7 || rv.ie8;
	rv.ie89         = rv.ie8 || rv.ie9;
	rv.opera        = !!(window.opera || false);
	rv.gecko        = userAgent.indexOf("Gecko/") > 0;
	rv.webkit       = userAgent.indexOf("WebKit") > 0;
	rv.chrome       = userAgent.indexOf("Chrome") > 0;
	rv.safari       = !rv.chrome && userAgent.indexOf("Safari") > 0;
	rv.iphone       = rv.webkit && /iPad|iPod|iPhone/.test(userAgent);
	rv.quirks       = (doc.compatMode || "") !== "CSS1Compat";
	rv.xml          = uunode("div").tagName === uunode("DIV").tagName;
	rv.win          = userAgent.indexOf("Win") > 0;
	rv.mac          = userAgent.indexOf("Mac") > 0;
	rv.unix         = /X11|Linux/.test(userAgent);
	rv.as3          = rv.flash >= 9;
	rv.advanced     = (ie        && rv.browser >= 9)   ||
					 (rv.gecko  && rv.render  >  1.9) ||
					 (rv.webkit && rv.render  >= 528) ||
					 (rv.opera  && rv.browser >= 10.5);
	rv.major        = (ie        && rv.browser >= 6)   ||
					 (rv.opera  && rv.browser >= 9.5) ||
					 (rv.gecko  && rv.render  >= 1.9) ||
					 (rv.webkit && rv.render  >  524);
	rv.jit          = rv.advanced;
	return rv;
}
})(window, document);

uu.codec || (function(uu) {
uu.codec = {};
uu.codec.entity = {
	encode: entityencode,
	decode: entitydecode
};
function entityencode(str) {
	return str.replace(entityencode._TO_ENTITY, _entity);
}
entityencode._TO_ENTITY = /[&<>"]/g;
function entitydecode(str) {
	return str.replace(entitydecode._FROM_ENTITY, _entity);
}
entitydecode._FROM_ENTITY = /&(?:amp|lt|gt|quot);/g;
function _entity(code) {
	return _entity._HASH[code];
}
_entity._HASH =
	uu.split.toHash('&,&amp;,<,&lt;,>,&gt;,",&quot;,&amp;,&,&lt;,<,&gt;,>,&quot;,"');
})(uu);

uu.color.gray || (function(win, doc, uu) {
var _round = Math.round;
uu.mix(uu.color, {
	gray: uucolorgray,
	sepia: uucolorsepia,
	comple: uucolorcomple,
	arrange: uucolorarrange,
	rgba2hsva: uucolorrgba2hsva,
	hsva2rgba: uucolorhsva2rgba,
	rgba2hsla: uucolorrgba2hsla,
	hsla2rgba: uucolorhsla2rgba
});
uu.color.convertRGBAToHSVA = uucolorrgba2hsva;
uu.color.convertHSVAToRGBA = uucolorhsva2rgba;
uu.color.convertRGBAToHSLA = uucolorrgba2hsla;
uu.color.convertHSLAToRGBA = uucolorhsla2rgba;
function uucolorgray(c) {
	return uu.color.fix({ r: c.g, g: c.g, b: c.g, a: c.a });
}
function uucolorsepia(c) {
	var r = c.r, g = c.g, b = c.b,
		y = 0.2990 * r + 0.5870 * g + 0.1140 * b,
		u = -0.091,
		v = 0.056;
	r = y + 1.4026 * v;
	g = y - 0.3444 * u - 0.7114 * v;
	b = y + 1.7330 * u;
	r *= 1.2;
	b *= 0.8;
	return uu.color.fix({ r: r < 0 ? 0 : r > 255 ? 255 : r | 0,
						 g: g < 0 ? 0 : g > 255 ? 255 : g | 0,
						 b: b < 0 ? 0 : b > 255 ? 255 : b | 0, a: c.a });
}
function uucolorcomple(c) {
	return uu.color.fix({ r: c.r ^ 255, g: c.g ^ 255, b: c.b ^ 255, a: c.a });
}
function uucolorarrange(c, h, s, v) {
	var rv = uucolorrgba2hsva(c), r = 360;
	rv.h += h, rv.h = (rv.h > r) ? rv.h - r : (rv.h < 0) ? rv.h + r : rv.h;
	rv.s += s, rv.s = (rv.s > 100) ? 100 : (rv.s < 0) ? 0 : rv.s;
	rv.v += v, rv.v = (rv.v > 100) ? 100 : (rv.v < 0) ? 0 : rv.v;
	return uu.color.fix(uucolorhsva2rgba(rv));
}
function uucolorrgba2hsva(c) {
	var r = c.r / 255, g = c.g / 255, b = c.b / 255,
		max = Math.max(r, g, b),
		diff = max - Math.min(r, g, b),
		h = 0,
		s = max ? _round(diff / max * 100) : 0,
		v = _round(max * 100);
	if (!s) {
		return { h: 0, s: 0, v: v, a: c.a };
	}
	h = (r === max) ? ((g - b) * 60 / diff) :
		(g === max) ? ((b - r) * 60 / diff + 120)
					: ((r - g) * 60 / diff + 240);
	return { h: (h < 0) ? h + 360 : h, s: s, v: v, a: c.a };
}
function uucolorhsva2rgba(hsva) {
	var rv,
		h = (hsva.h >= 360) ? 0 : hsva.h,
		s = hsva.s / 100,
		v = hsva.v / 100,
		a = hsva.a,
		h60 = h / 60, matrix = h60 | 0, f = h60 - matrix,
		v255, p, q, t, w,
		round = _round;
	if (!s) {
		h = round(v * 255);
		return { r: h, g: h, b: h, a: a };
	}
	v255 = v * 255,
	p = round((1 - s) * v255),
	q = round((1 - (s * f)) * v255),
	t = round((1 - (s * (1 - f))) * v255),
	w = round(v255);
	switch (matrix) {
	case 0:  rv = { r: w, g: t, b: p }; break;
	case 1:  rv = { r: q, g: w, b: p }; break;
	case 2:  rv = { r: p, g: w, b: t }; break;
	case 3:  rv = { r: p, g: q, b: w }; break;
	case 4:  rv = { r: t, g: p, b: w }; break;
	case 5:  rv = { r: w, g: p, b: q }; break;
	default: rv = { r: 0, g: 0, b: 0 };
	}
	rv.a = a;
	return rv;
}
function uucolorrgba2hsla(c) {
	var r = c.r / 255,
		g = c.g / 255,
		b = c.b / 255,
		max = Math.max(r, g, b),
		min = Math.min(r, g, b),
		diff = max - min,
		h = 0, s = 0, l = (min + max) / 2;
	if (l > 0 && l < 1) {
		s = diff / (l < 0.5 ? l * 2 : 2 - (l * 2));
	}
	if (diff > 0) {
		if (max === r && max !== g) {
			h += (g - b) / diff;
		} else if (max === g && max !== b) {
			h += (b - r) / diff + 2;
		} else if (max === b && max !== r) {
			h += (r - g) / diff + 4;
		}
		h *= 60;
	}
	return { h: h, s: _round(s * 100), l: _round(l * 100), a: c.a };
}
function uucolorhsla2rgba(hsla) {
	var h = (hsla.h === 360) ? 0 : hsla.h,
		s = hsla.s / 100,
		l = hsla.l / 100,
		r, g, b, s1, s2, l1, l2;
	if (h < 120) {
		r = (120 - h) / 60, g = h / 60, b = 0;
	} else if (h < 240) {
		r = 0, g = (240 - h) / 60, b = (h - 120) / 60;
	} else {
		r = (h - 240) / 60, g = 0, b = (360 - h) / 60;
	}
	s1 = 1 - s;
	s2 = s * 2;
	r = s2 * (r > 1 ? 1 : r) + s1;
	g = s2 * (g > 1 ? 1 : g) + s1;
	b = s2 * (b > 1 ? 1 : b) + s1;
	if (l < 0.5) {
		r *= l, g *= l, b *= l;
	} else {
		l1 = 1 - l;
		l2 = l * 2 - 1;
		r = l1 * r + l2;
		g = l1 * g + l2;
		b = l1 * b + l2;
	}
	return { r: ((r * 255) + 0.5) | 0,
			 g: ((g * 255) + 0.5) | 0,
			 b: ((b * 255) + 0.5) | 0,
			 a: hsla.a };
}
uu.color.add("000000black,888888gray,ccccccsilver,ffffffwhite,ff0000red,ffff00"+
"yellow,00ff00lime,00ffffaqua,00ffffcyan,0000ffblue,ff00fffuchsia,ff00ffmage" +
"nta,880000maroon,888800olive,008800green,008888teal,000088navy,880088purple" +
",696969dimgray,808080gray,a9a9a9darkgray,c0c0c0silver,d3d3d3lightgrey,dcdcd" +
"cgainsboro,f5f5f5whitesmoke,fffafasnow,708090slategray,778899lightslategray" +
",b0c4delightsteelblue,4682b4steelblue,5f9ea0cadetblue,4b0082indigo,483d8bda" +
"rkslateblue,6a5acdslateblue,7b68eemediumslateblue,9370dbmediumpurple,f8f8ff" +
"ghostwhite,00008bdarkblue,0000cdmediumblue,4169e1royalblue,1e90ffdodgerblue" +
",6495edcornflowerblue,87cefalightskyblue,add8e6lightblue,f0f8ffaliceblue,19" +
"1970midnightblue,00bfffdeepskyblue,87ceebskyblue,b0e0e6powderblue,2f4f4fdar" +
"kslategray,00ced1darkturquoise,afeeeepaleturquoise,f0ffffazure,008b8bdarkcy" +
"an,20b2aalightseagreen,48d1ccmediumturquoise,40e0d0turquoise,7fffd4aquamari" +
"ne,e0fffflightcyan,00fa9amediumspringgreen,7cfc00lawngreen,00ff7fspringgree" +
"n,7fff00chartreuse,adff2fgreenyellow,2e8b57seagreen,3cb371mediumseagreen,66" +
"cdaamediumaquamarine,98fb98palegreen,f5fffamintcream,006400darkgreen,228b22" +
"forestgreen,32cd32limegreen,90ee90lightgreen,f0fff0honeydew,556b2fdarkolive" +
"green,6b8e23olivedrab,9acd32yellowgreen,8fbc8fdarkseagreen,9400d3darkviolet" +
",8a2be2blueviolet,dda0ddplum,d8bfd8thistle,8b008bdarkmagenta,9932ccdarkorch" +
"id,ba55d3mediumorchid,da70d6orchid,ee82eeviolet,e6e6falavender,c71585medium" +
"violetred,bc8f8frosybrown,ff69b4hotpink,ffc0cbpink,ffe4e1mistyrose,ff1493de" +
"eppink,db7093palevioletred,e9967adarksalmon,ffb6c1lightpink,fff0f5lavenderb" +
"lush,cd5c5cindianred,f08080lightcoral,f4a460sandybrown,fff5eeseashell,dc143" +
"ccrimson,ff6347tomato,ff7f50coral,fa8072salmon,ffa07alightsalmon,ffdab9peac" +
"hpuff,ffffe0lightyellow,b22222firebrick,ff4500orangered,ff8c00darkorange,ff" +
"a500orange,ffd700gold,fafad2lightgoldenrodyellow,8b0000darkred,a52a2abrown," +
"a0522dsienna,b8860bdarkgoldenrod,daa520goldenrod,deb887burlywood,f0e68ckhak" +
"i,fffacdlemonchiffon,d2691echocolate,cd853fperu,bdb76bdarkkhaki,bdb76btan,e" +
"ee8aapalegoldenrod,f5f5dcbeige,ffdeadnavajowhite,ffe4b5moccasin,ffe4c4bisqu" +
"e,ffebcdblanchedalmond,ffefd5papayawhip,fff8dccornsilk,f5deb3wheat,faebd7an" +
"tiquewhite,faf0e6linen,fdf5e6oldlace,fffaf0floralwhite,fffff0ivory,a9a9a9da" +
"rkgrey,2f4f4fdarkslategrey,696969dimgrey,808080grey,d3d3d3lightgrey,778899l" +
"ightslategrey,708090slategrey,8b4513saddlebrown");
})(window, document, uu);

if (!uu.img) {
	uu.img = function html4NodeBuilder() {
		return uu.node.build("img", arguments);
	};
}
uu.img.load || (function(win, doc, uu) {
uu.img.load = uuimgload;
uu.img.size = uuimgsize;
function uuimgload(url, fn) {
	function callback(code) {
		var v, i = -1, ary = uuimgload._fn[url].concat(),
			arg = { img: img, code: img.code = code,
					w: img.width, h: img.height };
		uuimgload._fn[url] = [];
		while ( (v = ary[++i]) ) {
			v(arg);
		}
	}
	var img = uuimgload._db[url];
	if (img) {
		uuimgload._fn[url].push(fn);
		img.code === 200 && callback(200);
	} else {
		uuimgload._db[url] = img = new Image();
		uuimgload._fn[url] = [fn];
		img.code = 0;
		img.onerror = function() {
			img.width = img.height = 0;
			callback(404);
			img.onerror = img.onload = null;
		};
		img.onload = function() {
			if (img.complete || img.readyState === "complete") {
				callback(200);
			}
			img.onerror = img.onload = null;
		};
		img.setAttribute("src", url);
	}
	return img;
}
uuimgload._db = {};
uuimgload._fn = {};
/* keep
function uuimgrender(node, speed) {
	if (_render && { img: 1, IMG: 1 }[node.tagName]) {
		var ns = node.style, spd = speed || 0;
		uu.ie ? (ns.msInterpolationMode = spd ? "nearest-neighbor" : "")
			 : (ns.imageRendering      = spd ? "optimizeSpeed" : "auto");
	}
	return node;
}
 */
function uuimgsize(node) {
	var rs, rw, rh, w, h, BOND = "uuimgactsize", hide;
	if (node.naturalWidth) {
		return { w: node.naturalWidth, h: node.naturalHeight };
	}
	if (node.src) {
		if (node[BOND] && node[BOND].src === node.src) {
			return node[BOND];
		}
		if (uu.ie) {
			if (node.currentStyle) {
				hide = node.currentStyle.display === "none";
				hide && (node.style.display = "block");
			}
			rs = node.runtimeStyle;
			w = rs.width, h = rs.height;
			rs.width = rs.height = "auto";
			rw = node.width;
			rh = node.height;
			rs.width = w, rs.height = h;
			hide && (node.style.display = "none");
		} else {
			w = node.width, h = node.height;
			node.removeAttribute("width");
			node.removeAttribute("height");
			rw = node.width;
			rh = node.height;
			node.width = w, node.height = h;
		}
		return node[BOND] = { w: rw, h: rh, src: node.src };
	}
	return { w: node.width, h: node.height };
}
})(window, document, uu);

uu.font || (function(win, doc, uu) {
var _BASE_STYLE = "position:absolute;border:0 none;margin:0;padding:0;";
uu.font = {
	parse:      fontparse,
	detect:     fontdetect,
	metric:     fontmetric,
	ready:      fontready,
	SCALE:      {
		ARIAL: 1.55, "ARIAL BLACK": 1.07, "COMIC SANS MS": 1.15,
		"COURIER NEW": 1.6, GEORGIA: 1.6, "LUCIDA GRANDE": 1,
		"LUCIDA SANS UNICODE": 1, "TIMES NEW ROMAN": 1.65,
		"TREBUCHET MS": 1.55, VERDANA: 1.4,
		"MS UI GOTHIC": 2, "MS PGOTHIC": 2, MEIRYO: 1,
		"SANS-SERIF": 1, SERIF: 1, MONOSPACE: 1, FANTASY: 1, CURSIVE: 1
	}
};
function fontparse(font, embase) {
	function _em(node) {
		var rv, div = node.appendChild(uu.node());
		div.style.cssText = _BASE_STYLE + "width:12em";
		rv = div.clientWidth / 12;
		node.removeChild(div);
		return rv;
	}
	var rv = {}, fontSize, style,
		cache = embase.uucanvascache ||
				(embase.uucanvascache = { font: {}, em: _em(embase) });
	if (!cache.font[font]) {
		style = uu.node().style;
		try {
			style.font = font;
		} catch (err) {
			throw err;
		}
		fontSize = style.fontSize;
		rv.size = fontparse._sizes[fontSize];
		if (rv.size) {
			rv.size *= 16;
		} else if (fontSize.lastIndexOf("px") > 0) {
			rv.size = parseFloat(fontSize);
		} else if (fontSize.lastIndexOf("pt") > 0) {
			rv.size = parseFloat(fontSize) * 1.33;
		} else if (fontSize.lastIndexOf("em") > 0) {
			rv.size = parseFloat(fontSize) * cache.em;
		} else {
			throw new Error("unknown font unit");
		}
		rv.style = style.fontStyle;
		rv.weight = style.fontWeight;
		rv.variant = style.fontVariant;
		rv.rawfamily = style.fontFamily.replace(/[\"\']/g, "");
		rv.family = "'" + rv.rawfamily.replace(/\s*,\s*/g, "','") + "'";
		rv.formal = [rv.style,
					 rv.variant,
					 rv.weight,
					 rv.size.toFixed(2) + "px",
					 rv.family].join(" ");
		cache.font[font] = rv;
	}
	return cache.font[font];
}
fontparse._sizes = {
	"xx-small": 0.512,
	"x-small":  0.64,
	smaller: 0.8,
	small: 0.8,
	medium:     1,
	large:      1.2,
	larger:     1.2,
	"x-large":  1.44,
	"xx-large": 1.728
};
function fontdetect(node) {
	var fam = uu.style.quick(node).fontFamily,
		ary = uu.split.token(fam, ","), v, i = -1,
		a, b = fontmetric("72pt " + fam);
	while ( (v = ary[++i]) ) {
		a = fontmetric("72pt " + v);
		if (a.w === b.w && a.h === b.h) {
			return v;
		}
	}
	return "";
}
function fontmetric(font, text) {
	var node = fontmetric._node;
	if (!node) {
		fontmetric._node = node = uu.node();
		node.style.cssText = _BASE_STYLE +
			"top:-10000px;left:-10000px;text-align:left;visibility:hidden";
		doc.body.appendChild(node);
	}
	node.style.font = font;
	node[uu.gecko ? "textContent"
				 : "innerText"] = text || "aABCDEFGHIJKLMm";
	return { w: node.offsetWidth,
			 h: node.offsetHeight };
}
fontmetric._node = 0;
function fontready(fonts) {
	var rv = [], i = 0, iz = fonts.length, a, b;
	for (; i < iz; ++i) {
		a = fontmetric("72pt dummy");
		b = fontmetric("72pt " + fonts[i]);
		if (a.w !== b.w || a.h !== b.h) {
			rv.push(fonts[i]);
		}
	}
	return rv;
}
})(window, document, uu);

uu.matrix2d || (function() {
uu.matrix2d = {
	multiply:     m2dmultiply,
	scale:        m2dscale,
	rotate:       m2drotate,
	transform:    m2dtransform,
	translate:    m2dtranslate
};
function m2dmultiply(a, b) {
	return [a[0] * b[0] + a[1] * b[3] + a[2] * b[6],
			a[0] * b[1] + a[1] * b[4] + a[2] * b[7],
			0,
			a[3] * b[0] + a[4] * b[3] + a[5] * b[6],
			a[3] * b[1] + a[4] * b[4] + a[5] * b[7],
			0,
			a[6] * b[0] + a[7] * b[3] + a[8] * b[6],
			a[6] * b[1] + a[7] * b[4] + a[8] * b[7],
			a[6] * b[2] + a[7] * b[5] + a[8] * b[8]];
}
function m2dscale(x, y, m) {
	return [x * m[0], x * m[1],    0,
			y * m[3], y * m[4],    0,
				m[6],     m[7], m[8]];
}
function m2drotate(angle, m) {
	var c = Math.cos(angle),
		s = Math.sin(angle);
	return [ c * m[0] + s * m[3],  c * m[1] + s * m[4], 0,
			-s * m[0] + c * m[3], -s * m[1] + c * m[4], 0,
							m[6],                 m[7], m[8]];
}
function m2dtransform(m11,
					 m12,
					 m21,
					 m22,
					 dx,
					 dy,
					 m) {
	return [m11 * m[0] + m12 * m[3], m11 * m[1] + m12 * m[4], 0,
			m21 * m[0] + m22 * m[3], m21 * m[1] + m22 * m[4], 0,
			 dx * m[0] +  dy * m[3] + m[6],
			 dx * m[1] +  dy * m[4] + m[7],
			 dx * m[2] +  dy * m[5] + m[8]];
}
function m2dtranslate(x, y, m) {
	return [m[0], m[1], 0,
			m[3], m[4], 0,
			x * m[0] + y * m[3] + m[6],
			x * m[1] + y * m[4] + m[7],
			x * m[2] + y * m[5] + m[8]];
}
})();

if (!uu.canvas) {
	uu.canvas = function html5NodeBuilder() {
		return uu.node.build("canvas", arguments);
	}
}
uu.canvas.init || (function(win, doc, uu) {
var _flashCanvas = (uu.ie && uu.ver.flash > 8) ?
				 uu.require(uu.config.baseDir + "uu.canvas.swf") : 0;
uu.canvas.init   = uucanvasinit;
uu.canvas.create = uucanvascreate;
uu.canvas.bgcolor = uucanvasbgcolor;
uu.canvas.Silverlight = Silverlight;
uu.canvas.Flash       = Flash;
uu.canvas.VML         = VML;
function Silverlight(node) {
	Silverlight.init(this, node);
}
function Flash(node) {
	Flash.init(this, node);
}
function VML(node) {
	VML.init(this, node);
}
function uucanvasinit() {
	uu.ie && uu.tag("canvas").forEach(function(node) {
		if (!node.getContext) {
			var newNode = _removeFallback(node);
			newNode.width  = parseInt(node.width  || "300");
			newNode.height = parseInt(node.height || "150");
			newNode.style.pixelWidth  = parseInt(newNode.width);
			newNode.style.pixelHeight = parseInt(newNode.height);
			_buildCanvas(newNode, newNode.className);
		}
	});
	uu.ready.gone.win = uu.ready.gone.canvas = 1;
}
function uucanvascreate(width, height, order, placeHolder) {
	var canvas = uu.node(uu.ie ? "CANVAS" : "canvas");
	canvas.width  = width  == null ? 300 : width;
	canvas.height = height == null ? 150 : height;
	placeHolder || (placeHolder = doc.body.appendChild(uu.node()));
	placeHolder.parentNode.replaceChild(canvas, placeHolder);
	return uu.ie ? _buildCanvas(canvas, order || "svg sl fl vml") : canvas;
}
function uucanvasbgcolor(node) {
	var n = node, color = "transparent",
		ZERO = uucanvasbgcolor._ZERO;
	while (n && n !== doc && ZERO[color]) {
		if (uu.ie && !n.currentStyle) {
			break;
		}
		color = uu.style.quick(n).backgroundColor;
		n = n.parentNode;
	}
	return uu.color(ZERO[color] ? "white" : color);
}
uucanvasbgcolor._ZERO = { transparent: 1, "rgba(0, 0, 0, 0)": 1 };
function _buildCanvas(node, order) {
	var ary = uu.split(order.toLowerCase()), i = -1, v;
	while ( (v = ary[++i]) ) {
		switch (_buildCanvas._BACKEND[v]) {
		case 1: break;
		case 2: if (uu.ver.silverlight) {
					return Silverlight.build(node);
				}
				break;
		case 3: if (_flashCanvas) {
					return Flash.build(node);
				}
				break;
		case 4: return VML.build(node);
		}
	}
	return (uu.ver.silverlight ? Silverlight
							 : _flashCanvas ? Flash : VML).build(node);
}
_buildCanvas._BACKEND = { svg: 1, sl: 2, silver: 2, silverlight: 2,
						 fl: 3, flash: 3, vml: 4 };
function _removeFallback(node) {
	if (!node.parentNode) {
		return node;
	}
	var rv = doc.createElement(node.outerHTML),
		endTags = doc.getElementsByTagName("/CANVAS"),
		parent = node.parentNode,
		idx = node.sourceIndex, x, v, w, i = -1;
	while ( (x = endTags[++i]) ) {
		if (idx < x.sourceIndex && parent === x.parentNode) {
			v = doc.all[x.sourceIndex];
			do {
				w = v.previousSibling;
				v.parentNode.removeChild(v);
				v = w;
			} while (v !== node);
			break;
		}
	}
	parent.replaceChild(rv, node);
	return rv;
}
uu.lazy("canvas", function() {
	uu.canvas.init();
	win.xcanvas && win.xcanvas(uu, uu.tag("canvas"));
});
})(window, document, uu);

uu.canvas.Silverlight.init || (function(win, doc, uu) {
var _COMPOS = { "source-over": 0, "destination-over": 4, copy: 10 },
	_FIXED4 = /\.(\d{4})(?:[\d]+)/g,
	_TO_DEGREES = 180 / Math.PI,
	_FONT_STYLES = { normal: "Normal", italic: "Italic", oblique: "Italic" },
	_FONT_WEIGHTS = { normal: "Normal", bold: "Bold", bolder: "ExtraBold",
					 lighter: "Thin", "100": "Thin", "200": "ExtraLight",
					 "300": "Light", "400": "Normal", "500": "Medium",
					 "600": "SemiBold", "700": "Bold", "800": "ExtraBold",
					 "900": "Black" };
uu.mix(uu.canvas.Silverlight.prototype, {
	arc:                    arc,
	arcTo: uu.nop,
	beginPath:              beginPath,
	bezierCurveTo:          bezierCurveTo,
	clear:                  clear,
	clearRect:              clearRect,
	clip:                   clip,
	closePath:              closePath,
	createImageData: uu.nop,
	createLinearGradient:   createLinearGradient,
	createPattern:          createPattern,
	createRadialGradient:   createRadialGradient,
	drawCircle:             drawCircle,
	drawImage:              drawImage,
	drawRoundRect:          drawRoundRect,
	fill:                   fill,
	fillRect:               fillRect,
	fillText:               fillText,
	getImageData: uu.nop,
	isPointInPath: uu.nop,
	lineTo:                 lineTo,
	lock:                   lock,
	measureText:            measureText,
	moveTo:                 moveTo,
	putImageData: uu.nop,
	quadraticCurveTo:       quadraticCurveTo,
	rect:                   rect,
	restore:                restore,
	rotate:                 rotate,
	save:                   save,
	scale:                  scale,
	setTransform:           setTransform,
	stroke:                 stroke,
	strokeRect:             strokeRect,
	strokeText:             strokeText,
	transform:              transform,
	translate:              translate,
	unlock:                 unlock
});
uu.canvas.Silverlight.init = init;
uu.canvas.Silverlight.build = build;
function init(ctx, node) {
	initSurface(ctx);
	ctx.canvas = node;
	ctx._view = null;
	ctx._content = null;
	ctx._state = 0;
}
function build(canvas) {
	var ctx,
		onload = "uuCanvasSilverlightOnLoad" + uu.guid();
	canvas.getContext = function() {
		return ctx;
	};
	canvas.toDataURL = function() {
		return "data:,";
	};
	ctx = new uu.canvas.Silverlight(canvas);
	win[onload] = function(sender) {
		ctx._view = sender.children;
		ctx._content = sender.getHost().content;
		if (ctx._stock.length) {
			var xaml = ctx._stock.join("");
			ctx._view.add(ctx._content.createFromXaml(
				"<Canvas>" + xaml + "</Canvas>"));
		}
		ctx._state = 0x1;
		ctx._stock = [];
	};
	canvas.innerHTML = [
		'<object type="application/x-silverlight-2" width="100%" height="100%">',
			'<param name="background" value="#00000000" />',
			'<param name="windowless" value="true" />',
			'<param name="source" value="#xaml" />',
			'<param name="onLoad" value="', onload, '" />',
		'</object>'].join("");
	function onFocus(evt) {
		var obj = evt.srcElement,
			canvas = obj.parentNode;
		obj.blur();
		canvas.focus();
	}
	function onPropertyChange(evt) {
		var attr = evt.propertyName, width, height;
		if (attr === "width" || attr === "height") {
			initSurface(ctx);
			width  = parseInt(canvas.width);
			height = parseInt(canvas.height);
			canvas.style.pixelWidth  = width  < 0 ? 0 : width;
			canvas.style.pixelHeight = height < 0 ? 0 : height;
			ctx.clear();
		}
	}
	canvas.firstChild.attachEvent("onfocus", onFocus);
	canvas.attachEvent("onpropertychange", onPropertyChange);
	win.attachEvent("onunload", function() {
		canvas.getContext = canvas.toDataURL = null;
		win.detachEvent("onunload", arguments.callee);
		canvas.detachEvent("onfocus", onFocus);
		canvas.detachEvent("onpropertychange", onPropertyChange);
		win[onload] = null;
	});
	return canvas;
}
function initSurface(ctx) {
	ctx.globalAlpha     = 1;
	ctx.globalCompositeOperation = "source-over";
	ctx.strokeStyle     = "black";
	ctx.fillStyle       = "black";
	ctx.lineWidth       = 1;
	ctx.lineCap         = "butt";
	ctx.lineJoin        = "miter";
	ctx.miterLimit      = 10;
	ctx.shadowBlur      = 0;
	ctx.shadowColor     = "transparent";
	ctx.shadowOffsetX   = 0;
	ctx.shadowOffsetY   = 0;
	ctx.font            = "10px sans-serif";
	ctx.textAlign       = "start";
	ctx.textBaseline    = "alphabetic";
	ctx.px              = 0;
	ctx.py              = 0;
	ctx._stack          = [];
	ctx._stock          = [];
	ctx._lineScale      = 1;
	ctx._scaleX         = 1;
	ctx._scaleY         = 1;
	ctx._zindex         = -1;
	ctx._matrixEffected = 0;
	ctx._matrix         = [1, 0, 0,  0, 1, 0,  0, 0, 1];
	ctx._history        = [];
	ctx._path           = [];
	ctx._clipPath       = null;
	ctx._clipRect       = null;
	ctx._strokeCache    = "";
	ctx.xBackend        = "Silverlight";
	ctx.xFlyweight      = 0;
	ctx.xKnockoutColor  = "white";
}
function _copyprop(to, from) {
	to.globalAlpha      = from.globalAlpha;
	to.globalCompositeOperation = from.globalCompositeOperation;
	to.strokeStyle      = from.strokeStyle;
	to.fillStyle        = from.fillStyle;
	to.lineWidth        = from.lineWidth;
	to.lineCap          = from.lineCap;
	to.lineJoin         = from.lineJoin;
	to.miterLimit       = from.miterLimit;
	to.shadowBlur       = from.shadowBlur;
	to.shadowColor      = from.shadowColor;
	to.shadowOffsetX    = from.shadowOffsetX;
	to.shadowOffsetY    = from.shadowOffsetY;
	to.font             = from.font;
	to.textAlign        = from.textAlign;
	to.textBaseline     = from.textBaseline;
	to._lineScale       = from._lineScale;
	to._scaleX          = from._scaleX;
	to._scaleY          = from._scaleY;
	to._matrixEffected  = from._matrixEffected;
	to._matrix          = from._matrix.concat();
	to._clipPath        = from._clipPath;
	return to;
}
function arc(x, y, radius, startAngle, endAngle, anticlockwise) {
	var deg1 = startAngle * _TO_DEGREES,
		deg2 = endAngle * _TO_DEGREES,
		isLargeArc = 0,
		magic = 0.0001570796326795,
		sweepDirection = anticlockwise ? 0 : 1,
		sx, sy, ex, ey, rx, ry, m, _ex, _ey;
	(deg1 < 0)   && (deg1 += 360);
	(deg1 > 360) && (deg1 -= 360);
	(deg2 < 0)   && (deg2 += 360);
	(deg2 > 360) && (deg2 -= 360);
	if (deg1 + 360 == deg2 || deg1 == deg2 + 360) {
		if (sweepDirection) {
			endAngle -= magic;
		} else {
			endAngle += magic;
		}
		isLargeArc = 1;
	} else if (sweepDirection) {
		if (deg2 - deg1 > 180) {
			isLargeArc = 1;
		}
	} else {
		if (deg1 - deg2 > 180) {
			isLargeArc = 1;
		}
	}
	rx = this._scaleX * radius;
	ry = this._scaleY * radius;
	sx = Math.cos(startAngle) * radius + x;
	sy = Math.sin(startAngle) * radius + y;
	ex = Math.cos(endAngle)   * radius + x;
	ey = Math.sin(endAngle)   * radius + y;
	this._path.length ? this.lineTo(sx, sy)
					 : this.moveTo(sx, sy);
	if (this._matrixEffected) {
		m = this._matrix, _ex = ex, _ey = ey;
		ex = _ex * m[0] + _ey * m[3] + m[6];
		ey = _ex * m[1] + _ey * m[4] + m[7];
	}
	this._path.push(" A", rx, " ", ry, " 0 ", isLargeArc, " ",
					sweepDirection, " ", ex, " ", ey);
}
	/*
	 *  The original writer in code block is mindcat.
	 *
	 *  http://d.hatena.ne.jp/mindcat/20100131/
	 */
/*
	var m = this._matrix,
		_x0 = this.px,
		_y0 = this.py,
		_x1 = x1,
		_y1 = y1,
		_x2 = x2,
		_y2 = y2,
		x0, y0, a1, b1, a2, b2, mm,
		dd, cc, tt, k1, k2, j1, j2, cx, cy, px, py, qx, qy,
		ang1, ang2;
	x0 = _x0 * m[0] + _y0 * m[3] + m[6];
	y0 = _x0 * m[1] + _y0 * m[4] + m[7];
	x1 = _x1 * m[0] + _y1 * m[3] + m[6];
	y1 = _x1 * m[1] + _y1 * m[4] + m[7];
	x2 = _x2 * m[0] + _y2 * m[3] + m[6];
	y2 = _x2 * m[1] + _y2 * m[4] + m[7];
	a1 = y0 - y1;
	b1 = x0 - x1;
	a2 = y2 - y1;
	b2 = x2 - x1;
	mm = Math.abs(a1 * b2 - b1 * a2);
	if (!mm || !radius) {
		this.lineTo(x1, y1);
		return;
	}
	dd = a1 * a1 + b1 * b1;
	cc = a2 * a2 + b2 * b2;
	tt = a1 * a2 + b1 * b2;
	k1 = radius * Math.sqrt(dd) / mm;
	k2 = radius * Math.sqrt(cc) / mm;
	j1 = k1 * tt / dd;
	j2 = k2 * tt / cc;
	cx = k1 * b2 + k2 * b1;
	cy = k1 * a2 + k2 * a1;
	px = b1 * (k2 + j1);
	py = a1 * (k2 + j1);
	qx = b2 * (k1 + j2);
	qy = a2 * (k1 + j2);
	ang1 = Math.atan2(py - cy, px - cx);
	ang2 = Math.atan2(qy - cy, qx - cx);
	this.lineTo(px + x1, py + y1);
	this.arc(cx + x1, cy + y1, radius,
			 ang1, ang2, b1 * a2 > b2 * a1);
}
  */
function beginPath() {
	this._path = [];
}
function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
	if (this._matrixEffected) {
		var m = this._matrix,
			_1x = cp1x, _1y = cp1y, _2x = cp2x, _2y = cp2y, _x = x, _y = y;
		cp1x = _1x * m[0] + _1y * m[3] + m[6];
		cp1y = _1x * m[1] + _1y * m[4] + m[7];
		cp2x = _2x * m[0] + _2y * m[3] + m[6];
		cp2y = _2x * m[1] + _2y * m[4] + m[7];
		 x =  _x * m[0] +  _y * m[3] + m[6];
		 y =  _x * m[1] +  _y * m[4] + m[7];
	}
	this._path.length || this._path.push(" M", cp1x, " ", cp1y);
	this._path.push(" C", cp1x, " ", cp1y, " ",
						 cp2x, " ", cp2y, " ", x, " ", y);
	this.px = x;
	this.py = y;
}
function clear() {
	this.xFlyweight || (this._history = []);
	this._zindex = 0;
	this._state ? this._view.clear() : (this._stock = []);
}
function clearRect(x, y, w, h) {
	w = parseInt(w);
	h = parseInt(h);
	if ((!x && !y && w >= this.canvas.width && h >= this.canvas.height)) {
		this.clear();
	} else {
		if (this.globalCompositeOperation !== this._mix) {
			this.__mix = _COMPOS[this._mix = this.globalCompositeOperation];
		}
		var color = uu.canvas.bgcolor(this.canvas),
			zindex = (this.__mix ===  4) ? --this._zindex
				 : (this.__mix === 10) ? (this.clear(), 0) : 0,
			fg = '<Path Opacity="' + (this.globalAlpha * color.a) +
				 '" Canvas.ZIndex="' + zindex +
				 '" Fill="' + color.hex +
				 '" Data="' + _rect(this, x, y, w, h) + '" />';
		this.xFlyweight ||
			this._history.push(this._clipPath ? (fg = _clippy(this, fg)) : fg);
		this._state !== 0x1 ? this._stock.push(fg)
							: this._view.add(this._content.createFromXaml(fg));
	}
}
function clip() {
	this._clipPath = this._path.join("");
}
function closePath() {
	this._path.push(" Z");
}
function createLinearGradient(x0, y0, x1, y1) {
	function CanvasGradient(x0, y0, x1, y1) {
		this.fn = _linearGradientFill;
		this.param = { x0: x0, y0: y0, x1: x1, y1: y1 };
		this.color = [];
		this.colors = "";
		this.addColorStop = addColorStop;
	}
	return new CanvasGradient(x0, y0, x1, y1);
}
function addColorStop(offset, color) {
	this.color.push({ offset: offset, color: uu.color(color) });
	this.color.sort(function(a, b) {
		return a.offset - b.offset;
	});
}
function createPattern(image, repeat) {
	function CanvasPattern(image, repeat) {
		this.fn = _patternFill;
		this.src = image.src;
		this.dim = uu.img.size(image);
		this.type = 3;
		this.repeat = repeat;
	}
	repeat = repeat || "repeat";
	switch (repeat) {
	case "repeat": break;
	default: throw new Error("NOT_SUPPORTED_ERR");
	}
	if (!("src" in image)) {
		throw new Error("NOT_SUPPORTED_ERR");
	}
	return new CanvasPattern(image, repeat);
}
function createRadialGradient(x0, y0, r0, x1, y1, r1) {
	function CanvasGradient(x0, y0, r0, x1, y1, r1) {
		this.fn = _radialGradientFill;
		this.param = { x0: x0, y0: y0, r0: r0,
					 x1: x1, y1: y1, r1: r1 };
		this.color = [];
		this.colors = "";
		this.addColorStop = addColorStop;
	}
	return new CanvasGradient(x0, y0, r0, x1, y1, r1);
}
function drawCircle(x, y, radius, fillColor, strokeColor, lineWidth) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (fillColor || strokeColor) {
		var lw = lineWidth === void 0 ? 1 : lineWidth,
			a  = fillColor ? fillColor.a : strokeColor.a,
			fg = '<Ellipse Canvas.Left="' + (x - radius) +
				 '" Canvas.Top="'   + (y - radius) +
				 '" Opacity="'      + (this.globalAlpha * a) +
				 '" Width="'        + (radius * 2) +
				 '" Height="'       + (radius * 2);
		if (fillColor) {
			fg +=   '" Fill="' + fillColor.hex;
		}
		if (strokeColor && lw) {
			fg +=   '" Stroke="' + strokeColor.hex +
					'" StrokeThickness="' + lw;
		}
		fg += '" />';
		this._state !== 0x1 ? this._stock.push(fg)
							: this._view.add(this._content.createFromXaml(fg));
	}
}
function drawImage(image, a1, a2, a3, a4, a5, a6, a7, a8) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (this.shadowColor !== this._shadowColor) {
		this.__shadowColor = uu.color(this._shadowColor = this.shadowColor);
	}
	if (this.globalCompositeOperation !== this._mix) {
		this.__mix = _COMPOS[this._mix = this.globalCompositeOperation];
	}
	var dim = uu.img.size(image),
		args = arguments.length, full = (args === 9),
		sx = full ? a1 : 0,
		sy = full ? a2 : 0,
		sw = full ? a3 : dim.w,
		sh = full ? a4 : dim.h,
		dx = full ? a5 : a1,
		dy = full ? a6 : a2,
		dw = full ? a7 : a3 || dim.w,
		dh = full ? a8 : a4 || dim.h,
		fg, m, x, y, w, h, bw, bh,
		zindex = (this.__mix ===  4) ? --this._zindex
			 : (this.__mix === 10) ? (this.clear(), 0) : 0,
		renderShadow = this.__shadowColor.a && this.shadowBlur,
		shadow, matrix, history;
	if (image.src) {
		switch (args) {
		case 3:
			shadow = renderShadow ? _dropShadow(this, "Image", this.__shadowColor) : "";
			matrix = _matrix("Image", uu.matrix2d.translate(dx, dy, this._matrix));
			fg = uu.format('<Canvas Canvas.ZIndex="?"><Image Opacity="?" Source="?">??</Image></Canvas>',
						zindex, this.globalAlpha, image.src, matrix, shadow);
			break;
		case 5:
			shadow = renderShadow ? _dropShadow(this, "Image", this.__shadowColor) : "";
			matrix = _matrix("Image", uu.matrix2d.translate(dx, dy, this._matrix));
			fg = uu.format('<Canvas Canvas.ZIndex="?"><Image Opacity="?" Source="?" Width="?" Height="?" Stretch="Fill">??</Image></Canvas>',
						zindex, this.globalAlpha, image.src, dw, dh, matrix, shadow);
			break;
		case 9:
			bw = dw / sw;
			bh = dh / sh;
			w = (bw * dim.w) | 0;
			h = (bh * dim.h) | 0;
			x = dx - (bw * sx);
			y = dy - (bh * sy);
			shadow = renderShadow ? _dropShadow(this, "Canvas", this.__shadowColor) : "";
			matrix = _matrix("Canvas", uu.matrix2d.translate(x, y, this._matrix));
			fg = uu.format('<Canvas Canvas.ZIndex="?"><Canvas><Image Opacity="?" Source="?" Width="?" Height="?" Stretch="Fill"><Image.Clip><RectangleGeometry Rect="?" /></Image.Clip></Image></Canvas>??</Canvas>',
						zindex, this.globalAlpha, image.src, w, h, [dx - x, dy - y, dw, dh].join(" "), matrix, shadow);
		}
	} else {
		history = image.getContext("2d")._history.join("");
		switch (args) {
		case 3:
		case 5:
			m = uu.matrix2d.translate(dx, dy, this._matrix);
			shadow = renderShadow ? _dropShadow(this, "Canvas", this.__shadowColor) : "";
			matrix = _matrix("Canvas", args === 3 ? m : uu.matrix2d.scale(dw / dim.w, dh / dim.h, m));
			fg = uu.format('<Canvas Canvas.ZIndex="?" Opacity="?"><Canvas>?</Canvas>??</Canvas>',
						zindex, this.globalAlpha, history, matrix, shadow);
			break;
		case 9:
			bw = dw / sw;
			bh = dh / sh;
			w = bw * dim.w;
			h = bh * dim.h;
			x = dx - (bw * sx);
			y = dy - (bh * sy);
			m = uu.matrix2d.translate(x, y, this._matrix);
			shadow = renderShadow ? _dropShadow(this, "Canvas", this.__shadowColor) : "";
			matrix = _matrix("Canvas", uu.matrix2d.scale(bw, bh, m));
			fg = uu.format('<Canvas Canvas.ZIndex="?" Opacity="?"><Canvas>?<Canvas.Clip><RectangleGeometry Rect="?" /></Canvas.Clip></Canvas>??</Canvas>',
						zindex, this.globalAlpha, history,
						 [(dx - x) / bw, (dy - y) / bh, dw / bw, dh / bh].join(" "),
						matrix, shadow);
		}
	}
	this.xFlyweight ||
		this._history.push(this._clipPath ? (fg = _clippy(this, fg)) : fg);
	this._state !== 0x1 ? this._stock.push(fg)
						: this._view.add(this._content.createFromXaml(fg));
}
function drawRoundRect(x,
					 y,
					 width,
					 height,
					 radius,
					 fillColor,
					 strokeColor,
					 lineWidth) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (fillColor || strokeColor) {
		var lw = lineWidth === void 0 ? 1 : lineWidth,
			a  = fillColor ? fillColor.a : strokeColor.a, fg, endTag;
		if (radius[0] === radius[1]
			&& radius[0] === radius[2]
			&& radius[0] === radius[3]) {
			fg = '<Rectangle Canvas.Left="' + x + '" Canvas.Top="' + y +
					'" Width="' + width + '" Height="' + height +
					'" RadiusX="' + radius[0] + '" RadiusY="' + radius[0] +
					'" Opacity="' + (this.globalAlpha * a);
			endTag = '" />';
		} else {
			fg = '<Canvas><Path Opacity="' + (this.globalAlpha * a) +
					'" Data="' + _buildRoundRectPath(x, y, width, height, radius);
			endTag = '"></Path></Canvas>';
		}
		if (fillColor) {
			fg +=   '" Fill="' + fillColor.hex;
		}
		if (strokeColor && lw) {
			fg +=   '" Stroke="' + strokeColor.hex +
					'" StrokeThickness="' + lw;
		}
		fg += endTag;
		this._state !== 0x1 ? this._stock.push(fg)
							: this._view.add(this._content.createFromXaml(fg));
	}
}
function _buildRoundRectPath(x, y, width, height, radius) {
	var w = width, h = height,
		r0 = radius[0], r1 = radius[1],
		r2 = radius[2], r3 = radius[3],
		w2 = (width  / 2) | 0, h2 = (height / 2) | 0;
	r0 < 0 && (r0 = 0);
	r1 < 0 && (r1 = 0);
	r2 < 0 && (r2 = 0);
	r3 < 0 && (r3 = 0);
	(r0 >= w2 || r0 >= h2) && (r0 = Math.min(w2, h2) - 2);
	(r1 >= w2 || r1 >= h2) && (r1 = Math.min(w2, h2) - 2);
	(r2 >= w2 || r2 >= h2) && (r2 = Math.min(w2, h2) - 2);
	(r3 >= w2 || r3 >= h2) && (r3 = Math.min(w2, h2) - 2);
	return [" M", x, " ", y + h2,
			" L", x, " ", y + h - r3,
			" Q", x, " ", y + h, " ", x + r3, " ", y + h,
			" L", x + w - r2, " ", y + h,
			" Q", x + w, " ", y + h, " ", x + w, " ",
										 y + h - r2,
			" L", x + w, " ", y + r1,
			" Q", x + w, " ", y, " ", x + w - r1, " ", y,
			" L", x + r0, " ", y,
			" Q", x, " ", y, " ", x, " ", y + r0,
			" Z"].join("");
}
function fill(path) {
	this.stroke(path, 1);
}
function fillRect(x, y, w, h) {
	this.stroke(_rect(this, x, y, w, h), 1);
	this.px = x;
	this.py = y;
}
function fillText(text, x, y, maxWidth) {
	this.strokeText(text, x, y, maxWidth, 1);
}
function lineTo(x, y) {
	if (this._matrixEffected) {
		var m = this._matrix, _x = x, _y = y;
		x = _x * m[0] + _y * m[3] + m[6];
		y = _x * m[1] + _y * m[4] + m[7];
	}
	this._path.length || this._path.push(" M", x, " ", y);
	this._path.push(" L", x, " ", y);
	this.px = x;
	this.py = y;
}
function lock(clearScreen) {
	if (this._state & 0x2) {
		throw new Error("DUPLICATE_LOCK");
	}
	this._state |= clearScreen ? 0x6 : 0x2;
}
function measureText(text) {
	var metric = uu.font.metric(this.font, text);
	return { width: metric.w, height: metric.h };
}
function moveTo(x, y) {
	if (this._matrixEffected) {
		var m = this._matrix, _x = x, _y = y;
		x = _x * m[0] + _y * m[3] + m[6];
		y = _x * m[1] + _y * m[4] + m[7];
	}
	this._path.push(" M", x, " ", y);
	this.px = x;
	this.py = y;
}
function quadraticCurveTo(cpx, cpy, x, y) {
	if (this._matrixEffected) {
		var m = this._matrix, _1x = cpx, _1y = cpy, _x = x, _y = y;
		cpx = _1x * m[0] + _1y * m[3] + m[6];
		cpy = _1x * m[1] + _1y * m[4] + m[7];
		 x =  _x * m[0] +  _y * m[3] + m[6];
		 y =  _x * m[1] +  _y * m[4] + m[7];
	}
	this._path.length || this._path.push(" M", cpx, " ", cpy);
	this._path.push(" Q", cpx, " ", cpy, " ", x, " ", y);
	this.px = x;
	this.py = y;
}
function rect(x, y, w, h) {
	this._path.push(_rect(this, x, y, w, h));
	this.px = x;
	this.py = y;
}
function _rect(ctx, x, y, w, h) {
	if (ctx._matrixEffected) {
		var m = ctx._matrix, xw = x + w, yh = y + h;
		return [" M", x  * m[0] + y  * m[3] + m[6], " ", x  * m[1] + y  * m[4] + m[7],
				" L", xw * m[0] + y  * m[3] + m[6], " ", xw * m[1] + y  * m[4] + m[7],
				" L", xw * m[0] + yh * m[3] + m[6], " ", xw * m[1] + yh * m[4] + m[7],
				" L", x  * m[0] + yh * m[3] + m[6], " ", x  * m[1] + yh * m[4] + m[7],
				" Z"].join("");
	}
	return [" M", x,     " ", y,     " L", x + w, " ", y,
			" L", x + w, " ", y + h, " L", x,     " ", y + h,
			" Z"].join("");
}
function restore() {
	this._stack.length && _copyprop(this, this._stack.pop());
}
function rotate(angle) {
	this._matrixEffected = 1;
	this._matrix = uu.matrix2d.rotate(angle, this._matrix);
}
function save() {
	var prop = _copyprop({}, this);
	prop._clipPath = this._clipPath ? String(this._clipPath) : null;
	this._stack.push(prop);
}
function scale(x, y) {
	this._matrixEffected = 1;
	this._matrix = uu.matrix2d.scale(x, y, this._matrix);
	this._scaleX *= x;
	this._scaleY *= y;
	this._lineScale = (this._matrix[0] + this._matrix[4]) / 2;
}
function setTransform(m11, m12, m21, m22, dx, dy) {
	this._matrixEffected = 1;
	if (m11 === 1 && !m12 && m22 === 1 && !m21 && !dx && !dy) {
		this._matrixEffected = 0;
	}
	this._matrix = [m11, m12, 0,  m21, m22, 0,  dx, dy, 1];
}
function stroke(path, fill) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (this.shadowColor !== this._shadowColor) {
		this.__shadowColor = uu.color(this._shadowColor = this.shadowColor);
	}
	if (this.strokeStyle !== this._strokeStyle) {
		if (typeof this.strokeStyle === "string") {
			this.__strokeStyle = uu.color(this._strokeStyle = this.strokeStyle);
		}
	}
	if (this.fillStyle !== this._fillStyle) {
		if (typeof this.fillStyle === "string") {
			this.__fillStyle = uu.color(this._fillStyle = this.fillStyle);
		}
	}
	if (this.globalCompositeOperation !== this._mix) {
		this.__mix = _COMPOS[this._mix = this.globalCompositeOperation];
	}
	path = (path || this._path.join("")).replace(_FIXED4, ".$1");
	var fg, shadow = "", more,
		zindex = (this.__mix ===  4) ? --this._zindex
			 : (this.__mix === 10) ? (this.clear(), 0) : 0,
		color = fill ? this.fillStyle : this.strokeStyle;
	if (typeof color !== "string") {
		fg = color.fn(this, color, path, fill, zindex);
	} else {
		color = fill ? this.__fillStyle : this.__strokeStyle;
		more = fill ? "F1" + path + '" Fill="' + color.hex
					: path + _stroke(this) + '" Stroke="' + color.hex;
		if (this.__shadowColor.a && this.shadowBlur) {
			shadow = _dropShadow(this, "Path", this.__shadowColor);
		}
		fg = '<Canvas Canvas.ZIndex="' + zindex +
				'"><Path Opacity="' + (this.globalAlpha * color.a) +
				'" Data="' + more + '">' + shadow + '</Path></Canvas>';
	}
	this.xFlyweight ||
		this._history.push(this._clipPath ? (fg = _clippy(this, fg)) : fg);
	this._state !== 0x1 ? this._stock.push(fg)
						: this._view.add(this._content.createFromXaml(fg));
}
function strokeRect(x, y, w, h) {
	this.stroke(_rect(this, x, y, w, h));
}
function strokeText(text, x, y, maxWidth, fill) {
	if (fill) {
		_strokeText(this, text, x, y, maxWidth, fill);
	} else {
		var fillStyle = this.fillStyle;
		_strokeText(this, text, x, y, maxWidth, 0);
		this.fillStyle = this.xKnockoutColor;
		_strokeText(this, text, x, y, maxWidth, 1);
		this.fillStyle = fillStyle;
	}
}
function _strokeText(ctx, text, x, y, maxWidth, fill) {
	if (ctx.globalAlpha <= 0) {
		return;
	}
	if (ctx.shadowColor !== ctx._shadowColor) {
		ctx.__shadowColor = uu.color(ctx._shadowColor = ctx.shadowColor);
	}
	if (ctx.strokeStyle !== ctx._strokeStyle) {
		if (typeof ctx.strokeStyle === "string") {
			ctx.__strokeStyle = uu.color(ctx._strokeStyle = ctx.strokeStyle);
		}
	}
	if (ctx.fillStyle !== ctx._fillStyle) {
		if (typeof ctx.fillStyle === "string") {
			ctx.__fillStyle = uu.color(ctx._fillStyle = ctx.fillStyle);
		}
	}
	if (ctx.globalCompositeOperation !== ctx._mix) {
		ctx.__mix = _COMPOS[ctx._mix = ctx.globalCompositeOperation];
	}
	text = text.replace(/(\t|\v|\f|\r\n|\r|\n)/g, " ");
	var style = fill ? ctx.fillStyle : ctx.strokeStyle,
		zindex = (ctx.__mix ===  4) ? --ctx._zindex
			 : (ctx.__mix === 10) ? (ctx.clear(), 0) : 0,
		rv = [], fg, color,
		fp, m = ctx._matrix, x0, y0, x1, y1,
		font = uu.font.parse(ctx.font, ctx.canvas),
		metric = uu.font.metric(font.formal, text),
		offX = 0, align = ctx.textAlign, dir = "ltr";
	switch (align) {
	case "end": dir = "rtl";
	case "start":
		align = ctx.canvas.currentStyle.direction === dir ? "left" : "right"
	}
	switch (align) {
	case "center": offX = (metric.w - 4) / 2; break;
	case "right":  offX = metric.w;
	}
	rv.push('<Canvas Canvas.ZIndex="', zindex, '">');
	if (typeof style === "string") {
		color = fill ? ctx.__fillStyle : ctx.__strokeStyle;
		rv.push('<TextBlock Opacity="', (ctx.globalAlpha * color.a),
				'" Foreground="', color.hex);
	} else {
		rv.push('<TextBlock Opacity="', ctx.globalAlpha);
	}
	rv.push('" FontFamily="', font.rawfamily,
			'" FontSize="', font.size.toFixed(2),
			'" FontStyle="', _FONT_STYLES[font.style] || "Normal",
			'" FontWeight="', _FONT_WEIGHTS[font.weight] || "Normal",
			'">', uu.codec.entity.encode(text),
				_matrix('TextBlock', uu.matrix2d.translate(x - offX, y, ctx._matrix)));
	if (fill) {
		rv.push((ctx.__shadowColor.a &&
				 ctx.shadowBlur) ? _dropShadow(ctx, "TextBlock", ctx.__shadowColor) : "");
	} else {
		rv.push('<TextBlock.Effect><BlurEffect Radius="3" /></TextBlock.Effect>');
	}
	if (typeof style === "string") {
		;
	} else if (style.fn === _radialGradientFill) {
		fp = style.param,
		x0 = (fp.x0 - (fp.x1 - fp.r1)) / (fp.r1 * 2),
		y0 = (fp.y0 - (fp.y1 - fp.r1)) / (fp.r1 * 2),
		rv.push('<TextBlock.Foreground><RadialGradientBrush GradientOrigin="',
				x0, ',', y0,
				'" Center="0.5,0.5" RadiusX="0.5" RadiusY="0.5">',
					style.colors || _radialColor(style),
				'</RadialGradientBrush></TextBlock.Foreground>');
	} else if (style.fn === _linearGradientFill) {
		fp = style.param;
		x0 = fp.x0 * m[0] + fp.y0 * m[3] + m[6];
		y0 = fp.x0 * m[1] + fp.y0 * m[4] + m[7];
		x1 = fp.x1 * m[0] + fp.x1 * m[3] + m[6];
		y1 = fp.y1 * m[1] + fp.y1 * m[4] + m[7];
		rv.push('<TextBlock.Foreground>',
				'<LinearGradientBrush MappingMode="Absolute" StartPoint="',
				x0, ",", y0,
				'" EndPoint="', x1, ",", y1, '">',
					style.colors || _linearColor(style),
				'</LinearGradientBrush></TextBlock.Foreground>');
	} else {
		rv.push('<TextBlock.Foreground><ImageBrush Stretch="None" ImageSource="',
				style.src,
				'" /></TextBlock.Foreground>');
	}
	rv.push('</TextBlock></Canvas>');
	fg = rv.join("");
	ctx.xFlyweight ||
		ctx._history.push(ctx._clipPath ? (fg = _clippy(ctx, fg)) : fg);
	ctx._state !== 0x1 ? ctx._stock.push(fg)
					 : ctx._view.add(ctx._content.createFromXaml(fg));
}
function transform(m11, m12, m21, m22, dx, dy) {
	this._matrixEffected = 1;
	this._matrix = uu.matrix2d.transform(m11, m12, m21, m22, dx, dy, this._matrix);
}
function translate(x, y) {
	this._matrixEffected = 1;
	this._matrix = uu.matrix2d.translate(x, y, this._matrix);
}
function unlock() {
	switch (this._state) {
	case 0x7:
			this.xFlyweight || (this._history = []);
			this._zindex = 0;
			this._state ? this._view.clear() : (this._stock = []);
	case 0x3:
			this._state = 0x1;
			if (this._stock.length) {
				this._view.add(this._content.createFromXaml(
						"<Canvas>" + this._stock.join("") + "</Canvas>"));
				this._stock = [];
			}
	}
}
function _linearGradientFill(ctx, obj, path, fill, zindex) {
	var rv = [],
		fp = obj.param,
		m  = ctx._matrix,
		x0 = fp.x0,
		y0 = fp.y0,
		x1 = fp.x1,
		y1 = fp.y1,
		prop = fill ? "Fill" : "Stroke";
	if (ctx._matrixEffected) {
		x0 = fp.x0 * m[0] + fp.y0 * m[3] + m[6],
		y0 = fp.x0 * m[1] + fp.y0 * m[4] + m[7]
		x1 = fp.x1 * m[0] + fp.y1 * m[3] + m[6],
		y1 = fp.x1 * m[1] + fp.y1 * m[4] + m[7]
	}
	rv.push('<Canvas Canvas.ZIndex="', zindex,
			'"><Path Opacity="', ctx.globalAlpha,
			'" Data="', path,
			fill ? "" : _stroke(ctx), '"><Path.', prop,
			'><LinearGradientBrush MappingMode="Absolute" StartPoint="',
				x0, ",", y0, '" EndPoint="', x1, ",", y1, '">',
			 obj.colors || _linearColor(obj),
			'</LinearGradientBrush></Path.', prop, '>',
			(ctx.__shadowColor.a && ctx.shadowBlur) ? _dropShadow(ctx, "Path", ctx.__shadowColor) : "",
			'</Path></Canvas>');
	return rv.join("");
}
function _radialGradientFill(ctx, obj, path, fill, zindex) {
	var rv = [], prop = fill ? "Fill" : "Stroke",
		fp = obj.param,
		zindex2 = 0,
		rr = fp.r1 * 2,
		x = fp.x1 - fp.r1,
		y = fp.y1 - fp.r1,
		gx = (fp.x0 - (fp.x1 - fp.r1)) / rr,
		gy = (fp.y0 - (fp.y1 - fp.r1)) / rr,
		m = uu.matrix2d.translate(x, y, ctx._matrix),
		tmpmtx = _matrix('Ellipse', m),
		v, bari = "";
	rv.push('<Canvas Canvas.ZIndex="', zindex, '">');
	if (fill) {
		if (obj.color.length) {
			v = obj.color[obj.color.length - 1];
			if (v.color.a > 0.001) {
				if (ctx.__mix === 4) {
					zindex2 = --ctx._zindex;
				}
				bari =  [ '<Path Opacity="', ctx.globalAlpha,
						 '" Canvas.ZIndex="', zindex2,
						 '" Data="', path, '" Fill="', v.color.argb, '" />'].join("");
				!ctx.xFlyweight &&
				 ctx._history.push(ctx._clipPath ? (bari = _clippy(ctx, bari)) : bari);
				ctx._state !== 0x1 ? ctx._stock.push(bari)
								 : ctx._view.add(ctx._content.createFromXaml(bari));
			}
		}
	}
	rv.push('<Ellipse Opacity="', ctx.globalAlpha,
			'" Width="', rr, '" Height="', rr,
			fill ? "" : _stroke(ctx),
			'"><Ellipse.', prop, '><RadialGradientBrush GradientOrigin="',
			gx, ',', gy,
			'" Center="0.5,0.5" RadiusX="0.5" RadiusY="0.5">',
			 obj.colors || _radialColor(obj),
			'</RadialGradientBrush></Ellipse.', prop, '>',
			 tmpmtx,
			 (ctx.__shadowColor.a && ctx.shadowBlur) ? _dropShadow(ctx, "Ellipse", ctx.__shadowColor) : "",
			'</Ellipse></Canvas>');
	return rv.join("");
}
function _patternFill(ctx, obj, path, fill, zindex) {
	var img = [], shadow, zindex2 = 0,
		sw, sh, xz, yz, x, y;
	if (fill) {
		x  = 0;
		y  = 0;
		sw = obj.dim.w;
		sh = obj.dim.h;
		xz = Math.ceil(parseInt(ctx.canvas.width)  / sw);
		yz = Math.ceil(parseInt(ctx.canvas.height) / sh);
		if (ctx.__mix === 4) {
			zindex2 = --ctx._zindex;
		}
		shadow = ctx.__shadowColor.a && ctx.shadowBlur ? _dropShadow(ctx, "Canvas", ctx.__shadowColor) : "";
		for (y = 0; y < yz; ++y) {
			for (x = 0; x < xz; ++x) {
				img.push('<Image Opacity="', ctx.globalAlpha,
						 '" Canvas.Left="', x * sw, '" Canvas.Top="', y * sh,
						 '" Source="', obj.src, '"></Image>');
			}
		}
		return uu.format('<Canvas Canvas.ZIndex="?"><Canvas Canvas.ZIndex="?" Clip="?">?</Canvas>?</Canvas>',
					 zindex, zindex2, path, img.join(""), shadow);
	}
	return ['<Canvas Canvas.ZIndex="', zindex,
			'"><Path Opacity="', ctx.globalAlpha,
			fill ? "" : _stroke(ctx),
			'" Data="', path,
			'"><Path.Stroke><ImageBrush Stretch="None" ImageSource="',
			obj.src,
			'" /></Path.Stroke>',
			(ctx.__shadowColor.a && ctx.shadowBlur) ? _dropShadow(ctx, "Path", ctx.__shadowColor) : "",
			'</Path></Canvas>'].join("");
}
function _clippy(ctx, fg) {
	return '<Canvas Clip="' + ctx._clipPath + '">' + fg + '</Canvas>';
}
function _linearColor(obj) {
	var rv = [], ary = obj.color, v, i = 0, iz = ary.length;
	for (; i < iz; ++i) {
		v = ary[i];
		rv.push('<GradientStop Color="' + v.color.argb +
				'" Offset="' + v.offset + '" />');
	}
	return obj.colors = rv.join("");
}
function _radialColor(obj) {
	var rv = [], ary = obj.color,  v, i = 0, iz = ary.length,
		fp = obj.param,
		r0 = fp.r0 / fp.r1,
		remain = 1 - r0;
	if (!iz) {
		return obj.colors = " ";
	}
	rv.push('<GradientStop Color="', ary[0].color.argb, '" Offset="0" />');
	for (i = 0; i < iz; ++i) {
		v = ary[i];
		rv.push('<GradientStop Color="' + v.color.argb +
				'" Offset="' + (v.offset * remain + r0) + '" />');
	}
	return obj.colors = rv.join("");
}
function _matrix(type, m) {
	return [
		'<', type,
		'.RenderTransform><MatrixTransform><MatrixTransform.Matrix><Matrix M11="',
				 m[0], '" M21="', m[3], '" OffsetX="', m[6],
		'" M12="', m[1], '" M22="', m[4], '" OffsetY="', m[7],
		'" /></MatrixTransform.Matrix></MatrixTransform></', type,
		'.RenderTransform>'].join("");
}
function _dropShadow(ctx, type, color) {
	var sdepth = 0,
		sx = ctx.shadowOffsetX,
		sy = ctx.shadowOffsetY;
	if (color.a) {
		sdepth = Math.max(Math.abs(sx), Math.abs(sy)) * 1.2;
		return ['<', type, '.Effect><DropShadowEffect Opacity="1" Color="', color.hex,
				'" BlurRadius="', ctx.shadowBlur * 1.2,
				'" Direction="', Math.atan2(-sy, sx) * _TO_DEGREES,
				'" ShadowDepth="', sdepth,
				'" /></', type, '.Effect>'].join("");
	}
	return "";
}
function _stroke(ctx) {
	var modify = 0;
	if (ctx.lineJoin !== ctx._lineJoin) {
		ctx._lineJoin = ctx.lineJoin;
		++modify;
	}
	if (ctx.lineWidth !== ctx._lineWidth) {
		ctx._lineWidth = ctx.lineWidth;
		ctx.__lineWidth = (ctx.lineWidth * ctx._lineScale).toFixed(2);
		++modify;
	}
	if (ctx.miterLimit !== ctx._miterLimit) {
		ctx._miterLimit = ctx.miterLimit;
		++modify;
	}
	if (ctx.lineCap !== ctx._lineCap) {
		ctx._lineCap = ctx.lineCap;
		ctx.__lineCap = (ctx.lineCap === "butt") ? "flat" : ctx.lineCap;
		++modify;
	}
	if (modify) {
		ctx._strokeCache =
				'" StrokeLineJoin="'     + ctx._lineJoin +
				'" StrokeThickness="'    + ctx.__lineWidth +
				'" StrokeMiterLimit="'   + ctx._miterLimit +
				'" StrokeStartLineCap="' + ctx.__lineCap +
				'" StrokeEndLineCap="'   + ctx.__lineCap;
	}
	return ctx._strokeCache;
}
uu.ie && uu.ver.silverlight && uu.lazy("init", function() {
	uu.id("xaml") || doc.head.appendChild(uu.mix(uu.node("script"), {
			id:   "xaml",
			type: "text/xaml",
			text: '<Canvas xmlns="http://schemas.microsoft.com/client/2007" ' +
						 'xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"></Canvas>'
	}));
}, 2);
})(window, document, uu);

uu.canvas.VML.init || (function(win, doc, uu) {
var _COMPOS = { "source-over": 0, "destination-over": 4, copy: 10 },
	_FILTER = uu.ver.ie8 ? ["-ms-filter:'progid:DXImageTransform.Microsoft.", "'"]
						 : ["filter:progid:DXImageTransform.Microsoft.", ""],
	_CLIPPY         = '<v:shape style="position:absolute;width:10px;height:10px" filled="t" stroked="f" coordsize="100,100" path="?"><v:fill type="solid" color="?" /></v:shape>',
	_COLOR_FILL     = '<v:shape style="position:absolute;width:10px;height:10px;z-index:?" filled="t" stroked="f" coordsize="100,100" path="?"><v:fill color="?" opacity="?" /></v:shape>',
	_COLOR_STROKE   = '<v:shape style="position:absolute;width:10px;height:10px;z-index:?" filled="f" stroked="t" coordsize="100,100" path="?"><v:stroke color="?" opacity="?" /></v:shape>',
	_IMAGE_FILL     = '<v:shape style="position:absolute;width:10px;height:10px;z-index:?;left:?px;top:?px" filled="t" stroked="f" coordsize="100,100" path="?"><v:fill type="tile" opacity="?" src="?" /></v:shape>',
	_IMAGE_SHADOW   = '<v:shape style="position:absolute;width:10px;height:10px;z-index:?;left:?px;top:?px" filled="t" stroked="f" coordsize="100,100" path="?"><v:fill color="?" opacity="?" /></v:shape>',
	_LINER_FILL     = '<v:shape style="position:absolute;width:10px;height:10px;z-index:?" coordsize="100,100" filled="t" stroked="f" path="?"><v:fill type="gradient" method="sigma" focus="0%" opacity="?" angle="?" /></v:shape>',
	_LINER_STROKE   = '<v:shape style="position:absolute;width:10px;height:10px;z-index:?" coordsize="100,100" filled="f" stroked="t" path="?"><v:stroke filltype="solid" opacity="?" angle="?" /></v:shape>',
	_RADIAL_FILL    = '<v:oval style="position:absolute;z-index:?;left:?px;top:?px;width:?px;height:?px" filled="t" stroked="f" coordsize="11000,11000"><v:fill type="gradientradial" method="sigma" opacity="?" /></v:oval>',
	_RADIAL_STROKE  = '<v:oval style="position:absolute;z-index:?;left:?px;top:?px;width:?px;height:?px" filled="f" stroked="t" coordsize="11000,11000"><v:stroke filltype="tile" opacity="?" /></v:oval>',
	_PATTERN_FILL   = '<v:shape style="position:absolute;width:10px;height:10px;z-index:?;left:?px;top:?px" coordsize="100,100" filled="t" stroked="f" path="?"><v:fill type="?" opacity="?" /></v:shape>',
	_PATTERN_STROKE = '<v:shape style="position:absolute;width:10px;height:10px;z-index:?;left:?px;top:?px" coordsize="100,100" filled="f" stroked="t" path="?"><v:stroke filltype="?" opacity="?" /></v:shape>';
uu.mix(uu.canvas.VML.prototype, {
	arc:                    arc,
	arcTo: uu.nop,
	beginPath:              beginPath,
	bezierCurveTo:          bezierCurveTo,
	clear:                  clear,
	clearRect:              clearRect,
	clip:                   clip,
	closePath:              closePath,
	createImageData: uu.nop,
	createLinearGradient:   createLinearGradient,
	createPattern:          createPattern,
	createRadialGradient:   createRadialGradient,
	drawCircle:             drawCircle,
	drawImage:              drawImage,
	drawRoundRect:          drawRoundRect,
	fill:                   fill,
	fillRect:               fillRect,
	fillText:               fillText,
	getImageData: uu.nop,
	isPointInPath: uu.nop,
	lineTo:                 lineTo,
	lock:                   lock,
	measureText:            measureText,
	moveTo:                 moveTo,
	putImageData: uu.nop,
	quadraticCurveTo:       quadraticCurveTo,
	rect:                   rect,
	restore:                restore,
	rotate:                 rotate,
	save:                   save,
	scale:                  scale,
	setTransform:           setTransform,
	stroke:                 stroke,
	strokeRect:             strokeRect,
	strokeText:             strokeText,
	transform:              transform,
	translate:              translate,
	unlock:                 unlock
});
uu.canvas.VML.init = init;
uu.canvas.VML.build = build;
function init(ctx, node) {
	initSurface(ctx);
	ctx.canvas = node;
	ctx._view = node.appendChild(uu.node());
	ctx._view.uuCanvasDirection = node.currentStyle.direction;
	ctx._view.style.cssText     = "overflow:hidden;position:absolute;direction:ltr";
	ctx._view.style.pixelWidth  = node.width;
	ctx._view.style.pixelHeight = node.height;
	ctx._clipRect = _rect(ctx, 0, 0, node.width, node.height);
	ctx._state = 1;
}
function build(canvas) {
	var ctx;
	canvas.getContext = function() {
		return ctx;
	};
	canvas.toDataURL = function() {
		return "data:,";
	};
	ctx = new uu.canvas.VML(canvas);
	function onFocus(evt) {
		var div = evt.srcElement,
			canvas = div.parentNode;
		div.blur();
		canvas.focus();
	}
	function onPropertyChange(evt) {
		var attr = evt.propertyName, width, height;
		if (attr === "width" || attr === "height") {
			initSurface(ctx);
			width  = parseInt(canvas.width);
			height = parseInt(canvas.height);
			canvas.style.pixelWidth  = width  < 0 ? 0 : width;
			canvas.style.pixelHeight = height < 0 ? 0 : height;
			ctx._view.style.pixelWidth  = width  < 0 ? 0 : width;
			ctx._view.style.pixelHeight = height < 0 ? 0 : height;
			ctx._clipRect = _rect(ctx, 0, 0, width, height);
			ctx.clear();
		}
	}
	canvas.firstChild.attachEvent("onfocus", onFocus);
	canvas.attachEvent("onpropertychange", onPropertyChange);
	win.attachEvent("onunload", function() {
		canvas.getContext = canvas.toDataURL = null;
		win.detachEvent("onunload", arguments.callee);
		canvas.detachEvent("onfocus", onFocus);
		canvas.detachEvent("onpropertychange", onPropertyChange);
	});
	return canvas;
}
function initSurface(ctx) {
	ctx.globalAlpha     = 1;
	ctx.globalCompositeOperation = "source-over";
	ctx.strokeStyle     = "black";
	ctx.fillStyle       = "black";
	ctx.lineWidth       = 1;
	ctx.lineCap         = "butt";
	ctx.lineJoin        = "miter";
	ctx.miterLimit      = 10;
	ctx.shadowBlur      = 0;
	ctx.shadowColor     = "transparent";
	ctx.shadowOffsetX   = 0;
	ctx.shadowOffsetY   = 0;
	ctx.font            = "10px sans-serif";
	ctx.textAlign       = "start";
	ctx.textBaseline    = "alphabetic";
	ctx.px              = 0;
	ctx.py              = 0;
	ctx._stack          = [];
	ctx._stock          = [];
	ctx._lineScale      = 1;
	ctx._scaleX         = 1;
	ctx._scaleY         = 1;
	ctx._zindex         = -1;
	ctx._matrixEffected = 0;
	ctx._matrix         = [1, 0, 0,  0, 1, 0,  0, 0, 1];
	ctx._history        = [];
	ctx._path           = [];
	ctx._clipStyle      = 0;
	ctx._clipPath       = null;
	ctx._clipRect       = null;
	ctx.xBackend        = "VML";
	ctx.xFlyweight      = 0;
	ctx.xMissColor      = "black";
	ctx.xTextMarginTop  = 1.3;
}
function _copyprop(to, from) {
	to.globalAlpha      = from.globalAlpha;
	to.globalCompositeOperation = from.globalCompositeOperation;
	to.strokeStyle      = from.strokeStyle;
	to.fillStyle        = from.fillStyle;
	to.lineWidth        = from.lineWidth;
	to.lineCap          = from.lineCap;
	to.lineJoin         = from.lineJoin;
	to.miterLimit       = from.miterLimit;
	to.shadowBlur       = from.shadowBlur;
	to.shadowColor      = from.shadowColor;
	to.shadowOffsetX    = from.shadowOffsetX;
	to.shadowOffsetY    = from.shadowOffsetY;
	to.font             = from.font;
	to.textAlign        = from.textAlign;
	to.textBaseline     = from.textBaseline;
	to._lineScale       = from._lineScale;
	to._scaleX          = from._scaleX;
	to._scaleY          = from._scaleY;
	to._matrixEffected  = from._matrixEffected;
	to._matrix          = from._matrix.concat();
	to._clipPath        = from._clipPath;
	return to;
}
function arc(x, y, radius, startAngle, endAngle, anticlockwise) {
	radius *= 10;
	var x1 = x + (Math.cos(startAngle) * radius) - 5,
		y1 = y + (Math.sin(startAngle) * radius) - 5,
		x2 = x + (Math.cos(endAngle)   * radius) - 5,
		y2 = y + (Math.sin(endAngle)   * radius) - 5,
		c0, c1, rx, ry;
	if (!anticlockwise) {
		if (x1.toExponential(5) === x2.toExponential(5)) {
			x1 += 0.125;
		}
		if (y1.toExponential(5) === y2.toExponential(5)) {
			y1 += 0.125;
		}
	}
	c0 = _map2(this._matrix, x1, y1, x2, y2);
	c1 = _map(this._matrix, x, y);
	rx = this._scaleX * radius;
	ry = this._scaleY * radius;
	this._path.push(anticlockwise ? "at " : "wa ",
					(c1.x - rx) | 0, " ", (c1.y - ry) | 0, " ",
					(c1.x + rx) | 0, " ", (c1.y + ry) | 0, " ",
					c0.x1, " ", c0.y1, " ",
					c0.x2, " ", c0.y2);
}
	/*
	 *  The original writer in code block is mindcat.
	 *
	 *  http://d.hatena.ne.jp/mindcat/20100131/
	 */
/*
	var m = this._matrix,
		_x0 = this.px,
		_y0 = this.py,
		_x1 = x1,
		_y1 = y1,
		_x2 = x2,
		_y2 = y2,
		x0, y0, a1, b1, a2, b2, mm,
		dd, cc, tt, k1, k2, j1, j2, cx, cy, px, py, qx, qy,
		ang1, ang2;
	x0 = (_x0 * m[0] + _y0 * m[3] + m[6]) * 10 - 5;
	y0 = (_x0 * m[1] + _y0 * m[4] + m[7]) * 10 - 5;
	x1 = (_x1 * m[0] + _y1 * m[3] + m[6]) * 10 - 5;
	y1 = (_x1 * m[1] + _y1 * m[4] + m[7]) * 10 - 5;
	x2 = (_x2 * m[0] + _y2 * m[3] + m[6]) * 10 - 5;
	y2 = (_x2 * m[1] + _y2 * m[4] + m[7]) * 10 - 5;
	a1 = y0 - y1;
	b1 = x0 - x1;
	a2 = y2 - y1;
	b2 = x2 - x1;
	mm = Math.abs(a1 * b2 - b1 * a2);
	if (!mm || !radius) {
		this.lineTo(x1, y1);
		return;
	}
	dd = a1 * a1 + b1 * b1;
	cc = a2 * a2 + b2 * b2;
	tt = a1 * a2 + b1 * b2;
	k1 = radius * Math.sqrt(dd) / mm;
	k2 = radius * Math.sqrt(cc) / mm;
	j1 = k1 * tt / dd;
	j2 = k2 * tt / cc;
	cx = k1 * b2 + k2 * b1;
	cy = k1 * a2 + k2 * a1;
	px = b1 * (k2 + j1);
	py = a1 * (k2 + j1);
	qx = b2 * (k1 + j2);
	qy = a2 * (k1 + j2);
	ang1 = Math.atan2(py - cy, px - cx);
	ang2 = Math.atan2(qy - cy, qx - cx);
	this.lineTo(px + x1, py + y1);
	this.arc(cx + x1, cy + y1, radius,
			 ang1, ang2, b1 * a2 > b2 * a1);
}
 */
function beginPath() {
	this._path = [];
}
function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
	var c0 = _map2(this._matrix, cp1x, cp1y, cp2x, cp2y),
		c1 = _map(this._matrix, x, y);
	this._path.length || this._path.push("m", c0.x1, " ", c0.y1);
	this._path.push("c ", c0.x1, " ", c0.y1, " ",
						 c0.x2, " ", c0.y2, " ", c1.x,  " ", c1.y);
	this.px = x;
	this.py = y;
}
function clear() {
	this.xFlyweight || (this._history = []);
	this._zindex = 0;
	this._view.innerHTML = "";
}
function clearRect(x, y, w, h) {
	w = parseInt(w);
	h = parseInt(h);
	if ((!x && !y && w >= this.canvas.width && h >= this.canvas.height)) {
		this.clear();
	} else {
		if (this.globalCompositeOperation !== this._mix) {
			this.__mix = _COMPOS[this._mix = this.globalCompositeOperation];
		}
		var color = uu.canvas.bgcolor(this.canvas),
			zindex = (this.__mix ===  4) ? --this._zindex
				 : (this.__mix === 10) ? (this.clear(), 0) : 0,
			fg = uu.format(_COLOR_FILL,
						zindex, _rect(this, x, y, w, h), color.hex,
						 (this.globalAlpha * color.a) + ' type="solid"');
		this.xFlyweight ||
			this._history.push(this._clipPath ? (fg = _clippy(this, fg)) : fg);
		this._view.insertAdjacentHTML("BeforeEnd", fg);
	}
}
function clip() {
	this._clipPath = this._clipRect + " x " + this._path.join("");
}
function closePath() {
	this._path.push(" x");
}
function createLinearGradient(x0, y0, x1, y1) {
	function CanvasGradient(x0, y0, x1, y1) {
		this.fn = _linearGradientFill;
		this.param = { x0: x0, y0: y0, x1: x1, y1: y1 };
		this.color = [];
		this.colors = "";
		this.addColorStop = addColorStop;
	}
	return new CanvasGradient(x0, y0, x1, y1);
}
function addColorStop(offset, color) {
	var i = 0, iz = this.color.length;
	if (iz && offset > 0 && offset < 1) {
		for (; i < iz; ++i) {
			if (this.color[i].offset === offset) {
				offset += 0.001;
			}
		}
	}
	this.color.push({ offset: 1 - offset, color: uu.color(color) });
	this.color.sort(function(a, b) {
		return a.offset - b.offset;
	});
}
function createPattern(image, repeat) {
	function CanvasPattern(image, repeat) {
		this.fn = _patternFill;
		this.src = image.src;
		this.dim = uu.img.size(image);
		this.type = 3;
		this.repeat = repeat;
	}
	repeat = repeat || "repeat";
	switch (repeat) {
	case "repeat": break;
	default: throw new Error("NOT_SUPPORTED_ERR");
	}
	if (!("src" in image)) {
		throw new Error("NOT_SUPPORTED_ERR");
	}
	return new CanvasPattern(image, repeat);
}
function createRadialGradient(x0, y0, r0, x1, y1, r1) {
	function CanvasGradient(x0, y0, r0, x1, y1, r1) {
		this.fn = _radialGradientFill;
		this.param = { x0: x0, y0: y0, r0: r0,
					 x1: x1, y1: y1, r1: r1 };
		this.color = [];
		this.colors = "";
		this.addColorStop = addColorStop;
	}
	return new CanvasGradient(x0, y0, r0, x1, y1, r1);
}
function drawCircle(x, y, radius, fillColor, strokeColor, lineWidth) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (fillColor || strokeColor) {
		var lw = lineWidth === void 0 ? 1 : lineWidth,
			fg = '<v:oval style="position:absolute;left:' + (x - radius) +
					'px;top:'       + (y - radius) +
					'px;width:'     + (radius * 2) +
					'px;height:'    + (radius * 2) +
					'px" filled="'  + (fillColor ? "t" : "f") +
					'" stroked="'   + (strokeColor ? "t" : "f") + '">';
		if (fillColor) {
			fg +=   '<v:fill opacity="' + (this.globalAlpha * fillColor.a) +
							'" color="' + fillColor.hex + '" />';
		}
		if (strokeColor && lw) {
			fg +=   '<v:stroke opacity="' + (this.globalAlpha * strokeColor.a) +
							'" color="' + strokeColor.hex +
							'" weight="' + lw + 'px" />';
		}
		fg += '</v:oval>';
		this._state !== 0x1 ? this._stock.push(fg)
							: this._view.insertAdjacentHTML("BeforeEnd", fg);
	}
}
function drawImage(image, a1, a2, a3, a4, a5, a6, a7, a8) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (this.shadowColor !== this._shadowColor) {
		this.__shadowColor = uu.color(this._shadowColor = this.shadowColor);
	}
	if (this.globalCompositeOperation !== this._mix) {
		this.__mix = _COMPOS[this._mix = this.globalCompositeOperation];
	}
	var dim = uu.img.size(image),
		args = arguments.length, full = (args === 9),
		sx = full ? a1 : 0,
		sy = full ? a2 : 0,
		sw = full ? a3 : dim.w,
		sh = full ? a4 : dim.h,
		dx = full ? a5 : a1,
		dy = full ? a6 : a2,
		dw = full ? a7 : a3 || dim.w,
		dh = full ? a8 : a4 || dim.h,
		rv = [], fg, m,
		history,
		frag = [], tfrag,
		i = 0, iz, c0,
		zindex = (this.__mix ===  4) ? --this._zindex
			 : (this.__mix === 10) ? (this.clear(), 0) : 0,
		renderShadow = this.__shadowColor.a && this.shadowBlur,
		sizeTrans;
	if (image.src) {
		if (!this._matrixEffected) {
			if (this.__shadowColor.a && this.shadowBlur) {
				rv.push(uu.format(_IMAGE_SHADOW,
							zindex, dx + (this.shadowOffsetX + 1),
									 dy + (this.shadowOffsetY + 1),
							 _rect(this, 0, 0, dw, dh),
							 this.__shadowColor.hex,
							 (this.globalAlpha / Math.sqrt(this.shadowBlur) * 0.5)));
			}
			if (args === 3 && this.globalAlpha !== 1) {
				rv.push(uu.format(_IMAGE_FILL,
							 zindex, dx, dy, _rect(this, 0, 0, dw, dh),
							 this.globalAlpha, image.src));
			} else {
				rv.push(
					'<v:image style="position:absolute;z-index:', zindex,
					';width:',      dw,
					'px;height:',   dh,
					'px;left:',     dx,
					'px;top:',      dy,
					'px" coordsize="100,100" src="', image.src,
					'" opacity="',  this.globalAlpha,
					'" cropleft="', sx / dim.w,
					'" croptop="',  sy / dim.h,
					'" cropright="',    (dim.w - sx - sw) / dim.w,
					'" cropbottom="',   (dim.h - sy - sh) / dim.h,
					'" />');
			}
		} else {
			c0 = _map(this._matrix, dx, dy);
			sizeTrans = (sx || sy);
			tfrag = this._matrixEffected ? _imageTransform(this, this._matrix, dx, dy, dw, dh) : '';
			frag = [
				'<div style="position:absolute;z-index:' + (zindex - 10) +
					';left:$1px;top:$2px' + tfrag + '">',
				'<div style="position:relative;overflow:hidden;width:' +
					Math.round(dw) + 'px;height:' + Math.round(dh) + 'px">',
				!sizeTrans ? "" : [
					'<div style="width:', Math.ceil(dw + sx * dw / sw),
						'px;height:', Math.ceil(dh + sy * dh / sh),
						'px;',
						_FILTER[0],
						'Matrix(Dx=', (-sx * dw / sw).toFixed(3),
							 ',Dy=', (-sy * dh / sh).toFixed(3), ')',
						_FILTER[1], '">'].join(""),
				'<div style="width:' + Math.round(dim.w * dw / sw) +
					'px;height:' + Math.round(dim.h * dh / sh) + 'px;',
				'background-color:' + this.__shadowColor.hex + ';' +
					_FILTER[0] + 'Alpha(opacity=$3)' + _FILTER[1],
				_FILTER[0] + 'AlphaImageLoader(src=' +
					image.src + ',SizingMethod=' +
					(args === 3 ? "image" : "scale") + ')' + _FILTER[1],
				'"></div>' +
					(sizeTrans ? '</div>' : '') + '</div></div>'
			];
			if (renderShadow) {
				fg = frag[0] + frag[1] + frag[2] + frag[3] + frag[4] + frag[6];
				rv.push(
					fg.replace(/\$1/, this._matrixEffected ? this.shadowOffsetX
														 : Math.round(c0.x * 0.1) + this.shadowOffsetX)
					 .replace(/\$2/, this._matrixEffected ? this.shadowOffsetY
														 : Math.round(c0.y * 0.1) + this.shadowOffsetY)
					 .replace(/\$3/, this.globalAlpha / Math.sqrt(this.shadowBlur) * 50));
			}
			rv.push('<div style="position:absolute;z-index:', zindex);
			if (this._matrixEffected) {
				rv.push(tfrag, '">');
			} else {
				rv.push(';top:', Math.round(c0.y * 0.1),
						'px;left:', Math.round(c0.x * 0.1), 'px">')
			}
			rv.push(frag[1], frag[2], frag[3], frag[5], frag[6]);
		}
		fg = rv.join("");
	} else {
		history = image.getContext("2d")._history;
		c0 = _map(this._matrix, dx, dy);
		switch (args) {
		case 3:
				rv.push('<div style="position:absolute;z-index:', zindex,
						';left:',  Math.round(c0.x * 0.1),
						'px;top:', Math.round(c0.y * 0.1), 'px">')
				iz = history.length;
				for (; i < iz; ++i) {
					rv.push(history[i]);
				}
				rv.push('</div>');
				break;
		case 5:
				m = uu.matrix2d.scale(dw / dim.w, dh / dim.h, this._matrix);
				rv.push('<div style="position:absolute;z-index:', zindex,
						_imageTransform(this, m, dx, dy, dw, dh),
						'"><div style="width:',  Math.round(dim.w * dw / sw),
								 'px;height:', Math.round(dim.h * dh / sh), 'px">');
				iz = history.length;
				for (; i < iz; ++i) {
					rv.push(history[i]);
				}
				rv.push('</div></div>');
				break;
		case 9:
				m = uu.matrix2d.scale(dw / sw, dh / sh, this._matrix);
				rv.push('<div style="position:absolute;z-index:', zindex,
						';overflow:hidden',
						_imageTransform(this, m, dx, dy, dw, dh), '">');
				iz = history.length;
				for (; i < iz; ++i) {
					rv.push(history[i]);
				}
				rv.push('</div>');
				break;
		}
		fg = rv.join("");
	}
	this.xFlyweight ||
		this._history.push(this._clipPath ? (fg = _clippy(this, fg)) : fg);
	this._state !== 0x1 ? this._stock.push(fg)
						: this._view.insertAdjacentHTML("BeforeEnd", fg);
}
function _imageTransform(ctx, m, x, y, w, h) {
	var c0 = _map2(ctx._matrix, x, y, x + w, y),
		c1 = _map2(ctx._matrix, x + w, y + h, x, y + h);
	return [
		";padding:0 ",
		Math.round(Math.max(c0.x1, c0.x2, c1.x1, c1.x2) / 10), "px ",
		Math.round(Math.max(c0.y1, c0.y2, c1.y1, c1.y2) / 10), "px 0;",
		_FILTER[0], "Matrix(M11=", m[0], ",M12=", m[3],
			 ",M21=", m[1], ",M22=", m[4],
			 ",Dx=", Math.round(c0.x1 / 10),
			 ",Dy=", Math.round(c0.y1 / 10), ")", _FILTER[1]
	].join("");
}
function drawRoundRect(x,
					 y,
					 width,
					 height,
					 radius,
					 fillColor,
					 strokeColor,
					 lineWidth) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (fillColor || strokeColor) {
		var lw = lineWidth === void 0 ? 1 : lineWidth,
			path, fg, ix, iy, iw, ih;
		if (!radius[0]
			&& radius[0] === radius[1]
			&& radius[0] === radius[2]
			&& radius[0] === radius[3]) {
			ix = x * 10 - 5;
			iy = y * 10 - 5;
			iw = (x + width)  * 10 - 5;
			ih = (y + height) * 10 - 5;
			path = ["m " + ix + " " + iy +
					"l " + ix + " " + ih +
					"l " + iw + " " + ih +
					"l " + iw + " " + iy +
					"l " + ix + " " + iy + "x"].join("");
		} else {
			path = _buildRoundRectPath(this, x, y, width, height, radius);
		}
		fg = '<v:shape style="position:absolute;width:10px;height:10px;z-index:0' +
				'" filled="'   + (fillColor         ? "t" : "f") +
				'" stroked="'  + (strokeColor && lw ? "t" : "f") +
				'" coordsize="100,100" path="' + path + '">';
		if (fillColor) {
			fg +=   '<v:fill opacity="' + (this.globalAlpha * fillColor.a) +
							'" color="' + fillColor.hex + '" />';
		}
		if (strokeColor && lw) {
			fg +=   '<v:stroke opacity="' + (this.globalAlpha * strokeColor.a) +
							'" color="' + strokeColor.hex +
							'" weight="' + lw + 'px" />';
		}
		fg += '</v:shape>';
		this._state !== 0x1 ? this._stock.push(fg)
							: this._view.insertAdjacentHTML("BeforeEnd", fg);
	}
}
function _buildRoundRectPath(ctx, x, y, width, height, radius) {
	var w = width,
		h = height,
		r0 = radius[0], r1 = radius[1],
		r2 = radius[2], r3 = radius[3],
		w2 = (width  / 2) | 0, h2 = (height / 2) | 0;
	r0 < 0 && (r0 = 0);
	r1 < 0 && (r1 = 0);
	r2 < 0 && (r2 = 0);
	r3 < 0 && (r3 = 0);
	(r0 >= w2 || r0 >= h2) && (r0 = Math.min(w2, h2) - 2);
	(r1 >= w2 || r1 >= h2) && (r1 = Math.min(w2, h2) - 2);
	(r2 >= w2 || r2 >= h2) && (r2 = Math.min(w2, h2) - 2);
	(r3 >= w2 || r3 >= h2) && (r3 = Math.min(w2, h2) - 2);
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(x, y + h2);
	ctx.lineTo(x, y + h - r3);
	ctx.quadraticCurveTo(x, y + h, x + r3, y + h);
	ctx.lineTo(x + w - r2, y + h);
	ctx.quadraticCurveTo(x + w, y + h, x + w, y + h - r2);
	ctx.lineTo(x + w, y + r1);
	ctx.quadraticCurveTo(x + w, y, x + w - r1, y);
	ctx.lineTo(x + r0, y);
	ctx.quadraticCurveTo(x, y, x, y + r0);
	ctx.closePath();
	ctx.restore();
	return ctx._path.join("");
}
function fill(path) {
	this.stroke(path, 1);
}
function fillRect(x, y, w, h) {
	var path = _rect(this, x, y, w, h);
	this.px = x;
	this.py = y;
	if (path === this._clipRect) {
		if (typeof this.fillStyle === "string") {
			this._clipStyle = uu.color(this.fillStyle);
		}
	}
	this.stroke(path, 1);
}
function fillText(text, x, y, maxWidth) {
	this.strokeText(text, x, y, maxWidth, 1);
}
function lineTo(x, y) {
	var m = this._matrix,
		ix = (x * m[0] + y * m[3] + m[6]) * 10 - 5,
		iy = (x * m[1] + y * m[4] + m[7]) * 10 - 5;
	ix = (ix+(ix<0?-0.49:0.5))|0;
	iy = (iy+(iy<0?-0.49:0.5))|0;
	this._path.length || this._path.push("m ", ix, " ", iy);
	this._path.push("l ", ix, " ", iy);
	this.px = x;
	this.py = y;
}
function lock(clearScreen) {
	if (this._state & 0x2) {
		throw new Error("DUPLICATE_LOCK");
	}
	this._state |= clearScreen ? 0x6 : 0x2;
}
function measureText(text) {
	var metric = uu.font.metric(this.font, text);
	return { width: metric.w, height: metric.h };
}
function moveTo(x, y) {
	var m = this._matrix,
		ix = (x * m[0] + y * m[3] + m[6]) * 10 - 5,
		iy = (x * m[1] + y * m[4] + m[7]) * 10 - 5;
	this._path.push("m ", (ix+(ix<0?-0.49:0.5))|0, " ",
						 (iy+(iy<0?-0.49:0.5))|0);
	this.px = x;
	this.py = y;
}
function quadraticCurveTo(cpx, cpy, x, y) {
	var cp1x = this.px + 2 / 3 * (cpx - this.px),
		cp1y = this.py + 2 / 3 * (cpy - this.py),
		cp2x = cp1x + (x - this.px) / 3,
		cp2y = cp1y + (y - this.py) / 3,
		m = this._matrix,
		m0 = m[0], m1 = m[1],
		m3 = m[3], m4 = m[4],
		m6 = m[6], m7 = m[7],
		c0x = (x    * m0 + y    * m3 + m6) * 10 - 5,
		c0y = (x    * m1 + y    * m4 + m7) * 10 - 5,
		c1x = (cp1x * m0 + cp1y * m3 + m6) * 10 - 5,
		c1y = (cp1x * m1 + cp1y * m4 + m7) * 10 - 5,
		c2x = (cp2x * m0 + cp2y * m3 + m6) * 10 - 5,
		c2y = (cp2x * m1 + cp2y * m4 + m7) * 10 - 5;
	cpx = (c1x+(c1x<0?-0.49:0.5))|0;
	cpy = (c1y+(c1y<0?-0.49:0.5))|0;
	this._path.length || this._path.push("m ", cpx, " ", cpy);
	this._path.push("c ", cpx, " ", cpy, " ",
		(c2x+(c2x<0?-0.49:0.5))|0, " ", (c2y+(c2y<0?-0.49:0.5))|0, " ",
		(c0x+(c0x<0?-0.49:0.5))|0, " ", (c0y+(c0y<0?-0.49:0.5))|0);
	this.px = x;
	this.py = y;
}
function rect(x, y, w, h) {
	this._path.push(_rect(this, x, y, w, h));
	this.px = x;
	this.py = y;
}
function _rect(ctx, x, y, w, h) {
	var m = ctx._matrix,
		m0 = m[0], m1 = m[1],
		m3 = m[3], m4 = m[4],
		m6 = m[6], m7 = m[7],
		xw = x + w,
		yh = y + h,
		c0x = (x  * m0 + y  * m3 + m6) * 10 - 5,
		c0y = (x  * m1 + y  * m4 + m7) * 10 - 5,
		c1x = (xw * m0 + y  * m3 + m6) * 10 - 5,
		c1y = (xw * m1 + y  * m4 + m7) * 10 - 5,
		c2x = (xw * m0 + yh * m3 + m6) * 10 - 5,
		c2y = (xw * m1 + yh * m4 + m7) * 10 - 5,
		c3x = (x  * m0 + yh * m3 + m6) * 10 - 5,
		c3y = (x  * m1 + yh * m4 + m7) * 10 - 5;
	return [" m", (c0x+(c0x<0?-0.49:0.5))|0, " ", (c0y+(c0y<0?-0.49:0.5))|0,
			" l", (c1x+(c1x<0?-0.49:0.5))|0, " ", (c1y+(c1y<0?-0.49:0.5))|0,
			" l", (c2x+(c2x<0?-0.49:0.5))|0, " ", (c2y+(c2y<0?-0.49:0.5))|0,
			" l", (c3x+(c3x<0?-0.49:0.5))|0, " ", (c3y+(c3y<0?-0.49:0.5))|0,
			" x"].join("");
}
function restore() {
	this._stack.length && _copyprop(this, this._stack.pop());
}
function rotate(angle) {
	this._matrixEffected = 1;
	this._matrix = uu.matrix2d.rotate(angle, this._matrix);
}
function save() {
	var prop = _copyprop({}, this);
	prop._clipPath = this._clipPath ? String(this._clipPath) : null;
	this._stack.push(prop);
}
function scale(x, y) {
	this._matrixEffected = 1;
	this._matrix = uu.matrix2d.scale(x, y, this._matrix);
	this._scaleX *= x;
	this._scaleY *= y;
	this._lineScale = (this._matrix[0] + this._matrix[4]) / 2;
}
function setTransform(m11, m12, m21, m22, dx, dy) {
	this._matrixEffected = 1;
	if (m11 === 1 && !m12 && m22 === 1 && !m21 && !dx && !dy) {
		this._matrixEffected = 0;
	}
	this._matrix = [m11, m12, 0,  m21, m22, 0,  dx, dy, 1];
}
function stroke(path, fill) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (this.shadowColor !== this._shadowColor) {
		this.__shadowColor = uu.color(this._shadowColor = this.shadowColor);
	}
	if (this.strokeStyle !== this._strokeStyle) {
		if (typeof this.strokeStyle === "string") {
			this.__strokeStyle = uu.color(this._strokeStyle = this.strokeStyle);
		}
	}
	if (this.fillStyle !== this._fillStyle) {
		if (typeof this.fillStyle === "string") {
			this.__fillStyle = uu.color(this._fillStyle = this.fillStyle);
		}
	}
	if (this.globalCompositeOperation !== this._mix) {
		this.__mix = _COMPOS[this._mix = this.globalCompositeOperation];
	}
	path = path || this._path.join("");
	var fg = "", strokeProps,
		zindex = (this.__mix ===  4) ? --this._zindex
			 : (this.__mix === 10) ? (this.clear(), 0) : 0,
		color = fill ? this.fillStyle : this.strokeStyle;
	if (typeof color !== "string") {
		fg = color.fn(this, color, path, fill, zindex);
	} else {
		strokeProps = fill ? "" : _stroke(this);
		color = fill ? this.__fillStyle : this.__strokeStyle;
		if (this.__shadowColor.a && this.shadowBlur) {
			fg = uu.format(fill ? _COLOR_FILL : _COLOR_STROKE,
						 zindex + ";left:" + (this.shadowOffsetX + 1) + "px;top:" +
											 (this.shadowOffsetY + 1) + "px",
						 path, this.__shadowColor.hex,
						 (this.globalAlpha / Math.sqrt(this.shadowBlur) * 0.5) + strokeProps);
		}
		if (fill) {
			fg += '<v:shape style="position:absolute;width:10px;height:10px;z-index:' + zindex +
					'" filled="t" stroked="f" coordsize="100,100" path="' + path +
					'"><v:fill color="' + color.hex +
					'" opacity="' + (this.globalAlpha * color.a) + '" /></v:shape>';
		} else {
			fg += '<v:shape style="position:absolute;width:10px;height:10px;z-index:' + zindex +
					'" filled="f" stroked="t" coordsize="100,100" path="' + path +
					'"><v:stroke color="' + color.hex +
					'" opacity="' + (this.globalAlpha * color.a) + strokeProps + '" /></v:shape>';
		}
	}
	this.xFlyweight ||
		this._history.push(this._clipPath ? (fg = _clippy(this, fg)) : fg);
	this._state !== 0x1 ? this._stock.push(fg)
						: this._view.insertAdjacentHTML("BeforeEnd", fg);
}
function strokeRect(x, y, w, h) {
	this.stroke(_rect(this, x, y, w, h));
}
function strokeText(text, x, y, maxWidth, fill) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (this.shadowColor !== this._shadowColor) {
		this.__shadowColor = uu.color(this._shadowColor = this.shadowColor);
	}
	if (this.strokeStyle !== this._strokeStyle) {
		if (typeof this.strokeStyle === "string") {
			this.__strokeStyle = uu.color(this._strokeStyle = this.strokeStyle);
		}
	}
	if (this.fillStyle !== this._fillStyle) {
		if (typeof this.fillStyle === "string") {
			this.__fillStyle = uu.color(this._fillStyle = this.fillStyle);
		}
	}
	if (this.globalCompositeOperation !== this._mix) {
		this.__mix = _COMPOS[this._mix = this.globalCompositeOperation];
	}
	text = text.replace(/(\t|\v|\f|\r\n|\r|\n)/g, " ");
	var style = fill ? this.fillStyle : this.strokeStyle,
		zindex = (this.__mix ===  4) ? --this._zindex
			 : (this.__mix === 10) ? (this.clear(), 0) : 0,
		rv = [], fg, color,
		align = this.textAlign, dir = "ltr",
		font = uu.font.parse(this.font, this.canvas),
		m = this._matrix,
		fp, c0,
		skew = m[0].toFixed(3) + ',' + m[3].toFixed(3) + ',' +
			 m[1].toFixed(3) + ',' + m[4].toFixed(3) + ',0,0',
		skewOffset,
		delta = 1000, left = 0, right = delta,
		offset = { x: 0, y: 0 },
		blur;
	switch (align) {
	case "end": dir = "rtl";
	case "start":
		align = this._view.uuCanvasDirection === dir ? "left" : "right"
	}
	switch (align) {
	case "center": left = right = delta / 2; break;
	case "right":  left = delta, right = 0.05;
	}
	if (this.textBaseline === "top") {
		offset.y = font.size /
			(uu.font.SCALE[font.rawfamily.split(",")[0].toUpperCase()] ||
			 this.xTextMarginTop);
	}
	skewOffset = _map(this._matrix, x + offset.x, y + offset.y);
	if (this.__shadowColor.a && this.shadowBlur) {
		blur = Math.sqrt(this.shadowBlur);
		rv.push('<v:line style="position:absolute;z-index:', zindex,
				';width:1px;height:1px;left:', this.shadowOffsetX + 1,
				'px;top:', this.shadowOffsetY + 1, 'px',
				'" filled="t" stroked="f" from="', -left, ' 0" to="', right,
				' 0.05" coordsize="100,100"><v:fill color="', this.__shadowColor.hex,
				'" opacity="', (this.globalAlpha / blur).toFixed(3),
				'" /><v:skew on="t" matrix="', skew,
				'" offset="', Math.round(skewOffset.x / 10), ',',
							 Math.round(skewOffset.y / 10),
				'" origin="', left,
				' 0" /><v:path textpathok="t" /><v:textpath on="t" string="',
				uu.codec.entity.encode(text),
				'" style="v-text-align:', align,
				';font:', uu.codec.entity.encode(font.formal), '" /></v:line>');
	}
	rv.push('<v:line style="position:absolute;z-index:', zindex,
			';width:1px;height:1px" filled="t" stroked="f" from="', -left,
			' 0" to="', right, ' 0.05" coordsize="100,100">');
	if (typeof style === "string") {
		color = fill ? this.__fillStyle : this.__strokeStyle;
		rv.push('<v:fill color="', color.hex,
				'" opacity="', (color.a * this.globalAlpha).toFixed(2), '" />');
	} else if (style.fn === _patternFill) {
		rv.push('<v:fill position="0,0" type="tile" src="', style.src, '" />');
	} else {
		fp = style.param;
		c0 = _map2(this._matrix, fp.x0, fp.y0, this._matrix, fp.x1, fp.y1);
		rv.push('<v:fill type="gradient" method="sigma" focus="0%" colors="',
				style.colors || _gradationColor(style),
				'" opacity="', this.globalAlpha,
				'" o:opacity2="', this.globalAlpha,
				'" angle="',
				Math.atan2(c0.x2 - c0.x1, c0.y2 - c0.y1) * 180 / Math.PI,
				'" />');
	}
	rv.push('<v:skew on="t" matrix="', skew,
			'" offset="', Math.round(skewOffset.x / 10), ',',
						 Math.round(skewOffset.y / 10),
			'" origin="', left,
			' 0" /><v:path textpathok="t" /><v:textpath on="t" string="',
			uu.codec.entity.encode(text),
			'" style="v-text-align:', align,
			';font:', uu.codec.entity.encode(font.formal),
			'" /></v:line>');
	fg = rv.join("");
	this.xFlyweight ||
		this._history.push(this._clipPath ? (fg = _clippy(this, fg)) : fg);
	this._state !== 0x1 ? this._stock.push(fg)
						: this._view.insertAdjacentHTML("BeforeEnd", fg);
}
function transform(m11, m12, m21, m22, dx, dy) {
	this._matrixEffected = 1;
	this._matrix = uu.matrix2d.transform(m11, m12, m21, m22, dx, dy, this._matrix);
}
function translate(x, y) {
	this._matrixEffected = 1;
	this._matrix = uu.matrix2d.translate(x, y, this._matrix);
}
function unlock() {
	switch (this._state) {
	case 0x7:
			this.xFlyweight || (this._history = []);
			this._zindex = 0;
			this._view.innerHTML = "";
	case 0x3:
			this._state = 0x1;
			if (this._stock.length) {
				this._view.insertAdjacentHTML("BeforeEnd", this._stock.join(""));
				this._stock = [];
			}
	}
}
function _map(m, x, y) {
	return {
		x: Math.round((x * m[0] + y * m[3] + m[6]) * 10 - 5),
		y: Math.round((x * m[1] + y * m[4] + m[7]) * 10 - 5)
	};
}
function _map2(m, x1, y1, x2, y2) {
	return {
		x1: Math.round((x1 * m[0] + y1 * m[3] + m[6]) * 10 - 5),
		y1: Math.round((x1 * m[1] + y1 * m[4] + m[7]) * 10 - 5),
		x2: Math.round((x2 * m[0] + y2 * m[3] + m[6]) * 10 - 5),
		y2: Math.round((x2 * m[1] + y2 * m[4] + m[7]) * 10 - 5)
	};
}
function _linearGradientFill(ctx, obj, path, fill, zindex) {
	var fg = "", fp = obj.param,
		c0 = _map2(ctx._matrix, fp.x0, fp.y0, fp.x1, fp.y1),
		angle = Math.atan2(c0.x2 - c0.x1, c0.y2 - c0.y1) * 180 / Math.PI,
		color, strokeProps = fill ? "" : _stroke(ctx);
	angle < 0 && (angle += 360);
	if (ctx.__shadowColor.a && ctx.shadowBlur) {
		fg = uu.format(fill ? _LINER_FILL : _LINER_STROKE,
					 zindex + ";left:" + (ctx.shadowOffsetX + 1) + "px;top:" +
										 (ctx.shadowOffsetY + 1) + "px",
					 path, (ctx.globalAlpha / Math.sqrt(ctx.shadowBlur) * 0.5),
					 angle + '" color="' + ctx.__shadowColor.hex + strokeProps);
	}
	color = fill ? ('" colors="' + (obj.colors || _gradationColor(obj)))
				 : ('" color="'  + uu.color(ctx.xMissColor).hex);
	return fg + uu.format(fill ? _LINER_FILL : _LINER_STROKE,
						zindex, path, ctx.globalAlpha,
						angle + strokeProps + color + '" o:opacity2="' + ctx.globalAlpha);
}
function _radialGradientFill(ctx, obj, path, fill, zindex) {
	var rv = [], v, more,
		fp = obj.param, fsize, fposX, fposY,
		zindex2 = 0,
		x = fp.x1 - fp.r1,
		y = fp.y1 - fp.r1,
		r1x = fp.r1 * ctx._scaleX,
		r1y = fp.r1 * ctx._scaleY,
		c0 = _map(ctx._matrix, x, y),
		strokeProps = fill ? "" : _stroke(ctx);
	if (fill) {
		fsize = (fp.r0 / fp.r1);
		fposX = (1 - fsize + (fp.x0 - fp.x1) / fp.r1) / 2;
		fposY = (1 - fsize + (fp.y0 - fp.y1) / fp.r1) / 2;
	}
	if (ctx.__shadowColor.a && ctx.shadowBlur) {
		more = fill ? uu.format('" color="?" focussize="?,?" focusposition="?,?',
							 ctx.__shadowColor.hex, fsize, fsize, fposX, fposY)
					: uu.format('" color="??', ctx.__shadowColor.hex, strokeProps);
		rv.push(uu.format(fill ? _RADIAL_FILL : _RADIAL_STROKE,
						zindex,
						Math.round(c0.x / 10) + ctx.shadowOffsetX + 1,
						Math.round(c0.y / 10) + ctx.shadowOffsetY + 1, r1x, r1y,
						(ctx.globalAlpha / Math.sqrt(ctx.shadowBlur) * 0.5) + more));
	}
	if (fill) {
		if (obj.color.length) {
			v = obj.color[0];
			if (v.color.a > 0.001) {
				if (ctx.__mix === 4) { zindex2 = --ctx._zindex; }
				rv.push('<v:shape style="position:absolute;width:10px;height:10px;z-index:', zindex2,
						'" filled="t" stroked="f" coordsize="100,100" path="', path,
						'"><v:fill type="solid" color="', v.color.hex,
						'" opacity="', (ctx.globalAlpha * v.color.a).toFixed(3),
						'" /></v:shape>');
			}
		}
	}
	more = fill ? uu.format('" o:opacity2="?" colors="?" focussize="?,?" focusposition="?,?',
						 ctx.globalAlpha, obj.colors || _gradationColor(obj),
						 fsize, fsize, fposX, fposY)
				: uu.format('" color="??', uu.color(ctx.xMissColor).hex, strokeProps);
	rv.push(uu.format(fill ? _RADIAL_FILL : _RADIAL_STROKE,
					zindex,
					Math.round(c0.x / 10),
					Math.round(c0.y / 10), r1x, r1y,
					ctx.globalAlpha + more));
	return rv.join("");
}
function _patternFill(ctx, obj, path, fill, zindex) {
	var fg = "", strokeProps = fill ? "" : _stroke(ctx);
	if (ctx.__shadowColor.a && ctx.shadowBlur) {
		fg = uu.format(fill ? _PATTERN_FILL : _PATTERN_STROKE,
					 zindex, ctx.shadowOffsetX + 1,
							 ctx.shadowOffsetY + 1,
					 path, "solid",
					 (ctx.globalAlpha / Math.sqrt(ctx.shadowBlur) * 0.5) +
					 '" color="' + ctx.__shadowColor.hex + strokeProps);
	}
	return fg + uu.format(fill ? _PATTERN_FILL : _PATTERN_STROKE,
						zindex, 0, 0, path, "tile",
						ctx.globalAlpha + '" src="' + obj.src + strokeProps);
}
function _clippy(ctx, fg) {
	if (!ctx._clipStyle) {
		ctx._clipStyle = uu.canvas.bgcolor(ctx.canvas);
	}
	return fg + uu.format(_CLIPPY, ctx._clipPath, ctx._clipStyle.hex);
}
function _gradationColor(obj) {
	var rv = [], ary = obj.color, i = 0, iz = ary.length;
	for (; i < iz; ++i) {
		rv.push(ary[i].offset + " " + ary[i].color.hex);
	}
	return obj.colors = rv.join(",");
}
function _stroke(ctx) {
	var modify = 0;
	if (ctx.lineJoin !== ctx._lineJoin) {
		ctx._lineJoin = ctx.lineJoin;
		++modify;
	}
	if (ctx.lineWidth !== ctx._lineWidth) {
		ctx._lineWidth = ctx.lineWidth;
		ctx.__lineWidth = (ctx.lineWidth * ctx._lineScale).toFixed(2);
		++modify;
	}
	if (ctx.miterLimit !== ctx._miterLimit) {
		ctx._miterLimit = ctx.miterLimit;
		++modify;
	}
	if (ctx.lineCap !== ctx._lineCap) {
		ctx._lineCap = ctx.lineCap;
		ctx.__lineCap = (ctx.lineCap === "butt") ? "flat" : ctx.lineCap;
		++modify;
	}
	if (modify) {
		ctx._strokeCache =
				'" joinstyle="'  + ctx._lineJoin +
				'" miterlimit="' + ctx._miterLimit +
				'" weight="'     + ctx.__lineWidth +
				'px" endcap="'   + ctx.__lineCap;
	}
	return ctx._strokeCache;
}
uu.ie && uu.lazy("init", function() {
	var ss = doc.createStyleSheet(), ns = doc.namespaces;
	if (!ns["v"]) {
		ns.add("v", "urn:schemas-microsoft-com:vml",           "#default#VML");
		ns.add("o", "urn:schemas-microsoft-com:office:office", "#default#VML");
	}
	ss.owningElement.id = "uucss3ignore";
	ss.cssText =
		"canvas{display:inline-block;text-align:left;width:300px;height:150px}" +
		"v\:oval,v\:shape,v\:stroke,v\:fill,v\:textpath," +
		"v\:image,v\:line,v\:skew,v\:path,o\:opacity2" +
		"{behavior:url(#default#VML);display:inline-block}";
}, 0);
})(window, document, uu);

uu.canvas.Flash.init || (function(win, doc, uu) {
uu.mix(uu.canvas.Flash.prototype, {
	arc:                    arc,
	arcTo: uu.nop,
	beginPath:              beginPath,
	bezierCurveTo:          bezierCurveTo,
	clear:                  clear,
	clearRect:              clearRect,
	clip:                   clip,
	closePath:              closePath,
	createImageData:        createImageData,
	createLinearGradient:   createLinearGradient,
	createPattern:          createPattern,
	createRadialGradient:   createRadialGradient,
	drawCircle:             drawCircle,
	drawImage:              drawImage,
	drawRoundRect:          drawRoundRect,
	fill:                   fill,
	fillRect:               fillRect,
	fillText:               fillText,
	getImageData:           getImageData,
	isPointInPath:          isPointInPath,
	lineTo:                 lineTo,
	lock:                   lock,
	measureText:            measureText,
	moveTo:                 moveTo,
	putImageData:           putImageData,
	quadraticCurveTo:       quadraticCurveTo,
	rect:                   rect,
	restore:                restore,
	rotate:                 rotate,
	save:                   save,
	scale:                  scale,
	setTransform:           setTransform,
	stroke:                 stroke,
	strokeRect:             strokeRect,
	strokeText:             strokeText,
	transform:              transform,
	translate:              translate,
	unlock:                 unlock
});
uu.canvas.Flash.init = init;
uu.canvas.Flash.build = build;
function init(ctx, node) {
	initSurface(ctx);
	ctx.canvas = node;
	ctx._view = null;
	ctx._state = 0;
}
function build(canvas) {
	var ctx;
	canvas.getContext = function() {
		return ctx;
	};
	canvas.toDataURL = function(mimeType, jpegQuality) {
		if (!canvas.width || !canvas.height) {
			return "data:,";
		}
		mimeType = (mimeType || "").toLowerCase();
		mimeType = mimeType === "image/jpeg" ? mimeType : "image/png";
		jpegQuality = parseFloat(jpegQuality);
		if (isNaN(jpegQuality)) {
			jpegQuality = 0.8;
		}
		clearance(ctx);
		return ctx._view.toDataURL(mimeType, jpegQuality);
	};
	ctx = new uu.canvas.Flash(canvas);
	ctx._id = "external" + uu.guid() + "x" + (+new Date).toString(16);
	uu.dmz[ctx._id] = flashCanvasReadyCallback;
	function flashCanvasReadyCallback() {
		setTimeout(function() {
			ctx._state = 1;
			ctx._view.CallFunction(send._prefix + "in\t" +
					ctx.canvas.width + "\t" +
					ctx.canvas.height + "\t" +
					ctx.xFlyweight + send._suffix);
			if (canvas.currentStyle.direction === "rtl") {
				ctx._stock.push("rt");
			}
			send(ctx, "XX", 0xf);
		}, 0);
	}
	canvas.innerHTML = uu.format(
		'<object id="?" width="?" height="?" classid="?">' +
			'<param name="allowScriptAccess" value="always" />' +
			'<param name="flashVars" value="" />' +
			'<param name="wmode" value="transparent" />' +
			'<param name="movie" value="?" /></object>',
		 ctx._id, canvas.width, canvas.height,
		 "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",
		 uu.config.baseDir + "uu.canvas.swf");
	ctx._view = canvas.firstChild;
	function onFocus(evt) {
		var obj = evt.srcElement,
			canvas = obj.parentNode;
		obj.blur();
		canvas.focus();
	}
	function onPropertyChange(evt) {
		var attr = evt.propertyName, width, height;
		if (attr === "width" || attr === "height") {
			initSurface(ctx);
			width  = parseInt(canvas.width);
			height = parseInt(canvas.height);
			canvas.style.pixelWidth  = width  < 0 ? 0 : width;
			canvas.style.pixelHeight = height < 0 ? 0 : height;
			ctx._view.width  = width  <= 0 ? 10 : width;
			ctx._view.height = height <= 0 ? 10 : height;
			ctx._view.resize(width  <= 0 ? 10 : width,
							 height <= 0 ? 10 : height, ctx.xFlyweight);
			ctx._lastMessageID = 100 + uu.guid();
		}
	}
	canvas.firstChild.attachEvent("onfocus", onFocus);
	canvas.attachEvent("onpropertychange", onPropertyChange);
	win.attachEvent("onunload", function() {
		uu.dmz[ctx._id] = null;
		canvas.getContext = canvas.toDataURL = null;
		win.detachEvent("onunload", arguments.callee);
		canvas.detachEvent("onfocus", onFocus);
		canvas.detachEvent("onpropertychange", onPropertyChange);
	});
	return canvas;
}
function initSurface(ctx) {
	ctx.globalAlpha     = 1.0;
	ctx.globalCompositeOperation = "source-over";
	ctx.strokeStyle     = "black";
	ctx.fillStyle       = "black";
	ctx.lineWidth       = 1;
	ctx.lineCap         = "butt";
	ctx.lineJoin        = "miter";
	ctx.miterLimit      = 10;
	ctx.shadowBlur      = 0;
	ctx.shadowColor     = "transparent";
	ctx.shadowOffsetX   = 0;
	ctx.shadowOffsetY   = 0;
	ctx.font            = "10px sans-serif";
	ctx.textAlign       = "start";
	ctx.textBaseline    = "alphabetic";
	ctx.px              = 0;
	ctx.py              = 0;
	ctx._stack          = [];
	ctx._stock          = [];
	ctx._lockState      = 0;
	ctx._lastTimerID    = 0;
	ctx._lastMessageID  = 1;
	ctx._id             = "";
	ctx._innerLock      = 0;
	ctx.xBackend        = "Flash";
	ctx.xFlyweight      = 0;
}
function _copyprop(to, from) {
	to.globalAlpha      = from.globalAlpha;
	to.globalCompositeOperation = from.globalCompositeOperation;
	to.strokeStyle      = from.strokeStyle.toString();
	to.fillStyle        = from.fillStyle.toString();
	to.lineWidth        = from.lineWidth;
	to.lineCap          = from.lineCap;
	to.lineJoin         = from.lineJoin;
	to.miterLimit       = from.miterLimit;
	to.shadowBlur       = from.shadowBlur;
	to.shadowColor      = from.shadowColor;
	to.shadowOffsetX    = from.shadowOffsetX;
	to.shadowOffsetY    = from.shadowOffsetY;
	to.font             = from.font;
	to.textAlign        = from.textAlign;
	to.textBaseline     = from.textBaseline;
	return to;
}
function ImageData(width, height, rawdata) {
	this.width  = width;
	this.height = height;
	this.build  = imagedatabuild;
	this.cache  = [];
	this.useCache = 0;
	var rv = [], n, i = -1, j = -1, iz = width * height;
	if (!rawdata) {
		while (++i < iz) {
			rv.push(0, 0, 0, 0);
		}
	} else {
		iz = rawdata.length;
		while (++i < iz) {
			n = rawdata[i];
			rv[++j] = (n >> 16) & 0xff;
			rv[++j] = (n >>  8) & 0xff;
			rv[++j] =  n        & 0xff;
			rv[++j] = (n >> 24) & 0xff;
		}
	}
	this.data = rv;
}
function imagedatabuild() {
	if (this.useCache && this.cache.length) {
		return this.cache;
	}
	var rv = [], data = this.data, n,
		i = -1, j = -1, iz = data.length / 4 - 1;
	while (i < iz) {
		n  = data[++j] << 16;
		n |= data[++j] << 8;
		n |= data[++j];
		n += data[++j] * 0x1000000;
		rv[++i] = n;
	}
	if (this.useCache) {
		this.cache = rv;
	}
	return rv;
}
function arc(x, y, radius, startAngle, endAngle, anticlockwise) {
	send(this,
		 "ar\t" + x + "\t" + y + "\t" +
		 radius     + "\t" +
		 startAngle + "\t" +
		 endAngle   + "\t" +
		 (anticlockwise ? 1 : 0));
}
/*
function arcTo(x1, y1, x2, y2, radius) {
	send(this, "at\t" + x1 + "\t" + y1 + "\t" +
						x2 + "\t" + y2 + "\t" + radius);
}
 */
function beginPath() {
	send(this, "bP");
}
function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
	send(this, "bC\t" + cp1x + "\t" + cp1y + "\t" +
						cp2x + "\t" + cp2y + "\t" + x + "\t" + y);
}
function clear() {
	send(this, "cA");
}
function clearRect(x, y, w, h) {
	send(this, "cR\t" + x + "\t" + y + "\t" + w + "\t" + h);
}
function clip() {
	send(this, "cl");
}
function closePath() {
	send(this, "cP");
}
function createImageData(a, b) {
	var sw, sh;
	if (arguments.length === 2) {
		sw = a;
		sh = b;
	} else {
		if (!a) {
			throw new Error("NOT_SUPPORTED_ERR");
		}
		sw = a.width;
		sh = a.height;
	}
	return new ImageData(sw, sh);
}
function getImageData(sx, sy, sw, sh) {
	if (isNaN(sx) || isNaN(sy) || isNaN(sw) || isNaN(sh)) {
		throw new Error("NOT_SUPPORTED_ERR");
	}
	if (!sw || !sh) {
		throw new Error("INDEX_SIZE_ERR");
	}
	if (this._state !== 2) {
		throw new Error("BACKEND_NOT_READY");
	}
	var rawdata, width, height;
	clearance(this);
	rawdata = this._view.getImageData(sx, sy, sw, sh);
	width  = rawdata.shift();
	height = rawdata.shift();
	return new ImageData(width, height, rawdata);
}
function createLinearGradient(x0, y0, x1, y1) {
	function CanvasGradient(x0, y0, x1, y1) {
		this.type = 1;
		this.param = x0 + "\t" + y0 + "\t" + x1 + "\t" + y1;
		this.color = [];
		this._cache = "";
		this.toString = toString;
		this.addColorStop = addColorStop;
	}
	return new CanvasGradient(x0, y0, x1, y1);
}
function addColorStop(offset, color) {
	this.color.push({ offset: (offset * 255.5) | 0,
					 color: uu.color(color) });
	this._cache = "";
}
function toString() {
	if (!this._cache) {
		this.color.sort(function(a, b) {
			return a.offset - b.offset;
		});
		var rv = [], ary = this.color, v, i = 0, iz = ary.length;
		for (; i < iz; ++i) {
			v = ary[i];
			rv.push(v.offset, v.color.num, v.color.a);
		}
		this._cache = this.param + "\t" + iz + "\t" + rv.join("\t");
	}
	return this._cache;
}
function createPattern(image, repeat) {
	function CanvasPattern(image, repeat) {
		this.type = 3;
		this.src = image.src;
		this.repeat = repeat;
		this.toString = function() {
			return this.src + "\t" + this.repeat;
		};
	}
	repeat = repeat || "repeat";
	switch (repeat) {
	case "repeat": break;
	default: throw new Error("NOT_SUPPORTED_ERR");
	}
	if (!("src" in image)) {
		throw new Error("NOT_SUPPORTED_ERR");
	}
	return new CanvasPattern(image, repeat);
}
function createRadialGradient(x0, y0, r0, x1, y1, r1) {
	function CanvasGradient(x0, y0, r0, x1, y1, r1) {
		this.type = 2;
		this.param = x0 + "\t" + y0 + "\t" + r0 + "\t" +
					 x1 + "\t" + y1 + "\t" + r1;
		this.color = [];
		this._cache = "";
		this.toString = toString;
		this.addColorStop = addColorStop;
	}
	return new CanvasGradient(x0, y0, r0, x1, y1, r1);
}
function drawCircle(x, y, radius, fillColor, strokeColor, lineWidth) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (fillColor || strokeColor) {
		var lw = lineWidth === void 0 ? 1 : lineWidth,
			f = fillColor ? (fillColor.num + "\t" + this.globalAlpha * fillColor.a)
						 : "0\t0",
			s = strokeColor ? (strokeColor.num + "\t" + this.globalAlpha * strokeColor.a)
							: "0\t0";
		send(this, "X0\t" + x + "\t" + y + "\t" + radius + "\t" +
							f + "\t" + s + "\t" + lw);
	}
}
function drawImage(image, a1, a2, a3, a4, a5, a6, a7, a8) {
	if (this.globalAlpha <= 0) {
		return;
	}
	var args = (a3 === void 0) ? 3
			 : (a5 === void 0) ? 5 : 9,
		dx, dy, dw, dh, sx, sy, sw, sh, canvas, guid, ctx = this;
	if (image.src) {
		send(this, "d0\t" + args + "\t" + image.src + "\t" +
				 a1 + "\t" + a2 + "\t" +
				 (a3 || 0) + "\t" + (a4 || 0) + "\t" +
				 (a5 || 0) + "\t" + (a6 || 0) + "\t" +
				 (a7 || 0) + "\t" + (a8 || 0), 0x5);
	} else {
		canvas = image.firstChild;
		sx = 0;
		sy = 0;
		sw = canvas.width;
		sh = canvas.height;
		switch (args) {
		case 3: dx = a1, dy = a2, dw = sw, dh = sh; break;
		case 5: dx = a1, dy = a2, dw = a3, dh = a4; break;
		case 9: sx = a1, sy = a2, sw = a3, sh = a4;
				dx = a5, dy = a6, dw = a7, dh = a8;
		}
		send(this, "d1\t" + args + "\t" + canvas.id + "\t" +
				 sx + "\t" + sy + "\t" + sw + "\t" + sh + "\t" +
				 dx + "\t" + dy + "\t" + dw + "\t" + dh, 0x5);
		++this._innerLock;
		this._view.addJsCallback(guid = uu.guid());
		uu.dmz[this._id + guid] = function() {
			--ctx._innerLock;
			send(ctx, "XX");
		};
	}
}
function drawRoundRect(x,
					 y,
					 width,
					 height,
					 radius,
					 fillColor,
					 strokeColor,
					 lineWidth) {
	if (this.globalAlpha <= 0) {
		return;
	}
	if (fillColor || strokeColor) {
		var lw = lineWidth === void 0 ? 1 : lineWidth,
			f = fillColor ? (fillColor.num + "\t" + this.globalAlpha * fillColor.a)
						 : "0\t0",
			s = strokeColor ? (strokeColor.num + "\t" + this.globalAlpha * strokeColor.a)
							: "0\t0";
		send(this, "X1\t" + x + "\t" + y + "\t" + width + "\t" + height + "\t" +
							radius[0] + "\t" + radius[1] + "\t" +
							radius[2] + "\t" + radius[3] + "\t" +
							f + "\t" + s + "\t" + lw);
	}
}
function fill() {
	send(this, "fi", 0x5);
}
function fillRect(x, y, w, h) {
	send(this, "fR\t" + x + "\t" + y + "\t" + w + "\t" + h, 0x5);
}
function fillText(text, x, y, maxWidth) {
	this.strokeText(text, x, y, maxWidth, 1);
}
function isPointInPath(x, y) {
	clearance(this);
	return this._view.isPointInPath(x, y);
}
function lineTo(x, y) {
	send(this, "lT\t" + ((x * 1000) | 0) + "\t" + ((y * 1000) | 0));
}
function lock(clearScreen) {
	if (this._lockState) {
		throw new Error("DUPLICATE_LOCK");
	}
	this._lockState = clearScreen ? 2 : 1;
	if (clearScreen) {
		this._stock.push("cA");
	}
}
function measureText(text) {
	var metric = uu.font.metric(this.font, text);
	return { width: metric.w, height: metric.h };
}
function moveTo(x, y) {
	send(this, "mT\t" + ((x * 1000) | 0) + "\t" + ((y * 1000) | 0));
}
function putImageData(imagedata,
					 dx,
					 dy,
					 dirtyX,
					 dirtyY,
					 dirtyWidth,
					 dirtyHeight) {
	if (isNaN(dx) || isNaN(dy)) {
		throw new Error("NOT_SUPPORTED_ERR");
	}
	if (!imagedata) {
		throw new Error("TYPE_MISMATCH_ERR");
	}
	dirtyX      = dirtyX      === void 0 ? 0 : dirtyX;
	dirtyY      = dirtyY      === void 0 ? 0 : dirtyY;
	dirtyWidth  = dirtyWidth  === void 0 ? imagedata.width  : dirtyWidth;
	dirtyHeight = dirtyHeight === void 0 ? imagedata.height : dirtyHeight;
	if (isNaN(dirtyX) || isNaN(dirtyY)
		|| isNaN(dirtyWidth) || isNaN(dirtyHeight)) {
		throw new Error("NOT_SUPPORTED_ERR");
	}
	var rawdata = imagedata.build().join(",");
	send(this, "pI\t" + imagedata.width  + "\t" +
						imagedata.height + "\t" +
						dx + "\t" +
						dy + "\t" +
						dirtyX + "\t" +
						dirtyY + "\t" +
						dirtyWidth + "\t" +
						dirtyHeight + "\t" +
						rawdata);
}
function quadraticCurveTo(cpx, cpy, x, y) {
	send(this, "qC\t" + cpx + "\t" + cpy + "\t" + x + "\t" + y);
}
function rect(x, y, w, h) {
	send(this, "re\t" + x + "\t" + y + "\t" + w + "\t" + h, 0x5);
}
function restore() {
	this._stack.length && _copyprop(this, this._stack.pop());
	send(this, "rs");
}
function rotate(angle) {
	send(this, "ro\t" + ((angle * 1000000) | 0));
}
function save() {
	this._stack.push(_copyprop({}, this));
	send(this, "sv", 0xf);
}
function scale(x, y) {
	send(this, "sc\t" + x + "\t" + y);
}
function setTransform(m11, m12, m21, m22, dx, dy) {
	send(this, "ST\t" + m11 + "\t" + m12 + "\t" +
						m21 + "\t" + m22 + "\t" +
						 dx + "\t" +  dy);
}
function stroke() {
	send(this, "st", 0x7);
}
function strokeRect(x, y, w, h) {
	send(this, "sR\t" + x + "\t" + y + "\t" + w + "\t" + h, 0x7);
}
function strokeText(text, x, y, maxWidth, fill) {
	if (this.globalAlpha <= 0) {
		return;
	}
	text = text.replace(/(\t|\v|\f|\r\n|\r|\n)/g, " ");
	send(this, (fill ? "fT\t"
					 : "sT\t") + text + "\t" +
			 (x || 0) + "\t" +
			 (y || 0) + "\t" + (maxWidth || 0), 0xd);
}
function transform(m11, m12, m21, m22, dx, dy) {
	send(this, "tf\t" + m11 + "\t" + m12 + "\t" +
						m21 + "\t" + m22 + "\t" +
						 dx + "\t" +  dy);
}
function translate(x, y) {
	send(this, "tl\t" + x + "\t" + y);
}
function unlock() {
	if (this._lockState && this._stock.length) {
		this._lockState = 0;
		send(this, "XX");
	}
	this._lockState = 0;
}
function send(ctx, commands, state) {
	var ary = ctx._stock, i = ary.length - 1, font,
		bit = state || 0;
	if (bit & 0x1) {
		if (ctx._alpha !== ctx.globalAlpha) {
			ary[++i] = "gA\t" + (ctx._alpha = ctx.globalAlpha);
		}
		if (ctx._mix != ctx.globalCompositeOperation) {
			ary[++i] = "gC\t" + (ctx._mix = ctx.globalCompositeOperation);
		}
		if (ctx._strokeStyle !== ctx.strokeStyle) {
			if (typeof ctx.strokeStyle === "string") {
				ctx.__strokeStyle = uu.color(ctx._strokeStyle = ctx.strokeStyle);
				ary[++i] = "s0\t" + ctx.__strokeStyle.num + "\t" +
									ctx.__strokeStyle.a;
			} else {
				ary[++i] = "s" + ctx.strokeStyle.type + "\t" +
								 ctx.strokeStyle.toString();
			}
		}
		if (ctx._fillStyle !== ctx.fillStyle) {
			if (typeof ctx.fillStyle === "string") {
				ctx.__fillStyle = uu.color(ctx._fillStyle = ctx.fillStyle);
				ary[++i] = "f0\t" + ctx.__fillStyle.num + "\t" +
									ctx.__fillStyle.a;
			} else {
				ary[++i] = "f" + ctx.fillStyle.type + "\t" +
								 ctx.fillStyle.toString();
			}
		}
	}
	if (bit & 0x2) {
		if (ctx._lineWidth !== ctx.lineWidth) {
			ary[++i] = "lW\t" + (ctx._lineWidth = ctx.lineWidth);
		}
		if (ctx._lineCap !== ctx.lineCap) {
			ary[++i] = "lC\t" + (ctx._lineCap = ctx.lineCap);
		}
		if (ctx._lineJoin !== ctx.lineJoin) {
			ary[++i] = "lJ\t" + (ctx._lineJoin = ctx.lineJoin);
		}
		if (ctx._miterLimit !== ctx.miterLimit) {
			ary[++i] = "mL\t" + (ctx._miterLimit = ctx.miterLimit);
		}
	}
	if (bit & 0x4) {
		if (ctx._shadowBlur !== ctx.shadowBlur
			|| ctx._shadowOffsetX !== ctx.shadowOffsetX
			|| ctx._shadowOffsetY !== ctx.shadowOffsetY
			|| ctx._shadowColor   !== ctx.shadowColor) {
			if (ctx._shadowColor !== ctx.shadowColor) {
				ctx.__shadowColor = uu.color(ctx._shadowColor = ctx.shadowColor);
			}
			ctx._shadowBlur    = ctx.shadowBlur;
			ctx._shadowOffsetX = ctx.shadowOffsetX;
			ctx._shadowOffsetY = ctx.shadowOffsetY;
			ary[++i] = "sh\t" + ctx.shadowBlur        + "\t" +
								ctx.__shadowColor.num + "\t" +
								ctx.__shadowColor.a   + "\t" +
								ctx.shadowOffsetX     + "\t" +
								ctx.shadowOffsetY;
		}
	}
	if (bit & 0x8) {
		if (ctx._font !== ctx.font) {
			ctx._font = ctx.font;
			font = uu.font.parse(ctx.font, ctx.canvas);
			ary[++i] = "fo\t" + font.size + "\t" +
								font.style + "\t" +
								font.weight + "\t" +
								font.variant + "\t" +
								font.family;
		}
		if (ctx._textAlign !== ctx.textAlign) {
			ary[++i] = "tA\t" + (ctx._textAlign = ctx.textAlign);
		}
		if (ctx._textBaseline !== ctx.textBaseline) {
			ary[++i] = "tB\t" + (ctx._textBaseline = ctx.textBaseline);
		}
	}
	ary[++i] = commands;
	if (!ctx._lockState && ctx._innerLock <= 0) {
		if (ctx._state === 1) {
			ctx._state = 2;
			clearance(ctx);
		}
		if (ctx._state === 2) {
			if (!ctx._lastTimerID) {
				ctx._lastTimerID = setTimeout(function() {
					if (ctx._lastTimerID) {
						if (ctx._stock.length) {
							var message = "i=" + ctx._lastMessageID +
										 "&b=" + ctx._stock.join("\t");
							ctx._stock = [];
							ctx._view.flashVars = message;
							++ctx._lastMessageID > 9 && (ctx._lastMessageID = 1);
						}
						ctx._lastTimerID = 0;
					}
				}, 0);
			}
		}
	}
}
send._prefix = '<invoke name="send" returntype="javascript"><arguments><string>';
send._suffix = '</string></arguments></invoke>';
function clearance(ctx) {
	if (ctx._stock.length) {
		var msg = ctx._stock.join("\t");
		ctx._stock = [];
		ctx._view.CallFunction(send._prefix + msg + send._suffix);
	}
}
})(window, document, uu);

uu.canvas.extended || (function(win, doc, uu) {
uu.canvas.extended = 1;
var _CanvasPrototype;
if (win["CanvasRenderingContext2D"]) {
	_CanvasPrototype = win.CanvasRenderingContext2D.prototype;
}
var _extendOpera = uu.opera && uu.ver.browser >= 9.5 && uu.ver.browser < 10.5,
	_extendGecko = uu.gecko && uu.ver.render === 1.9;
if (_extendOpera || _extendGecko) {
	_CanvasPrototype._save    = _CanvasPrototype.save;
	_CanvasPrototype._restore = _CanvasPrototype.restore;
	uu.mix(_CanvasPrototype, {
		_shadow:        ["transparent", 0, 0, 0],
		_stack:         [],
		font:           "10px sans-serif",
		textAlign:      "start",
		textBaseline:   "top",
		xTextMarginTop: 1.3,
		save:           save,
		restore:        restore,
		fillText:       fillText,
		strokeText:     strokeText,
		measureText:    measureText
	});
	if (_extendGecko) {
		_CanvasPrototype.__defineSetter__("shadowColor",    function(color) {
			this._shadow[0] = color;
		});
		_CanvasPrototype.__defineSetter__("shadowOffsetX",  function(x) {
			this._shadow[1] = x;
		});
		_CanvasPrototype.__defineSetter__("shadowOffsetY",  function(y) {
			this._shadow[2] = y;
		});
		_CanvasPrototype.__defineSetter__("shadowBlur",     function(blur) {
			this._shadow[3] = blur;
		});
		_CanvasPrototype.__defineGetter__("shadowColor",    function() {
			return this._shadow[0];
		});
		_CanvasPrototype.__defineGetter__("shadowOffsetX",  function() {
			return this._shadow[1];
		});
		_CanvasPrototype.__defineGetter__("shadowOffsetY",  function() {
			return this._shadow[2];
		});
		_CanvasPrototype.__defineGetter__("shadowBlur",     function() {
			return this._shadow[3];
		});
	}
}
function save() {
	this._stack.push([this.font,
					 this.textAlign,
					 this.textBaseline,
					 this._shadow.concat()]);
	this._save();
}
function restore() {
	this._restore();
	if (this._stack.length) {
		var last = this._stack.pop();
		this.font = last[0];
		this.textAlign = last[1];
		this.textBaseline = last[2];
		this._shadow = last[3].concat();
	}
}
function fillText(text, x, y, maxWidth) {
	_strokeText(this, text, x, y, maxWidth, 1);
}
function strokeText(text, x, y, maxWidth) {
	_strokeText(this, text, x, y, maxWidth, 0);
}
function measureText(text) {
	var metric = uu.font.metric(this.font, text);
	return { width: metric.w, height: metric.h };
}
function _newsvg(tag) {
	return doc.createElementNS("http://www.w3.org/2000/svg", tag);
}
function _buildShadow(svg, shadowOffsetX, shadowOffsetY,
						 shadowBlur, shadowColor) {
	var e = [],
		blur = shadowBlur < 8 ? shadowBlur * 0.5
							 : Math.sqrt(shadowBlur * 2);
	svg.appendChild(e[0] = _newsvg("defs"));
	 e[0].appendChild(e[1] = _newsvg("filter"));
		e[1].appendChild(e[2] = _newsvg("feGaussianBlur"));
		e[1].appendChild(e[3] = _newsvg("feOffset"));
		e[1].appendChild(e[4] = _newsvg("feFlood"));
		e[1].appendChild(e[5] = _newsvg("feComposite"));
		e[1].appendChild(e[6] = _newsvg("feMerge"));
		 e[6].appendChild(e[7] = _newsvg("feMergeNode"));
		 e[6].appendChild(e[8] = _newsvg("feMergeNode"));
	e[1].setAttribute("id",             "dropshadow");
	e[1].setAttribute("filterUnits",    "userSpaceOnUse");
	e[2].setAttribute("in",             "SourceAlpha");
	e[2].setAttribute("stdDeviation",   blur);
	e[3].setAttribute("dx",             shadowOffsetX);
	e[3].setAttribute("dy",             shadowOffsetY);
	e[3].setAttribute("result",         "offsetblur");
	e[4].setAttribute("flood-color",    shadowColor.hex);
	e[4].setAttribute("flood-opacity",  shadowColor.a);
	e[5].setAttribute("in2",            "offsetblur");
	e[5].setAttribute("operator",       "in");
	e[8].setAttribute("in",             "SourceGraphic");
}
function _strokeText(ctx, text, x, y, maxWidth, fill) {
	var style = fill ? ctx.fillStyle : ctx.strokeStyle;
	if (typeof style !== "string") {
		return;
	}
	if (!ctx._ltr) {
		ctx._ltr = win.getComputedStyle(ctx.canvas, null).direction === "ltr";
	}
	text = text.replace(/(\t|\v|\f|\r\n|\r|\n)/g, " ");
	if (_extendOpera) {
		_strokeTextOpera(ctx, text, x, y, maxWidth, fill);
	} else if (_extendGecko) {
		_strokeTextGecko(ctx, text, x, y, maxWidth, fill);
	}
}
function _strokeTextOpera(ctx, text, x, y, maxWidth, fill) {
	var align   = ctx.textAlign,
		metric  = uu.font.metric(ctx.font, text),
		font    = uu.font.parse(ctx.font, ctx.canvas),
		shadowColor = uu.color(ctx.shadowColor),
		shadow  = shadowColor.a && ctx.shadowBlur,
		svg     = _newsvg("svg"),
		txt     = _newsvg("text"),
		offx    = 0,
		offy    = 0,
		margin  = 50,
		cage;
	if (!ctx._cage) {
		cage = uu.node();
		cage.style = "display:none";
		ctx._cage = doc.body.appendChild(cage);
	}
	switch (align) {
	case "left":   align = "start"; break;
	case "center": align = "middle"; break;
	case "right":  align = "end"; break;
	case "start":  align = ctx._ltr ? "start" : "end"; break;
	case "end":    align = ctx._ltr ? "end"   : "start";
	}
	switch (align) {
	case "middle": offx = metric.w * 0.5; break;
	case "end":    offx = metric.w;
	}
	if (ctx.textBaseline === "top") {
		offy = font.size /
			(uu.font.SCALE[font.rawfamily.split(",")[0].toUpperCase()] ||
			 ctx.xTextMarginTop);
	}
	svg.setAttribute("width",  metric.w + margin * 2);
	svg.setAttribute("height", metric.h + margin * 2);
	if (shadow) {
		_buildShadow(svg, ctx.shadowOffsetX, ctx.shadowOffsetY,
						 ctx.shadowBlur, shadowColor);
		txt.setAttribute("filter", "url(#dropshadow)");
	}
	txt.setAttribute("x",            offx + margin);
	txt.setAttribute("y",            offy + margin + offy * 0.41666);
	txt.setAttribute("fill",         fill ? ctx.fillStyle : ctx.strokeStyle);
	txt.setAttribute("text-anchor",  align);
	txt.setAttribute("font-style",   font.style);
	txt.setAttribute("font-variant", font.variant);
	txt.setAttribute("font-size",    font.size + "px");
	txt.setAttribute("font-weight",  font.weight);
	txt.setAttribute("font-family",  font.family);
	if (uu.ver.browser < 10) {
		if (!txt.getAttribute("font-family").replace(/[\"\']/g, "")) {
			return;
		}
	}
	svg.appendChild(txt);
	txt.appendChild(doc.createTextNode(text));
	if (shadow) {
		ctx._cage.appendChild(svg);
	}
	ctx.save();
	ctx.globalCompositeOperation = "source-over";
	ctx.drawImage(svg, x - margin - offx, y - margin);
	ctx.restore();
	if (shadow) {
		ctx._cage.removeChild(svg);
	}
}
function _strokeTextGecko(ctx, text, x, y, maxWidth, fill) {
	var align   = ctx.textAlign,
		metric  = uu.font.metric(ctx.font, text),
		shadowColor = uu.color(ctx.shadowColor),
		shadow  = shadowColor.a && ctx.shadowBlur,
		offX    = 0,
		offY    = (metric.h + metric.h * 0.5) * 0.5;
	switch (align) {
	case "start":   align = ctx._ltr ? "left"  : "right"; break;
	case "end":     align = ctx._ltr ? "right" : "left";
	}
	switch (align) {
	case "center":  offX = metric.w * 0.5; break;
	case "right":   offX = metric.w;
	}
	ctx.save();
	ctx.globalCompositeOperation = "source-over";
	ctx.mozTextStyle = ctx.font;
	ctx.translate(x - offX, y + offY);
	if (!fill) {
		ctx.fillStyle = ctx.strokeStyle;
	}
	if (shadow) {
		ctx.save();
		ctx.translate(ctx.shadowOffsetX + 1,
					 ctx.shadowOffsetY + 1);
		ctx.globalAlpha = ctx.globalAlpha / Math.sqrt(ctx.shadowBlur);
		ctx.fillStyle = shadowColor.hex;
		ctx.mozDrawText(text);
		ctx.restore();
	}
	ctx.mozDrawText(text);
	ctx.fillRect(0,0,0,0);
	ctx.restore();
}
if (_CanvasPrototype) {
	_CanvasPrototype.lock   = lock;
	_CanvasPrototype.clear  = clear;
	_CanvasPrototype.unlock = uu.nop;
	_CanvasPrototype.drawCircle = drawCircle;
	_CanvasPrototype.drawRoundRect = drawRoundRect;
	_CanvasPrototype.xBackend = "Canvas";
}
function lock(clear) {
	clear && this.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
function clear() {
	this.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
function drawCircle(x, y, raduis, fillColor, strokeColor, lineWidth) {
	if (fillColor || strokeColor) {
		var lw = lineWidth === void 0 ? 1 : lineWidth;
		this.save();
		if (fillColor) {
			this.fillStyle = fillColor.rgba;
		}
		if (strokeColor && lw) {
			this.strokeStyle = strokeColor.rgba;
			this.lineWidth = lw;
		}
		this.beginPath();
		this.arc(x, y, raduis, 0, 2 * Math.PI, true);
		this.closePath();
		if (fillColor) {
			this.fill();
		}
		if (strokeColor && lw) {
			this.stroke();
		}
		this.restore();
	}
}
function drawRoundRect(x,
					 y,
					 width,
					 height,
					 radius,
					 fillColor,
					 strokeColor,
					 lineWidth) {
	if (fillColor || strokeColor) {
		var lw = lineWidth === void 0 ? 1 : lineWidth,
			w = width, h = height,
			r0 = radius[0], r1 = radius[1], r2 = radius[2], r3 = radius[3],
			w2 = (width  / 2) | 0, h2 = (height / 2) | 0;
		r0 < 0 && (r0 = 0);
		r1 < 0 && (r1 = 0);
		r2 < 0 && (r2 = 0);
		r3 < 0 && (r3 = 0);
		(r0 >= w2 || r0 >= h2) && (r0 = Math.min(w2, h2) - 2);
		(r1 >= w2 || r1 >= h2) && (r1 = Math.min(w2, h2) - 2);
		(r2 >= w2 || r2 >= h2) && (r2 = Math.min(w2, h2) - 2);
		(r3 >= w2 || r3 >= h2) && (r3 = Math.min(w2, h2) - 2);
		this.save();
		this.setTransform(1, 0, 0, 1, 0, 0);
		if (fillColor) {
			this.fillStyle = fillColor.rgba;
		}
		if (strokeColor && lw) {
			this.strokeStyle = strokeColor.rgba;
			this.lineWidth = lw;
		}
		this.beginPath();
		this.moveTo(x, y + h2);
		this.lineTo(x, y + h - r3);
		this.quadraticCurveTo(x, y + h, x + r3, y + h);
		this.lineTo(x + w - r2, y + h);
		this.quadraticCurveTo(x + w, y + h, x + w, y + h - r2);
		this.lineTo(x + w, y + r1);
		this.quadraticCurveTo(x + w, y, x + w - r1, y);
		this.lineTo(x + r0, y);
		this.quadraticCurveTo(x, y, x, y + r0);
		this.closePath();
		if (fillColor) {
			this.fill();
		}
		if (strokeColor && lw) {
			this.stroke();
		}
		this.restore();
	}
}
})(window, document, uu);
uu.lazy.fire("init");

