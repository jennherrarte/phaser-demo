import Phaser from './lib/phaser.js'
import GameOver from './scenes/GameOver.js'
import Game from './scenes/Game.js'

console.log(Phaser)

export default new Phaser.Game({
  type: Phaser.AUTO, // lets the browser decide how to render our game, either canvas or webgl
  width: 480,
  height: 640,
  scene: [Game, GameOver],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200,
        x: 100
      },
      debug: true
    }
  }
})