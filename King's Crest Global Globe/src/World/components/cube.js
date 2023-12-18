import {
  SphereBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from 'three';

function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(
    'C:/Users/maxjs/Downloads/New folder/KCG-2/assets/textures/earth-texture.png',
  );

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

function createSphere() {
  const geometry = new SphereBufferGeometry(1, 32, 32); // Adjust the segments as needed
  const material = createMaterial();
  const sphere = new Mesh(geometry, material);

  sphere.rotation.set(-0.5, 0, 0);

  const radiansPerSecond = MathUtils.degToRad(15);

  // this method will be called once per frame
  sphere.tick = (delta) => {
    // increase the sphere's rotation each frame
    sphere.rotation.y += radiansPerSecond * delta;
  };

  return sphere;
}

export { createSphere };

