var express = require('express');
var router = express.Router();
var PKeyController = require('../controllers/PKeyController.js');

/*
 * GET
 */
router.get('/register', PKeyController.register);
router.get('/', PKeyController.list);
router.get('/clean', PKeyController.clean);

/*
 * GET
 */
router.get('/:id', PKeyController.show);

/*
 * POST
 */
router.post('/', PKeyController.create);

/*
 * PUT
 */
router.put('/:id', PKeyController.update);

/*
 * DELETE
 */
router.delete('/:id', PKeyController.remove);

module.exports = router;
