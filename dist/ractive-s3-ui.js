(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ractive"));
	else if(typeof define === 'function' && define.amd)
		define("@awspilot/ractive-s3-ui", ["ractive"], factory);
	else if(typeof exports === 'object')
		exports["@awspilot/ractive-s3-ui"] = factory(require("ractive"));
	else
		root["@awspilot/ractive-s3-ui"] = factory(root["Ractive"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var IconPlus = Ractive.extend({
	template: "\n\t\t<svg class=\"icon\" style={{style}} version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 31.444 31.444\" xml:space=\"preserve\">\n\t\t\t<path d=\"M1.119,16.841c-0.619,0-1.111-0.508-1.111-1.127c0-0.619,0.492-1.111,1.111-1.111h13.475V1.127\n\t\t\t\tC14.595,0.508,15.103,0,15.722,0c0.619,0,1.111,0.508,1.111,1.127v13.476h13.475c0.619,0,1.127,0.492,1.127,1.111\n\t\t\t\tc0,0.619-0.508,1.127-1.127,1.127H16.833v13.476c0,0.619-0.492,1.127-1.111,1.127c-0.619,0-1.127-0.508-1.127-1.127V16.841H1.119z\"\n\t\t\t\t/>\n\t\t</svg>\n\n\t"
});

var IconRefresh = Ractive.extend({
	template: "\n\t<svg class=\"icon\" style={{style}} version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t\t viewBox=\"0 0 477.867 477.867\" xml:space=\"preserve\">\n\t<g>\n\t\t<g>\n\t\t\t<path d=\"M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479\n\t\t\t\tc-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933\n\t\t\t\tc0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207\n\t\t\t\tc-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4\n\t\t\t\tC426.667,7.641,419.026,0,409.6,0z\"/>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<path d=\"M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696\n\t\t\t\tc-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606\n\t\t\t\tc-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4\n\t\t\t\tc0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068\n\t\t\t\tc40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z\"/>\n\t\t</g>\n\t</g>\n\t</svg>\n\t"
});

var IconTrash = Ractive.extend({
	template: "\n\t<svg class=\"icon\" style={{style}} version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"459px\" height=\"459px\" viewBox=\"0 0 459 459\" xml:space=\"preserve\">\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path d=\"M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5\n\t\t\t\t\tH51v51h357V25.5z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</svg>\n"
});

var IconS3Bucket = Ractive.extend({
	template: "\n\t\t<svg class=\"icon\" style={{style}} version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"100, 40, 200,300\">\n\t\t\t<g id=\"svgg\">\n\t\t\t\t<path stroke=\"none\" fill=\"red\" fill-rule=\"evenodd\" id=\"path0\" d=\"M149.407 87.410 C 42.924 100.968,80.090 138.496,200.000 138.496 C 342.230 138.496,353.848 89.845,212.555 85.922 C 189.321 85.277,160.905 85.946,149.407 87.410 M87.500 135.452 C 87.500 139.225,119.936 279.043,123.524 290.737 C 124.333 293.376,127.458 295.669,130.467 295.832 C 133.476 295.994,143.512 297.702,152.770 299.626 C 174.417 304.126,225.583 304.126,247.230 299.626 C 256.488 297.702,266.541 295.994,269.569 295.832 C 276.029 295.485,275.132 298.445,296.920 205.487 C 315.042 128.171,315.044 128.116,299.613 137.221 C 264.955 157.669,135.185 157.752,100.603 137.348 C 88.334 130.109,87.500 129.989,87.500 135.452 M221.875 193.750 L 221.875 218.750 198.438 218.750 L 175.000 218.750 175.000 193.750 L 175.000 168.750 198.438 168.750 L 221.875 168.750 221.875 193.750 M176.705 238.920 C 198.656 260.872,167.365 292.592,144.733 271.330 C 130.501 257.960,141.300 231.250,160.938 231.250 C 165.391 231.250,172.486 234.702,176.705 238.920 M248.687 260.052 C 252.847 268.159,256.250 275.542,256.250 276.459 C 256.250 277.375,245.604 278.125,232.592 278.125 L 208.935 278.125 220.820 256.120 C 234.176 231.393,233.966 231.364,248.687 260.052 \">\n\t\t\t\t</path>\n\t\t\t</g>\n\t\t</svg>\n\t"
});

var IconX = Ractive.extend({
	template: "\n\t\t<svg class=\"icon\" style={{style}} version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t\t\t viewBox=\"0 0 512.001 512.001\" xml:space=\"preserve\">\n\n\t\t\t<g>\n\t\t\t\t<path d=\"M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892\n\t\t\t\t\tL46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999\n\t\t\t\t\tc-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998\n\t\t\t\t\tc10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z\"/>\n\t\t\t</g>\n\n\t\t</svg>\n"
});

exports.IconS3Bucket = IconS3Bucket;
exports.IconPlus = IconPlus;
exports.IconRefresh = IconRefresh;
exports.IconX = IconX;
exports.IconTrash = IconTrash;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	isolated: true,
	template: '\n\t\t<div class=\'tabledata\' style=\'{{style}}\'>\n\t\t\t<div class=\'tabledatahead\'>\n\t\t\t\t{{#columns:i}}\n\t\t\t\t\t<div style=\'width: {{#if i === 0}}32px{{else}}{{100/columns.length}}%{{/if}} \'>{{.}}</div>\n\t\t\t\t{{/columns}}\n\t\t\t</div>\n\t\t\t<div class=\'tabledatacontent\'>\n\n\t\t\t\t{{#if rows.length === 0}}\n\t\t\t\t\t<br><small>Empty</small>\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if rows === null }}\n\t\t\t\t\t<br><small>Loading...</small>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if err.errorMessage }}\n\t\t\t\t\t<br><small style="color:red">{{err.errorMessage}}</small>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#rows:row}}\n\t\t\t\t<div class=\'tabledatarow {{#if .[0].selected}}selected{{/if}}\' on-click=\'selectrow\'>\n\t\t\t\t\t{{#each .:i}}\n\t\t\t\t\t<div class=\'tabledatacell\n\t\t\t\t\t\t{{#if .KEY}}t-K{{/if}}\n\t\t\t\t\t\t{{#if .HASH}}t-HASH{{/if}}\n\t\t\t\t\t\t{{#if .S}}t-S{{/if}}\n\t\t\t\t\t\t{{#if .N}}t-N{{/if}}\n\t\t\t\t\t\t{{#if .BOOL}}t-BOOL{{/if}}\n\t\t\t\t\t\t{{#if .NULL}}t-NULL{{/if}}\n\t\t\t\t\t\t{{#if .L}}t-L{{/if}}\n\t\t\t\t\t\t{{#if .M}}t-M{{/if}}\n\t\t\t\t\t\t{{#if .U}}t-U{{/if}}\n\t\t\t\t\t\t\' style=\'width: {{#if i === 0}}32px{{else}}{{100/columns.length}}%{{/if}} \'\n\t\t\t\t\t\t{{#if .HASH}}on-click=\'cellclick\'{{/if}}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t{{#if .KEY}}\n\t\t\t\t\t\t\t{{#if .selected}}\n\t\t\t\t\t\t\t\t<input class=\'input-checkbox\' type=\'checkbox\' checked>\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t<input class=\'input-checkbox\' type=\'checkbox\'>\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{#if .HASH}}<a>{{.HASH}}</a>{{/if}}\n\t\t\t\t\t\t{{#if .S}}{{.S}}{{/if}}\n\t\t\t\t\t\t{{#if .N}}{{.N}}{{else}}{{#if .N === 0}}0{{/if}}{{/if}}\n\t\t\t\t\t\t{{#if .BOOL}}{{.BOOL}}{{/if}}\n\t\t\t\t\t\t{{#if .NULL}}NULL{{/if}}\n\t\t\t\t\t\t{{#if .L}}[...]{{/if}}\n\t\t\t\t\t\t{{#if .M}}{...}{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t\t{{/each}}\n\t\t\t\t</div>\n\t\t\t\t{{/rows}}\n\t\t\t</div>\n\t\t</div>\n\t\t',

	data: function data() {
		return {};
	},
	oninit: function oninit() {
		this.on('cellclick', function (e) {
			var col = this.get(e.resolve());
			//console.log("cellclick", e.resolve(), " = ",this.get( e.resolve())  )
			//console.log( this.get(e.resolve().split('.').slice(0,-1).join('.')) )
			this.fire('colclick', undefined, col.item, col.raw);
		});
	}
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(3);

var _ractive = __webpack_require__(4);

var _ractive2 = _interopRequireDefault(_ractive);

var _minibucketlist = __webpack_require__(5);

var _minibucketlist2 = _interopRequireDefault(_minibucketlist);

var _tabs = __webpack_require__(6);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hsplit = _ractive2.default.extend({
	isolated: false,
	data: {
		direction: 'horizontal'
	},
	template: '<div class="hsplit {{class}} " style="{{style}}">{{yield}}</div>'
});

exports.default = _ractive2.default.extend({
	components: {
		hsplit: hsplit,
		minibucketlist: _minibucketlist2.default,
		tabs: _tabs2.default

	},
	template: '\n\t\t\t<div class=\'ractive-s3-ui theme-{{theme}}\'>\n\t\t\t\t<WindowContainer theme={{theme}} />\n\t\t\t</div>\n\t\t\t<hsplit class=\'ractive-s3-ui theme-{{theme}}\'>\n\n\t\t\t\t{{#if no_leftside}}\n\t\t\t\t{{else}}\n\t\t\t\t<left>\n\t\t\t\t\t<minibucketlist />\n\t\t\t\t</left>\n\t\t\t\t<split />\n\t\t\t\t{{/if}}\n\n\t\t\t\t<content style="left: 0px;">\n\t\t\t\t\t<tabs\n\n\t\t\t\t\t\tendpoint={{endpoint}}\n\t\t\t\t\t\taccessKeyId={{accessKeyId}}\n\t\t\t\t\t\tsecretAccessKey={{secretAccessKey}}\n\n\t\t\t\t\t\tactive_id=\'buckets\'\n\t\t\t\t\t\ttheme={{theme}}\n\t\t\t\t\t/>\n\t\t\t\t</content>\n\t\t\t</hsplit>\n\t\t',

	data: function data() {
		return {
			no_leftside: true
		};
	},
	on: {
		init: function init() {

			var ractive = this;
			this.on('open-bucket', function (e, bucket) {
				this.findComponent('tabs').newtab('buckettab', bucket);
			});

			s3 = new AWS.S3({
				endpoint: this.get('endpoint') || undefined,

				region: this.get('region'),
				credentials: {
					accessKeyId: this.get('accessKeyId'),
					secretAccessKey: this.get('secretAccessKey')
				},

				//sslEnabled: false,
				s3ForcePathStyle: true // location wont work othewise, for local
				//signatureVersion: 'v2',

			});
		}
	}
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(0);

exports.default = Ractive.extend({
	components: {
		'icon-plus': _svgicons.IconPlus,
		'icon-refresh': _svgicons.IconRefresh
	},
	template: '\n\t\t<miniheader>\n\t\t\tBuckets\n\t\t\t<div class=\'pull-right\' style=\'margin-right: 2px;\'>\n\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'create\'>\n\t\t\t\t\t<icon-plus />\n\t\t\t\t</a>\n\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'@this.refresh_buckets()\'>\n\t\t\t\t\t<icon-refresh />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</miniheader>\n\t\t<scrollarea class=\'scrollarea miniheaderbody\' style=\'position: absolute;\'>\n\t\t<tables>\n\t\t\t{{#buckets}}\n\t\t\t<div on-click=\'open-bucket\'> {{.Name}} </div>\n\t\t\t{{/buckets}}\n\t\t</tables>\n\t\t</scrollarea>\n\t\t',
	data: function data() {
		return {};
	},
	refresh_buckets: function refresh_buckets() {
		var ractive = this;

		ractive.set('buckets');

		s3.listBuckets({}, function (err, data) {
			if (err) return ractive.set('err', err);

			ractive.set({ buckets: data.Buckets });
		});
	},
	on: {
		init: function init() {
			this.refresh_buckets();
			var ractive = this;
			ractive.on('open-bucket', function (e, bucket) {
				var bucket = this.get(e.resolve());
				ractive.parent.fire('open-bucket', bucket.Name);
			});
			ractive.on('create', function () {
				ractive.root.findComponent('tabs').newtab('bucketcreate', 'Create Bucket');
			});
		}
	}
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(0);

var _bucketlistfull = __webpack_require__(7);

var _bucketlistfull2 = _interopRequireDefault(_bucketlistfull);

var _create = __webpack_require__(8);

var _create2 = _interopRequireDefault(_create);

var _buckettab = __webpack_require__(9);

var _buckettab2 = _interopRequireDefault(_buckettab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	//isolated: true,
	components: {
		'icon-s3-bucket': _svgicons.IconS3Bucket,
		'icon-x': _svgicons.IconX,
		bucketlistfull: _bucketlistfull2.default,
		bucketcreate: _create2.default,
		buckettab: _buckettab2.default
	},
	template: '\n\t\t<tabhead>\n\t\t\t<tab class=\'{{#if active_id === "buckets" }}active{{/if}}\' on-click=\'@this.fire("activetab", "buckets")\'>\n\t\t\t\t<icon-s3-bucket style="width: 16px;height: 16px;" />\n\t\t\t</tab>\n\t\t{{#tabs}}\n\t\t\t{{#if .closed !== true}}\n\t\t\t<tab class=\'{{#if .id === active_id }}active{{/if}}\' on-click=\'@this.fire("activetab",.id)\'>\n\t\t\t\t{{.name}}\n\t\t\t\t<i class=\'\' on-click=\'closetab\'><icon-x style="width: 8px;height: 8px;line-height: 15px;" /></i>\n\t\t\t</tab>\n\t\t\t{{/if}}\n\t\t{{/tabs}}\n\t\t</tabhead>\n\t\t<tabcontent>\n\t\t\t{{#if active_id === "buckets" }}\n\t\t\t\t<bucketlistfull accessKeyId={{accessKeyId}} secretAccessKey={{secretAccessKey}} endpoint={{endpoint}} />\n\t\t\t{{else}}\n\t\t\t\t{{#tabs}}\n\t\t\t\t\t{{#if .closed === true}}\n\t\t\t\t\t\t<div class=\'closedtab\'></div>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t{{#if .type === \'bucketcreate\' }}\n\t\t\t\t\t\t\t<bucketcreate active={{ .id === active_id  }} id={{id}} />\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{#if .type === \'buckettab\' }}\n\t\t\t\t\t\t\t<buckettab\n\t\t\t\t\t\t\t\tbucket={{.}}\n\t\t\t\t\t\t\t\tactive={{ .id === active_id  }}\n\t\t\t\t\t\t\t\ttheme={{~/theme}}\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/tabs}}\n\t\t\t{{/if}}\n\t\t</tabcontent>\n\t\t',
	data: function data() {
		return {};
	},
	active_cache: [],
	activetabcontent: function activetabcontent() {
		var ractive = this;
		ractive.active_cache.push(ractive.get('active_id'));
		ractive.findAllComponents('buckettab').map(function (tableview_c) {
			tableview_c.set('active', tableview_c.get('bucket.id') === ractive.get('active_id'));
		});
	},
	newtab: function newtab(component_name, param1) {
		var id = Math.random().toString().split('.').join('');
		this.set('active_id', id);
		this.push('tabs', {
			id: id,

			name: param1,
			type: component_name

		});
		this.activetabcontent();
	},
	closetab: function closetab(id) {

		var tabidx = null;
		this.get('tabs').map(function (t, idx) {
			console.log("tab", t, idx);
			if (t.id === id) tabidx = idx;
		});
		if (tabidx === null) return alert('close: tab not found'); // not found

		this.set('tabs.' + tabidx + '.closed', true);
	},
	oninit: function oninit() {
		var ractive = this;

		this.observe('active_id', function (newvalue, oldvalue, keypath) {
			ractive.activetabcontent();
		});

		this.on('closetab', function (e) {

			console.log("close", e.resolve());
			var id = this.get(e.resolve() + '.id');

			this.set(e.resolve() + '.closed', true);

			this.active_cache = this.active_cache.filter(function (tid) {
				return tid !== id;
			});
			//this.set('tabs', this.get('tabs').filter(function(t) { return t.id !== id }) )

			if (this.get('active_id') === id) {
				// the current tab was closed
				this.set('active_id', this.active_cache.pop());
			}
			ractive.activetabcontent();
			return false;
		});
		this.on('activetab', function (e, id) {
			this.set('active_id', id);
			return false;
		});
	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tabledata = __webpack_require__(1);

var _tabledata2 = _interopRequireDefault(_tabledata);

var _svgicons = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		tabledata: _tabledata2.default,

		'icon-refresh': _svgicons.IconRefresh,
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\n\t\t<div class=\'pull-right\' style=\'padding: 7px;\'>\n\t\t\t<a class=\'btn btn-xs btn-primary \' on-click=\'create\'> CREATE BUCKET </a>\n\t\t\t<a class=\'btn btn-xs btn-default {{#if selection_length === 1}}{{else}}disabled{{/if}}\' on-click=\'delete\'> <icon-trash /> </a>\n\t\t\t<a class=\'btn btn-xs btn-default {{#if refresh_tables }}disabled{{/if}}\' on-click=\'@this.refresh_buckets()\'> <icon-refresh /> </a>\n\t\t</div>\n\n\t\t<tabledata columns={{columns}} rows={{rows}} on-colclick=\'open-item\' style=\'top: 38px;margin: 3px;\' />\n\n\t',
	refresh_buckets: function refresh_buckets() {
		var ractive = this;

		this.set('rows');

		s3.listBuckets({}, function (err, data) {
			if (err) return ractive.set('err', err);

			//console.log(data.Buckets)

			ractive.set('rows', data.Buckets.map(function (b) {
				return [{ KEY: true }, { HASH: b.Name, item: b }, {}, // access
				{}, // region
				{ S: b.CreationDate // date created


				}];
			}));

			var waterfallz = data.Buckets.map(function (b) {

				var f = function f(cb) {

					var params = {
						Bucket: b.Name
					};
					s3.getBucketLocation(params, function (err, data) {
						if (err) return cb();

						ractive.set('rows', ractive.get('rows').map(function (row) {
							if (row[1].HASH === b.Name) {
								row[3].S = data.LocationConstraint || 'us-east-1';
							}
							return row;
						}));

						//console.log('endpoint=', ractive.get('endpoint') )

						var this_s3 = new AWS.S3({
							endpoint: ractive.get('endpoint') || undefined,

							region: data.LocationConstraint || 'us-east-1',
							credentials: {
								accessKeyId: ractive.get('accessKeyId'),
								secretAccessKey: ractive.get('secretAccessKey')
							},

							s3ForcePathStyle: true

						});

						var params = {
							Bucket: b.Name
						};
						this_s3.getBucketAcl(params, function (err, data) {
							if (err) return console.log(err);

							var is_public_read = data.Grants.map(function (g) {
								return { type: g.Grantee.Type, URI: g.Grantee.URI, perm: g.Permission };
							}).filter(function (g) {
								return g.type === 'Group' && g.URI === "http://acs.amazonaws.com/groups/global/AllUsers" && g.perm === 'READ';
							}).length > 0;

							if (is_public_read) {
								ractive.set('rows', ractive.get('rows').map(function (row) {
									if (row[1].HASH === b.Name) {
										row[2].S = 'PUBLIC';
									}
									return row;
								}));
							}

							cb();
						});
					});
				};
				return f;
			});

			async.parallel(waterfallz, function (err) {});
		});
	},
	data: function data() {
		return {
			selection_length: 0,

			columns: [null, "Bucket name", "Access", "Region", "Date created"]

			//selection_length: 0,
			//refresh_tables: false,
		};
	},
	on: {
		init: function init() {
			this.refresh_buckets();
		},
		create: function create() {
			this.root.findComponent('tabs').newtab('bucketcreate', 'Create Bucket');
		},

		'open-item': function openItem(e, col, item, rawitem) {
			console.log('open-item', item.Name);
			this.root.findComponent('tabs').newtab('buckettab', item.Name);
		},

		'tabledata.selectrow': function tabledataSelectrow(context) {

			var keypath = context.resolve();
			this.set(keypath + '.0.selected', !this.get(keypath + '.0.selected'));

			this.set('selection_length', this.get('rows').filter(function (r) {
				return r[0].selected === true;
			}).length);
		},

		delete: function _delete() {

			var ractive = this;

			var selected = this.get('rows').filter(function (r) {
				return r[0].selected === true;
			});

			if (selected.length === 0) return alert('Please select a bucket to delete');

			if (selected.length > 1) return alert('Please select one bucket at a time');

			var bucketname = selected[0][1].HASH;

			if (confirm('Are you sure you want to delete bucket ' + bucketname)) {
				var params = {
					Bucket: bucketname
				};
				s3.deleteBucket(params, function (err, data) {
					if (err) return alert('Delete bucket failed');

					ractive.refresh_buckets();
				});
			}
		}
	}
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: '\n\n\t<div class=\'tableview {{#if active}}active{{/if}}\'>\n\t\t<div style=\'position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;overflow-x: auto;\'>\n\n\t\t\t<div style="padding: 50px;">\n\n\n\n\t\t\t\t<h3>Create Bucket</h3>\n\n\t\t\t\t<label>Bucket name</label><br>\n\t\t\t\t<input class="input-text" placeholder="Enter DNS-=compilant bucket name" type="text" value={{newbucket.Bucket}} style="min-width: 300px;" />\n\n\t\t\t\t<br><br>\n\t\t\t\t<label>Region</label><br>\n\t\t\t\t<select class="input-select" value={{newbucket.CreateBucketConfiguration.LocationConstraint}} style="min-width: 300px;" >\n\t\t\t\t\t{{#regions}}\n\t\t\t\t\t\t<option value="{{.id}}"> {{.name}} </option>\n\t\t\t\t\t{{/regions}}\n\n\t\t\t\t\t<option value="us-east-2">Us East (Ohio)</option>\n\t\t\t\t\t<option value="us-west-1">Us West (N.California)</option>\n\t\t\t\t\t<option value="us-west-2">Us West (Oregon)</option>\n\t\t\t\t</select>\n\n\t\t\t\t<!--\n\n\t\t\t\t/*\n\t\t\t\tVersioning\n\t\t\t\t[ ] Keep all versions of an object in the same bucket. (Learn more [https://docs.aws.amazon.com/console/s3/enable-bucket-versioning])\n\t\t\t\t*/\n\n\t\t\t\t/*\n\t\t\t\tServer access logging\n\t\t\t\t[ ] Log requests for access to your bucket. (Learn more [https://docs.aws.amazon.com/console/s3/server-access-logging])\n\t\t\t\t*/\n\n\t\t\t\t/*\n\t\t\t\tTags\n\t\t\t\tYou can use tags to track project costs. ( Learn more [ https://docs.aws.amazon.com/console/s3/cost-allocation-tagging ] )\n\n\t\t\t\t[___KEY_______] [__VALUE________] [close]\n\t\t\t\t[+add another]\n\t\t\t\t*/\n\n\t\t\t\t/*\n\t\t\t\tObject-level logging\n\t\t\t\t[ ] Record object-level API activity using AWS CloudTrail for an additional cost. See CloudTrail pricing  or learn more\n\t\t\t\t*/\n\n\t\t\t\t/*\n\t\t\t\tDefault encryption\n\t\t\t\t[ ] Automatically encrypt objects when they are stored in S3. Learn more\n\t\t\t\t*/\n\n\t\t\t\t/* --- ADVANCED ----- */\n\t\t\t\tObject lock\n\t\t\t\t[ ] Permanently allow objects in this bucket to be locked. Learn more\n\t\t\t\t    Object lock requires bucket versioning to be enabled.\n\n\t\t\t\t   /* Management */\n\t\t\t\t\tCloudWatch request metrics\n\t\t\t\t\t[ ] Monitor requests in your bucket for an additional cost. See CloudWatch pricing  or learn more\n\n\n\t\t\t\t/* more perm */\n\n\t\t\t\t-->\n\n\t\t\t\t<br><br>\n\t\t\t\t<a class="btn btn-sm btn-primary" on-click="create">Create</a>\n\n\t\t\t</div>\n\n\n\t\t</div>\n\t</div>\n\t',
	on: {
		create: function create() {
			var ractive = this;
			var params = this.get('newbucket');

			if (params.CreateBucketConfiguration.LocationConstraint === 'us-east-1') delete params.CreateBucketConfiguration;

			s3.createBucket(params, function (err, data) {

				if (err) return alert(err.code || err.message || 'Bucket create failed');

				console.log(err, data);

				//ractive.root.findComponent('minitablelist').refresh_tables()

				ractive.parent.newtab('buckettab', ractive.get('newbucket.Bucket'));

				// close the current tab
				ractive.parent.closetab(ractive.get('id'));
			});
		}
	},
	data: function data() {
		return {
			newbucket: {
				Bucket: '',
				CreateBucketConfiguration: {
					LocationConstraint: 'us-east-1'
				}
			},

			regions: [{ id: 'us-east-1', name: 'US East (N. Virginia)' }, { id: 'us-east-2', name: 'US East (Ohio)' }, { id: 'us-west-1', name: 'US West (N. California)' }, { id: 'us-west-2', name: 'US West (Oregon)' }, { id: 'ap-south-1', name: 'Asia Pacific (Mumbai)' }, { id: 'ap-northeast-2', name: 'Asia Pacific (Seoul)' }, { id: 'ap-southeast-1', name: 'Asia Pacific (Singapore)' }, { id: 'ap-southeast-2', name: 'Asia Pacific (Sydney)' }, { id: 'ap-northeast-1', name: 'Asia Pacific (Tokyo)' }, { id: 'ca-central-1', name: 'Canada (Central)' }, { id: 'eu-central-1', name: 'EU (Frankfurt)' }, { id: 'eu-west-1', name: 'EU (Ireland)' }, { id: 'eu-west-2', name: 'EU (London)' }, { id: 'eu-west-3', name: 'EU (Paris)' }, { id: 'eu-north-1', name: 'EU (Stockholm)' }, { id: 'sa-east-1', name: 'South America (Sao Paulo)' }]

		};
	}
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _browser = __webpack_require__(10);

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		BucketBrowser: _browser2.default
	},
	template: '\n\n\t<div class=\'tableview {{#if active}}active{{/if}}\'>\n\t\t<div class=\'tableview-table-tabs noselect\'>\n\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'info\'}}active{{/if}}\'          on-click=\'@this.set(\'tab\',\'info\')\'> Overview </a>\n\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'properties\'}}active{{/if}}\'    on-click=\'@this.set(\'tab\',\'properties\')\'> Properties </a>\n\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'permissions\'}}active{{/if}}\'   on-click=\'@this.set(\'tab\',\'permissions\')\'> Permissions </a>\n\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'management\'}}active{{/if}}\'    on-click=\'@this.set(\'tab\',\'management\')\'> Management </a>\n\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'access_points\'}}active{{/if}}\' on-click=\'@this.set(\'tab\',\'access_points\')\'> Access points </a>\n\t\t</div>\n\t\t<div style=\'position: absolute;top: 40px;left: 30px;right: 30px;bottom: 2px;\'>\n\n\n\t\t\t{{#if tab === \'info\'}}\n\t\t\t\t<BucketBrowser bucket={{bucket.name}} />\n\t\t\t{{/if}}\n\n\t\t\t{{#if tab === \'properties\'}}\n\t\t\t\t<br>\n\t\t\t\tProperties {{bucket.name}}\n\t\t\t{{/if}}\n\n\t\t\t{{#if tab === \'permissions\'}}\n\t\t\t\t<br>\n\t\t\t\tPermissions {{bucket.name}}\n\t\t\t{{/if}}\n\n\t\t\t{{#if tab === \'management\'}}\n\t\t\t\t<br>\n\t\t\t\tManagement {{bucket.name}}\n\t\t\t{{/if}}\n\n\n\t\t\t{{#if tab === \'access_points\'}}\n\t\t\t\t<br>\n\t\t\t\tAccess points {{bucket.name}}\n\t\t\t{{/if}}\n\n\t\t</div>\n\t</div>\n\n\t',
	data: function data() {
		return {
			tab: 'info'
		};
	}
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(0);

var _tabledata = __webpack_require__(1);

var _tabledata2 = _interopRequireDefault(_tabledata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		tabledata: _tabledata2.default,

		'icon-refresh': _svgicons.IconRefresh,
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\t\t<div style=\'padding: 7px;\'>\n\t\t\t<a class="btn btn-sm btn-primary" on-click="upload">Upload</a>\n\n\t\t\t<div class="pull-right">\n\t\t\t\t<a class=\'btn btn-xs btn-default {{#if selection_length === 1}}{{else}}disabled{{/if}}\' on-click=\'delete\'> <icon-trash /> </a>\n\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'@this.list_objects()\'> <icon-refresh /> </a>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<tabledata columns={{columns}} rows={{rows}} on-colclick=\'open-item\' style=\'top: 38px;margin: 3px;\' />\n\n\t',

	pickafile: function pickafile(cb) {
		var element = document.createElement('input');
		element.setAttribute('type', 'file');
		//element.setAttribute('accept', "text/csv");
		element.setAttribute('style', "display: none;");
		element.addEventListener('change', function (e) {

			if (element.files.length > 1) return alert('Please upload one file at a time');

			cb(null, element.files[0]);
		});

		element.click();
	},
	list_objects: function list_objects() {
		var ractive = this;

		this.set({ rows: null });

		var params = {
			Bucket: this.get('bucket')
			//Delimiter: 'STRING_VALUE',
			//EncodingType: url,
			//Marker: 'STRING_VALUE',
			//MaxKeys: 'NUMBER_VALUE',
			//Prefix: 'STRING_VALUE',
			//RequestPayer: requester
		};
		s3.listObjects(params, function (err, data) {
			if (err) return;

			ractive.set({
				rows: data.Contents.map(function (s3obj) {
					return [{ KEY: true }, { HASH: s3obj.Key, item: s3obj }, { S: new Date(s3obj.LastModified).toISOString() }, { N: s3obj.Size }, { S: s3obj.StorageClass }];
				})
			});
			console.log(err, data);
		});
	},

	on: {
		upload: function upload() {
			var ractive = this;
			this.pickafile(function (err, file) {
				console.log('selected', file);

				var reader = new FileReader();
				reader.onload = function (e) {
					var params = {
						Body: reader.result,
						Bucket: ractive.get('bucket'),
						Key: file.name
						//StorageClass: "STANDARD_IA"
					};
					s3.putObject(params, function (err, data) {

						if (err) return alert('upload failed');

						ractive.list_objects();
					});
				};
				reader.readAsBinaryString(file);
			});
		},
		delete: function _delete() {

			var ractive = this;

			var selected = this.get('rows').filter(function (r) {
				return r[0].selected === true;
			});

			if (selected.length === 0) return alert('Please select an object to delete');

			if (selected.length > 1) return alert('Please select one object at a time');

			var object_key = selected[0][1].item.Key;

			var params = {
				Bucket: ractive.get('bucket'),
				Key: object_key
			};
			s3.deleteObject(params, function (err, data) {
				if (err) return alert('Delete object failed');

				ractive.list_objects();
			});
		},

		'tabledata.selectrow': function tabledataSelectrow(context) {

			var keypath = context.resolve();
			this.set(keypath + '.0.selected', !this.get(keypath + '.0.selected'));

			this.set('selection_length', this.get('rows').filter(function (r) {
				return r[0].selected === true;
			}).length);
		},
		init: function init() {
			this.list_objects();

			// s3.getObject({
			// 	Bucket: "cccccc-cccccc",
			// 	Key: "dynamodb-ui-local.pem",
			// 	//Range: "bytes=0-9"
			// }, function(err, data ) {
			// 	console.log(err,data)
			// })
		}
	},
	data: function data() {
		return {
			columns: [null, "Name", "Last modified", "Size", "Storage class"]
		};
	}
});

/***/ })
/******/ ])["default"];
});