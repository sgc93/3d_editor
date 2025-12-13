# CUBICLE : 3D Scene Editor (THREE.js / TypeScript)

A lightweight web-based 3D scene editor built with Three.js for interactive object manipulation and scene management.
<img width="1366" height="768" alt="cubicle" src="https://github.com/user-attachments/assets/f445874a-a565-4d25-9516-e3bf5949f2db" />

## How to Run the App

This project uses **Vite** as a modern build tool and development server, and **TypeScript** for code quality.

### Installation & Startup

1.  **Clone the Repository (If applicable):**

    ```bash
    git clone git@github.com:sgc93/Cubicle.git
    cd cubicle
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

The application will typically be available at `http://localhost:5173/`.

## 2. Completed Features

The core 3D editor functionality and foundational components are complete:

### Scene Setup

- **Initialization:** basic Three.js scene, camera, and WebGL renderer.
- **Lighting:** ambient and directional lighting with shadows enabled.
- **Helpers:** Grid Helper and XYZ Axes Helper.

### Add Shapes

- **Selection:** Primitive meshes (Box, Sphere, Cylinder, Cone, Torus, Plane).

### Object Selection & Deletion

- **Selection:** Clicking on them in the viewport or by using the sidebar list.
- **Highlighting** highlight selected object with bounding box
- **Deletion:** Select Object + Backspace or delete button from sidebar.

### Transformation & Editing

- **Mode Switching:** swith betwee translate, rotate and scale modes with cta buttons or shortcuts: g, r and s respectively.
- **Sidebar Editor:** Manual input fields in the sidebar to precisely set the Position, Rotation (in degrees), and Scale of the selected object.
- **Orbit Cotrols:** mode based helper orbit controls displayed according to the type of mode for the selected object.

### Persistence
- **Export Scene:** Exports the current scene state (all objects, types, and transforms) to a downloadable JSON file.
- **Import Scene:** Clears the current scene and reconstructs it based on a loaded JSON file.

## 3. To Do
- Undo/Redo History
- Material Editor
- Light Editor
- Group Objects
- Keyboard Shortcuts

## 4. Tech Stack

- **3D Engine** : ThreeJs
- **Framework** : Vite - Fast development server and build tool
- **Language** : TypeScript
- **Styling** : Tailwind CSS - Utility-first CSS framework for rapid UI crafting
