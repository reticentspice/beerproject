const express = require("express");
const fs = require("fs").promises;
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("dist"));

app.get("/", (req, res, next) => {
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\add-beers.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

function getInfo(req) {
    let newBeerName = null;
    let newBeerFlavours = [];
    let newBeerType = null;
    let newPreciseBeerType = null;
    let newBeerABV = null;
    let newBeerABVGrade = null;
    let newBrewery = null;
    let newBeerImage = null;
    let newBeerCountry = null;
    let newBeerDesc = null;
    let newBeerURL = null;
    let newIngredients = [];
    let newIsVegan = null;
    let newIsGF = null;
    let newIsLowCal = null;
    let newIsAlcoholFree = null;
    let matchScore = 0;

    if (req.body.isVegan === "Yes") {
        newIsVegan = "Yes";
    }

    else { newIsVegan = "No" };

    if (req.body.isGF === "Yes") {
        newIsGF = "Yes";
    }
    else { newIsGF = "No" };

    if (req.body.isLowCal === "Yes") {
        newIsLowCal = "Yes";
    }

    else { newIsLowCal = "No" };

    if (req.body.isAlcoholFree === "Yes") {
        newIsAlcoholFree = "Yes";
    }

    else { newIsAlcoholFree = "No" };

    newBeerName = req.body["beerName"];

    newBeerType = req.body["beerType"];
    if (req.body["preciseBeerType"]) {

        newPreciseBeerType = req.body["preciseBeerType"];
    }

    for (let i = 1; i < 5; i++) {
        const flavour = req.body[`beerFlavour${i}`];
        if (flavour) {
            newBeerFlavours.push(flavour);
        }
    }

    newBeerABV = req.body["beerABV"];
    newBeerABVGrade = req.body["beerABVGrade"];
    newBeerCountry = req.body["beerCountry"];
    newBeerDesc = req.body["beerDesc"];
    newBeerImage = req.body["beerImage"];
    newBeerURL = req.body["beerURL"];
    newBrewery = req.body["brewery"];

    for (let i = 1; i < 10; i++) {
        const ingredient = req.body[`beerIngredient${i}`].toLowerCase();
        if (ingredient) {
            newIngredients.push(ingredient);
        }
    }

    let newBeer = new Beer(newBeerName, newBeerType, newPreciseBeerType, newBeerFlavours, newBeerABV, newBeerABVGrade, newBrewery, newBeerCountry,
        newBeerImage, newBeerDesc, newIngredients, newBeerURL, newIsVegan, newIsGF, newIsLowCal, newIsAlcoholFree, 0);

    return (newBeer);
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

async function addBeer(req) {
    try {
        console.log("Adding");
        const newBeer = getInfo(req);
        const newBeerJSON = JSON.stringify(newBeer);
        console.log("New: " + newBeerJSON);
        const beerLine = `\n${newBeerJSON}, `;
        await fs.writeFile('add-beers.json', beerLine, { encoding: "utf-8", flag: 'a' });
        console.log("Written?");
    } catch (error) {
        console.error("Got an error trying to write to a file");
    }
}

app.post("/submit", async function (req, res) {
    console.log("Click");
    await addBeer(req);
    res.sendFile("C:\\Users\\User\\Documents\\Python\\BeerProject\\beer-project\\add-beers.html");
})