import  mygame  from './game.js';

var loadState = {
  preload: function() {
    var loadingLabel = mygame.add.text(80, 150, 'loading...', {font: '30px Arial', fill: '#ffffff'});

    mygame.load.image('sky', 'assets/sky.jpg');
    mygame.load.image('start_screen', 'assets/screen.jpg');
    mygame.load.image('ground', 'assets/platform.png');
    mygame.load.image('diamond', 'assets/diamond.png');
    mygame.load.image('star', 'assets/star.png');
    mygame.load.image('firstaid', 'assets/firstaid.png');
    mygame.load.image('atari', 'assets/atari800.png');
    mygame.load.image('book1', 'assets/book1.png');
    mygame.load.image('book2', 'assets/book2.png');
    mygame.load.image('book3', 'assets/book3.png');
    mygame.load.image('turkey', 'assets/turkey.png');
    mygame.load.image('table1', 'assets/table1.png');
    mygame.load.image('bbq', 'assets/bbq.png');
    mygame.load.image('icecream', 'assets/icecream.png');
    mygame.load.image('start', 'assets/start.png');
    mygame.load.spritesheet('katamari', 'assets/katamari.png', 35, 37);
    mygame.load.spritesheet('prince', 'assets/the_prince.png', 19, 35);
    mygame.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
//
  },

  create: function () {

    mygame.state.start('start');
  }
};

export default loadState;
