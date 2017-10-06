import  mygame  from './game.js';


var bootState = {

  create() {

    mygame.physics.startSystem(Phaser.Physics.ARCADE);

     mygame.state.start('load');
  }
};

export default bootState;
