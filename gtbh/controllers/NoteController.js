var NoteModel = require('../models/NoteModel.js');

/**
 * NoteController.js
 *
 * @description :: Server-side logic for managing Notes.
 */
module.exports = {

    /**
     * NoteController.list()
     */
    NoteModel:NoteModel,
    list: function (req, res) {
        NoteModel.find(function (err, Notes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Note.',
                    error: err
                });
            }
            return res.json(Notes);
        });
    },

    /**
     * NoteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        NoteModel.findOne({id: id}, function (err, Note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Note.',
                    error: err
                });
            }
            if (!Note) {
                return res.status(404).json({
                    message: 'No such Note'
                });
            }
            return res.json(Note);
        });
    },
    showUser: function (req, res) {
        var id = req.params.id  || req.body.id;
        NoteModel.find({userid: id}, function (err, Note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Note.',
                    error: err
                });
            }
            if (!Note) {
                return res.status(404).json({
                    message: 'No such Note'
                });
            }
            return res.json(Note);
        });
    },

    /**
     * NoteController.create()
     */
    create: function (req, res) {
        var Note = new NoteModel({
			userid : req.body.userid,
			id : req.body.id,
			title : req.body.title,
			details : req.body.details,
			images : req.body.images,
			dateTime : req.body.dateTime

        });

        Note.save(function (err, Note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Note',
                    error: err
                });
            }
            return res.status(201).json(Note);
        });
    },

    /**
     * NoteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        NoteModel.findOne({id: id}, function (err, Note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Note',
                    error: err
                });
            }
            if (!Note) {
                return res.status(404).json({
                    message: 'No such Note'
                });
            }

            Note.userid = req.body.userid ? req.body.userid : Note.userid;
			Note.id = req.body.id ? req.body.id : Note.id;
			Note.title = req.body.title ? req.body.title : Note.title;
			Note.details = req.body.details ? req.body.details : Note.details;
			Note.images = req.body.images ? req.body.images : Note.images;
			Note.dateTime = req.body.dateTime ? req.body.dateTime : Note.dateTime;
			
            Note.save(function (err, Note) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Note.',
                        error: err
                    });
                }

                return res.json(Note);
            });
        });
    },

    /**
     * NoteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        NoteModel.findOneAndRemove({id: id}, function (err, Note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Note.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    clean:function(req,res)
    {
        NoteModel.remove({}, function (err, Note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Note.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
