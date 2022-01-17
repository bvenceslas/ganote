const router = require('express').Router();
const noteController = require('../controllers/note-controller');

router.get('/test', noteController.testAPI);
router.get('/notes', noteController.findAll);
router.get('/notes/:id', noteController.findOne);
router.post('/notes', noteController.create);
router.put('/notes/:id', noteController.update);
router.delete('/notes/:id', noteController.delete);

module.exports = router;