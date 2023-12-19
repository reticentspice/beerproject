const { MongoClient } = require("mongodb");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src"));
app.use(express.static("img"));
app.use(express.static("dist"));

app.get("/", (req, res, next) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\index.html");
});

//Without the code below (or something similar), the front-end script file doesn't work.
app.get('/src/script.js', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\src\\script.js");
});

app.get('/results', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\public\\results.html");
});

app.get('/src/results.js', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\src\\results.js");
});

app.get('/dist/output.css', (req, res) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\dist\\output.css");
});

app.get('/getMatches', (req, res) => {
    res.json({ sortedMatches });
});

let matchScore;
let requiredItems;

let reallyImportant;
let kindaImportant;
let notSoImportant;
let numberForDivisor = 0;
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
        numberForDivisor += 1;
        newIsVegan = "Yes";
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
    }

    if (req.body.glutenFree === "isGF") {
        requiredItems.push({ isGF: favouriteBeer.isGF });
    }

    if (req.body.lowCal === "isLowCal") {
        requiredItems.push({ isLowCal: favouriteBeer.isLowCal });
    }

    if (req.body.alcoholFree === "isAlcoholFree") {
        requiredItems.push({ isAlcoholFree: favouriteBeer.isAlcoholFree });
    }

    if (req.body["beerTypeReq"] && req.body["beerTypeReq"] === "required") {
        requiredItems.push({ beerType: favouriteBeer.beerType });
    }

    if (req.body["beerABVReq"] && req.body["beerABVReq"] === "required") {
        requiredItems.push({ beerABVGrade: favouriteBeer.beerABVGrade });
    }

    if (req.body["beerCountryReq"] && req.body["beerCountryReq"] === "required") {
        requiredItems.push({ beerCountry: favouriteBeer.beerCountry });
    }

    if (req.body["beerFlavourReq"] && req.body["beerFlavourReq"] === "required") {
        requiredFlavours.push({ beerFlavours: favouriteBeer.beerFlavours[0] });
    }

    if (req.body["beerFlavour2Req"] && req.body["beerFlavour2Req"] === "required") {
        requiredFlavours.push({ beerFlavours: favouriteBeer.beerFlavours[1] });
    }

    if (req.body["beerFlavour3Req"] && req.body["beerFlavour3Req"] === "required") {
        requiredFlavours.push({ beerFlavours: favouriteBeer.beerFlavours[2] });
    }
    if (requiredFlavours.length !== 0) {
        requiredItems.push([...requiredFlavours]);
    }
    return requiredItems;
}

function getPreferences(req, requiredItems) {
    for (let i = 0; i < requiredItems.length; i++) {
        numberForDivisor += 9;
    }

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
    beerDesc, beerIngredients, beerURL, isVegan, isGF, isLowCal, isAlcoholFree) {
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
    const uri = "mongodb+srv://randomlywatching:fx2kAgObMWyqMCgm@beerdb.pmiqvcn.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
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

app.post("/submit", async function (req, res) {
    console.log("Click");
    const favouriteBeer = getInfo(req);
    console.log(favouriteBeer);
    getRequired(req, favouriteBeer);
    getPreferences(req, requiredItems);
    await main(favouriteBeer).catch(console.error);
    res.redirect("/results");
})

async function findBeers(client, favouriteBeer, requiredItems) {
    let multiplier = Math.round(100 / parseInt(numberForDivisor) * 10) / 10;
    console.log("Divisor: " + numberForDivisor);
    console.log("Multiplier: " + multiplier);
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
            console.log(doc);
            doc.matchScore = 0;

            for (let [key, value] of Object.entries(doc)) {
                if (key === "beerFlavours") {
                    for (let i = 0; i < doc[key].length; i++) {
                        for (let j = 0; j < favouriteBeer[key].length; j++) {

                            //The code below is currently broken.
                            if (doc[key][i] == favouriteBeer[key][j]) {
                                for (let k = 0; k < requiredItems.length; k++) {
                                    for (let l = 0; l < requiredItems[k].length; l++) {
                                        if (requiredItems[k][l]["beerFlavours"] == favouriteBeer[key][j]) {
                                            doc.matchScore += 10 * multiplier;
                                        }
                                    }
                                }

                                if (favouriteBeer[key][j] == reallyImportant) {
                                    doc.matchScore += 6 * multiplier;
                                }
                                else if (favouriteBeer[key][j] == kindaImportant) {
                                    doc.matchScore += 4 * multiplier;
                                }
                                else if (favouriteBeer[key][j] == notSoImportant) {
                                    doc.matchScore += 3 * multiplier;
                                }
                                else {
                                    doc.matchScore += multiplier;
                                }
                            }
                        }
                    }
                }
                else if (value == favouriteBeer[key] && favouriteBeer[key] !== undefined) {

                    for (let i = 0; i < requiredItems.length; i++) {
                        if (requiredItems[i][key] == favouriteBeer[key]) {
                            doc.matchScore += 10 * multiplier;
                        }
                    }

                    if (favouriteBeer[key] == reallyImportant) {
                        doc.matchScore += 6 * multiplier;
                    }
                    else if (favouriteBeer[key] == kindaImportant) {
                        doc.matchScore += 4 * multiplier;
                    }
                    else if (favouriteBeer[key] == notSoImportant) {
                        doc.matchScore += 3 * multiplier;
                    }
                    else if (favouriteBeer[key] !== "Yes" && favouriteBeer[key] !== "No") {
                        doc.matchScore += multiplier;
                    }
                }


            }
            if (doc.matchScore > 100) {
                doc.matchScore = 99.9;
            }
            potentialMatches.push(doc);
            console.log(doc.matchScore);
        }
        sortedMatches = potentialMatches.sort((a, b) => b.matchScore - a.matchScore);
        return sortedMatches;
    }
    else {
        console.log(`No listings found with the name '${beerProperty}'`);
    }
};

app.listen(port, () => {
    console.log(`Listening on port ${port} `);
});
