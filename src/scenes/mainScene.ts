// import { button } from "../GUI/button";
import { Button } from "../GUI/button";
import { Image } from "../GUI/image";
import { ProgressCircle } from "../GUI/progressCircle";

export class mainScene extends Phaser.Scene{
    constructor(){
        super('mainScene')
    }
    private progressCircles: ProgressCircle[] = [];

    create() {
        this.createCircleProgressAround()
        this.createCircle()

        this.progressCircles[0].setProgress(0.75)

    }  

    private createCircleProgressAround() {
        const NUM_OF_CIRCLES = 4;
        const RADIUS_OF_CIRCLES = 55.5;
        const SPACING_BETWEEN_CIRCLES = 34;
        const START_Y_OF_CIRCLE = 119.5;
        const X_CIRCLE = 141.5

        for (let i = 0; i < NUM_OF_CIRCLES; i++) {
            const Y_CIRCLE = START_Y_OF_CIRCLE + i * (2 * RADIUS_OF_CIRCLES + SPACING_BETWEEN_CIRCLES);
            let circleProgressAround = new ProgressCircle(this, X_CIRCLE, Y_CIRCLE, RADIUS_OF_CIRCLES, 0x00ff00);
            this.progressCircles.push(circleProgressAround);
        }    
    }

    private createCircle(){
        const NUM_OF_CIRCLES = 4;
        const RADIUS_OF_CIRCLES = 53.5;
        const SPACING_BETWEEN_CIRCLES = 38;
        const START_Y_OF_CIRCLE = 66;
        const X_CIRCLE = 88;

        for (let i = 0; i < NUM_OF_CIRCLES; i++) {
            const Y_CIRCLE = START_Y_OF_CIRCLE + i * (2 * RADIUS_OF_CIRCLES + SPACING_BETWEEN_CIRCLES);
            let circleImage = new Image(this, X_CIRCLE, Y_CIRCLE, 'GUI', 'Circle.png');
        }    
    }
}