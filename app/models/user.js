module.exports = mongoose => {



var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    email: { type: String, unique: true, lowercase: true},
    password: String,
    username: String,
    gender: { 
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    phone: Number 

},
    { timestamps: true }
);

schema.method("toJSON", function () {
    const{__v, _id, ...object } = this.toObject();
    object.id = id;
    return object;

})

const User = mongoose.model("user", schema);
return User;

module.exports = mongoose.model('User', userSchema);
};