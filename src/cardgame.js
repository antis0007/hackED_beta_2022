let game;
let gameOptions = {
	startingCards: 5,
	cardWidth: 300,
	cardHeight: 400,
	cardDistance: 50,
	cardAngle: 5
}
window.onload = function() {
    let gameConfig = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1280,
            height: 740
        },
        scene: mainGame
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
}
class mainGame extends Phaser.Scene{
    constructor() {
        super("mainGame");
    }
    preload() {
		this.load.image("background", "assets/background.png");
        this.load.spritesheet("cards", "cards.png", {
            frameWidth: gameOptions.cardWidth,
            frameHeight: gameOptions.cardHeight
        });
    }
    create() {
		this.handArray = [];
		this.background = this.add.sprite(game.config.width / 2, game.config.height / 2, "background")
		let startAngle = - gameOptions.cardAngle
        for(let i = 0; i < gameOptions.startingCards; i ++) {
			let card = this.add.sprite(game.config.width - i * gameOptions.cardDistance, game.config.height, "cards", i);
			card.setInteractive({
				draggable: true
			});
			card.displayWidth = gameOptions.cardWidth / 2;
			card.displayHeight = gameOptions.cardHeight / 2;
			this.handArray.push(card);
			card.setOrigin(0.5, 1);
			card.setDepth(gameOptions.startingCards - i);
			card.angle = startAngle;
			if(i > 0){
				card.angle = this.handArray[i - 1].angle + startAngle;
				startAngle *= 0.9;
				let cardTop = card.getBounds().top
				let previousCardTop = this.handArray[i - 1].getBounds().top;
				card.y += (previousCardTop - cardTop) * 1.6;
			}
			card.startPosition = {
				angle: card.angle,
				x: card.x,
				y: card.y
			}
		}
		this.input.on("dragstart", function(pointer, gameObject) {
			this.tweens.add({
            	targets: gameObject,
            	angle: 0,
				x: pointer.x,
				y: pointer.y,
				displayWidth: gameOptions.cardWidth,
				displayHeight: gameOptions.cardHeight,
				duration: 150
	        });
			this.tweens.add({
            	targets: this.background,
            	alpha: 0.5,
				duration: 150
	        });
		}, this);
		this.input.on("drag", function(pointer, gameObject, dragX, dragY){
			gameObject.x = pointer.x;
			gameObject.y = pointer.y;
            this.tweens.add({
            	targets: gameObject,
            	angle: 0,
				x: pointer.x,
				y: pointer.y,
				displayWidth: gameOptions.cardWidth,
				displayHeight: gameOptions.cardHeight,
				duration: 150
	        });
		});
		this.input.on("dragend", function(pointer, gameObject, dropped){
			this.tweens.add({
	        	targets: gameObject,
	        	angle: gameObject.startPosition.angle,
				x: gameObject.startPosition.x,
				y: gameObject.startPosition.y,
				displayWidth: gameOptions.cardWidth / 2,
				displayHeight: gameOptions.cardHeight / 2,
				duration: 150
			});
			this.tweens.add({
            	targets: this.background,
            	alpha: 1,
				duration: 150
	        });
		}, this);
    }
}
