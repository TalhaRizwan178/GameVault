import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import './gamelist.css';
function Gamelist() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchGames = async () => {
    const res = await axios.get('http://localhost:5000/api/games');
    setGames(res.data);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const deleteGame = async (id) => {
    if (confirm('Are you sure?')) {
      await axios.delete(`http://localhost:5000/api/games/${id}`);
      fetchGames();
    }
  };

  const filteredGames = games.filter((g) =>
    g.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>🎮 GameVault</h3>
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Developer</th>
            <th>Genre</th>
            <th>Year</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredGames.map((g) => (
            <tr key={g._id}>
              <td>{g.name}</td>
              <td>{g.developer}</td>
              <td>{g.genre.join(', ')}</td>
              <td>{g.year}</td>
              <td>{g.description}</td>
              <td>
                <Link to={`/edit/${g._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                <button onClick={() => deleteGame(g._id)} className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Gamelist;
