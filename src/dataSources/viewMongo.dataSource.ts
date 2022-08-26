import { MongoClient } from "mongodb";
import View from "../core/entities/View";
import ViewRepository from "../core/repositories/view.repository";

class ViewMongo implements ViewRepository {

    public async saveViewInRepository(view: View): Promise<boolean> {
        const collection = await this.getCollection();
        collection.insertOne(view, function(err) {
            if (err) {return false};
            return true;
          });
        return false;
    }

    /// COllection per request
    private async getCollection() {
        const url = 'mongodb://localhost:27017';
        const client = await MongoClient.connect(url, {});

        const db = client.db('netflix');
        return db.collection('view');
    }

}

export default ViewMongo