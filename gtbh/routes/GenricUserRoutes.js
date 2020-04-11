var express = require('express');
var router = express.Router();
var GenricUserController = require('../controllers/GenricUserController.js');

/*
 * GET
 */
router.get('/', GenricUserController.list);

/*
 * GET
 */
router.get('/:id', GenricUserController.show);


router.post('/addOrUpdate', function(req,res)
{
    console.log('AddOrUpdate',req.params.id)
    var id = req.params.id  || req.body.id;
    req.params.id = id;
    GenricUserController.GenricUserModel.findOne({id: id}, function (err, Note) {
        if (err || !Note) {
             
            GenricUserController.create(req,res);
        }
        else{
            GenricUserController.update(req,res);
        }
        
    });
    
});


/*
 * POST
 */
router.post('/', GenricUserController.create);

/*
 * PUT
 */
router.put('/:id', GenricUserController.update);

/*
 * DELETE
 */
router.delete('/:id', GenricUserController.remove);

module.exports = router;
