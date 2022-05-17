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

// Add geometry.
const geometry = new THREE.BoxGeometry(1,1,1); // Equal width, height, depth.
const material = new THREE.MeshPhongMaterial({color:0xff0000});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add light.
const directional_light = new THREE.DirectionalLight(0xffffff, 1.2);
directional_light.position.x = 3;
directional_light.position.y = 4;
directional_light.position.z = 4;
scene.add(directional_light);

// Rotate cube about axis.
cube.position.z = -5;
const animate = () => {
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};
animate();