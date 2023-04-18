var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Define uma geometria e um material para um cubo
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Define a posição inicial da câmera
camera.position.set( 0, 1.5, 0 );

// Define a rotação inicial da câmera
camera.rotation.order = "YXZ";
camera.rotation.y = Math.PI;
camera.rotation.x = -Math.PI / 6;

// Adiciona a câmera à cena
scene.add( camera );

// Função para atualizar a posição da câmera com base no toque do usuário
function onTouchMove( event ) {
  // Obtém a diferença de posição do toque anterior para o atual
  var deltaX = event.touches[ 0 ].clientX - previousTouchX;
  var deltaY = event.touches[ 0 ].clientY - previousTouchY;

  // Atualiza a rotação da câmera com base na diferença de posição
  camera.rotation.y -= deltaX * 0.01;
  camera.rotation.x -= deltaY * 0.01;

  // Limita a rotação vertical da câmera
  camera.rotation.x = Math.max( -Math.PI / 2, Math.min( Math.PI / 2, camera.rotation.x ) );

  // Salva a posição do toque para o próximo frame
  previousTouchX = event.touches[ 0 ].clientX;
  previousTouchY = event.touches[ 0 ].clientY;
}

// Adiciona o listener de toque para a câmera
var previousTouchX, previousTouchY;
renderer.domElement.addEventListener( 'touchstart', function( event ) {
  previousTouchX = event.touches[ 0 ].clientX;
  previousTouchY = event.touches[ 0 ].clientY;
  renderer.domElement.addEventListener( 'touchmove', onTouchMove, false );
}, false );
renderer.domElement.addEventListener( 'touchend', function() {
  renderer.domElement.removeEventListener( 'touchmove', onTouchMove, false );
}, false );
