// import { button } from "../GUI/button";
import { Button } from "../GUI/button";
import { Image } from "../GUI/image";

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

class ProgressCircle extends Phaser.GameObjects.Graphics {
    private radius: number;
    private progress: number;
    private color: number;
  
    constructor(
      scene: Phaser.Scene,
      x: number,
      y: number,
      radius: number,
      color: number
    ) {
      super(scene, { x, y });
      this.radius = radius;
      this.progress = 0;
      this.color = color;
  

      scene.add.existing(this);
  

      this.draw();
    }
  

    setProgress(progress: number) {
      this.progress = Phaser.Math.Clamp(progress, 0, 1);
      this.draw();
    }
  

    private draw() {
      this.clear();
  
      this.lineStyle(10, 0x333333, 1);
      this.strokeCircle(0, 0, this.radius);
  

      this.lineStyle(10, this.color, 1);
      this.beginPath();
      this.arc(
        0,
        0,
        this.radius,
        Phaser.Math.DegToRad(-90),
        Phaser.Math.DegToRad(-90 + 360 * this.progress),
        false
      );
      this.strokePath();
    }

  }