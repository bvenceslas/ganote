const router = require('express').Router();

router.get('/test', async (req, res) => {
    await res.send('GaNote API is working perfectly .......');
});

module.exports = router;