const express = require('express');
const categoryRoute = require('./routes/category');
const subCategoryRoute = require('./routes/subCategory');
const productRoute = require('./routes/product');
const productSiipi = require('./routes/inventory/productSiipi');

const categoriaSiipi = require('./routes/inventory/categoria');
const tipoSiipi = require('./routes/inventory/tipo');
const articuloSiipi = require('./routes/inventory/articulo');

//+=========================================================+
const categoriaRutas = require('./routes/ProductoRoutes/Categoria2');
const subcategoriaRutas = require('./routes/ProductoRoutes/Subcategoria2');
const claseRutas = require('./routes/ProductoRoutes/Clase2');
const productoRutas = require('./routes/ProductoRoutes/Producto2');



// database
require('../database.js');

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//!------------------------------------------------------
app.use('/api/category', categoryRoute);
app.use('/api/subCategory', subCategoryRoute);
app.use('/api/product', productRoute);
app.use('/api/inventory/productSiipi', productSiipi);
//!------------------------------------------------------

//?=====================================================
app.use('/api/inventory/categoriaSiipi', categoriaSiipi);
app.use('/api/inventory/tipoSiipi', tipoSiipi);
app.use('/api/inventory/articuloSiipi', articuloSiipi);
//?=====================================================

//*=====================================================
app.use('/api/categoria', categoriaRutas);
app.use('/api/subcategoria', subcategoriaRutas);
app.use('/api/clase', claseRutas);
app.use('/api/producto', productoRutas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);