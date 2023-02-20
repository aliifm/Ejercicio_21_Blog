// Archivo principal del proyecto

require("dotenv").config(); //Requiriendo variables de entorno y habilitadolas en cualquier lugar del proyecto.

const express = require("express"); //Requiriendo express.
const routes = require("./routes"); //Requiriendo rutas.
const dbInitialSetup = require("./dbInitialSetup"); //Requiriendo Datos y sincroniza con la informaciòn de ds. (Table plus)
const { json } = require("sequelize"); //---
const APP_PORT = process.env.APP_PORT || 3000; //Requiriendo la variable de entorno o va a al puerto 3000.
const app = express();
app.use(express.json());
const passport = require("./passport/passport");
passport(app);
app.use(express.static("public")); //Ver carpetas public express (css-js-img)
app.use(express.urlencoded({ extended: true })); //Permite usar la info de formularios (req.body)

app.set("view engine", "ejs"); //Configura el motor de vistas

routes(app);

//dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
}); //Configura el puerto
