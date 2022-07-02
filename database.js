const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}
).catch((err) => {
    console.log(err);
}
);