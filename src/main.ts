import Phaser from 'phaser'
import { scenes } from './scenes'
import './style.css'


new Phaser.Game({
    type: Phaser.AUTO,
    width: 1366,
    height: 768,
    title: 'TypeScript Test',
    url: import.meta.env.URL || '',
    version: import.meta.env.VERSION || '0.0.1',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    
    },
    scene: scenes
  })