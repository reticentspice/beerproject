const fs = require("fs").promises;
const { MongoClient } = require("mongodb");

require("dotenv").config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@beerdb.pmiqvcn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function makeList() {
    try {
        console.log("Trying");
        const namesList = await client.db("BeerDB").collection("beers").distinct("beerName");
        console.log(namesList.length);
        const searchArray = JSON.stringify(namesList);
        await fs.writeFile('arrayToSearch.js', searchArray, { encoding: "utf-8" });
    } catch (error) {
        console.error("Got an error trying to write to a file");
    }
}

makeList();