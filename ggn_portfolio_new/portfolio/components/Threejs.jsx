import React, { useState, useEffect} from 'react';
import "./Threejs.css";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

let canvas, scene, camera, renderer, loader, lights, controls, objects;
const gray = new THREE.Color(0x757575);
const red = new THREE.Color(0xff0000)
const blue = new THREE.Color(0x0000ff);
const green = new THREE.Color(0x00ff00);
const root_url = "http://localhost:3000";

const add_lights = () => {
  // lights
  lights = {};
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
      loader.loadAsync('../assets/human.glb'),
      loader.loadAsync('../assets/heart.glb'),
      loader.loadAsync('../assets/phone.glb'),
      loader.loadAsync('../assets/gear_big.glb'),
      loader.loadAsync('../assets/gear_medium.glb'),
      loader.loadAsync('../assets/gear_small.glb')
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
  let heart = scene.getObjectByName("Heart");
  let phone = scene.getObjectByName("Phone");
  let gear_big = scene.getObjectByName("GearBig");
  let gear_medium = scene.getObjectByName("GearMedium");
  let gear_small = scene.getObjectByName("GearSmall");

  if (objects.heart.spin) {
    heart.rotateY(0.01);
    heart.scale.set(1,1,1);
  } else {
    heart.rotation.set(0,0,0);
    heart.scale.set(1.5,1.5,1.5);
  }

  if (objects.phone.spin) {
    phone.rotateZ(0.01);
    phone.scale.set(1,1,1);
  } else {
    phone.rotation.set(0,0,0);
    phone.scale.set(1.5,1.5,1.5);
  }

  if (objects.gear_big.spin == true) {
    gear_big.rotateZ(0.005);
    gear_big.material.color = gray;
  } else {
    gear_big.rotation.set(0,0,0);
    gear_big.material.color = blue;
  }

  if (objects.gear_medium.spin == true) {
    gear_medium.rotateZ(-0.015);
    gear_medium.material.color = gray;
  } else {
    gear_medium.rotation.set(0,0,0);
    gear_medium.material.color = green;
  }

  if (objects.gear_small.spin == true) {
    gear_small.rotateZ(-0.025);
    gear_small.material.color = gray;
  } else {
    gear_small.rotation.set(0,0,0);
    gear_small.material.color = red;
  }
}

// keep track of pointer
const pointer = new THREE.Vector2();
const on_pointer_move = (e) => {
	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components
	pointer.x = (e.clientX/window.innerWidth)*2-1;
	pointer.y = -(e.clientY/window.innerHeight)*2+1;
}
window.addEventListener('pointermove', on_pointer_move);

let selected_option;
const hover_obj = (obj_name) => {
  if (obj_name.includes("Heart")) {
      objects.heart.spin = !objects.heart.spin;
      selected_option = "about_button";
  } else if (obj_name.includes("Phone")) {
      objects.phone.spin = !objects.phone.spin;
      selected_option = "contact_button";
  }
  else if (obj_name.includes("Gear")) {
      objects.gear_big.spin = !objects.gear_big.spin;
      objects.gear_medium.spin = !objects.gear_medium.spin;
      objects.gear_small.spin = !objects.gear_small.spin;
      selected_option = "projects_button";
  } else {
      selected_option = undefined;
  }

  if (selected_option) {
    document.getElementById(selected_option).className = "highlight";
  } else { 
    document.getElementById("home_button").className = "no_highlight";
    document.getElementById("about_button").className = "no_highlight";
    document.getElementById("contact_button").className = "no_highlight";
    document.getElementById("projects_button").className = "no_highlight";
  }
};

// for object picking
const raycaster = new THREE.Raycaster();
let picked = undefined;
const pick = () => {
	// restore to original state if there is a picked object
	if (picked) {
		hover_obj(picked.name);
		picked = undefined;
	}

	// cast a ray through the frustum
	raycaster.setFromCamera(pointer, camera);

	// get the list of objects the ray intersected
	const intersected_objects = raycaster.intersectObjects(scene.children);

	if (intersected_objects.length) {
		// pick the first object. It's the closest one
		picked = intersected_objects[0].object;
	}

	hover_obj(picked?picked.name:"None");
}

// render objects to screen
const animate = () => {
  // console.log(objects);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  spin();
  pick();
}

const on_mouse_click = () => {
  // if (picked) {
  //   console.log("clicked:", selected_option);
  // }
}
window.addEventListener('mousedown', on_mouse_click);

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight-0.5);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
};

export default function Threejs() {
  useEffect(() => {
    // canvas
    canvas = document.getElementById("threejs_canvas");

    // scene, camera, renderer
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(42, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 23);
    renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight-0.5);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);
  
    // lights
    add_lights();

    // orbit controls
    add_orbit_controls();

    // load objects
    loader = new GLTFLoader();
    load_models();
  }, []);

  return (
    <div>
      <canvas id="threejs_canvas"></canvas>
    </div>
  )
}
