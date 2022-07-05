import bcrypt from 'bcrypt';

class DAO {
    constructor(model){
        this.collection = model;
    }
    async getAll(){
        try{
            return await this.collection.find({});
        } catch(error) {
            return error;
        }
    }
    async save( obj ){
        try {
            const test = new this.collection(obj);
            return await test.save();
            // return await this.collection.insertMany( obj );
        } catch (error) {
            return error;
        }
    }
}

export { DAO };