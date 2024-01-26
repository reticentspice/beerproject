/*Table of Contents
1. Require middleware
2. Set up the app
3. Set up get requests
4. Set up essential global variables
5. getInfo function to collect input from the form
6. getRequired function to collect required input from the form
7. getPreferences function to collect information from the importance div
8. function to define the Beer object
9. main function to execute the main code
10. getRandom function to find random beers
11. post requests to submit, getRandom, and getSimilar (including the getSimilar function)
12. findBeers function which has the main logic for finding and handling matching beers from the DB
13. app.listen */

//1. Require middleware
const { MongoClient } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const searchArray = require("./arrayToSearch.js");

//2. Set up the app
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src"));
app.use(express.static("img"));
app.use(express.static("dist"));
app.use(cors());

//3. Set up get requests
app.get("/", (req, res, next) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\index.html");
});

app.get('/results', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\results.html");
});

app.get('/report', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\report.html");
});

app.get('/about', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\about.html");
});

app.get('/login', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\login.html");
});

app.get('/signIn', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\index.html");
});

app.get('/signUp', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\signupresult.html");
});

app.get('/getMatches', (req, res) => {
    res.json({
        sortedMatches: sortedMatches,
        favouriteBeer: favouriteBeerProps
    });
});

app.get("/getArray", (req, res) => {
    res.json({ searchArray });
})

//4. Set up essential global variables
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@beerdb.pmiqvcn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

let requiredItems;

let reallyImportant;
let kindaImportant;
let notSoImportant;
let numberForDivisor;
let sortedMatches;
let favouriteBeerProps = [];
let avoidAF = true;

//5. getInfo function to collect input from the form
function getInfo(req) {
    numberForDivisor = 0;
    let newBeerLOA = null;
    let newBeerType = null;
    let newPreciseBeerType = null;
    let newReallyPreciseBeerType = null;
    let newBeerFlavours = [];
    let newBeerABVGrade = null;
    let newBrewery = null;
    let newBeerCountry = null;
    let newIngredients = null;
    let newBeerHops = [];
    let newBeerMalts = [];
    let newBeerAllergens = [];
    let newIsVegan = null;
    let newIsGF = null;
    let newIsLowCal = null;
    let newIsAlcoholFree = null;

    if (req.body.vegan === "isVegan") {
        newIsVegan = "Yes";
        favouriteBeerProps.push({ isVegan: "Yes" });
    }

    if (req.body.glutenFree === "isGF") {
        newIsGF = "Yes";
        favouriteBeerProps.push({ isGF: "Yes" });
    }

    if (req.body.lowCal === "isLowCal") {
        newIsLowCal = "Yes";
        favouriteBeerProps.push({ isLowCal: "Yes" });
    }

    if (req.body.alcoholFree === "isAlcoholFree") {
        newIsAlcoholFree = "Yes";
        favouriteBeerProps.push({ isAlcoholFree: "Yes" });
    }

    if (req.body["beerType"] !== "Select an option") {
        if (req.body["beerType"] == "lager" || req.body["beerType"] == "ale") {
            newBeerLOA = req.body["beerType"];
            favouriteBeerProps.push({ beerLOA: newBeerLOA });
        }

        else {
            newBeerType = req.body["beerType"];
            favouriteBeerProps.push({ beerType: newBeerType });
        }
        numberForDivisor += 1;
    }

    const reqsToCheck = ["beerFlavours", "beerHops", "beerMalts"];
    for (let i = 0; i < 3; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log("Item: " + reqsToCheck[i]);
            console.log(req.body[`${reqsToCheck[i]}${j}`]);
            if (req.body[`${reqsToCheck[i]}${j}`] && req.body[`${reqsToCheck[i]}${j}`] !== "Select an option") {
                numberForDivisor += 1;
                if (reqsToCheck[i] === "beerFlavours") {
                    console.log(req.body[`beerFlavours${j}`]);
                    newBeerFlavours.push(req.body[`beerFlavours${j}`]);
                    favouriteBeerProps.push({ beerFlavour: req.body[`beerFlavours${j}`] });
                }

                else if (reqsToCheck[i] === "beerHops") {
                    newBeerHops.push(req.body[`beerHops${j}`]);
                    favouriteBeerProps.push({ beerHop: req.body[`beerHops${j}`] })
                }

                else if (reqsToCheck[i] === "beerMalts") {
                    newBeerMalts.push(req.body[`beerMalts${j}`]);
                    favouriteBeerProps.push({ beerMalt: req.body[`beerMalts${j}`] })
                }
            }
        }
    }

    if (req.body["beerABVGrade"] !== "Select an option") {
        newBeerABVGrade = req.body["beerABVGrade"];
        favouriteBeerProps.push({ beerABVGrade: newBeerABVGrade });
        numberForDivisor += 1;
    }

    if (req.body["beerCountry"] !== "Select an option") {
        newBeerCountry = req.body["beerCountry"];
        favouriteBeerProps.push({ beerCountry: newBeerCountry });
        numberForDivisor += 1;
    }

    let favouriteBeer = new Beer(null, newBeerLOA, newBeerType, newPreciseBeerType, newReallyPreciseBeerType, newBeerFlavours,
        null, newBeerABVGrade, newBrewery, newBeerCountry, null, null, newIngredients, newBeerHops, newBeerMalts,
        newBeerAllergens, null, newIsVegan, newIsGF, newIsLowCal, newIsAlcoholFree, 1000);
    for (let i = 0; i < favouriteBeer.length; i++) {
        if (favouriteBeer[i] === "Select an option") {
            favouriteBeer[i] = null;
        }
    }
    console.log(favouriteBeer);
    return (favouriteBeer);
}

//6. getRequired function to collect required input from the form
//This function calculates the info for the required elements to add them to a list to be compared against the DB.
function getRequired(req, favouriteBeer) {
    requiredItems = [];
    requiredFlavours = [];
    if (req.body.vegan === "isVegan") {
        requiredItems.push({ isVegan: favouriteBeer.isVegan });
    }

    if (req.body.glutenFree === "isGF") {
        requiredItems.push({ isGF: favouriteBeer.isGF });
    }

    if (req.body.lowCal === "isLowCal") {
        requiredItems.push({ isLowCal: favouriteBeer.isLowCal });
        numberForDivisor += 9;
    }

    if (req.body.alcoholFree === "isAlcoholFree") {
        requiredItems.push({ isAlcoholFree: favouriteBeer.isAlcoholFree });
    }

    if (req.body["beerTypeReq"] && req.body["beerTypeReq"] === "required") {
        requiredItems.push({ beerType: favouriteBeer.beerType });
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

//7. getPreferences function to collect information from the importance div
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

//8. function to define the Beer object
function Beer(beerName, beerLOA, beerType, preciseBeerType, reallyPreciseBeerType, beerFlavours, beerABV, beerABVGrade, brewery, beerCountry, beerImage,
    beerDesc, beerIngredients, beerHops, beerMalts, beerAllergens, beerURL, isVegan, isGF, isLowCal, isAlcoholFree, matchScore) {
    this.beerName = beerName;
    this.beerLOA = beerLOA;
    this.beerType = beerType;
    this.preciseBeerType = preciseBeerType;
    this.reallyPreciseBeerType = reallyPreciseBeerType;
    this.beerFlavours = beerFlavours;
    this.beerABV = beerABV;
    this.beerABVGrade = beerABVGrade;
    this.brewery = brewery;
    this.beerCountry = beerCountry;
    this.beerImage = beerImage;
    this.beerDesc = beerDesc;
    this.beerIngredients = beerIngredients;
    this.beerHops = beerHops;
    this.beerMalts = beerMalts;
    this.beerAllergens = beerAllergens;
    this.beerURL = beerURL;
    this.isVegan = isVegan;
    this.isGF = isGF;
    this.isLowCal = isLowCal;
    this.isAlcoholFree = isAlcoholFree;
    this.matchScore = matchScore;
}

//9. main function to execute the main code
async function main(favouriteBeer) {

    try {
        await client.connect();
        console.log("Connected");

        await findBeers(client, favouriteBeer, requiredItems);

    }
    catch (error) {
        console.error(error);

    };
};

//10. getRandom function to find random beers
async function getRandom() {
    try {
        await client.connect();
        sortedMatches = [];
        console.log("Connected");


        let mongoOutput = await client.db("BeerDB").collection("beers").aggregate([
            {
                "$match": {
                    "isAlcoholFree": "No"
                }
            },
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
    };
};

//11. post requests to submit, getRandom, and getSimilar (including the getSimilar function)
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
    if (req.body["dontAvoidAF"]) {
        avoidAF = false;
    }
    await getRandom();
    res.redirect("/results");
})

app.post("/getSimilar", async function (req, res) {
    requiredItems = [];
    sortedMatches = [];
    avoidAF = true;
    numberForDivisor = 0;
    let queryName = req.body["similarBox"];
    query = { $and: [{ beerName: queryName }] };
    if (req.body["dontAvoidAF"]) {
        avoidAF = false;
    }
    const result = await client.db("BeerDB").collection("beers").find(query);

    if (result) {
        for await (let favouriteBeer of result) {
            favouriteBeer = new Beer(queryName, favouriteBeer.beerLOA, favouriteBeer.beerType, favouriteBeer.preciseBeerType,
                favouriteBeer.reallyPreciseBeerType, favouriteBeer.beerFlavours, favouriteBeer.beerABV, favouriteBeer.beerABVGrade, favouriteBeer.brewery,
                favouriteBeer.beerCountry, undefined, undefined, favouriteBeer.beerIngredients,
                favouriteBeer.beerHops, favouriteBeer.beerMalts, favouriteBeer.beerAllergens, undefined,
                favouriteBeer.isVegan, favouriteBeer.isGF, favouriteBeer.isLowCal, favouriteBeer.isAlcoholFree, favouriteBeer.matchScore);
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

            for (const [key, value] of Object.entries(favouriteBeer)) {
                if (key === "beerFlavours") {
                    for (let flavour in value) {
                        numberForDivisor += 1;
                        favouriteBeerProps.push({ beerFlavour: value[flavour] });
                    }
                }

                else if (key === "beerHops") {
                    for (let hop in value) {
                        numberForDivisor += 1;
                        favouriteBeerProps.push({ beerHop: value[hop] });
                    }
                }

                else if (key === "beerMalts") {
                    for (let malt in value) {
                        numberForDivisor += 1;
                        favouriteBeerProps.push({ beerMalt: value[malt] });
                    }
                }

                else if (["beerLOA", "beerType", "preciseBeerType", "reallyPreciseBeerType", "beerABVGrade", "brewery", "beerCountry",
                    "isVegan", "isGF", "isLowCal", "isAlcoholFree"].includes(key) && value !== undefined &&
                    value !== null && value !== "") {
                    favouriteBeerProps.push({ [key]: value });
                }

                if (["beerLOA", "beerType", "preciseBeerType", "reallyPreciseBeerType", "beerABVGrade", "brewery",
                    "beerCountry"].includes(key) && value !== undefined &&
                    value !== null && value !== "") {
                    numberForDivisor += 1;
                }
            }

            console.log("Divisor: " + numberForDivisor);
            console.log(favouriteBeer);
            await main(favouriteBeer).catch(console.error);

            res.redirect("/results");
        }
    }
});

app.post("/signIn", (req, res) => {

})

app.post("/signUp", (req, res) => {

})

//12. findBeers function which has the main logic for finding and handling matching beers from the DB
async function findBeers(client, favouriteBeer, requiredItems) {
    let query = {};
    sortedMatches = [];
    let potentialMatches = [];
    if (requiredItems.length === 0) {
        if (favouriteBeer.isAlcoholFree === "Yes") {
            avoidAF = false;
        }
        if (avoidAF) {
            query = { $and: [] };
            query.$and.push({ isAlcoholFree: "No" });
        }
        else {
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

            doc.matchScore = (doc.matchScore / numberForDivisor * 100).toFixed(2);
            if (doc.matchScore > 100) {
                doc.matchScore = 99.9;
            }
            if (doc.beerName !== favouriteBeer.beerName) {
                potentialMatches.push(doc);
            }
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

//app.listen
app.listen(port, async () => {
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    }
    console.log(`Listening on port ${port} `);
});
