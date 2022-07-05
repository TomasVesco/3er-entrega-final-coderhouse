import mongoose from 'mongoose';

import { config } from '../../config/index.js';

const URL = config.DBAtlas;

const init = async() => {
    try{
        await mongoose.connect(URL);
    }catch(err){
        console.log(err);
    }
}
    
const DatabaseService = {
    init,
};

export { DatabaseService };