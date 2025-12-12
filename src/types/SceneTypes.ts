import * as THREE from "three";

export type ObjectType =
  | "box"
  | "mesh"
  | "plane"
  | "sphere"
  | "cylinder"
  | "cone"
  | "torus"
  | "text";

export type SceneObject = {
  id: string;
  type: string;
  name: string;
  mesh: THREE.Mesh;
};
