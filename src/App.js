import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Pins from './components/Pins';

export default function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (!countries.length ) {
      fetch("http://localhost:4000/countries")
        .then(resp => resp.json())
        .then(data => setCountries(data))
    }
  }, [countries])

  return (
    <Router>
      <header>
        <h1>Title</h1>
        <Link to="/pins">Go to pins</Link>
      </header>
      <main>
        <Routes>
          <Route
            path='/pins'
            element={
              <Pins
                countries={countries}
                setCountries={setCountries}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

