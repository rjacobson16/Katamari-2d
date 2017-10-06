import  mygame  from './game.js';

var loseState = {
  create: function(){
    console.log('you lose')

    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    var text = mygame.add.text(350, 300, "YOU LOSE!", style);


  }
};




export default loseState;
