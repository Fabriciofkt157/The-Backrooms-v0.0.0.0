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
var wdt = window.innerWidth, hgt = window.innerHeight;
(function screenConfig () {
  if(hgt > wdt){
    var w = wdt, h = hgt;
    hgt = w;
    wdt = h;
  }
})(); 

var config = {
    type: Phaser.AUTO,
    width: wdt,
    height: hgt,
    scene: [MenuPrincipal]
};

// Crie um objeto de jogo
var game = new Phaser.Game(config);
