var PKeyModel = require('../models/PKeyModel.js');

/**
 * PKeyController.js
 *
 * @description :: Server-side logic for managing PKeys.
 */
module.exports = {

    /**
     * PKeyController.list()
     */
    list: function (req, res) {
        PKeyModel.find(function (err, PKeys) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PKey.',
                    error: err
                });
            }
            return res.json(PKeys);
        });
    },

    /**
     * PKeyController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        PKeyModel.findOne({id: id}, function (err, PKey) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PKey.',
                    error: err
                });
            }
            if (!PKey) {
                return res.status(404).json({
                    message: 'No such PKey'
                });
            }
            return res.json(PKey);
        });
    },

    /**
     * PKeyController.create()
     */
    create: function (req, res) {
        var PKey = new PKeyModel({
			password : req.body.password,
			userid : req.body.userid,
			id : req.body.id

        });

        PKey.save(function (err, PKey) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating PKey',
                    error: err
                });
            }
            return res.status(201).json(PKey);
        });
    },

    register:function (req, res) {
        var PKey = new PKeyModel({
			password : req.body.password,
			userid : req.body.userid,
			id : req.body.id

        });

        PKey.save(function (err, PKey) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating PKey',
                    error: err
                });
            }
            return res.status(201).json(PKey);
        });
    },

    /**
     * PKeyController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        PKeyModel.findOne({id: id}, function (err, PKey) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PKey',
                    error: err
                });
            }
            if (!PKey) {
                return res.status(404).json({
                    message: 'No such PKey'
                });
            }

            PKey.password = req.body.password ? req.body.password : PKey.password;
			PKey.userid = req.body.userid ? req.body.userid : PKey.userid;
			PKey.id = req.body.id ? req.body.id : PKey.id;
			
            PKey.save(function (err, PKey) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating PKey.',
                        error: err
                    });
                }

                return res.json(PKey);
            });
        });
    },

    /**
     * PKeyController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        PKeyModel.findOneAndRemove({id:id}, function (err, PKey) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the PKey.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    clean:function(req,res)
    {
        PKeyModel.remove({}, function (err, Note) {
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
