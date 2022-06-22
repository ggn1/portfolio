import './style.css' 

import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

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
  renderer.setClearColor(0x000000, 0.9);

  // Set up asset gltf_loader.
  const gltf_loader = new GLTFLoader();

  // Load objects.

  // Object 1. Load character.
  gltf_loader.load('assets/character.gltf', (gltf) => {
    let root = gltf.scene;
    scene.add(root);
    root.scale.set(5, 5, 5);
    root.rotation.set(0, 3.1, 0);
    root.position.set(0, -10, 0);
  }, (xhr) => {
    console.log("character:", xhr.loaded/xhr.total * 100, "% loaded");
  }, (error) => {
    console.log("oops! error occurred in loading character");
  });

  // Object 2. Load heart.
  gltf_loader.load('assets/heart.gltf', (gltf) => {
    let root = gltf.scene;
    scene.add(root);
    root.scale.set(5, 5, 5);
    root.rotation.set(0, 3.1, 0);
    root.position.set(0, -10, 0);
  }, (xhr) => {
    console.log("heart:", xhr.loaded/xhr.total * 100, "% loaded");
  }, (error) => {
    console.log("oops! error occurred in loading heart");
  });

  // Object 3. Load phone.
  gltf_loader.load('assets/phone.gltf', (gltf) => {
    let root = gltf.scene;
    scene.add(root);
    root.scale.set(5, 5, 5);
    root.rotation.set(0, 3.1, 0);
    root.position.set(0, -10, 0);
  }, (xhr) => {
    console.log("phone:", xhr.loaded/xhr.total * 100, "% loaded");
  }, (error) => {
    console.log("oops! error occurred in loading phone");
  });

  // Object 4. Load gear_big.
  gltf_loader.load('assets/gear_big.gltf', (gltf) => {
    let root = gltf.scene;
    scene.add(root);
    root.scale.set(5, 5, 5);
    root.rotation.set(0, 3.1, 0);
    root.position.set(0, -10, 0);
  }, (xhr) => {
    console.log("gear_big:", xhr.loaded/xhr.total * 100, "% loaded");
  }, (error) => {
    console.log("oops! error occurred in loading gear_big");
  });

  // Object 5. Load gear_medium.
  gltf_loader.load('assets/gear_medium.gltf', (gltf) => {
    let root = gltf.scene;
    scene.add(root);
    root.scale.set(5, 5, 5);
    root.rotation.set(0, 3.1, 0);
    root.position.set(0, -10, 0);
  }, (xhr) => {
    console.log("gear_medium:", xhr.loaded/xhr.total * 100, "% loaded");
  }, (error) => {
    console.log("oops! error occurred in loading gear_medium");
  });

  // Object 6. Load gear_small.
  gltf_loader.load('assets/gear_small.gltf', (gltf) => {
    let root = gltf.scene;
    scene.add(root);
    root.scale.set(5, 5, 5);
    root.rotation.set(0, 3.1, 0);
    root.position.set(0, -10, 0);
  }, (xhr) => {
    console.log("gear_small:", xhr.loaded/xhr.total * 100, "% loaded");
  }, (error) => {
    console.log("oops! error occurred in loading gear_small");
  });
  
  // Add lighting.
  const light = new THREE.DirectionalLight(0xffffff, 1.1);
  light.position.set(0,0,1); // length, height, depth
  scene.add(light);

  // Render objects on screen.
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
}

window.onload = init;


