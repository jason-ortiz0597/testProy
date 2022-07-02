
const subCategory = require('../model/subCategory');


//get all subCategory with populate category
exports.getAll = (req, res) => {
    subCategory.find({})
        .populate('category')
        .exec((err, subCategory) => {
            if (err) {
                res.send(err);
            }
            res.json(subCategory);
        });
}



//create subCategory with category populate
exports.create = (req, res) => {
    const subCategory = new subCategory({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category
    });
    subCategory.save((err, subCategory) => {
        if (err) {
            res.send(err);
        }
        res.json(subCategory);
    }).populate('category');
}
