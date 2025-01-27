"use client";
import React from 'react';
import ThreeDObject from './3dScenes';

const Background = () => {
  // Function to generate a random color in hex format
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "absolute", backgroundColor: "transparent" }}>
      {/* First Object */}
      <ThreeDObject 
        geometry={"TorusGeometry"} 
        material="MeshPhongMaterial"
        color={getRandomColor()}  
        size={6} 
        maxPosition={5}
      />

      {/* Second Object */}
      <ThreeDObject 
        geometry={"TorusKnotGeometry"} 
        color={getRandomColor()}  
        size={5} 
        maxPosition={5}
        material={"MeshPhongMaterial"}
      />

      {/* Third Object */}
      <ThreeDObject 
        geometry={"OctahedronGeometry"} 
        color={getRandomColor()}  
        size={12} 
        maxPosition={5}
        material={"MeshPhongMaterial"}
      />
    </div>
  );
};

export default Background;
