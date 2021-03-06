// ページの読み込みを待つ
window.addEventListener("DOMContentLoaded", init);

function init() {
  // サイズを指定
  const width = 400;
  const height = 400;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, +1000);
  const loader = new THREE.CubeTextureLoader();
  loader.setPath( 'textures/cube/pisa/' );

  const textureCube = loader.load('./background-dirt-minecraft-minimalistic-wallpaper-preview.jpeg');

  // 箱を作成
  const geometry = new THREE.BoxGeometry(400, 400, 400);
  const material = new THREE.MeshNormalMaterial();
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    box.rotation.y += 0.02;
    box.rotation.x += 0.02;
    renderer.render(scene, camera); // レンダリング

    requestAnimationFrame(tick);
  }
}
