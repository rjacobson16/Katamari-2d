/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boot__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__load__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play__ = __webpack_require__(3);





var mygame = new Phaser.Game(800, 600, Phaser.AUTO);



mygame.state.add('boot', __WEBPACK_IMPORTED_MODULE_0__boot__["a" /* default */]);
mygame.state.add('load', __WEBPACK_IMPORTED_MODULE_1__load__["a" /* default */]);
mygame.state.add('play', __WEBPACK_IMPORTED_MODULE_2__play__["a" /* default */]);
// mygame.state.add('win', winState);


mygame.state.start('boot');

/* harmony default export */ __webpack_exports__["default"] = (mygame);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(0);



var bootState = {

  create() {
    // this.game = game;
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.startSystem(Phaser.Physics.ARCADE);

     __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].state.start('load');
  }
};

/* harmony default export */ __webpack_exports__["a"] = (bootState);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(0);


var loadState = {
  preload: function() {
    var loadingLabel = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.text(80, 150, 'loading...', {font: '30px Arial', fill: '#ffffff'})

    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('sky', 'assets/sky.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('ground', 'assets/platform.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('diamond', 'assets/diamond.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('star', 'assets/star.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('firstaid', 'assets/firstaid.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('atari', 'assets/atari800.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.spritesheet('katamari', 'assets/katamari.png', 35, 37);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.spritesheet('prince', 'assets/the_prince.png', 19, 35);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.spritesheet('baddie', 'assets/baddie.png', 32, 32, 4);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.spritesheet('items1', 'assets/items1.png', 34, 34);
  },

  create: function () {

    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].state.start('play');
  }
};

/* harmony default export */ __webpack_exports__["a"] = (loadState);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(0);



var katamari;
var platforms;
var ground;
var cursors;
var clump;
var itemGroup;
var items;


var playState = {
  create:  function() {
    initEnvironment();
    katamari = initKatamari();
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].camera.follow(katamari);


   clump = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.group();
   itemGroup = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.group();

   initItems();
   cursors = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].input.keyboard.createCursorKeys();

 },


  update: function() {
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.overlap(katamari, itemGroup, rescale, null, this);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.collide(katamari, platforms);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.collide(clump, platforms);

    katamari.body.velocity.x = 0;
    handleCursor();

    for (let i =0; i<items.length; i++) {
      var item = items[i];


      if (checkOverlap(katamari, item))
      {
        clump.add(item);
        clump.set(item,'body.x', katamari.x + katamari.width/2 + item.scaleFact/2);
        clump.set(item,'body.y', katamari.y + katamari.height/2);
      }
    }
  }
};

function initKatamari() {
  katamari = new Unit(__WEBPACK_IMPORTED_MODULE_0__game_js__["default"], 32, __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].world.height - 150, 'katamari');
  __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.existing(katamari);
  __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.enable(katamari);

  katamari.body.bounce.y = 0.2;
  katamari.body.gravity.y = 500;
  katamari.body.collideWorldBounds = true;

  katamari.animations.add('left', [0, 1, 2], 10, true);
  katamari.animations.add('right', [4, 5, 6], 10, true);


  return katamari;

}

function initEnvironment() {


      __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.tileSprite(0, 0, 3840, 600, 'sky');
      platforms = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.group();
      platforms.enableBody = true;
      ground = platforms.create(0, __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].world.height - 64, 'ground');
      ground.scale.setTo(50, 2);
      ground.body.immovable = true;
      __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].world.setBounds(0, 0, 3840, 600);

}

function initItems() {
  var arr = ['star', 'diamond', 'prince', 'firstaid', 'baddie'];
  items = [];
  for (var i = 0; i < 96; i++) {
    var rand = arr[Math.floor(Math.random() * arr.length)];
    var item = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.sprite((4*i) * 10, __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].world.height - 100, rand);

    if (rand === 'baddie') {
      item.frame = 2;
    }

    items.push(item);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.enable(item);
  }

  for ( i=0; i<items.length; i++) {
    item = items[i];
    item.scaleFact = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].rnd.realInRange(0, 50);
    item.rotation = katamari.body.angle;

    itemGroup.add(item);
  }
}

function handleCursor() {
  for (let i =0; i<items.length; i++) {
  var y = items[i];
    if (cursors.right.isDown && checkOverlap(katamari, y)) {
      y.pivot.x = (katamari.width * (__WEBPACK_IMPORTED_MODULE_0__game_js__["default"].rnd.realInRange(2, 7)*0.1));
      y.rotation += .03;
    }

    if (cursors.left.isDown && checkOverlap(katamari, y)) {
      y.pivot.x = (katamari.width * (__WEBPACK_IMPORTED_MODULE_0__game_js__["default"].rnd.realInRange(2, 7)*0.1));
      y.rotation -= .03;
    }

  }

  if (cursors.left.isDown){
      //  Move to the left
      katamari.body.velocity.x = -150;
      katamari.animations.play('left');
  }
  else if (cursors.right.isDown){
      //  Move to the right
      katamari.body.velocity.x = 150;
      katamari.animations.play('right');
  }
  else{
      //  Stand still
      katamari.animations.stop();
      katamari.frame = 3;
  }

  //  Allow the katamari to jump if they are touching the ground.
  if (cursors.up.isDown && katamari.body.touching.down){
      katamari.body.velocity.y = -250;
  }



}

function rescale(katamari, item) {
  katamari.body.velocity.y = -150;
  katamari.scale.setTo(katamari.scale.x * (1 + (item.width/1000)), katamari.scale.y *
                                                            (1 + (item.width/1000)));
  item.scale.setTo(.7, .7);

  if (katamari.scale.x > 8) {
    katamari.scale.setTo(8, 8);
  }
}

function checkOverlap(spriteA, spriteB) {

var boundsA = spriteA.getBounds();
var boundsB = spriteB.getBounds();

return Phaser.Rectangle.intersects(boundsA, boundsB);

}



function Unit(mygame, x, y, spriteName) {
	Phaser.Sprite.call(this, mygame, x, y, spriteName);
	// base unit stuff goes here
}
Unit.prototype = Object.create(Phaser.Sprite.prototype);
Unit.prototype.constructor = Unit;

/* harmony default export */ __webpack_exports__["a"] = (playState);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map