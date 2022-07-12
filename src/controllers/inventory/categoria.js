const Categoria = require('../../model/inventory/Categoria');


exports.getAll = async (req, res) => {
    const categoria = await Categoria.find({});
    res.send(categoria);
}


exports.getByName = async (req, res) => {
    const categoria = await Categoria.find({ nombre: { $regex: req.params.name, $options: 'i' } });
    res.send(categoria);
}

exports.create = async (req, res) => {
    const categoria = await Categoria.find({ nombre: req.body.nombre });
    if (categoria.length > 0) {
        res.status(500).send({
            message: "Categoria already exists."
        });
    } else {
        const newCategoria = new Categoria({
            nombre: req.body.nombre
        });
        await newCategoria.save();
        res.send(newCategoria);
    }
}


exports.update = async (req, res) => {
    const categoria = await Categoria.findByIdAndUpdate(req.params.id, {
        nombre: req.body.nombre
    }, { new: true });
    res.send(categoria);
}

exports.delete = async (req, res) => {
    await Categoria.findByIdAndDelete(req.params.id);
    res.send({ message: "Categoria deleted successfully." });
}


