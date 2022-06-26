import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

async function load_character() {
    const loader = new GLTFLoader();
    loader.load('assets/character.gltf', (gltf) => {
        model_character = gltf.scene;
        scene.add(model_character);
        model_character.scale.set(5, 5, 5);
        model_character.rotation.set(0, 3.1, 0);
        model_character.position.set(0, -10, 0);
    }, (xhr) => {
        console.log("character:", xhr.loaded/xhr.total * 100, "% loaded");
    }, (error) => {
        console.log("oops! error occurred in loading character");
    });
}

export { load_character };