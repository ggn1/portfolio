import './style.css' 

import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

const load_assets = (loader) => {
  /** Loads all objects on screen. */
   loader.load('assets/character.gltf', (gltf) => {
    console.log(gltf);
   }, (xhr) => {
    console.log(xhr.loaded/xhr.total * 100, "% loaded");
   }, (error) => {
    console.log("oops! an error occurred");
   });
}

const init = () => {
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
  camera.position.set(0,0,30);

  // Set up renderer.
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0.5);

  // Set up asset loader.
  const gltf_loader = new GLTFLoader();
  load_assets(gltf_loader);

  // Render objects on screen.
  renderer.render(scene, camera);
}

window.onload = init;


