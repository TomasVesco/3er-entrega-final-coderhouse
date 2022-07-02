import express from "express";
import { config } from "../../config/index.js";
import { onAuthorizationHeaders } from "../../middlewares/index.js";

const app = express();

app.use(onAuthorizationHeaders);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const init = () => {
  app.listen(config.PORT, () =>
    console.log(`Server running on port ${config.PORT}`)
  );
};

const ServerService = {
  init,
};

export { ServerService };