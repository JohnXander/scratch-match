import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import PinAdd from './components/PinAdd';
import PinList from './components/PinList';

export default function App() {
  const [countries, setCountries] = useState([])
  const [user, setUser] = useState([])
  const [world, setWorld] = useState([])

  useEffect(() => {
    if (!countries.length ) {
      fetch("http://localhost:4000/countries")
        .then(resp => resp.json())
        .then(data => setCountries(data))
      
      fetch("http://localhost:4000/user")
        .then(resp => resp.json())
        .then(data => setUser(data))
      
      fetch("http://localhost:4000/world")
        .then(resp => resp.json())
        .then(data => setWorld(data))
    }
  }, [countries])

  return (
    <Router>
      <header>
        <h1>🌎Scratch Match</h1>
        <Link to="/map">My Scratch Map</Link>
        {" "}
        <Link to="/add">Add Pins</Link>
      </header>
      <main>
        <Routes>
          <Route
            path='/map'
            element={
              <PinList
                user={user}
                countries={countries}
              />
            }
          />
          <Route
            path='/add'
            element={
              <PinAdd
                countries={countries}
                setCountries={setCountries}
                world={world}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

