import bootState from './boot';
import loadState from './load';
import playState from './play';


var mygame = new Phaser.Game(800, 600, Phaser.AUTO);



mygame.state.add('boot', bootState);
mygame.state.add('load', loadState);
mygame.state.add('play', playState);
// mygame.state.add('win', winState);


mygame.state.start('boot');

export default mygame;
