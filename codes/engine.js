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
  function preload() {
    this.load.image('bg', 'assets/bg.png');
  }

  function create() {
    this.add.image(0, 0, 'bg').setOrigin(0, 0);
  }

  function update() {
    // Atualize objetos
  }
  
}
