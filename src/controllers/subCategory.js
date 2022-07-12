
const subCategory = require('../model/subCategory');


//get all subCategory polulate
exports.getAll = (req, res) => {
    subCategory.find({}).populate('category').exec((err, subCategory) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving subCategory."
            });
        } else {
            res.send(subCategory);
        }
    });
}



//create subcategory
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a subCategory
    const subCategory = new subCategory({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category
    });

    // Save subCategory in the database
    subCategory.save()
        .then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the subCategory."
            });
        });
}

//delete one subCategory
exports.delete = (req, res) => {
    subCategory.deleteOne({ _id: req.params.id }, (err, subCategory) => {
        if (err) {
            res.send(err);
        }
        res.json(subCategory);
    }).populate('Category');
}
