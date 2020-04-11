var DiseaseModel = require('../models/DiseaseModel.js');

/**
 * DiseaseController.js
 *
 * @description :: Server-side logic for managing Diseases.
 */
module.exports = {

    /**
     * DiseaseController.list()
     */
    list: function (req, res) { 
        DiseaseModel.find(function (err, Diseases) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Disease.',
                    error: err
                });
            }
            return res.json(Diseases);
        });
    },

    /**
     * DiseaseController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        DiseaseModel.findOne({_id: id}, function (err, Disease) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Disease.',
                    error: err
                });
            }
            if (!Disease) {
                return res.status(404).json({
                    message: 'No such Disease'
                });
            }
            return res.json(Disease);
        });
    },

    /**
     * DiseaseController.create()
     */
    create: function (req, res) {
        var Disease = new DiseaseModel({
			infoUrl : req.body.infoUrl,
			details : req.body.details,
			images : req.body.images,
			name : req.body.name,
			bodyPartId : req.body.bodyPartId,
			categoryId : req.body.categoryId

        });

        Disease.save(function (err, Disease) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Disease',
                    error: err
                });
            }
            return res.status(201).json(Disease);
        });
    },

    /**
     * DiseaseController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        DiseaseModel.findOne({_id: id}, function (err, Disease) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Disease',
                    error: err
                });
            }
            if (!Disease) {
                return res.status(404).json({
                    message: 'No such Disease'
                });
            }

            Disease.infoUrl = req.body.infoUrl ? req.body.infoUrl : Disease.infoUrl;
			Disease.details = req.body.details ? req.body.details : Disease.details;
			Disease.images = req.body.images ? req.body.images : Disease.images;
			Disease.name = req.body.name ? req.body.name : Disease.name;
			Disease.bodyPartId = req.body.bodyPartId ? req.body.bodyPartId : Disease.bodyPartId;
			Disease.categoryId = req.body.categoryId ? req.body.categoryId : Disease.categoryId;
			
            Disease.save(function (err, Disease) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Disease.',
                        error: err
                    });
                }

                return res.json(Disease);
            });
        });
    },

    /**
     * DiseaseController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        DiseaseModel.findByIdAndRemove(id, function (err, Disease) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Disease.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    clean:function(req,res)
    {
        DiseaseModel.remove({}, function (err, Note) {
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
