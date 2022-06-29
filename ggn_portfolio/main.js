import './style.css' 

import * as THREE from 'three';
import { load_models } from './load_models';
import { create_controls } from './controls';

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
camera.position.set(0,5,15);

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

  // set_controls_target({"controls": controls, "target_obj": human})

  animate();
  spin();
}

init();

// Render objects on screen.
// let float_val;

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

let float_val = 0.005; // float up by default
const get_float_val = (obj) => {
  if (
    obj.position.y >= 0.2 ||
    obj.position.y <= -0.02
  ) float_val *= -1;
  return float_val;
}

const spin = () => {
  requestAnimationFrame(spin);
  scene.getObjectByName("Heart").rotateY(0.01);
  scene.getObjectByName("Phone").rotateZ(-0.01);
  scene.getObjectByName("GearBig").rotateZ(0.005);
  scene.getObjectByName("GearMedium").rotateZ(-0.015);
  scene.getObjectByName("GearSmall").rotateZ(-0.025);  
}


