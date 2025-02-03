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
    }
}