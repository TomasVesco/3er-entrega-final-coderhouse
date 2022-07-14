import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from 'connect-mongo';

import { onAuthorizationHeaders } from "../../middlewares/index.js";
import { passport } from '../Passport/index.js';
import log4js from "./logger/config.js";
import { config } from "../../config/index.js";
import { home } from "./routers/index.js";
import { signUp } from "./routers/index.js";
import { logout } from "./routers/index.js";
import { login } from "./routers/index.js";
import { info } from './routers/index.js';
import { products } from "./routers/index.js";
import { cart } from "./routers/index.js";
import { payment } from "./routers/index.js";

const app = express();

const ServerInit = () => {
  const loggerInfo = log4js.getLogger('console');
  app.listen(config.PORT, () =>
    loggerInfo.info(`Server running on port ${config.PORT}`)
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
  app.use('/uploads', express.static('uploads'));
};

const ServerRoutes = () => {
  app.use('/api/home', home),
  app.use('/api/signup', signUp),
  app.use('/api/logout', logout),
  app.use('/api/login', login),
  app.use('/api/products', products),
  app.use('/api/cart', cart),
  app.use('/api/info', info),
  app.use('/api/payment', payment);
}

const ServerService = {
  ServerInit,
  ServerRoutes
}

export { ServerService };