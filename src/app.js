import cluster from 'cluster';
import CPUs from 'os';

import { ServerService, DatabaseService } from "./services/index.js";
import { MODE } from './services/ServerServices/utils/index.js';
import log4js from './services/ServerServices/logger/config.js';

try {
    if(MODE === 'CLUSTER' && cluster.isPrimary){
        for(let i = 0; i < CPUs.cpus().length ;i++){
            cluster.fork();
        }
    } else {
        DatabaseService.init();
        ServerService.ServerInit();
        ServerService.ServerRoutes();
    }
} catch (error) {
    const loggerError = log4js.getLogger('error');
    loggerError.error(error)
    const loggerInfo = log4js.getLogger('console');
    loggerInfo.error(error)
}