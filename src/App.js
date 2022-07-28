import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import PinList from './components/PinList';

export default function App() {
  const [countries, setCountries] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    if (!countries.length ) {
      fetch("http://localhost:4000/countries")
        .then(resp => resp.json())
        .then(data => setCountries(data))
      
      fetch("http://localhost:4000/user")
        .then(resp => resp.json())
        .then(data => setUser(data))
    }
  }, [countries])

  return (
    <Router>
      <header>
        <h1>🌎Scratch Match</h1>
        <Link to="/pins">My Scratch Map</Link>
      </header>
      <main>
        <Routes>
          <Route
            path='/pins'
            element={
              <PinList
                countries={countries}
                user={user}
                setCountries={setCountries}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

