// Crie um objeto de configuração para o jogo
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MenuPrincipal]
};

// Crie um objeto de jogo
var game = new Phaser.Game(config);

class MenuPrincipal extends Phaser.Scene {
  preload() {
    this.load.image('bg', 'assets/bg.png');
  }

  create() {
    this.add.image(0, 0, 'bg').setOrigin(0, 0);
  }

  update() {
    // Atualize objetos
  }
  
}
