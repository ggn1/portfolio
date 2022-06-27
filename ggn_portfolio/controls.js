import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function create_controls({ camera, canvas }) {
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 2, 0);
    controls.enableDamping = true;
    controls.minDistance = 5;
    controls.maxDistance = 10;
    return controls;
}

export { create_controls };