var HospitalServiceModel = require('../models/HospitalServiceModel.js');

/**
 * HospitalServiceController.js
 *
 * @description :: Server-side logic for managing HospitalServices.
 */
module.exports = {

    /**
     * HospitalServiceController.list()
     */
    list: function (req, res) {
        HospitalServiceModel.find(function (err, HospitalServices) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting HospitalService.',
                    error: err
                });
            }
            return res.json(HospitalServices);
        });
    },

    /**
     * HospitalServiceController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        HospitalServiceModel.findOne({_id: id}, function (err, HospitalService) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting HospitalService.',
                    error: err
                });
            }
            if (!HospitalService) {
                return res.status(404).json({
                    message: 'No such HospitalService'
                });
            }
            return res.json(HospitalService);
        });
    },

    /**
     * HospitalServiceController.create()
     */
    create: function (req, res) {
        var HospitalService = new HospitalServiceModel({
			infoUrl : req.body.infoUrl,
			details : req.body.details,
			images : req.body.images,
			name : req.body.name,
			bodyPartId : req.body.bodyPartId,
			categoryId : req.body.categoryId

        });

        HospitalService.save(function (err, HospitalService) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating HospitalService',
                    error: err
                });
            }
            return res.status(201).json(HospitalService);
        });
    },

    /**
     * HospitalServiceController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        HospitalServiceModel.findOne({_id: id}, function (err, HospitalService) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting HospitalService',
                    error: err
                });
            }
            if (!HospitalService) {
                return res.status(404).json({
                    message: 'No such HospitalService'
                });
            }

            HospitalService.infoUrl = req.body.infoUrl ? req.body.infoUrl : HospitalService.infoUrl;
			HospitalService.details = req.body.details ? req.body.details : HospitalService.details;
			HospitalService.images = req.body.images ? req.body.images : HospitalService.images;
			HospitalService.name = req.body.name ? req.body.name : HospitalService.name;
			HospitalService.bodyPartId = req.body.bodyPartId ? req.body.bodyPartId : HospitalService.bodyPartId;
			HospitalService.categoryId = req.body.categoryId ? req.body.categoryId : HospitalService.categoryId;
			
            HospitalService.save(function (err, HospitalService) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating HospitalService.',
                        error: err
                    });
                }

                return res.json(HospitalService);
            });
        });
    },

    /**
     * HospitalServiceController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        HospitalServiceModel.findByIdAndRemove(id, function (err, HospitalService) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the HospitalService.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    clean:function(req,res)
    {
        HospitalServiceModel.remove({}, function (err, Note) {
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
