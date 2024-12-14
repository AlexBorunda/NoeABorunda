import { useState } from 'react'
import linkedinLogo from './assets/linkedin-white.png'
import coloradoschoolofminesLogo from './assets/coloradoschoolofmines-white.png'
import githubLogo from './assets/github-white.png'
import profilePicture from './assets/profile.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Link to Colorado School of Mines website w/ Mines Legacy logo */}
        <a href="https://www.mines.edu/" target="_blank">
          <img src={coloradoschoolofminesLogo} className="logo" alt="Colorado school of mines legacy logo" />
        </a>

        {/* Link to Noe Borunda's Linkedin page website w/ Linkedin logo */}
        <a href="https://www.linkedin.com/in/noeaborunda/" target="_blank">
          <img src={linkedinLogo} className="logo react" alt="Linkedin logo" />
        </a>

        {/* Link to Noe Borunda's Github page website w/ Github logo */}
        <a href="https://github.com/aborunda/" target="_blank">
          <img src={githubLogo} className="logo vite" alt="Github logo" />
        </a>
      </div>

      <div className="profile-header">
        {/* Profile picture */}
        <img src={profilePicture} className="profile-picture" alt="Noe's profile picture" />        

        {/* Title of the website*/}
        <h1>Noe A Borunda</h1>
      </div>

      {/* Card with the count */}
      <div className="card">
        {/* Button to increment the count */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
          
        {/* Instruction to edit the App.jsx file*/}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Paragraph with the class 'read-the-docs' */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
