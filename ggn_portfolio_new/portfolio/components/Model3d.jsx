import React, { useEffect } from 'react';
import "./Model3d.css";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

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
