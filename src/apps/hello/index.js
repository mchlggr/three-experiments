const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const VIEW_ANGLE = 45;
const ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;
const NEAR = 1;
const FAR = 10000;

let scene;
let camera;
let renderer;
let axisHelper;
let geometry;
let material;
let mesh;

function init() {
  scene = new THREE.Scene();

  axisHelper = new THREE.AxisHelper(100);
  scene.add(axisHelper);

  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  camera.position.set(500, 500, 500);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  geometry = new THREE.BoxGeometry(200, 200, 200);
  material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);
}

init();
animate();
