const mongoose = require('mongoose');

// Definimos el esquema del usuario
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true, // evitar emails repetidos
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'http://image.com/avatar.png'
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true, // agrega createdAt y updatedAt
    versionKey: false // elimina el campo __v
});

// Exportamos el modelo
module.exports = mongoose.model('Users', UserSchema); // usa colección "Users"