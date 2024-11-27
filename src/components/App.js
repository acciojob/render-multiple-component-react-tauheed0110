import React, {Component, useState} from "react";
import '../styles/App.css';

const projects = [
  {
    "name": "GreenTech",
    "description": "A sustainable energy initiative aimed at developing solar and wind power solutions for urban areas."
  },
  {
    "name": "HealthConnect",
    "description": "A digital health platform that connects patients with healthcare providers for virtual consultations and monitoring."
  },
  {
    "name": "EduTrack",
    "description": "An educational app designed to track student progress and provide personalized learning paths for better academic performance."
  },
  {
    "name": "SmartCity",
    "description": "A project focused on transforming urban spaces into smart cities through IoT technologies and data-driven infrastructure management."
  },
  {
    "name": "AgriNext",
    "description": "A precision agriculture platform that uses drones and AI to optimize crop management and increase yield for farmers."
  }
]

const App = () => {
  return (
    <div id="main" className="ns-wrapper">
        {
          projects.map((project, index) => {
            return <>
              <h1 data-ns-test='project-name'>{project.name}</h1>
              <h6 data-ns-test='project-description'>{project.description}</h6>
            </>
          })
        }
    </div>
  )
}


export default App;
