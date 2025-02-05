export class Image extends Phaser.GameObjects.Sprite{
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: string,
        frame: string | number | undefined
    ){
        super(scene, x, y, texture, frame)

        scene.add.existing(this);

        this.setOrigin(0, 0)

    }
}