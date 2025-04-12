const express = require('express');
const router = express.Router();
const User = require('../models/user');
const insertRoute = require('./insert');

// Ruta principal
router.get('/', (req, res) => {
    res.redirect('/login');
});

// Mostrar formulario de login
router.get('/login', (req, res) => {
    const success = req.query.success;
    res.render('login', { success });
});

// Mostrar formulario de registro
router.get('/register', (req, res) => {
    res.render('register');
});

// Procesar login (con vulnerabilidad de NoSQL Injection)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email, password: password }); // VULNERABILIDAD

        if (user) {
            if (user.email === "admin@admin.com") {
                const allUsers = await User.find({});
                return res.render('admin', { users: allUsers });
            }
            return res.render('dashboard', { user });
        } else {
            return res.send('Usuario no encontrado o credenciales inválidas');
        }
    } catch (error) {
        return res.status(500).send('Error interno del servidor');
    }
});

// Procesar registro (opcional, si no usas insert.js)
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        res.status(500).send('Error al registrar usuario');
    }
});

// Ruta para insertar usuario desde insert.js
router.post('/insert', insertRoute);

module.exports = router;
