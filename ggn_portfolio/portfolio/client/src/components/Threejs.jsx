import React, { useEffect } from 'react';
import "./Threejs.css";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Threejs() {

  useEffect(() => {
    let controls, objects, ui_objects, selected_option, picked_objects;
    const gray = new THREE.Color(0x757575);
    const red = new THREE.Color(0xff0000)
    const blue = new THREE.Color(0x0000ff);
    const green = new THREE.Color(0x00ff00);

    const add_lights = () => {
      const lights = {};
      lights.key_light = new THREE.PointLight( 0xffffff, 2, 100) // color, intensity, decay
      lights.back_light = new THREE.PointLight( 0xffaaff, 3, 100 ) // color, intensity, decay
      lights.fill_light = new THREE.PointLight( 0x0000ff, 1.5, 100 ) // color, intensity, decay
      lights.key_light.position.set(3, 3, 5); // length, height, depth
      lights.back_light.position.set(-5, 4, -20); // length, height, depth
      lights.fill_light.position.set(-3, 2, 5); // length, height, depth
      Object.values(lights).forEach(light => { scene.add(light); }); // add lights to scene
    }

    const add_orbit_controls = () => {
      controls = new OrbitControls(camera, canvas);
      controls.target.set(0, 2, 0);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.minDistance = 10;
      controls.maxDistance = 10;
    }

    const load_models = async () => {
      let set_up_model = (model_data) => {
        const model = model_data.scene;
        model.position.set(0, -0.4, 0); // position objects slightly lower
        model.rotation.set(0, 3.14, 0); // rotate z axis by 180 degrees
        return model;
      }
      const [
          human_data, heart_data, phone_data, 
          gear_big_data, gear_medium_data, gear_small_data
      ] = await Promise.all([
          loader.loadAsync('../../human.glb'),
          loader.loadAsync('../../heart.glb'),
          loader.loadAsync('../../phone.glb'),
          loader.loadAsync('../../gear_big.glb'),
          loader.loadAsync('../../gear_medium.glb'),
          loader.loadAsync('../../gear_small.glb')
      ]);

      objects = {};
      objects.human = {model: set_up_model(human_data)};

      objects.heart = {model:set_up_model(heart_data), spin:true};
      objects.heart.model.position.set(1.3, 2.9, 0.3);

      objects.phone = {model:set_up_model(phone_data), spin:true};
      objects.phone.model.position.set(-1.3, 3, 0.3);

      objects.gear_big = {model:set_up_model(gear_big_data), spin:true};
      objects.gear_big.model.position.set(0, 3, -0.5);

      objects.gear_medium = {model:set_up_model(gear_medium_data), spin:true};
      objects.gear_medium.model.position.set(1.5, 3.9, -0.7);

      objects.gear_small = {model:set_up_model(gear_small_data), spin:true};
      objects.gear_small.model.position.set(-1.45, 3.9, -0.7);

      // add objects to scene
      Object.values(objects).forEach((obj) => { scene.add(obj.model); });

      animate();
    }

    const spin = () => {
      if (!ui_objects) {
        ui_objects = {
          heart: scene.getObjectByName("Heart"),
          phone: scene.getObjectByName("Phone"),
          gear_big: scene.getObjectByName("GearBig"),
          gear_medium: scene.getObjectByName("GearMedium"),
          gear_small: scene.getObjectByName("GearSmall")
        };
      }
      
      if (objects.heart.spin) {
        ui_objects.heart.rotateY(0.01);
        ui_objects.heart.scale.set(1,1,1);
      } else {
        ui_objects.heart.rotation.set(0,0,0);
        ui_objects.heart.scale.set(1.5,1.5,1.5);
      }

      if (objects.phone.spin) {
        ui_objects.phone.rotateZ(0.01);
        ui_objects.phone.scale.set(1,1,1);
      } else {
        ui_objects.phone.rotation.set(0,0,0);
        ui_objects.phone.scale.set(1.5,1.5,1.5);
      }

      if (objects.gear_big.spin == true) {
        ui_objects.gear_big.rotateZ(0.005);
        ui_objects.gear_big.material.color = gray;
      } else {
        ui_objects.gear_big.rotation.set(0,0,0);
        ui_objects.gear_big.material.color = blue;
      }

      if (objects.gear_medium.spin == true) {
        ui_objects.gear_medium.rotateZ(-0.015);
        ui_objects.gear_medium.material.color = gray;
      } else {
        ui_objects.gear_medium.rotation.set(0,0,0);
        ui_objects.gear_medium.material.color = green;
      }

      if (objects.gear_small.spin == true) {
        ui_objects.gear_small.rotateZ(-0.025);
        ui_objects.gear_small.material.color = gray;
      } else {
        ui_objects.gear_small.rotation.set(0,0,0);
        ui_objects.gear_small.material.color = red;
      }
    }

    // for object picking
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const on_pointer_move = (e) => {
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      pointer.x = (e.clientX/window.innerWidth)*2-1;
      pointer.y = -(e.clientY/window.innerHeight)*2+1;
    }

    const handle_hover = (intersected) => {
      if (intersected && intersected.object.name.includes("Heart")) {
        if (selected_option != "about_button") {
          selected_option = "about_button";
          picked_objects = ["heart"];
          picked_objects.forEach(o => objects[o].spin = false);
        }
      } else if (intersected && intersected.object.name.includes("Gear")) {
        if (selected_option != "projects_button") {
          selected_option = "projects_button";
          picked_objects = ["gear_big", "gear_medium", "gear_small"];
          picked_objects.forEach(o => objects[o].spin = false);
        }
      } else if (intersected && intersected.object.name.includes("Phone")) {
        if (selected_option != "contact_button") {
          picked_objects = ["phone"];
          selected_option = "contact_button";
        }
      } else {
        if (picked_objects) picked_objects.forEach(o => objects[o].spin = true);
        if (selected_option) document.getElementById(selected_option).className = "no_highlight";
        selected_option = undefined;
        picked_objects = undefined;
      }
      if (picked_objects) picked_objects.forEach(o => objects[o].spin = false);
      if (selected_option) document.getElementById(selected_option).className = "highlight";
    };

    const pick = () => {
      raycaster.setFromCamera(pointer, camera);
      handle_hover(raycaster.intersectObjects(scene.children)[0]);
    }

    // render objects to screen
    let frame_request;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      spin();
      pick();
      frame_request = requestAnimationFrame(animate);
    }

    const on_window_resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight-0.5);
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
    }

    const on_model_click = () => {
      selected_option && document.getElementById(selected_option.replace("button", "link")).click();
    }

    window.addEventListener('resize', on_window_resize);
    window.addEventListener('pointermove', on_pointer_move);
    window.addEventListener('mousedown', on_model_click);

    // canvas
    const canvas = document.getElementById("threejs_canvas");

    // scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 23);
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight-0.5);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x111222, 1);
    document.getElementById("canvas_div").appendChild(renderer.domElement);
  
    // lights
    add_lights();

    // orbit controls
    add_orbit_controls();

    // load objects
    const loader = new GLTFLoader();
    load_models();

    return () => {
      cancelAnimationFrame(frame_request);
      window.removeEventListener('resize', on_window_resize);
      window.removeEventListener('pointermove', on_pointer_move);
      window.removeEventListener('mousedown', on_model_click);
    }
  });

  return (
    <canvas id="threejs_canvas"></canvas>
  )
}
