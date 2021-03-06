var express = require('express');
var router = express.Router();
var DiseaseController = require('../controllers/DiseaseController.js');

var bodyParser = require('body-parser'); 
router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true }));
/*
 * GET
 */
router.get('/', DiseaseController.list);
router.get('/clean', DiseaseController.clean);

/*
 * GET
 */
router.get('/:id', DiseaseController.show);

/*
 * POST
 */
router.post('/', DiseaseController.create);

/*
 * PUT
 */
router.put('/:id', DiseaseController.update);

/*
 * DELETE
 */
router.delete('/:id', DiseaseController.remove);

module.exports = router;
