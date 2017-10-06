import  mygame  from './game.js';

var winState = {
  create: function(){

        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        var text = mygame.add.text(350, 300, "YOU WIN!", style);

  }
};


export default winState;
