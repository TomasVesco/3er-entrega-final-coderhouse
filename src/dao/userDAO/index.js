import { DAO } from "../DAO/index.js";

import { usersAtlasDB } from '../../models/index.js';

class userDAO extends DAO {
    constructor(){
        super(usersAtlasDB);
    }
}

export { userDAO };