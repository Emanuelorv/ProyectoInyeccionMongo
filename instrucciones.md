##Archivos que se deben de compartir##

ProyectoInyeccionMongo/
├── app/
│   ├── insert.js
│   ├── routes.js
├── config/
│   └── db.js
├── models/
│   └── user.js
├── public/
│   └── style.css
├── views/
│   ├── admin.ejs
│   ├── dashboard.ejs
│   ├── login.ejs
│   ├── register.ejs
├── server.js
├── package.json
├── package-lock.json (opcional)

##Una vez descargado el proyecto de github##
Abre una terminal o consola y entra al proyecto con el nombre que lo tengas, si lo tienes por default tendras que poner:
cd ProyectoInyeccionMongo y abrirlo con code .

##Deberas de instalar##
a. Instalar Node.js
    Descargar e instalar desde: https://nodejs.org/
    Y deberas de verificar en terminal que lo tengas con el comando:
node -v
npm -v

b. "node_modules" se genera automáticamente con npm install.
Esto instalará las siguientes dependencias automáticamente desde package.json:express, mongoose, ejs, body-parser pero en el caso de que no esten activas deberas de poner los siguientes comandos:

    . npm init -y -> genera el package.json
    . npm install express mongoose ejs body-parser
    . Solo necesitas esto si vas a hacer pruebas rápidas de servidores estáticos, no es necesario para Express, instala este:

    npm install -g node-static
Verificar que todo está instalado
Ejecuta lo siguiente:
    . npm list
    . npm install



##Configurar la conexión a la base de datos##
Abre el archivo "config/db.js" y verifica que tenga esta URL de conexión a MongoDB Atlas:

const DB_URI = 'mongodb+srv://student:dPgF0sb0ADBUZHCI@clusterunam.6pxlppf.mongodb.net/my_app_node?retryWrites=true&w=majority&appName=ClusterUNAM';

Ojo: con este ya estaras conectado a la base de datos donde student es su usuario y "dPgF0sb0ADBUZHCI" es su contraseña de MongoDB Atlas

##Ejecutar el servidor local##

1. Para hacerlo en la terminal, en la raiz del proyecto deberas de poner lo siguiente:
npm start

Y deberas ver mensajes de conexion exitosa, en caso de que no, lo mas probable es que hiciste algo o moviste algo que no

2. Abre tu navegador y entra a "http://localhost:3001" y deberas de ver la pantalla de login o registro.

##Pruebas para saber que todo esta correcto##
Haz estas pruebas para asegurar que todo esté correcto:
 . El formulario de registro funciona
 . El login permite acceder
 . El admin puede ver a todos los usuarios
 . MongoDB Atlas recibe los datos
 . No hay errores en consola

##Comentarios extras##

Este codigo en algunas cosas estara algo sucio, ya sea con comentarios que indican que hacen o a que pertenece cada parte del código, o experimentos que hice y no salieron del todo bien y tengo planeado en un futuro volverlo a intentar. Sientete en la libertad de borrarlo si lo sientes incomodo o sucio.

##Tips##
a. Uso de nodemon para desarrollo, instálalo globalmente una sola vez:
npm install -g nodemon

Y luego puedes correr el servidor con:
nodemon server.js

Este reinicia el servidor automáticamente al guardar cambios.

##Asegurate de ...##

    . Tener Node.js correctamente instalado
    . Tener conexión a internet
    . Verificar que la URL de MongoDB sea válida