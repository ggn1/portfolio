import * as THREE from 'three';
import { scene, camera } from "./main";
import { toggle_spin_state } from './load_models';

// keep track of pointer
const pointer = new THREE.Vector2();
const on_pointer_move = (e) => {
	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components
	pointer.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
}
window.addEventListener( 'pointermove', on_pointer_move );

// for object picking
const raycaster = new THREE.Raycaster();

let picked = undefined;
const highlight_color = new THREE.Color(0xdcfc88);

const pick = () => {
	// restore the color if there is a picked object
	if (picked) {
		toggle_spin_state(picked.name);
		picked = undefined;
	}

	// cast a ray through the frustum
	raycaster.setFromCamera(pointer, camera);

	// get the list of objects the ray intersected
	const intersected_objects = raycaster.intersectObjects(scene.children);

	if (intersected_objects.length) {
		// pick the first object. It's the closest one
		picked = intersected_objects[0].object;

		if (
			picked.name.includes("Heart") || 
			picked.name.includes("Phone") || 
			picked.name.includes("Gear")
		) {	
			toggle_spin_state(picked.name);
		}
		// console.log(picked.object.material)
	}
}

export { pick };