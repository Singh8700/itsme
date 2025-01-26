"use client"
import React from 'react'
import ThreeDObject from './3dScenes'

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
    <div style={{width:"100%", height:"100%",position:"absolute"}}>
      <ThreeDObject 
        geometry={"TorusGeometry"} 
        material="MeshPhongMaterial"
        top={"30%"} 
        left={"20%"} 
        color={getRandomColor()}  // Set random color
        size={6} 
        maxPosition={3}
      />

      <ThreeDObject 
        geometry={"TorusKnotGeometry"} 
        top={"-10%"} 
        left={"-30%"} 
        color={getRandomColor()}  // Set random color
        size={5} 
        maxPosition={3}
        material={"MeshPhongMaterial"}
      />

      <ThreeDObject 
        geometry={"OctahedronGeometry"} 
        top={"40%"} 
        left={"70%"} 
        color={getRandomColor()}  // Set random color
        size={12} 
        maxPosition={3}
        material={"MeshPhongMaterial"}
      />

      <ThreeDObject 
        geometry={"SphereGeometry"} 
        top={"10%"} 
        left={"50%"} 
        color={getRandomColor()}  // Set random color
        size={6} 
        maxPosition={3}
        material={"MeshPhongMaterial"}
      />

      <ThreeDObject 
        geometry={"DodecahedronGeometry"}
        top={"20%"} 
        left={"-50%"} 
        color={getRandomColor()}  // Set random color
        size={5} 
        maxPosition={3}
        material={"MeshLambertMaterial"}
      />

      <ThreeDObject 
        geometry={"ExtrudeGeometry"} 
        top={"60%"} 
        left={"-40%"} 
        color={getRandomColor()}  // Set random color
        size={12} 
        maxPosition={3}
        material={"MeshBasicMaterial"}
      />
    </div>
  )
}

export default Background;
