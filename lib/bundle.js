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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__win__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lose__ = __webpack_require__(5);






var mygame = new Phaser.Game(800, 600, Phaser.AUTO);



mygame.state.add('boot', __WEBPACK_IMPORTED_MODULE_0__boot__["a" /* default */]);
mygame.state.add('load', __WEBPACK_IMPORTED_MODULE_1__load__["a" /* default */]);
mygame.state.add('play', __WEBPACK_IMPORTED_MODULE_2__play__["a" /* default */]);
mygame.state.add('win', __WEBPACK_IMPORTED_MODULE_3__win__["a" /* default */]);
mygame.state.add('lose', __WEBPACK_IMPORTED_MODULE_4__lose__["a" /* default */]);

mygame.state.start('boot');

/* harmony default export */ __webpack_exports__["default"] = (mygame);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(0);



var bootState = {

  create() {

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

    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('sky', 'assets/sky.jpg');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('ground', 'assets/platform.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('diamond', 'assets/diamond.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('star', 'assets/star.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('firstaid', 'assets/firstaid.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('atari', 'assets/atari800.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('book1', 'assets/book1.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('book2', 'assets/book2.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('book3', 'assets/book3.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('turkey', 'assets/turkey.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('table1', 'assets/table1.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('bbq', 'assets/bbq.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.image('icecream', 'assets/icecream.png');
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.spritesheet('katamari', 'assets/katamari.png', 35, 37);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.spritesheet('prince', 'assets/the_prince.png', 19, 35);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
//
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
var  katamari_jump;
var clump;
var itemGroup;
var items;
var piggy;
var piggyVel = 40;
var timer;
var timerEvent;
//
//
var playState = {
  create:  function() {
    initEnvironment();
    katamari = initKatamari();
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].camera.follow(katamari);

   clump = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.group();
   itemGroup = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.group();

   initItems();
   cursors = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].input.keyboard.createCursorKeys();

   timer = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].time.create();
   timerEvent = timer.add(Phaser.Timer.MINUTE * 1 + Phaser.Timer.SECOND * 0, this.endTimer, this);
   timer.start();

 },


  update: function() {
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.overlap(katamari, itemGroup, rescale, null, this);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.collide(katamari, platforms);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.collide(itemGroup, platforms);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.collide(clump, platforms);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.collide(piggy, platforms);

    katamari.body.velocity.x = 0;
    handleCursor();

    for (let i =0; i<items.length; i++) {
      var item = items[i];


      if (checkOverlap(katamari, item))
      {
        if (item.scale.x <= katamari.scale.x * .7) {
          clump.add(item);
          clump.set(item,'body.x', katamari.x + katamari.width/2 + item.scaleFact/2);
          clump.set(item,'body.y', katamari.y + katamari.height/2);
        } else {
          //
        }
      }
    }
    piggy.body.velocity.x = piggyVel;

    if (piggy.body.x>=1250){
      piggyVel = -40;
      piggy.scale.x *= -1;

    }
    if (piggy.body.x <=280) {
      piggyVel = 40;
      piggy.scale.x *= -1;
    }

    if (checkOverlap(katamari, piggy)) {
      // piggy.animations.stop(null, true);
      clump.add(piggy);
      clump.set(piggy,'body.x', katamari.x + katamari.width/2);
      clump.set(piggy,'body.y', katamari.y + katamari.height/2);
    }
  },

    render: function () {
          // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
          if (timer.running) {
              __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 2, 14, "#ff0");
          }
          else {
              __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].debug.text("Time's Up!", 2, 14, "#0f0");

              if (katamari.scale.x >= 8) {
                __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].state.start('win');
              } else {
                __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].state.start('lose');
              }
          }
      },
      endTimer: function() {
          // Stop the timer when the delayed event triggers
          timer.stop();
      },
      formatTime: function(s) {
          // Convert seconds (s) to a nicely formatted and padded time string
          var minutes = "0" + Math.floor(s / 60);
          var seconds = "0" + (s - minutes * 60);
          return minutes.substr(-2) + ":" + seconds.substr(-2);
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

  katamari_jump = -250;
  return katamari;

}

function initEnvironment() {

      __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].world.setBounds(0, 0, 3840, 800);
      __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.tileSprite(0, 0, 3840, 1200, 'sky');
      platforms = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.group();
      platforms.enableBody = true;
      ground = platforms.create(0, __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].world.height - 64, 'ground');
      ground.scale.setTo(50, 2);
      ground.body.immovable = true;
      var ledge = platforms.create(1800, 600, 'ground');
      ledge.body.immovable = true;
      ledge = platforms.create(200, 400, 'ground');
      ledge.scale.setTo(3, 1);
      ledge.body.immovable = true;

      var bbq = platforms.create(1710, 670, 'bbq');
      bbq.scale.setTo(1.7, 1.7);
      bbq.body.immovable = true;

      var table = platforms.create(2290, 690, 'table1');
      table.scale.setTo(1.7, 1.7);
      table.body.immovable = true;



}

function initItems() {
  var arr = ['star', 'diamond', 'prince', 'firstaid'];
  items = [];

  for (var i = 300; i <500 ; i+=30) {
    var item = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.sprite( i, __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].world.height - 100, 'diamond');
    items.push(item);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.enable(item);
  }


  var prince = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.sprite( 0, __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].world.height - 100, 'prince');
  items.push(prince);
  __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.enable(prince);

  var turkey = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.sprite( 1725, 640, 'turkey');
  items.push(turkey);
  __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.enable(turkey);
  turkey.scale.setTo(1.5, 1.5);


  var icecream = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.sprite( 2280, 690, 'icecream');
  items.push(icecream);
  __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.enable(icecream);
  icecream.scale.setTo(1.2, 1.2);

  for (var i = 0; i < 6; i+=1) {
    var firstaid = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.sprite( 1800+(i*60), 570, 'firstaid');
    items.push(firstaid);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.enable(firstaid);
    firstaid.body.gravity.y = 350;
  }

  for (var i = 0; i < 6; i+=1) {
    var star = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.sprite( 700+(i*150), 600, 'star');
    items.push(star);
    __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.enable(star);
  }
//   // for (var i = 800; i < 5000; i+=50) {
//   //   var rand = arr[Math.floor(Math.random() * arr.length)];
//   //   var item = mygame.add.sprite( i, mygame.world.height - 100, rand);
//   //
//   //   if (rand === 'baddie') {
//   //     item.frame = 2;
//   //   }
//   //
//   //   items.push(item);
//   //   mygame.physics.arcade.enable(item);
//   // }
//
  for ( i=0; i<items.length; i++) {
    item = items[i];
    item.scaleFact = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].rnd.realInRange(0, 50);
    item.rotation = katamari.body.angle;

    itemGroup.add(item);
  }

  piggy = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.sprite(400, 300, 'baddie');
  piggy.scale.setTo(3,3);
  __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].physics.arcade.enable(piggy);
  // itemGroup.add(piggy);
  piggy.body.gravity.y = 350;
  piggy.body.collideWorldBounds = true;
  piggy.animations.add('left', [2, 3], 3, true);
  piggy.animations.add('right', [0, 1], 3, true);
  piggy.animations.play('left');
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
      katamari.body.velocity.y = katamari_jump;
  }



}

function rescale(katamari, item) {
  katamari.body.velocity.y = -150;
  katamari.scale.setTo(katamari.scale.x * (1 + (item.width/2000)), katamari.scale.y *
                                                            (1 + (item.width/2000)));
  item.scale.setTo(.7, .7);
  katamari_jump -=1.5;

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
//
/* harmony default export */ __webpack_exports__["a"] = (playState);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(0);


var winState = {
  create: function(){

        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        var text = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.text(350, 300, "YOU WIN!", style);

  }
};


/* harmony default export */ __webpack_exports__["a"] = (winState);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(0);


var loseState = {
  create: function(){
    console.log('you lose')

    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    var text = __WEBPACK_IMPORTED_MODULE_0__game_js__["default"].add.text(350, 300, "YOU LOSE!", style);


  }
};




/* harmony default export */ __webpack_exports__["a"] = (loseState);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map