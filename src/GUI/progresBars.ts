

export class ProgressCircle extends Phaser.GameObjects.Graphics {
    private radius: number;
    private progress: number; // Прогресс от 0 до 1
    private color: number; // Цвет полосы прогресса
  
    constructor(
      scene: Phaser.Scene,
      x: number,
      y: number,
      radius: number,
      color: number
    ) {
      super(scene, { x, y }); // Вызов конструктора родительского класса (Graphics)
      this.radius = radius;
      this.progress = 0;
      this.color = color;
  
      // Добавляем объект на сцену
      scene.add.existing(this);
  
      // Рисуем начальный контур
      this.draw();
    }
  
    // Метод для обновления прогресса
    setProgress(progress: number) {
      this.progress = Phaser.Math.Clamp(progress, 0, 1); // Ограничиваем прогресс от 0 до 1
      this.draw(); // Перерисовываем дугу
    }
  
    // Метод для рисования дуги
    private draw() {
      this.clear(); // Очищаем предыдущую отрисовку
  
      // Рисуем контур круга (фон)
      this.lineStyle(10, 0x333333, 1); // Толщина линии, цвет, прозрачность
      this.strokeCircle(0, 0, this.radius);
  
      // Рисуем дугу прогресса
      this.lineStyle(10, this.color, 1); // Толщина линии, цвет, прозрачность
      this.beginPath();
      this.arc(
        0, // X центра
        0, // Y центра
        this.radius, // Радиус
        Phaser.Math.DegToRad(-90), // Начальный угол (12 часов)
        Phaser.Math.DegToRad(-90 + 360 * this.progress), // Конечный угол
        false // Направление (по часовой стрелке)
      );
      this.strokePath();
    }
  }