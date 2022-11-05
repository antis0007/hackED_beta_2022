var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('test', './assets/test.png');
    
}

function create ()
{
    //this.add.image(400, 300, 'test');
    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add.sprite(400, 300, 'test');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    

}

function update ()
{
    if (cursors.left.isDown)
{
    player.setVelocityX(-160);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(160);
}
else
{
    player.setVelocityX(0);
}

if (cursors.up.isDown && player.body.touching.down)
{
    player.setVelocityY(-330);
}
}