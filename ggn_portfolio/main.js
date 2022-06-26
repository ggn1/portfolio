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

// // Set up asset gltf_loader.
// const gltf_loader = new GLTFLoader();

// Load objects.

// // Object 1. Load character.
// let model_character;
// gltf_loader.load('assets/character.gltf', (gltf) => {
//   model_character = gltf.scene;
//   scene.add(model_character);
//   model_character.scale.set(5, 5, 5);
//   model_character.rotation.set(0, 3.1, 0);
//   model_character.position.set(0, -10, 0);
// }, (xhr) => {
//   console.log("character:", xhr.loaded/xhr.total * 100, "% loaded");
// }, (error) => {
//   console.log("oops! error occurred in loading character");
// });

// // Object 2. Load heart.
// let model_heart;
// gltf_loader.load('assets/heart.gltf', (gltf) => {
//   model_heart = gltf.scene;
//   scene.add(model_heart);
//   model_heart.scale.set(5, 5, 5);
//   model_heart.rotation.set(0, 3.1, 0);
//   model_heart.position.set(7, 5.5, 1);
// }, (xhr) => {
//   console.log("heart:", xhr.loaded/xhr.total * 100, "% loaded");
// }, (error) => {
//   console.log("oops! error occurred in loading heart");
// });

// // Object 3. Load phone.
// let model_phone;
// gltf_loader.load('assets/phone.gltf', (gltf) => {
//   model_phone = gltf.scene;
//   scene.add(model_phone);
//   model_phone.scale.set(5, 5, 5);
//   model_phone.rotation.set(0, 3.1, 0);
//   model_phone.position.set(-7, 5.5, 1);
// }, (xhr) => {
//   console.log("phone:", xhr.loaded/xhr.total * 100, "% loaded");
// }, (error) => {
//   console.log("oops! error occurred in loading phone");
// });

// // Object 4. Load gear_big.
// let model_gear_big;
// gltf_loader.load('assets/gear_big.gltf', (gltf) => {
//   model_gear_big = gltf.scene;
//   scene.add(model_gear_big);
//   model_gear_big.scale.set(5, 5, 5);
//   model_gear_big.rotation.set(0, 3.1, 0);
//   model_gear_big.position.set(0, 7, -1.5);
// }, (xhr) => {
//   console.log("gear_big:", xhr.loaded/xhr.total * 100, "% loaded");
// }, (error) => {
//   console.log("oops! error occurred in loading gear_big");
// });

// // Object 5. Load gear_medium.
// let model_gear_medium;
// gltf_loader.load('assets/gear_medium.gltf', (gltf) => {
//   model_gear_medium = gltf.scene;
//   scene.add(model_gear_medium);
//   model_gear_medium.scale.set(5, 5, 5);
//   model_gear_medium.rotation.set(0, 3.1, 0);
//   model_gear_medium.position.set(-8, 11, -2.5);
// }, (xhr) => {
//   console.log("gear_medium:", xhr.loaded/xhr.total * 100, "% loaded");
// }, (error) => {
//   console.log("oops! error occurred in loading gear_medium");
// });

// // Object 6. Load gear_small.
// let model_gear_small;
// gltf_loader.load('assets/gear_small.gltf', (gltf) => {
//   model_gear_small = gltf.scene;
//   scene.add(model_gear_small);
//   model_gear_small.scale.set(5, 5, 5);
//   model_gear_small.rotation.set(0, 3.1, 0);
//   model_gear_small.position.set(8, 10, -2.5);
// }, (xhr) => {
//   console.log("gear_small:", xhr.loaded/xhr.total * 100, "% loaded");
// }, (error) => {
//   console.log("oops! error occurred in loading gear_small");
// });

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
//   requestAnimationFrame(animate);

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


