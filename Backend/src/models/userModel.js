const {Schema, model} = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, "Enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Enter a password"],
    minlength: [4, "Password must be at least 4 characters long"]
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
  }
}, {collection: 'Users'});

userSchema.post("save", function (doc, next) {
    console.log("New user was created and saved", doc);
    next();
  }
);

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  }
);

const Users = model('Users', userSchema);

module.exports = Users;
