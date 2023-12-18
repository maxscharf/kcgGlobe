import { World } from './World/World.js';

function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);
// Load the texture for the image to be placed on the sphere
const textureLoader = new THREE.TextureLoader();
const imageTexture = textureLoader.load('C:/Users/maxjs/Downloads/New folder/KCG-2/assets/textures/saul-12-1-17.png', function(texture) {
    // Create the image at the specific latitude and longitude once the texture is loaded
    createImageAtPoint(41.3874, 2.1686, imageTexture, scene);
});


  // start the animation loop
  world.start();
}

main();
