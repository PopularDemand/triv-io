const express = require('express');
const router = express.Router();

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('room');
})

module.exports = router;