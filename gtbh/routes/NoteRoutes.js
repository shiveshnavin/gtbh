var express = require('express');
var router = express.Router();
var NoteController = require('../controllers/NoteController.js');

/*
 * GET
 */
router.get('/', NoteController.list);
router.get('/clean', NoteController.clean);

/*
 * GET
 */
router.get('/:id', NoteController.show);
router.get('/user/:id', NoteController.showUser);

/*
 * POST
 */
router.post('/', NoteController.create);

router.post('/addOrUpdate', function(req,res)
{
    console.log('AddOrUpdate',req.params.id)
    var id = req.params.id  || req.body.id;
    req.params.id = id;
    NoteController.NoteModel.findOne({id: id}, function (err, Note) {
        if (err || !Note) {
             
            NoteController.create(req,res);
        }
        else{
            NoteController.update(req,res);
        }
        
    });
    
});

/*
 * PUT
 */
router.put('/:id', NoteController.update);

/*
 * DELETE
 */
router.delete('/:id', NoteController.remove);

module.exports = router;
