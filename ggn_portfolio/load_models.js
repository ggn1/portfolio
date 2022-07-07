import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { scene } from './main';

const loader = new GLTFLoader();

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

let cur_obj = null;
let spin_state = {"heart":true, "phone":true, "gears":true}
const grey = new THREE.Color(0x757575);
const red = new THREE.Color(0xff0000)
const blue = new THREE.Color(0x0000ff);
const green = new THREE.Color(0x00ff00);

const spin = () => {
    if (spin_state.heart == true) {
        let heart = scene.getObjectByName("Heart");
        heart.rotateY(0.01);
        heart.scale.set(1,1,1);
    }
    else {
        let heart = scene.getObjectByName("Heart");
        heart.rotation.set(0,0,0);
        heart.scale.set(1.5,1.5,1.5);
    };

    if (spin_state.phone == true) {
        let phone = scene.getObjectByName("Phone");
        phone.rotateZ(0.01);
        phone.scale.set(1,1,1);
    }
    else {
        let phone = scene.getObjectByName("Phone");
        phone.rotation.set(0,0,0);
        phone.scale.set(1.5,1.5,1.5);
    }

    if (spin_state.gears == true) {
        let gears = {
            "big": scene.getObjectByName("GearBig"),
            "medium": scene.getObjectByName("GearMedium"),
            "small": scene.getObjectByName("GearSmall")
        };
        gears.big.rotateZ(0.005);
        gears.big.material.color = grey;
        gears.medium.rotateZ(-0.015);
        gears.medium.material.color = grey;
        gears.small.rotateZ(-0.025);
        gears.small.material.color = grey;

    } else {
        let gears = {
            "big":scene.getObjectByName("GearBig"),
            "medium":scene.getObjectByName("GearMedium"),
            "small":scene.getObjectByName("GearSmall")
        };
        gears.big.rotation.set(0,0,0);
        gears.big.material.color = blue;
        gears.medium.rotation.set(0,0,0);
        gears.medium.material.color = green;
        gears.small.rotation.set(0,0,0);
        gears.small.material.color = red;
    } 
}

const set_option = ({ text, class_name }) => {
    let option_elem = document.getElementById("option");
    option_elem.textContent = text;
    option_elem.className = class_name;
}

const hover_obj = (obj_name) => {
    if (obj_name.includes("Heart")) {
        cur_obj = "heart";
        set_option({text:"About Me", class_name:"visible"});
        spin_state.heart = !spin_state.heart;
    }
    else if (obj_name.includes("Phone")) {
        cur_obj = "phone";
        set_option({text:"Contact", class_name:"visible"});
        spin_state.phone = !spin_state.phone;
    }
    else if (obj_name.includes("Gear")) {
        cur_obj = "gears";
        set_option({text:"Projects", class_name:"visible"});
        spin_state.gears = !spin_state.gears;
    } else {
        cur_obj = undefined;
        set_option({text:"", class_name:"hidden"});
    }
};

export { load_models, spin , hover_obj, cur_obj };