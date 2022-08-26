import { MongoClient } from "mongodb";
import Show from "../core/entities/Show";
import ShowRepository from "../core/repositories/show.repository";

class ShowMongo implements ShowRepository {
    
    public async getById(id: string): Promise<Show> {
        const collection = await this.getCollection();
        const show: Show = (await collection.findOne({ show_id: id })) as Show;
        return show;
    }
    
    /// COllection per request
    private async getCollection() {
        const url = 'mongodb://localhost:27017';
        const client = await MongoClient.connect(url, {});

        const db = client.db('netflix');
        return db.collection('show');
    }
}

export default ShowMongo