import  mygame  from './game.js';

var button;

var startState = {

  create: function(){
   mygame.add.sprite(0, 0, 'start_screen');
   button = mygame.add.button(mygame.world.centerX - 30, mygame.world.centerY + 200,
   'start', start);
   button.scale.setTo(.25, .25);
  }
};

function start() {
  mygame.state.start('play');
}

export default startState;
