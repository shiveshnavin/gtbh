var GenricUserModel = require('../models/GenricUserModel.js');

/**
 * GenricUserController.js
 *
 * @description :: Server-side logic for managing GenricUsers.
 */
module.exports = {

    GenricUserModel:GenricUserModel,
    /**
     * GenricUserController.list()
     */
    list: function (req, res) {
        GenricUserModel.find(function (err, GenricUsers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting GenricUser.',
                    error: err
                });
            }
            return res.json(GenricUsers);
        });
    },

    /**
     * GenricUserController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        GenricUserModel.findOne({id: id}, function (err, GenricUser) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting GenricUser.',
                    error: err
                });
            }
            if (!GenricUser) {
                return res.status(404).json({
                    message: 'No such GenricUser'
                });
            }
            return res.json(GenricUser);
        });
    },

    /**
     * GenricUserController.create()
     */
    create: function (req, res) {
        var GenricUser = new GenricUserModel({
			name : req.body.name,
			id : req.body.id,
			gender : req.body.gender,
			married : req.body.married,
			occupation : req.body.occupation,
			phone : req.body.phone,
			age : req.body.age,
			type : req.body.type

        });

        GenricUser.save(function (err, GenricUser) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating GenricUser',
                    error: err
                });
            }
            return res.status(201).json(GenricUser);
        });
    },

    /**
     * GenricUserController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        GenricUserModel.findOne({id: id}, function (err, GenricUser) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting GenricUser',
                    error: err
                });
            }
            if (!GenricUser) {
                return res.status(404).json({
                    message: 'No such GenricUser'
                });
            }

            GenricUser.name = req.body.name ? req.body.name : GenricUser.name;
			GenricUser.id = req.body.id ? req.body.id : GenricUser.id;
			GenricUser.gender = req.body.gender ? req.body.gender : GenricUser.gender;
			GenricUser.married = req.body.married ? req.body.married : GenricUser.married;
			GenricUser.occupation = req.body.occupation ? req.body.occupation : GenricUser.occupation;
			GenricUser.phone = req.body.phone ? req.body.phone : GenricUser.phone;
			GenricUser.age = req.body.age ? req.body.age : GenricUser.age;
			GenricUser.type = req.body.type ? req.body.type : GenricUser.type;
			
            GenricUser.save(function (err, GenricUser) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating GenricUser.',
                        error: err
                    });
                }

                return res.json(GenricUser);
            });
        });
    },

    /**
     * GenricUserController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        GenricUserModel.findOneAndRemove({id: id}, function (err, GenricUser) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the GenricUser.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
    clean:function(req,res)
    {
        GenricUserModel.remove({}, function (err, Note) {
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
