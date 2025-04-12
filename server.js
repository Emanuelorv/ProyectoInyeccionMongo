const express = require('express');
const initDB = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const port = 3001;

// Middlewares
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

// EJS y carpeta de vistas/estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use(require('./app/routes'));

// Conexión + inicio de servidor
(async () => {
    await initDB();

    app.listen(port, () => {
        console.log(`Servidor web montado correctamente.`);
        console.log(`Accede a la app en: http://localhost:${port}`);
    });
})();

const insertHandler = require('./app/insert');

app.post('/insert', insertHandler);
