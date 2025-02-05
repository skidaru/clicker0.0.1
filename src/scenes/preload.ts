

export class preload extends Phaser.Scene{
    constructor() {
        super('preload');
    }


    preload(){
        // @ts-ignore
        window.bridge.initialize()
    .then(() => {
        console.log("NIGGERS");
        
    })
    .catch((error: string) => {
        console.log(error);
        
    })

    this.load.image('button', '/Assets/button.png')

    this.load.atlas('GUI', '/Assets/GUI.png', '/Assets/GUI.json')
    }

    create(){

        this.scene.start('mainScene')
    }
}