import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


import './App.css';
import Component from './components/Component';

export default function App() {
  return (
    <Router>
      <header>
        <h1>Title</h1>
        <Link to="/comp">Show Component</Link>
      </header>
      <main>
        <Routes>
          <Route
            path='/comp'
            element={<Component />}
          />
        </Routes>
      </main>
    </Router>
  );
}

