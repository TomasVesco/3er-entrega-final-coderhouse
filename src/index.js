import { ServerService, DatabaseService } from "./services/index.js";

DatabaseService.init();
ServerService.ServerInit();
ServerService.ServerRoutes();