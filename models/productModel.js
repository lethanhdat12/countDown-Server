const mongoose = require('../config/connectDB');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name_P :{
        type : String,
    },
    prices_P:{
        type : Number,
    },
    quatity : {
        type : Number,
    },
    isSale :{
        type : Boolean,
    },
    timeEnd : {
        type : Number,
    },
    img_P : {
            type : Object,
    }
});

const productModel = mongoose.model('product',ProductSchema);
module.exports = productModel;

