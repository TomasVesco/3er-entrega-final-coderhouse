import { DAO } from "../DAO/index.js";

import { productAtlasDB } from '../../models/index.js';

class productDAO extends DAO {
    constructor(){
        super(productAtlasDB);
    }
}

export { productDAO };