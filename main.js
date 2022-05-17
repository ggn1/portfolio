// Define renderer.
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
$('body').append(renderer.domElement); // Add renderer to webpage.

// Define scene.
const scene = new THREE.Scene();

// Make scene have white background.
// scene.fog = new THREE.Fog(0xffffff, 0, 2000);
renderer.setClearColor(0xffffff, 1);

// Define camera.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);

// Create loader to load in blender object.
const loader = new THREE.GLTFLoader();

// Add geometry.
// const geometry = new THREE.BoxGeometry(1,1,1); // Equal width, height, depth.
// const material = new THREE.MeshPhongMaterial({color:0xff0000});
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
var chess_queen;
loader.load('chess_queen.glb', (gltf) => {
    chess_queen = gltf.scene;
    scene.add(chess_queen);
    chess_queen.position.z = -10;
    animate(chess_queen);
})

let animate = () => {
    // Rotate object about axis.
    chess_queen.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

// Add light.
const directional_light = new THREE.DirectionalLight(0xffffff, 2.0);
directional_light.position.x = 3;
directional_light.position.y = 4;
directional_light.position.z = 4;
scene.add(directional_light);