import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GENRE_OPTIONS = ['Action', 'Adventure', 'RPG', 'Shooter', 'Simulation', 'Strategy', 'Sports'];

function Addgame() {
  const [game, setGame] = useState({
    name: '',
    year: '',
    developer: '',
    genre: [],
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const handleGenreChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setGame({ ...game, genre: selected });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/games', game);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Game</h3>

      <div className="mb-3">
        <label>Name</label>
        <input
          name="name"
          value={game.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label>Developer</label>
        <input
          name="developer"
          value={game.developer}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label>Genre</label>
        <select
          multiple
          name="genre"
          value={game.genre}
          onChange={handleGenreChange}
          className="form-control"
        >
          {GENRE_OPTIONS.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        <small className="text-muted">Hold Ctrl (Cmd on Mac) to select multiple</small>
      </div>

      <div className="mb-3">
        <label>Year</label>
        <input
          name="year"
          type="number"
          value={game.year}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label>Description</label>
        <textarea
          name="description"
          value={game.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-success">Add Game</button>
    </form>
  );
}

export default Addgame;
