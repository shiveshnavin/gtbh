var express = require('express');
var router = express.Router();
var HospitalServiceController = require('../controllers/HospitalServiceController.js');

var bodyParser = require('body-parser'); 
router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true }));
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
