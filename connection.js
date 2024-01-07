const { MongoClient } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src"));
app.use(express.static("img"));
app.use(express.static("dist"));
app.use(cors());

app.get("/", (req, res, next) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\index.html");
});

app.get('/results', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\results.html");
});

app.get('/report', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\report.html");
});

app.get('/getMatches', (req, res) => {
    res.json({ sortedMatches });
});

//The request is coming through fine and seems to be correctly formatted. It looks as if the problem is with accessing
//the DB, which isn't returning any results.

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@beerdb.pmiqvcn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
/*let collection;
app.get("/search", async (request, response) => {
    try {
        let result = await collection.aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `${request.query.query}`,
                        "path": "beerName",
                        "fuzzy": {
                            "maxEdits": 2,
                            "prefixLength": 3
                        }
                    }
                }
            }
        ]).toArray();
        response.send(result);
        console.log("Search GET: " + result);
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});

app.get("/get/:id", async (request, response) => {
    try {
        console.log("Getting ID");
        let result = await collection.findOne({ "_id": ObjectID(request.params.id) });
        response.send(result);
        console.log("ID get result: " + result);
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});*/

let requiredItems;

let reallyImportant;
let kindaImportant;
let notSoImportant;
let numberForDivisor;
let sortedMatches;

//This function collects information from the form.
function getInfo(req) {
    numberForDivisor = 0;
    let newBeerFlavours = [];
    let newBeerType = null;
    let newPreciseBeerType = null;
    let newBeerABVGrade = null;
    let newBrewery = null;
    let newBeerCountry = null;
    let newIngredients = null;
    let newIsVegan = null;
    let newIsGF = null;
    let newIsLowCal = null;
    let newIsAlcoholFree = null;

    if (req.body.vegan === "isVegan") {
        newIsVegan = "Yes";
        numberForDivisor += 1;
    }

    if (req.body.glutenFree === "isGF") {
        numberForDivisor += 1;
        newIsGF = "Yes";
    }

    if (req.body.lowCal === "isLowCal") {
        numberForDivisor += 1;
        newIsLowCal = "Yes";
    }

    if (req.body.alcoholFree === "isAlcoholFree") {
        numberForDivisor += 1;
        newIsAlcoholFree = "Yes";
    }

    if (req.body["beerType"] !== "Select an option") {
        newBeerType = req.body["beerType"];
        numberForDivisor += 1;
    }

    if (req.body["beerFlavours"] !== "Select an option") {
        newBeerFlavours.push(req.body["beerFlavours"]);
        numberForDivisor += 1;
    }

    if (req.body["beerFlavours2"] !== "Select an option") {
        if (req.body["beerFlavours2"]) {
            newBeerFlavours.push(req.body["beerFlavours2"])
            numberForDivisor += 1;
        }
    }
    if (req.body["beerFlavours3"] !== "Select an option") {
        if (req.body["beerFlavours3"]) {
            newBeerFlavours.push(req.body["beerFlavours3"])
            numberForDivisor += 1;
        }
    }

    if (req.body["beerABVGrade"] !== "Select an option") {
        newBeerABVGrade = req.body["beerABVGrade"];
        numberForDivisor += 1;
    }

    if (req.body["beerCountry"] !== "Select an option") {
        newBeerCountry = req.body["beerCountry"];
        numberForDivisor += 1;
    }

    let favouriteBeer = new Beer(null, newBeerType, newPreciseBeerType, newBeerFlavours, null, newBeerABVGrade, newBrewery, newBeerCountry,
        null, null, newIngredients, null, newIsVegan, newIsGF, newIsLowCal, newIsAlcoholFree, 1000);
    for (let i = 0; i < favouriteBeer.length; i++) {
        if (favouriteBeer[i] === "Select an option") {
            favouriteBeer[i] = null;
        }
    }

    return (favouriteBeer);
}

//This function calculates the info for the required elements to add them to a list to be compared against the DB.
function getRequired(req, favouriteBeer) {
    requiredItems = [];
    requiredFlavours = [];
    if (req.body.vegan === "isVegan") {
        requiredItems.push({ isVegan: favouriteBeer.isVegan });
        numberForDivisor += 9;
    }

    if (req.body.glutenFree === "isGF") {
        requiredItems.push({ isGF: favouriteBeer.isGF });
        numberForDivisor += 9;
    }

    if (req.body.lowCal === "isLowCal") {
        requiredItems.push({ isLowCal: favouriteBeer.isLowCal });
        numberForDivisor += 9;
    }

    if (req.body.alcoholFree === "isAlcoholFree") {
        requiredItems.push({ isAlcoholFree: favouriteBeer.isAlcoholFree });
        numberForDivisor += 9;
    }

    if (req.body["beerTypeReq"] && req.body["beerTypeReq"] === "required") {
        requiredItems.push({ beerType: favouriteBeer.beerType });
        numberForDivisor += 9;
    }

    if (req.body["beerABVReq"] && req.body["beerABVReq"] === "required") {
        requiredItems.push({ beerABVGrade: favouriteBeer.beerABVGrade });
        numberForDivisor += 9;
    }

    if (req.body["beerCountryReq"] && req.body["beerCountryReq"] === "required") {
        requiredItems.push({ beerCountry: favouriteBeer.beerCountry });
        numberForDivisor += 9;
    }

    if (req.body["beerFlavourReq"] && req.body["beerFlavourReq"] === "required") {
        requiredFlavours.push({ beerFlavours: favouriteBeer.beerFlavours[0] });
        numberForDivisor += 9;
    }

    if (req.body["beerFlavour2Req"] && req.body["beerFlavour2Req"] === "required") {
        requiredFlavours.push({ beerFlavours: favouriteBeer.beerFlavours[1] });
        numberForDivisor += 9;
    }

    if (req.body["beerFlavour3Req"] && req.body["beerFlavour3Req"] === "required") {
        requiredFlavours.push({ beerFlavours: favouriteBeer.beerFlavours[2] });
        numberForDivisor += 9;
    }
    if (requiredFlavours.length !== 0) {
        requiredItems.push([...requiredFlavours]);
    }
    return requiredItems;
}

function getPreferences(req) {

    if (req.body["firstOptionsList"] !== "dontCare") {
        reallyImportant = req.body["firstOptionsList"];
        numberForDivisor += 5;
    }

    if (req.body["secondOptionsList"] !== "dontCare") {
        kindaImportant = req.body["secondOptionsList"];
        numberForDivisor += 3;
    }

    if (req.body["thirdOptionsList"] !== "dontCare") {
        notSoImportant = req.body["thirdOptionsList"];
        numberForDivisor += 2;
    }
}

function Beer(beerName, beerType, preciseBeerType, beerFlavours, beerABV, beerABVGrade, brewery, beerCountry, beerImage,
    beerDesc, beerIngredients, beerURL, isVegan, isGF, isLowCal, isAlcoholFree, matchScore) {
    this.beerName = beerName;
    this.beerType = beerType;
    this.preciseBeerType = preciseBeerType;
    this.beerFlavours = beerFlavours;
    this.beerABV = beerABV;
    this.beerABVGrade = beerABVGrade;
    this.brewery = brewery;
    this.beerCountry = beerCountry;
    this.beerImage = beerImage;
    this.beerDesc = beerDesc;
    this.beerIngredients = beerIngredients;
    this.beerURL = beerURL;
    this.isVegan = isVegan;
    this.isGF = isGF;
    this.isLowCal = isLowCal;
    this.isAlcoholFree = isAlcoholFree;
    this.matchScore = matchScore;
}

async function main(favouriteBeer) {

    try {
        await client.connect();
        console.log("Connected");

        await findBeers(client, favouriteBeer, requiredItems);

    }
    catch (error) {
        console.error(error);
    }
    finally {
        await client.close();
    };
};

async function getRandom() {
    try {
        await client.connect();
        console.log("Connected");

        let mongoOutput = await client.db("BeerDB").collection("beers").aggregate([
            {
                "$sample": {
                    "size": 3
                }
            }
        ]);
        sortedMatches = await mongoOutput.toArray();
        return sortedMatches;

    }
    catch (error) {
        console.error(error);
    }
    finally {
        await client.close();
    };
};

app.post("/submit", async function (req, res) {
    console.log("Click");
    const favouriteBeer = getInfo(req);
    getRequired(req, favouriteBeer);
    getPreferences(req, requiredItems);
    await main(favouriteBeer).catch(console.error);
    res.redirect("/results");
})

app.post("/report", function (req, res) {
    let beerNameToReport = req.query.name;
    res.redirect(`/report?name=${beerNameToReport}`);
})

app.post("/getRandom", async function (req, res) {
    await getRandom();
    res.redirect("/results");
})

app.post("/getSimilar", async function (req, res) {
    requiredItems = [];
    numberForDivisor = 10;
    let queryName = req.body["similarBox"];
    query = { $and: [{ beerName: queryName }] };
    const result = await client.db("BeerDB").collection("beers").find(query);

    if (result) {
        for await (let favouriteBeer of result) {
            favouriteBeer = new Beer(undefined, favouriteBeer.beerType, favouriteBeer.preciseBeerType,
                favouriteBeer.beerFlavours, favouriteBeer.beerABV, favouriteBeer.beerABVGrade, favouriteBeer.brewery,
                favouriteBeer.beerCountry, undefined, undefined, favouriteBeer.beerIngredients,
                undefined, favouriteBeer.isVegan, favouriteBeer.isGF, favouriteBeer.isLowCal,
                favouriteBeer.isAlcoholFree, favouriteBeer.matchScore);
            if (favouriteBeer.isVegan = "No") {
                favouriteBeer.isVegan = undefined
            };
            if (favouriteBeer.isGF = "No") {
                favouriteBeer.isGF = undefined
            };
            if (favouriteBeer.isLowCal = "No") {
                favouriteBeer.isLowCal = undefined
            };
            if (favouriteBeer.isAlcoholFree = "No") {
                favouriteBeer.isAlcoholFree = undefined
            };
            await main(favouriteBeer).catch(console.error);
            res.redirect("/results");
        }
    }
});

async function findBeers(client, favouriteBeer, requiredItems) {
    let query = {};
    sortedMatches = [];
    let potentialMatches = [];
    if (requiredItems.length === 0) {
        query = { $or: [] };

        // Construct the query object based on favouriteBeer properties.
        //instead of $or.
        for (const prop in favouriteBeer) {
            if (favouriteBeer[prop] !== null && prop !== 'matchScore' && favouriteBeer[prop] !== undefined) {
                if (prop === "beerFlavours") {
                    for (let i = 0; i < favouriteBeer.beerFlavours.length; i++) {
                        let modifiedFlavours = favouriteBeer[prop][i];
                        query.$or = query.$or || [];
                        query.$or.push({ [prop]: modifiedFlavours });
                    }
                }
                else {
                    query.$or = query.$or || [];
                    query.$or.push({ [prop]: favouriteBeer[prop] });
                }
            }
        }
    }

    else {
        query = {};
        queryList = [];
        for (const item in requiredItems) {
            for (const [key, value] of Object.entries(requiredItems[item])) {
                if (value !== null && value !== undefined) {
                    if (typeof value === "object") {
                        for (const [key2, value2] of Object.entries(value)) {
                            queryList.push({ [key2]: value2 });
                        }
                    }
                    else {
                        queryList.push({ [key]: value });
                    }
                }
            }
        }
        query = { $and: queryList };
        for (const prop in favouriteBeer) {
            if (favouriteBeer[prop] !== null && prop !== 'matchScore' && favouriteBeer[prop] !== undefined
                && !queryList.some(item => item.hasOwnProperty(prop))) {
                if (prop === "beerFlavours") {
                    for (let i = 0; i < favouriteBeer.beerFlavours.length; i++) {
                        let modifiedFlavours = favouriteBeer[prop][i];
                        query.$or = query.$or || [];
                        query.$or.push({ [prop]: modifiedFlavours });
                    }
                }
                else {
                    query.$or = query.$or || [];
                    query.$or.push({ [prop]: favouriteBeer[prop] });
                }
            }
        }
    }
    console.log(query);
    const result = await client.db("BeerDB").collection("beers").find(query);

    if (result) {
        console.log("Result!");

        for await (const doc of result) {
            doc.matchScore = 0;

            for (let [key, value] of Object.entries(doc)) {
                if (key === "beerFlavours" && value !== null) {
                    for (let i = 0; i < doc["beerFlavours"].length; i++) {
                        for (let j = 0; j < favouriteBeer["beerFlavours"].length; j++) {

                            if (doc["beerFlavours"][i] == favouriteBeer["beerFlavours"][j] && favouriteBeer[key][j] !== null) {
                                for (let k = 0; k < requiredItems.length; k++) {
                                    for (let l = 0; l < requiredItems[k].length; l++) {
                                        if (requiredItems[k][l]["beerFlavours"] == favouriteBeer["beerFlavours"][j]) {
                                            doc.matchScore += 9;
                                        }
                                    }
                                }

                                if (favouriteBeer[key][j] == reallyImportant && reallyImportant !== undefined) {
                                    doc.matchScore += 6;
                                }
                                else if (favouriteBeer[key][j] == kindaImportant && kindaImportant !== undefined) {
                                    doc.matchScore += 4;
                                }
                                else if (favouriteBeer[key][j] == notSoImportant && notSoImportant !== undefined) {
                                    doc.matchScore += 3;
                                }
                                else {
                                    doc.matchScore += 1;
                                }
                            }
                        }
                    }
                }
                else if (value == favouriteBeer[key] && favouriteBeer[key] !== null) {

                    for (let i = 0; i < requiredItems.length; i++) {
                        if (requiredItems[i][key] == favouriteBeer[key] && favouriteBeer[key] !== undefined) {
                            console.log("Item: " + requiredItems[i][key]);
                            doc.matchScore += 9;
                        }
                    }

                    if (favouriteBeer[key] == reallyImportant && reallyImportant !== undefined) {
                        doc.matchScore += 6;
                    }
                    else if (favouriteBeer[key] == kindaImportant && kindaImportant !== undefined) {
                        doc.matchScore += 4;
                    }
                    else if (favouriteBeer[key] == notSoImportant && notSoImportant !== undefined) {
                        doc.matchScore += 3;
                    }
                    else if (favouriteBeer[key] !== undefined) {
                        doc.matchScore += 1;
                    }
                }


            }

            console.log("Required: " + requiredItems);
            doc.matchScore = doc.matchScore / numberForDivisor * 100;
            if (doc.matchScore > 100) {
                doc.matchScore = 99.9;
            }
            potentialMatches.push(doc);
        }
        let sortedMatchesRaw = potentialMatches.sort((a, b) => {
            const scoreDiff = b.matchScore - a.matchScore;
            return scoreDiff !== 0 ? scoreDiff : Math.random() - 0.5;
        });
        for (let i = 0; i < 12; i++) {
            sortedMatches.push(sortedMatchesRaw[i]);
        }
        return sortedMatches;
    }
    else {
        console.log(`No listings found with the name '${beerProperty}'`);
    }
};

app.listen(port, async () => {
    try {
        await client.connect();
        collection = client.db("BeerDB").collection("beers");
    } catch (e) {
        console.error(e);
    }
    console.log(`Listening on port ${port} `);
});
