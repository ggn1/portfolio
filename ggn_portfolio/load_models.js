import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader();

const set_up_model = (model_data) => {
    const model = model_data.scene;
    model.rotation.set(0, 3.14, 0); // rotate z axis by 180 degrees
    return model;
}

async function load_models() {
    const human_data = await loader.loadAsync('./assets/human.glb');
    const heart_data = await loader.loadAsync('./assets/heart.glb');
    const phone_data = await loader.loadAsync('./assets/phone.glb');
    const gear_big_data = await loader.loadAsync('./assets/gear_big.glb');
    const gear_medium_data = await loader.loadAsync('./assets/gear_medium.glb');
    const gear_small_data = await loader.loadAsync('./assets/gear_small.glb');

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

    return { human, heart, phone, gears};
}

// async function load_character() {
//     
//     loader.load('assets/character.gltf', (gltf) => {
//         model_character = gltf.scene;
//         scene.add(model_character);
//         model_character.scale.set(5, 5, 5);
//         model_character.rotation.set(0, 3.1, 0);
//         model_character.position.set(0, -10, 0);
//     }, (xhr) => {
//         console.log("character:", xhr.loaded/xhr.total * 100, "% loaded");
//     }, (error) => {
//         console.log("oops! error occurred in loading character");
//     });
// }

export { load_models };