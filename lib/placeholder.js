import  mygame  from './game.js';


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


var playState = {
  create:  function() {
    initEnvironment();
    katamari = initKatamari();
    mygame.camera.follow(katamari);


   clump = mygame.add.group();
   itemGroup = mygame.add.group();

   initItems();
   cursors = mygame.input.keyboard.createCursorKeys();

 },


  update: function() {
    mygame.physics.arcade.overlap(katamari, itemGroup, rescale, null, this);
    mygame.physics.arcade.collide(katamari, platforms);
    mygame.physics.arcade.collide(itemGroup, platforms);
    mygame.physics.arcade.collide(clump, platforms);

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
    piggy.body.velocity.x = piggyVel;

    if (piggy.body.x>=1250 && !checkOverlap(katamari, piggy)){
      piggyVel = -40;
      piggy.scale.x *= -1;

    }
    if (piggy.body.x <=280 && !checkOverlap(katamari, piggy)) {
      piggyVel = 40;
      piggy.scale.x *= -1;
    }

    if (checkOverlap(katamari, piggy)) {
      piggyVel = 0;
      piggy.animations.stop(null, true);
      piggy.body.x = katamari.body.x;
      piggy.body.y = katamari.body.y;
    }
  }
};

function initKatamari() {
  katamari = new Unit(mygame, 32, mygame.world.height - 150, 'katamari');
  mygame.add.existing(katamari);
  mygame.physics.arcade.enable(katamari);

  katamari.body.bounce.y = 0.2;
  katamari.body.gravity.y = 500;
  katamari.body.collideWorldBounds = true;

  katamari.animations.add('left', [0, 1, 2], 10, true);
  katamari.animations.add('right', [4, 5, 6], 10, true);

  katamari_jump = -250;
  return katamari;

}

function initEnvironment() {

      mygame.world.setBounds(0, 0, 3840, 800);
      mygame.add.tileSprite(0, 0, 3840, 1200, 'sky');
      platforms = mygame.add.group();
      platforms.enableBody = true;
      ground = platforms.create(0, mygame.world.height - 64, 'ground');
      ground.scale.setTo(50, 2);
      ground.body.immovable = true;
      var ledge = platforms.create(1800, 600, 'ground');
      ledge.body.immovable = true;
      ledge = platforms.create(200, 400, 'ground');
      ledge.scale.setTo(3, 1);
      ledge.body.immovable = true;

}

function initItems() {
  var arr = ['star', 'diamond', 'prince', 'firstaid', 'baddie'];
  items = [];
  for (var i = 0; i < 96; i++) {
    var rand = arr[Math.floor(Math.random() * arr.length)];
    var item = mygame.add.sprite((4*i) * 10, mygame.world.height - 100, rand);

    if (rand === 'baddie') {
      item.frame = 2;
    }

    items.push(item);
    mygame.physics.arcade.enable(item);
  }

  for ( i=0; i<items.length; i++) {
    item = items[i];
    item.scaleFact = mygame.rnd.realInRange(0, 50);
    item.rotation = katamari.body.angle;

    itemGroup.add(item);
  }

  piggy = mygame.add.sprite(400, 300, 'baddie');
  piggy.scale.setTo(3,3);
  mygame.physics.arcade.enable(piggy);
  itemGroup.add(piggy);
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
      y.pivot.x = (katamari.width * (mygame.rnd.realInRange(2, 7)*0.1));
      y.rotation += .03;
    }

    if (cursors.left.isDown && checkOverlap(katamari, y)) {
      y.pivot.x = (katamari.width * (mygame.rnd.realInRange(2, 7)*0.1));
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

export default playState;
