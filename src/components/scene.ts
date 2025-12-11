import * as THREE from "three";
import { TransformControls } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { ObjectType } from "../types/SceneTypes";

// --- DOM ---
const canvas = document.getElementById("viewport-canvas") as HTMLCanvasElement;
if (!canvas) {
  console.error("Canas element not loaded!");
}

// --- CORE GLOBALS ---

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let transformControls: TransformControls;

// --- OBJECTS ---
let sceneObjects: THREE.Mesh[] = [];
let selectedObject: THREE.Mesh | null = null;

// --- SIZES ---
const INIFINITE_GRID_SIZE = 2000;
const CAMERA_FAR_PLANE = INIFINITE_GRID_SIZE + 5000;
const initScene = () => {
  // --- SCENE | CAMERA | RENDERE---
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#424342");
  camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    CAMERA_FAR_PLANE
  );
  camera.position.set(5, 5, 5);

  // --- RENDERER ---
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
  });
  renderer.shadowMap.enabled = true;
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // --- CONTROLS ---
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // --- HELPERS: GRID, AXES ---
  const grid = new THREE.GridHelper(
    INIFINITE_GRID_SIZE,
    1000,
    "#6d6d6d",
    "#4d4d4d"
  );
  const axes = new THREE.AxesHelper(3);
  axes.setColors("#facc15", "#0466c8", "#25a244");
  scene.add(grid, axes);

  // --- LIGHT ---
  const ambientLight = new THREE.AmbientLight("#ffffff", 0.4);
  const directionalLinght = new THREE.DirectionalLight("#fff", 1.2);
  directionalLinght.position.set(10, 10, 5);
  directionalLinght.castShadow = true;
  scene.add(ambientLight, directionalLinght);

  // --- TRANSFORM CONTROLS (Object Manipulation) ---
  transformControls = new TransformControls(camera, renderer.domElement);
  transformControls.addEventListener("dragging-changed", (event) => {
    controls.enabled = !event.value;

    // FIXME update sidebar when drag ends
  });
  transformControls.addEventListener("change", () => {
    if (transformControls.dragging) {
      // FIXME update without refreshing all dimensions
    }
  });
  scene.add(transformControls as unknown as THREE.Object3D);

  // --- RESIZE HANDLER ---
  window.addEventListener("resize", () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });

  animate();
};

const animate = () => {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
};

const createDefaultMaterial = () => {
  return new THREE.MeshStandardMaterial({
    color: "#6b6c6e",
    roughness: 0.4,
    metalness: 0.1
  });
};

export const createObject = (type: ObjectType) => {
  let geometry: THREE.BufferGeometry;
  let newMesh: THREE.Mesh;

  switch (type) {
    case "box":
    case "mesh":
      geometry = new THREE.BoxGeometry(2, 2, 2);
      break;
    case "plane":
      geometry = new THREE.PlaneGeometry(10, 10);
      break;
    case "sphere":
      geometry = new THREE.SphereGeometry(1.5, 32, 16);
      break;
    case "cylinder":
      geometry = new THREE.CylinderGeometry(1, 1, 3, 32);
      break;
    case "cone":
      geometry = new THREE.ConeGeometry(1.5, 3, 32);
      break;
    case "torus":
      geometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
      break;
    case "text":
      // FIXEME handle displaying text
      geometry = new THREE.BoxGeometry(2, 2, 0.2);
      break;
    default:
      return;
  }

  const material = createDefaultMaterial();
  newMesh = new THREE.Mesh(geometry, material);

  if (type === "plane") {
    newMesh.rotation.x = -Math.PI / 2;
  }
  if (type === "torus") {
    newMesh.rotation.x = Math.PI / 2;
  }

  newMesh.castShadow = true;
  newMesh.receiveShadow = true;

  scene.add(newMesh);
  sceneObjects.push(newMesh);
  selectedObject = newMesh;

  transformControls.attach(selectedObject);
};

const initApp = () => {
  initScene();
  createObject("torus");
};

if (canvas) {
  initApp();
}
