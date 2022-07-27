class DAO {
    constructor(model){
        if(DAO.instance == null){
            this.collection = model;
            DAO.instance = this;
        }
        return DAO.instance;
    }
    async getAll(){
        try{
            return await this.collection.find({});
        } catch(error){
            return error;
        }
    }
    async save(obj){
        try {
            const test = new this.collection(obj);
            return await test.save();
        } catch(error){
            return error;
        }
    }
    async find(props){
        try {
            return await this.collection.findOne({...props});
        } catch(error){
            return error;
        }
    }
    async deleteByID(id){
        try {
            return await this.collection.deleteOne({'_id': id});
        } catch(error){
            return error;
        }
    }
}

export { DAO };