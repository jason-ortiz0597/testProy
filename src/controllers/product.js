const product = require('../model/product');

exports.getAll = (req, res) => {
    product.find({})
        .populate('category')
        .exec((err, product) => {
            if (err) {
                res.send(err);
            }
            res.json(product);
        }).populate('subCategory');
}

exports.create = (req, res) => {
    const product = new product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        subCategory: req.body.subCategory
    });
    product.save((err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    }).populate('category').populate('subCategory');
}

exports.getByName = (req, res) => {
    product.find({ name: req.params.name })
        .populate('category')
        .exec((err, product) => {
            if (err) {
                res.send(err);
            }
            res.json(product);
        }).populate('subCategory');
}

exports.update = (req, res) => {
    product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    }).populate('category').populate('subCategory');
}

exports.delete = (req, res) => {
    product.remove({ _id: req.params.id }, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    }).populate('category').populate('subCategory');
}
