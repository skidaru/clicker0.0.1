import { Image } from "./image";


export class Button extends Image{
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: string,
        frame: string | number | undefined,
        onClick: () => void
    ){
        super(scene, x, y, texture, frame)

        scene.add.existing(this);

        this.setInteractive({ useHandCursor: true })

        this.on('pointerdown', () => {
            this.setScale(0.9);
        });
      

        this.on('pointerup', () => {
            this.setScale(1);
        });

        this.on('pointerout', () => {
            this.setScale(1);
        });

        if (onClick) {
            this.on('pointerdown', onClick);
          }

          const currentCenterX = this.x +
          this.displayWidth * (0.5 - this.originX)
        
          const currentCenterY = this.y +
          this.displayHeight * (0.5 - this.originY)
        
          this.setOrigin(0.5, 0.5)
        
          this.setPosition(currentCenterX, currentCenterY)
    }
}


