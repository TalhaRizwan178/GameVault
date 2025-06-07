const express = require('express');
const router = express.Router();
const {
  createGame,
  getGames,
  getGame,
  updateGame,
  deleteGame
} = require('../controllers/gameController');

router.post('/', createGame);
router.get('/', getGames);
router.get('/:id', getGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

module.exports = router;
