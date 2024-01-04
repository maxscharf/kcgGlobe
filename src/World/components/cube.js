import * as THREE from 'three';


function createMaterial() {
  // create a texture loader.
  const textureLoader = new THREE.TextureLoader();

  // load a texture
  const texture = textureLoader.load(
    './assets/textures/earth-texture.png',
  );

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return material;
}

function createSphere() {
  const geometry = new THREE.SphereGeometry(1, 32, 32); // Adjust the segments as needed
  const material = createMaterial();
  const sphere = new THREE.Mesh(geometry, material);

  sphere.rotation.set(-0.5, 0, 0);

  const radiansPerSecond = THREE.MathUtils.degToRad(15);

  // this method will be called once per frame
  sphere.tick = (delta) => {
    // increase the sphere's rotation each frame
    sphere.rotation.y += radiansPerSecond * delta;
  };

  return sphere;
}

export { createSphere };

