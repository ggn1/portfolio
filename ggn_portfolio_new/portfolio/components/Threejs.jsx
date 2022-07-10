import React, { useEffect } from 'react';
import "./Threejs.css";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model3d() {

  useEffect(() => {
    // canvas
    const canvas = document.getElementById("threejs_canvas");

    // scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0,5,30);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // onresize handle resize
    window.onresize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
    };

    // lights
    const key_light = new THREE.PointLight( 0xffffff, 2, 100) // color, intensity, decay
    const back_light = new THREE.PointLight( 0xffaaff, 3, 100 ) // color, intensity, decay
    const fill_light = new THREE.PointLight( 0x0000ff, 1.5, 100 ) // color, intensity, decay
    key_light.position.set(3, 3, 5); // length, height, depth
    back_light.position.set(-5, 4, -20); // length, height, depth
    fill_light.position.set(-3, 2, 5); // length, height, depth
    scene.add(key_light);
    scene.add(back_light);
    scene.add(fill_light);

    // orbit controls
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 2, 0);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 10;
    controls.maxDistance = 10;

    // load objects
    const loader = new GLTFLoader();

    const set_up_model = (model_data) => {
      const model = model_data.scene;
      model.rotation.set(0, 3.14, 0); // rotate z axis by 180 degrees
      return model;
    }

    const load_models = async () => {
        const [
            human_data, heart_data, phone_data, 
            gear_big_data, gear_medium_data, gear_small_data
        ] = await Promise.all([
            loader.loadAsync('../assets/human.glb'),
            loader.loadAsync('../assets/heart.glb'),
            loader.loadAsync('../assets/phone.glb'),
            loader.loadAsync('../assets/gear_big.glb'),
            loader.loadAsync('../assets/gear_medium.glb'),
            loader.loadAsync('../assets/gear_small.glb')
        ]);
    
        const human = set_up_model(human_data);
    
        const heart = set_up_model(heart_data);
        heart.position.set(1.3, 3.1, 0.3);
    
        const phone = set_up_model(phone_data);
        phone.position.set(-1.3, 3.1, 0.3);
    
        const gears = {
            big: set_up_model(gear_big_data),
            medium: set_up_model(gear_medium_data),
            small: set_up_model(gear_small_data)
        }
    
        gears.big.position.set(0, 3.2, -0.5);
        gears.medium.position.set(1.5, 4, -0.7);
        gears.small.position.set(-1.45, 4, -0.7);

        scene.add(human);
        scene.add(heart);
        scene.add(phone);
        scene.add(gears.big);
        scene.add(gears.medium);
        scene.add(gears.small);
    }

    load_models();

    // render on screen
    const animate = () => {
      // spin();
      // pick();
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div>
      <canvas id="threejs_canvas"></canvas>
    </div>
  )
}
