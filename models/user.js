import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const Schema = mongoose.Schema;


var UserSchema = new Schema({
    username : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now },
    firstName : {
        type: String,
        default: ""
    },
    lastName : {
        type: String,
        default: ""
    },
    cart : {
        addedIds: [String],
        quantityById : [Schema.Types.Mixed]
    }
})

UserSchema.pre('save', function(next) {
    if(this.password) {
        var salt = bcrypt.genSaltSync(10)
        this.password  = bcrypt.hashSync(this.password, salt)
    }
    next()
})


module.exports = mongoose.model('User', UserSchema);

