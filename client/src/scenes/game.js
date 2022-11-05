import UI from "../components/UI";

//load config json and store it in a variable
//let config = JSON.parse(require('../../config/config.json'));
import config from '../../config/config.json';

console.log(config);
console.log("TEST");

export default class Game extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    preload() {
        
    }

    create() {
        this.UI = new UI(this);
        this.UI.buildUI(config);        
    }
    update() {

    }
}