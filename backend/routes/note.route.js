const router = require('express').Router();
const noteController = require('../controllers/note-controller');

router.get('/test', noteController.testAPI);
router.get('/note', noteController.findAll);
router.get('/note/:id', noteController.findOne);
router.post('/note', noteController.create);
router.put('/note/:id', noteController.update);
router.delete('/note/:id', noteController.delete);

module.exports = router;