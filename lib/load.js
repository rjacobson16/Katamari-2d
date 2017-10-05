import  mygame  from './game.js';

var loadState = {
  preload: function() {
    var loadingLabel = mygame.add.text(80, 150, 'loading...', {font: '30px Arial', fill: '#ffffff'})

    mygame.load.image('sky', 'assets/sky.png');
    mygame.load.image('ground', 'assets/platform.png');
    mygame.load.image('diamond', 'assets/diamond.png');
    mygame.load.image('star', 'assets/star.png');
    mygame.load.image('firstaid', 'assets/firstaid.png');
    mygame.load.image('atari', 'assets/atari800.png');
    mygame.load.spritesheet('katamari', 'assets/katamari.png', 35, 37);
    mygame.load.spritesheet('prince', 'assets/the_prince.png', 19, 35);
    mygame.load.spritesheet('baddie', 'assets/baddie.png', 32, 32, 4);
    mygame.load.spritesheet('items1', 'assets/items1.png', 34, 34);
  },

  create: function () {

    mygame.state.start('play');
  }
};

export default loadState;
