const express = require('express');
const categoryRoute = require('./routes/category');
const subCategoryRoute = require('./routes/subCategory');

// database
require('../database.js');

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/category', categoryRoute);
app.use('/api/subCategory', subCategoryRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);