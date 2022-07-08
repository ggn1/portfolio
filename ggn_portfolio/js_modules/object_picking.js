import * as THREE from 'three';
import { scene, camera } from "../main";
import { hover_obj, cur_obj } from './load_models';

// keep track of pointer
const pointer = new THREE.Vector2();
const on_pointer_move = (e) => {
	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components
	pointer.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
}

const root_url = "http://localhost:3000";
const on_mouse_click = () => {
	console.log("clicked:", cur_obj);
	if(cur_obj == "phone") document.location.href = root_url+"\\contact.html";
	if(cur_obj == "heart") document.location.href = root_url+"\\aboutme.html";
	if(cur_obj == "gears") document.location.href = root_url+"\\projects.html";
}

window.addEventListener( 'pointermove', on_pointer_move );
window.addEventListener( 'mousedown', on_mouse_click );

// for object picking
const raycaster = new THREE.Raycaster();

let picked = undefined;

const pick = () => {
	// restore the color if there is a picked object
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

export { pick };