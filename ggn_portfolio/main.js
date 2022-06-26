import './style.css' 

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { load_models } from './load_models';

/** Initializes scene parameters. */

// To view objects using three.js, 
// 3 entities are required. 
// 1. Scene
// 2. Camera
// 3. Renderer

// Set up scene.
const scene = new THREE.Scene();

// Set up camera.
const camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth/window.innerHeight, // aspect ratio
  0.1, 1000 // view frustum
);
camera.position.set(0,2,5);

// Set up renderer.
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000, 0.9);
window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
};

// Add lighting.
const light = new THREE.DirectionalLight(0xffffff, 0.8);
light.position.set(0,0,1); // length, height, depth
scene.add(light);

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

//   // float character
//   if (model_character.position.y >= -10) float_val = -0.002;
//   else if (model_character.position.y <= -10.4) float_val = 0.002;
//   model_character.position.y += float_val;

//   // rotate heart
//   model_heart.rotation.y += 0.01;

//   // rotate phone
//   model_phone.rotation.y -= 0.01;

//   // rotate gears
//   model_gear_small.rotation.z += 0.02;
//   model_gear_medium.rotation.z -= 0.01;
//   model_gear_big.rotation.z += 0.005;

  renderer.render(scene, camera);
}


