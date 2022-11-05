export default class UI {
    constructor(scene){
        this.buildGameText= (pos, text, size) => {
            scene.add.text(pos[0], pos[1], text).setFontSize(size).setFontFamily('Arial');
        }
        this.buildUI = (config) => {
            //config is an imported json file
            //iterate through items in config
            for (let i = 0; i < config.components.length; i++) {
                //if type is text, build text

                console.log(config.components[i]);
                //check if config.components[i] is text
                if (config.components[i].hasOwnProperty('text')) {
                    console.log("FOUND TEXT!!!")
                    this.buildGameText(config.components[i].text.pos, config.components[i].text.text, config.components[i].text.size);
                }
            
            //this.buildGameText();
            }
        }
    }
}