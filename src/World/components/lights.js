import * as THREE from 'three';

function createLights() {
  const light = new THREE.PointLight(0xffffff, 1, 100);

  
  light.position.set(10, 10, 10);

  return light;
}

export { createLights };
