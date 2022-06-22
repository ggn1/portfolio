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
  renderer.setClearColor(0x000000, 0.5);

  // Set up asset loader.
  const gltf_loader = new GLTFLoader();

  // Load objects.

  // 1. Load character.
  // Render objects on screen.
  const load_asset = ({loader, path}) => {
    loader.load(path, (gltf) => {
      let root = gltf.scene;
      // console.log(gltf);
      scene.add(root);
      root.scale.set(5, 5, 5);
      root.rotation.set(0, 3.1, 0);
      root.position.set(0, -10, 0);
      return root;
    }, (xhr) => {
      // console.log(xhr.loaded/xhr.total * 100, "% loaded");
    }, (error) => {
      console.log("oops! an error occurred");
    });
  }

  // HERE: Make promise.
  const character = load_asset({loader: gltf_loader, path: 'assets/character.gltf'});
  const heart = load_asset({loader: gltf_loader, path: 'assets/heart.gltf'});
  const phone = load_asset({loader: gltf_loader, path: 'assets/phone.gltf'});
  const gear_big = load_asset({loader: gltf_loader, path: 'assets/gear_big.gltf'});
  const gear_medium = load_asset({loader: gltf_loader, path: 'assets/gear_medium.gltf'});
  const gear_small = load_asset({loader: gltf_loader, path: 'assets/gear_small.gltf'});
  
  // Add lighting.
  const light = new THREE.DirectionalLight(0xffffff, 1.2);
  light.position.set(1,0,1);
  scene.add(light);

  // Render objects on screen.
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
}

window.onload = init;


