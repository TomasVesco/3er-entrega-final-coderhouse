import cluster from 'cluster';
import CPUs from 'os';

import { ServerService, DatabaseService } from "./services/index.js";
import { MODE } from './services/ServerServices/utils/index.js';

if(MODE === 'CLUSTER' && cluster.isPrimary){
    for(let i = 0; i < CPUs.cpus().length; i++){
        cluster.fork(() => {
            for(let i = 0; i < CPUs.cpus().length; i++){
                DatabaseService.init();
                ServerService.ServerInit();
                ServerService.ServerRoutes();
            }
        });
    }
} else {
    DatabaseService.init();
    ServerService.ServerInit();
    ServerService.ServerRoutes();
}