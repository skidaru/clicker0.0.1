export class button extends Phaser.GameObjects.Sprite{
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: string,
        onClick: () => void
    ){
        super(scene, x, y, texture)

        scene.add.existing(this);

        this.setInteractive({  useHandCursor: true})

        this.on('pointerdown', () => {
            this.setScale(0.9); // Увеличиваем кнопку при наведении
        });
      
          // Обработчик события ухода указателя мыши
        this.on('pointerup', () => {
            this.setScale(1); // Возвращаем исходный размер
        });

        if (onClick) {
            this.on('pointerdown', onClick);
          }
    }
}


