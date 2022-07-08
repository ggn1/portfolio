import './styles/main.css' 

import * as THREE from 'three';
import { load_models, spin } from './js_modules/load_models';
import { create_controls } from './js_modules/orbit_controls';
import { pick } from './js_modules/object_picking';

/** Initializes scene parameters. */

// To view objects using three.js, 
// 3 entities are required. 
// 1. Scene
// 2. Camera
// 3. Renderer

// Set up scene.
const scene = new THREE.Scene();

// Add background image.
// const tex_loader = new THREE.TextureLoader();
// tex_loader.load(
//   './assets/bg.png' , 
//   function(texture){ scene.background = texture; }
// );

// Set up camera.
const camera = new THREE.PerspectiveCamera(
  42, // field of view
  window.innerWidth/window.innerHeight, // aspect ratio
  0.1, 1000 // view frustum
);
camera.position.set(0, 5, 30);

// Set up renderer.
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas"),
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000, 1);

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
};

// Add lighting.
const key_light = new THREE.PointLight( 0xffffff, 2, 100) // color, intensity, decay
const back_light = new THREE.PointLight( 0xffaaff, 3, 100 ) // color, intensity, decay
const fill_light = new THREE.PointLight( 0x0000ff, 1.5, 100 ) // color, intensity, decay
key_light.position.set(3, 3, 5); // length, height, depth
back_light.position.set(-5, 4, -20); // length, height, depth
fill_light.position.set(-3, 2, 5); // length, height, depth
scene.add(key_light);
scene.add(back_light);
scene.add(fill_light);

// Orbit Control
const controls = create_controls({
  "camera":camera, "canvas":renderer.domElement
});

async function init() {
  const { human, heart, phone, gears } = await load_models();

  scene.add(human);
  scene.add(heart);
  scene.add(phone);
  scene.add(gears.big);
  scene.add(gears.medium);
  scene.add(gears.small);

  animate();
}

init();

// Render objects on screen.
// let float_val;

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  spin();
  pick();
  renderer.render(scene, camera);
}

export { scene, camera, renderer };


