import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://window_ecosystem:MD4X6Mxrgx0k1LZ3@cluster0.lvgxy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});