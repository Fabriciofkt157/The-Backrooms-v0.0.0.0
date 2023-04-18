// Crie um objeto de configuração para o jogo


class MenuPrincipal extends Phaser.Scene {
  preload() {
    this.load.image('bg', 'assets/bg.png');
  }

  create() {
    let bgImg = this.add.image(0, 0, 'bg').setOrigin(0, 0);
    bg.setInteractive();
    bg.setScale(this.sys.game.config.width / image.width, this.sys.game.config.height / image.height);
  }

  update() {
    // Atualize objetos
  }
  
}

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [MenuPrincipal]
};

// Crie um objeto de jogo
var game = new Phaser.Game(config);
