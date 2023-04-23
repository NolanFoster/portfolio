import React from 'react';
import './App.css';
import Navigation from './screens/navigationBar/navigationBar';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <div className="App">
      <Navigation></Navigation>
      <Particles 
            id="tsparticles"
            className='particles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                image: "linear-gradient(195deg, rgba(8,20,72,1) 45%, rgba(40,33,87,1) 59%, rgba(26,44,128,1) 71%, rgba(26,44,128,1) 77%, rgba(74,71,138,1) 98%, rgba(218,138,139,1) 100%)",
              },
              fpsLimit: 120,
              interactivity: {
                  events: {
                      onClick: {
                          enable: true,
                          mode: "push",
                      },
                      resize: true,
                  },
                  modes: {
                      push: {
                          quantity: 4,
                      },
                      repulse: {
                          distance: 200,
                          duration: 0.4,
                      },
                  },
              },
              particles: {
                  color: {
                      value: "#ffffff",
                  },
                  collisions: {
                      enable: false,
                  },
                  move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: false,
                      speed: 0.025,
                      straight: false,
                  },
                  number: {
                      density: {
                          enable: true,
                      },
                      value: 5000,
                  },
                  opacity: {
                      value: 0.7,
                  },
                  shape: {
                      type: "circle",
                  },
                  size: {
                      value: { min: 0.15, max: 1.5 },
                  },
              },
              detectRetina: true,
          }}
          />
    </div>
  );
}

export default App;
