import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const GENRE_OPTIONS = ['Action', 'Adventure', 'RPG', 'Shooter', 'Simulation', 'Strategy', 'Sports'];

function Editgame() {
  const { id } = useParams();
  const [game, setGame] = useState({
    name: '',
    developer: '',
    genre: [],
    year: '',
    description: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/games/${id}`).then((res) => setGame(res.data));
  }, [id]);

  const handleChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const handleGenreChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setGame({ ...game, genre: selected });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/games/${id}`, game);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Game</h3>

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

      <button type="submit" className="btn btn-primary">Update Game</button>
    </form>
  );
}

export default Editgame;
