class BaseDao {
    constructor(model){
        this.collection = model;
    }
    async getAll(){
        try{
            return await this.collection.find();
        } catch(err) {
            return err;
        }
    }
}

export { BaseDao }