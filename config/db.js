const mongoose = require('mongoose');

// URL de conexión a MongoDB Atlas
const DB_URI = 'mongodb+srv://student:dPgF0sb0ADBUZHCI@clusterunam.6pxlppf.mongodb.net/my_app_node?retryWrites=true&w=majority&appName=ClusterUNAM';
var conexion 
module.exports = async () => {
    try {
        await mongoose.connect(DB_URI, {
            //keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        conexion = mongoose.connection;
        console.log('Conexión exitosa a MongoDB Atlas.');
    } catch (err) {
        console.error('Error al conectar con MongoDB Atlas:', err.message);
        process.exit(1); // Finaliza el programa si falla la conexión
    }
};
