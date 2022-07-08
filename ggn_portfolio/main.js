import './styles/main.css' 

import * as THREE from 'three';
import { load_models, spin } from './js_modules/load_models';
import { create_controls } from './js_modules/orbit_controls';
import { pick } from './js_modules/object_picking';

/** Initializes scene parameters. */

// Set up scene.
const scene = new THREE.Scene();

// Set up camera.
const camera = new THREE.PerspectiveCamera(42,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,5,30);

// Set up renderer.
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("canvas"),antialias: true});
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
const controls = create_controls({"camera":camera, "canvas":renderer.domElement});

// Render objects on screen.
const animate = () => {
  spin();
  pick();
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// Initialize Scene
async function init() {
  /** Loads models and adds them to scene. 
   *  Starts animation loop. */
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

export { scene, camera, renderer };


