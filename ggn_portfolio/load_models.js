import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { scene } from './main';

const loader = new GLTFLoader();
let spin_state = {"heart":true, "phone":true, "gears":true}

const spin = () => {

  if (spin_state.heart == true) scene.getObjectByName("Heart").rotateY(0.01);
  else scene.getObjectByName("Heart").rotation.set(0, 0, 0);

  if (spin_state.phone == true) scene.getObjectByName("Phone").rotateZ(0.01);
  else scene.getObjectByName("Phone").rotation.set(0, 0, 0);

  if (spin_state.gears == true) {
    scene.getObjectByName("GearBig").rotateZ(0.005);
    scene.getObjectByName("GearMedium").rotateZ(-0.015);
    scene.getObjectByName("GearSmall").rotateZ(-0.025);
  } else {
    scene.getObjectByName("GearBig").rotation.set(0, 0, 0);
    scene.getObjectByName("GearMedium").rotation.set(0, 0, 0);
    scene.getObjectByName("GearSmall").rotation.set(0, 0, 0);
  } 
}

const set_up_model = (model_data) => {
    const model = model_data.scene;
    model.rotation.set(0, 3.14, 0); // rotate z axis by 180 degrees
    return model;
}

async function load_models() {
    const [
        human_data, heart_data, phone_data, 
        gear_big_data, gear_medium_data, gear_small_data
    ] = await Promise.all([
        loader.loadAsync('./assets/human.glb'),
        loader.loadAsync('./assets/heart.glb'),
        loader.loadAsync('./assets/phone.glb'),
        loader.loadAsync('./assets/gear_big.glb'),
        loader.loadAsync('./assets/gear_medium.glb'),
        loader.loadAsync('./assets/gear_small.glb')
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

    return { human, heart, phone, gears};
}

const toggle_spin_state = (obj_name) => {
    if (obj_name.includes("Heart")) spin_state.heart = !spin_state.heart;
    else if (obj_name.includes("Phone")) spin_state.phone = !spin_state.phone;
    else if (obj_name.includes("Gear")) spin_state.gears = !spin_state.gears;
};

export { load_models, spin , toggle_spin_state };