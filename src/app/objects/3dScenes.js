"use client"
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ThreeDObject = (props) => {
  const mountRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene, Camera, Renderer banayein
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });  // Transparent background support
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Cube geometry create karein
    const geometry = new THREE[props.geometry]();
    const material = new THREE[props.material]({ color: props.color, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Randomly set the position using Math.floor(Math.random())
    const randomX = Math.floor(Math.random() * (props.maxPosition || 10));
    const randomY = Math.floor(Math.random() * (props.maxPosition || 10));
    const randomZ = Math.floor(Math.random() * (props.maxPosition || 10));

    // Set random position
    cube.position.set(randomX, randomY, randomZ);

    // Set the camera position
    camera.position.z = props.size || 5;

    // Mouse move event listener
    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Map to [-1, 1]
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Map to [-1, 1]
      setMouse({ x: mouseX, y: mouseY });

      // Update the camera position based on mouse position
      camera.position.x = mouseX * 5;  // Scale by 5 for better effect
      camera.position.y = -mouseY * 5; // Scale by 5 for better effect
      camera.lookAt(scene.position);   // Make the camera always look at the center of the scene
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", onMouseMove);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Cube ko rotate karein
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render karein
      renderer.render(scene, camera);
    };

    animate();

    // Resize function
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [props]);

  return (
    <div
      ref={mountRef}
      style={{
        backgroundColor: "transparent", // Make sure the container is transparent
        position: "absolute", // Optional: To ensure it fills the entire screen
        top: `${props.top}`,
        left: `${props.left}`,
        width: "50%",
        height: "50%",
      }}
    />
  );
};

export default ThreeDObject;
