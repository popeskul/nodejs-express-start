const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('../views/pages/users');
});

router.get('/:id', function (req, res, next) {
  res.render('../views/pages/user', {
    userId: req.params?.id
  });
});

module.exports = router;
