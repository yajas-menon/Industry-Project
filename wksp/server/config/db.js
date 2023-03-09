const { MongoClient } = require('mongodb');
const { MONGO_URI, DB_NAME } = require('../constants')

const db = (async () => {
    const yourConnectionURI = MONGO_URI
    const client = new MongoClient(yourConnectionURI)
    try {
        await client.connect();
        console.log("Connected to MongoDB success");
        return client.db(DB_NAME)
    } catch (err) {
        console.log("Some error occured while cconnecting to DB", err)
    }
})();

module.exports = db