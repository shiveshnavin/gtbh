var express = require('express');
var router = express.Router();
var HospitalServiceController = require('../controllers/HospitalServiceController.js');

/*
 * GET
 */
router.get('/', HospitalServiceController.list);
router.get('/clean', HospitalServiceController.clean);

/*
 * GET
 */
router.get('/:id', HospitalServiceController.show);

/*
 * POST
 */
router.post('/', HospitalServiceController.create);

/*
 * PUT
 */
router.put('/:id', HospitalServiceController.update);

/*
 * DELETE
 */
router.delete('/:id', HospitalServiceController.remove);

module.exports = router;
