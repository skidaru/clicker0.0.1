import { button } from "../GUI/button";

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

    this.load.image('button', '/src/Assets/GUI/button.png')
    }

    create(){
        const buttonn = new button(
            this,
            945,
            202,
            'button',
            () => {
                console.log('ad');
                
            }
            
        )

        buttonn.setOrigin(0.5, 0.5)
    }
}