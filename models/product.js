var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Author  =  require ('./author');

var schema = new Schema ({
    title : {type: String, required:true},
    author : {type: String, required:true},
    genre : {type: String, required:true},
    thumbnail : {type: String, required:true},
    description : {type: String, required:true},
    price : {type: Number, required:true}
});


module.exports = mongoose.model('Product',schema);
