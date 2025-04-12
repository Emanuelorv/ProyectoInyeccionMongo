/*const { request } = require("express"); //cacho los valores del request armo el arreglo

request
var user = {
    name: 'a',//esto debera de ser personalizable segun lo recibido de register.ejs
    email: email, //esto debera de ser personalizable segun lo recibido de register.ejs
    password: //esto debera de ser personalizable segun lo recibido de register.ejs
}

conexion.collection('Users').insert(user);*/
const User = require('../models/user'); // Importa el modelo de Mongoose

module.exports = async (req, res) => {
    // Obtenemos los datos del formulario usando req.body
    const { name, email, password } = req.body;

    // Creamos el objeto usuario
    const user = {
        name,
        email,
        password
    };

    try {
        // Insertamos el usuario en MongoDB usando el modelo Mongoose
        const newUser = new User(user);
        await newUser.save();

        res.redirect('/login?success=true');
    } catch (error) {
        console.error('❌ Error al registrar usuario:', error.message);
        res.status(500).send('Error al registrar usuario');
    }
};  