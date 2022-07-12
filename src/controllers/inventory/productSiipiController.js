const productSiipi = require('../../model/inventory/productSiipi');

exports.getAll = (req, res) => {
    productSiipi.find({})
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        }
        );
}

//get product by name lowercase or uppercase
exports.getByName = (req, res) => {
    productSiipi.find({ name: { $regex: req.params.name, $options: 'i' } })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        }
        );
}

//create a new product not repeatd
exports.create = (req, res) => {
    productSiipi.find({ name: req.body.name })
        .then(data => {
            if (data.length > 0) {
                res.status(500).send({
                    message: "Product already exists."
                });
            } else {
                productSiipi.create(req.body)
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the Product."
                        });
                    }
                    );
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        }
        );
}

exports.update = (req, res) => {
    productSiipi.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        }
        );
}

exports.delete = (req, res) => {
    productSiipi.findByIdAndRemove(req.params.id)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        }
        );
}

//get product by code
exports.getByCode = (req, res) => {
    productSiipi.find({ code: req.params.code })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        }
        );
}

//get product by category
exports.getByCategory = (req, res) => {
    productSiipi.find({ category: req.params.category })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        }
        );
}



