var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {


    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('diamond', 'assets/diamond.png');
    game.load.image('star', 'assets/star.png');
    game.load.image('firstaid', 'assets/firstaid.png');
    game.load.spritesheet('katamari', 'assets/katamari.png', 35, 37);
    game.load.spritesheet('prince', 'assets/the_prince.png', 19, 35);
}

var katamari;
var platforms;
var cursors;

function create() {


    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 3840, 600, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(50, 2);
    ground.body.immovable = true;

    // The player and its settings
    katamari = game.add.sprite(32, game.world.height - 150, 'katamari');
    game.world.setBounds(0, 0, 3840, 600);
    game.camera.follow(katamari);
    clump = game.add.group();

    itemGroup = game.add.group()

    game.physics.arcade.enable(katamari);
    katamari.body.bounce.y = 0.2;
    katamari.body.gravity.y = 500;
    katamari.body.collideWorldBounds = true;
    //  Our two animations, walking left and right.
    katamari.animations.add('left', [0, 1, 2], 10, true);
    katamari.animations.add('right', [4, 5, 6], 10, true);


    arr = ['star', 'diamond', 'prince', 'firstaid']
    items = [];
    for (var i = 0; i < 96; i++) {
      var rand = arr[Math.floor(Math.random() * arr.length)]
      var item = game.add.sprite((4*i) * 10, game.world.height - 100, rand);
      items.push(item);
      game.physics.arcade.enable(item);
    }

    cursors = game.input.keyboard.createCursorKeys();


    for (let i =0; i<items.length; i++) {
      item = items[i]
      item.scaleFact = game.rnd.realInRange(0, 50)

      itemGroup.add(item);

      game.physics.arcade.enable(item);
      item.rotation = katamari.body.angle;


    }



}



function update() {


    //  Collide the player and the items with the platforms
    game.physics.arcade.overlap(katamari, itemGroup, rescale, null, this);


    game.physics.arcade.collide(katamari, platforms);
    game.physics.arcade.collide(clump, platforms);
    // game.physics.arcade.collide(prince, platforms);
    // game.physics.arcade.collide(itemGroup, platforms);
    //  Reset the katamaris velocity (movement)
    katamari.body.velocity.x = 0;
    // prince.body.velocity.x = 0;

    for (let i =0; i<items.length; i++) {
      item = items[i]


      if (checkOverlap(katamari, item))
      {
        clump.add(item);
        clump.set(item,'body.x', katamari.x + katamari.width/2 + item.scaleFact/2);
        clump.set(item,'body.y', katamari.y + katamari.height/2);
      }



    }


      for (let i =0; i<items.length; i++) {
        y = items[i]
        if (cursors.right.isDown && checkOverlap(katamari, y)) {
          y.pivot.x = (katamari.width * (game.rnd.realInRange(2, 7)*0.1));
          y.rotation += .03
        }

        if (cursors.left.isDown && checkOverlap(katamari, y)) {
          y.pivot.x = (katamari.width * (game.rnd.realInRange(2, 7)*0.1));
          y.rotation -= .03
        }

      }



    if (cursors.left.isDown)
    {
        //  Move to the left

        katamari.body.velocity.x = -150;
        katamari.animations.play('left');

    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        katamari.body.velocity.x = 150;
        katamari.animations.play('right');
    }
    else
    {
        //  Stand still
        katamari.animations.stop();
        katamari.frame = 3;
    }

    //  Allow the katamari to jump if they are touching the ground.
    if (cursors.up.isDown && katamari.body.touching.down)
    {
        katamari.body.velocity.y = -250;

    }

    function rescale(katamari, item) {
      katamari.body.velocity.y = -150;



      katamari.scale.setTo(katamari.scale.x * (1 + (item.width/1000)), katamari.scale.y * (1 + (item.width/1000)))
      item.scale.setTo(.5, .5)

      if (katamari.scale.x > 8) {
        katamari.scale.setTo(8, 8);
      }
    }

    function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

 }


//  function Unit(game, x, y, spriteName) {
// 	  Phaser.Sprite.call(this, game, x, y, 'units', spriteName);
//
//  }
// Unit.prototype = Object.create(Phaser.Sprite.prototype);
// Unit.prototype.constructor = Unit;

}
