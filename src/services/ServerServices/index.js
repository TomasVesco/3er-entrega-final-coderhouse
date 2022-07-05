import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from 'connect-mongo';

import { onAuthorizationHeaders } from "../../middlewares/index.js";
import { config } from "../../config/index.js";
import { home } from "./routers/index.js";
import { signUp } from "./routers/index.js";
import { logout } from "./routers/index.js";
import { login } from "./routers/index.js";
import { passport } from '../Passport/index.js';

const app = express();

const ServerInit = () => {
  app.listen(config.PORT, () =>
  console.log(`Server running on port ${config.PORT}`)
  );
  app.use(onAuthorizationHeaders);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
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
  app.use(passport.initialize());
  app.use(passport.session());
};

const ServerRoutes = () => {
  app.use('/api/home', home),
  app.use('/api/signup', signUp),
  app.use('/api/logout', logout),
  app.use('/api/login', login)
}

const ServerService = {
  ServerInit,
  ServerRoutes
}

export { ServerService };