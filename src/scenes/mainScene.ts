import { button } from "../GUI/button";
import { ProgressCircle } from "../GUI/progresBars";

export class mainScene extends Phaser.Scene{
    constructor(){
        super('mainScene')
    }
    private progressCirclee: ProgressCircle | undefined;
    create() {
        
        this.progressCirclee = new ProgressCircle(this, 400, 300, 100, 0xff0000);
        this.progressCirclee.setProgress(2);
        
      }
}