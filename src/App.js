import './App.css'
import './NavBar.css'
import NavBar from './Components/NavBar'
import Routes from './Components/Routes'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  const [ navbarOpen, setNavbarOpen ] = useState(false)

  return (
    <Router>
      <div className="App">
        <div className="header">
            <h1>Mandy Parson</h1>
            <h3><em>Full Stack Software Engineer</em></h3>
            <NavBar 
              navbarOpen={navbarOpen}
              setNavbarOpen={setNavbarOpen}/>
        </div>
        <div className="main-content">
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
