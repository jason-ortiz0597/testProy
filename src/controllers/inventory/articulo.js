const Articulo = require('../../model/inventory/articulo');


exports.getAll = async (req, res) => {
    const articulo = await Articulo.find({}).populate('categoria', { nombre: 1 }).populate('tipo', { nombre: 1 });
    res.send(articulo);
}

exports.getByName = async (req, res) => {
    const articulo = await Articulo.find({ nombre: { $regex: req.params.name, $options: 'i' } });
    res.send(articulo);
}

exports.create = async (req, res) => {
    const { nombre, unidad , abreviacion } = req.body;
    const articulo = new Articulo({ nombre, unidad, abreviacion });
    await articulo.save();
    res.send(articulo);
}

exports.update = async (req, res) => {
    const { nombre, unidad, abreviacion } = req.body;
    const articulo = await Articulo.findByIdAndUpdate(req.params.id, { nombre, unidad, abreviacion });
    res.send(articulo);
}

exports.delete = async (req, res) => {
    await Articulo.findByIdAndDelete(req.params.id);
    res.send({ message: "Articulo deleted successfully." });
}

exports.assignArticulo = async (req, res) => {
    const { id } = req.params;
    const { categoria } = req.body;
    const {tipo} = req.body;
    const articulo = await Articulo.findByIdAndUpdate(id, { $push: { categoria, tipo } });
    res.send(articulo);
}


exports.removeArticulo = async (req, res) => {
    const { id } = req.params;
    const { categoria } = req.body;
    const {tipo} = req.body;
    const articulo = await Articulo.findByIdAndUpdate(id, { $pull: { categoria, tipo } });
    res.send(articulo);
}