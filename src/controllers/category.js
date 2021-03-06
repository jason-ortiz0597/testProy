

const Category = require('../model/category');

//* Get all categories
exports. getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.json({ message: error });
    }
}

exports. getByName = async (req, res) => {
    try {
        const category = await Category.findOne({ name: req.params.name });
        res.json(category);
    } catch (error) {
        res.json({ message: error });
    }
}

exports. create = async (req, res) => {
    try {
        //if existes a category with the same name
        const category = await Category.findOne({ name: req.body.name });
        if (category) {
            return res.status(400).json({ message: 'Category already exists' });
        }
        const newCategory = new Category({
            name: req.body.name,
            description: req.body.description
        });
        const savedCategory = await newCategory.save();
        res.json(savedCategory);
    } catch (error) {
        res.json({ message: error });
    }
}


        

exports. update = async (req, res) => {
    try {
        const category = await Category.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.json({category, message: 'Category updated successfully'});
    } catch (error) {
        res.json({ message: error });
    }
}

exports. delete = async (req, res) => {
    try {
        await Category.remove({ _id: req.params.id });
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.json({ message: error });
    }
}
