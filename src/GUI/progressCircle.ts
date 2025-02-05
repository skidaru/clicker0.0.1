

export class ProgressCircle extends Phaser.GameObjects.Graphics {
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