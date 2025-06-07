import { Routes, Route, Link } from 'react-router-dom';
import Addgame from './components/Addgame';
import Editgame from './components/Editgame';
import Gamelist from './components/Gamelist';

function App() {
  return (
    <div className="container mt-4">
      <nav className="mb-4">
        <Link to="/" className="btn btn-primary me-2">Game List</Link>
        <Link to="/add" className="btn btn-success">Add Game</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Gamelist />} />
        <Route path="/add" element={<Addgame />} />
        <Route path="/edit/:id" element={<Editgame />} />
      </Routes>
    </div>
  );
}

export default App;
