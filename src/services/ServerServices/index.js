import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from 'connect-mongo';

import { onAuthorizationHeaders } from "../../middlewares/index.js";
import { config } from "../../config/index.js";
import { home } from "./routers/index.js";
import { signUp } from "./routers/index.js";
import { logout } from "./routers/index.js";

const app = express();

const ServerInit = () => {
  app.listen(config.PORT, () =>
  console.log(`Server running on port ${config.PORT}`)
  );
  app.use(onAuthorizationHeaders);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

const ServerSession = () => {
  app.use(cookieParser());
  app.use(session({
    store: MongoStore.create({
        mongoUrl: config.DBAtlas,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 600
    }),
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));
}

// const PassportLocal = () => {
//   passport.use(
//     "login",
//     new LocalStrategy(
//       {
//         usernameField: "email",
//         passwordField: "password",
//         passReqToCallback: true,
//       },
//       async (req, email, password, done) => {
//       try {
//         const AllUsers = await Users.getAll();
//         const user = AllUsers.find(e => e.email === email);
//         if(!user) {
//           done(null, false);
//         } else {
//           const passwordCorrect = await bcrypt.compare(password, user.password);
//           if(!passwordCorrect){
//             done(null, false);
//           } else {
//             done(null, user);
//           }
//         }
//       } catch (error) {
//         done(error);
//       }
//     }));

//   passport.serializeUser((user, done) => {
//     done(null, user.email);
//   });

//   passport.deserializeUser(async(email, done) => {
//     const AllUsers = await Users.getAll();
//     const user = AllUsers.find(e => e.email === email);
//     done(null, user);
//   });

//   app.use(passport.initialize());
//   app.use(passport.session());
// }

const ServerRoutes = () => {
  app.use('/api/home', home),
  app.use('/api/signup', signUp),
  app.use('/api/logout', logout)
  // app.post('/api/login', passport.authenticate('login'), (req, res) => {
  //   res.send('Login success');
  // });
  // app.use('/api/login', login);
}

const ServerService = {
  ServerInit,
  ServerSession,
  ServerRoutes,
  // PassportLocal
};

export { ServerService };