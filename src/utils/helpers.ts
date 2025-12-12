import { exportSceneToJson, importSceneFromJson } from "../main";

export const radToDeg = (rad: number) => (rad * 180) / Math.PI;
export const degToRad = (deg: number) => (deg * Math.PI) / 180;

export const downloadScene = () => {
  const jsonString = exportSceneToJson();
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `cubicle-3d-scene-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const openSceneFile = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json";

  input.onchange = (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonString = e.target?.result as string;
        if (jsonString) {
          importSceneFromJson(jsonString);
        }
      };
      reader.readAsText(file);
    }
  };
  input.click();
};
