// Archivo principal del proyecto

require("dotenv").config(); //Requiriendo variables de entorno y habilitadolas en cualquier lugar del proyecto.

const express = require("express"); //Requiriendo express.
const routes = require("./routes"); //Requiriendo rutas.
const dbInitialSetup = require("./dbInitialSetup"); //Requiriendo Datos y sincroniza con la informaciòn de ds. (Table plus)
const { json } = require("sequelize"); //---
const APP_PORT = process.env.APP_PORT || 3000; //Requiriendo la variable de entorno o va a al puerto 3000.
const app = express();

// Passport

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// Passport-codigo

app.use(
  session({
    secret: "algunTextoSecreto",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session());
passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = User.findOne({
        where: { email: username },
      });
    } catch (error) {
      return done(error);
    }
  }),
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
app.get("/welcome", function (req, res) {
  if (req.isAuthenticated()) {
    res.send(`Te damos la bienvenida, ${req.user.firstname}`);
  } else {
    res.redirect("/login");
  }
});
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/welcome",
    failureRedirect: "/login",
  }),
);

app.use(express.static("public")); //Ver carpetas public express (css-js-img)
app.use(express.urlencoded({ extended: true })); //Permite usar la info de formularios (req.body)

app.set("view engine", "ejs"); //Configura el motor de vistas

routes(app);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
}); //Configura el puerto
