import { createCamera } from './components/camera.js';
import { createSphere } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let renderer;
let scene;
let loop;


function latLongToVector3(lat, lon, radius) {
    var phi = (90 - lat) * (Math.PI / 180);
    var theta = (lon + 180) * (Math.PI / 180);

    var x = -((radius) * Math.sin(phi) * Math.cos(theta));
    var z = ((radius) * Math.sin(phi) * Math.sin(theta));
    var y = ((radius) * Math.cos(phi));

    return new THREE.Vector3(x, y, z);
}

function createImageAtPoint(lat, lon, texture, scene) {
    var sphereRadius = 1; // Assuming the sphere has a radius of 1
    var position = latLongToVector3(lat, lon, sphereRadius + 0.01); // Slightly above the sphere surface
    var planeGeometry = new THREE.PlaneGeometry(0.05, 0.05); // Small plane
    var planeMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.copy(position);
    plane.lookAt(new THREE.Vector3(0, 0, 0)); // Orient the plane towards the center of the sphere

    // Make the plane a child of the sphere so it rotates with it
    scene.add(plane);
}
class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const sphere = createSphere();
    const light = createLights();

    loop.updatables.push(sphere);

    scene.add(sphere, light);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
