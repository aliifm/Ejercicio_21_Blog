// Archivo principal del proyecto

require("dotenv").config(); //Requiriendo variables de entorno y habilitadolas en cualquier lugar del proyecto.

const express = require("express"); //Requiriendo express.
const routes = require("./routes"); //Requiriendo rutas.
const dbInitialSetup = require("./dbInitialSetup"); //Requiriendo Datos y sincroniza con la informaciòn de ds. (Table plus)
const { json } = require("sequelize"); //---
const APP_PORT = process.env.APP_PORT || 3000; //Requiriendo la variable de entorno o va a al puerto 3000.
const app = express();
const bcrypt = require("bcryptjs");


// Passport
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("./models");
const compartirAVistas = require("./middlewares/compartirAVistas");
const messageFlash = require("./middlewares/messageFlash")


// Flash
const flash = require('express-flash');

// Passport-codigo

app.use(
  session({
    secret: "algunTextoSecreto",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(flash());

app.use(passport.session());

passport.use(
  new LocalStrategy({ usernameField: "email" }, async (email, password, cb) => {
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        console.log("Nombre de usuario no existe.");
        return cb(null, false, { message: "Credenciales incorrectas." });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        console.log("La contraseña es inválida.");
        return cb(null, false, { message: "Credenciales incorrectas." });
      }
      console.log("Credenciales verificadas correctamente");
      return cb(null, user);
    } catch (error) {
      cb(error);
    }
  }),
);

// passport.use(
//   new LocalStrategy(async function (username, password, done) {
//     try {
//       const user = User.findOne({
//         where: { email: username },
//       });
//     } catch (error) {
//       return done(error);
//     }
//   }),
// );
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findByPk(id);
    cb(null, user); // Usuario queda disponible en req.user.
  } catch (err) {
    cb(err, user);
  }
});

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(async function (id, done) {
//   try {
//     const user = await User.findByPk(id);
//     done(null, user);
//   } catch (error) {
//     done(error);
//   }
// });
app.use(compartirAVistas);
app.use(messageFlash);
app.use(express.static("public")); //Ver carpetas public express (css-js-img)
app.use(express.urlencoded({ extended: true })); //Permite usar la info de formularios (req.body)

app.set("view engine", "ejs"); //Configura el motor de vistas

routes(app);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
}); //Configura el puerto
