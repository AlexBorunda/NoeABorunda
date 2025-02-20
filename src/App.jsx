{/* import { useState } from 'react' */}
import linkedinLogo from './assets/linkedin-black.png'
import coloradoschoolofminesLogo from './assets/coloradoschoolofmines-black.png'
import githubLogo from './assets/github-black.png'
import profilePicture from './assets/profile.jpg'
import './App.css'

function App() {
  {/* const [count, setCount] = useState(0) */}

  return (
    <>
      
      <div className="profile-header">
        {/* Profile picture */}
        <img src={profilePicture} className="profile-picture" alt="Noe's profile picture" />     

        <div className="profile-header-text">
          {/* Title of the website*/}
          <h1>Noe (Alex) Borunda</h1>

          {/* Subtitle of the website */}
          <h2> CS Undergraduate at {' '}
            <a href= "https://www.mines.edu/" target="_blank" rel="noopener noreferrer">
              Colorado School of Mines
            </a>
          </h2>
        </div>

      </div>

      <div className="logos-container">
        
        {/* Link to Noe Borunda's Github page website w/ Github logo */}
        <div className="logos-container-item">
          <a href="https://github.com/AlexBorunda" target="_blank">
            <img src={githubLogo} className="logo vite" alt="Github logo" />
          </a>
          <h2>GitHub</h2>
        </div>

        {/* Link to Noe Borunda's Linkedin page website w/ Linkedin logo */}
        <div className="logos-container-item">
          <a href="https://www.linkedin.com/in/noeaborunda/" target="_blank">
            <img src={linkedinLogo} className="logo react" alt="Linkedin logo" />
          </a>
          <h2>Linkedin</h2>
        </div>

        {/* Link to Colorado school of mines website w/ mines legacy logo */}
        <div className="logos-container-item">
          <a href="https://cs.mines.edu/" target="_blank">
            <img src={coloradoschoolofminesLogo} className="logo mines" alt="Colorado school of mines legacy logo" />
          </a>
          <h2>CS @ Mines</h2>
        </div>

      </div>

      
      {/* Card with the count */}
      {/*
      <div className="card">
        Button to increment the count
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
          
        Instruction to edit the App.jsx file
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      */}
      

      {/* Paragraph with the class 'read-the-docs' */}
      <p className="read-the-docs">
        Click on the Github, Linkedin, & Mines logos to learn more
      </p>
    </>
  )
}

export default App
