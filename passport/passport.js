// Passport

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const messageFlash = require("../middlewares/messageFlash");

module.exports = (app) => {
  app.use(
    session({
      secret: "algunTextoSecreto",
      resave: false,
      saveUninitialized: false,
    }),
  );

  const flash = require("express-flash");
  app.use(flash());
  app.use(passport.session());
  app.use(messageFlash);

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
};
