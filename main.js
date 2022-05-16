// Define scene.
const scene = new THREE.Scene();

// Define camera.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);

// Define renderer.
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
$('body').append(renderer.domElement); // Add renderer to webpage.

// Create geometry.
const geometry = new THREE.BoxGeometry(1,1,1); // Equal width, height, depth.
const material = new THREE.MeshBasicMaterial({color:0xff0000});
const cube = new THREE.Mesh(geometry, material);

// Add geometry to scene.
scene.add(cube);

// Rotate cube about axis.
cube.position.z = -5;
const animate = () => {
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};
animate();