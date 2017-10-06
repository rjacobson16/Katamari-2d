import bootState from './boot';
import loadState from './load';
import startState from './start';
import playState from './play';
import winState from './win';
import loseState from './lose';

var mygame = new Phaser.Game(800, 600, Phaser.AUTO, 'my-game');



mygame.state.add('boot', bootState);
mygame.state.add('load', loadState);
mygame.state.add('start', startState);
mygame.state.add('play', playState);
mygame.state.add('win', winState);
mygame.state.add('lose', loseState);

mygame.state.start('boot');

export default mygame;
