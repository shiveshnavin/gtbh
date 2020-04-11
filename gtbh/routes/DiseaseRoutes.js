var express = require('express');
var router = express.Router();
var DiseaseController = require('../controllers/DiseaseController.js');

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
