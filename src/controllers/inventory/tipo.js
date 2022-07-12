const Tipo = require('../../model/inventory/Tipo');


exports.getAll = async (req, res) => {
    const tipo = await Tipo.find({}).populate('categoria', { nombre: 1 });
    res.send(tipo);
}

exports.getByName = async (req, res) => {
    const tipo = await Tipo.find({ nombre: { $regex: req.params.nombre, $options: 'i' } });
    res.send(tipo);
}

//create one tipo
exports.create = async (req, res) => {
    const { nombre } = req.body;
    const tipo = new Tipo({ nombre });
    await tipo.save();
    res.send(tipo);
}

//update one tipo
exports.update = async (req, res) => {
    const { nombre } = req.body;
    const tipo = await Tipo.findByIdAndUpdate(req.params.id, { nombre });
    res.send(tipo);
}

//delete one tipo
exports.delete = async (req, res) => {
    await Tipo.findByIdAndRemove(req.params.id);
    res.send('Deleted');
}

exports.assignTipo = async (req, res) => {
    const { id } = req.params;
    const { categoria } = req.body;
    const tipo = await Tipo.findByIdAndUpdate(id, { $push: { categoria } });
    res.send(tipo);
}

exports.removeTipo = async (req, res) => {
    const { id } = req.params;
    const { categoria } = req.body;
    const tipo = await Tipo.findByIdAndUpdate(id, { $pull: { categoria } });
    res.send(tipo);
}