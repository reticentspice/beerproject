let sortedMatches;
let favouriteBeer;

window.onload = showBeers();

function showBeers() {
    const recList = document.getElementById("recommendationList");
    while (recList.firstChild) {
        recList.removeChild(recList.lastChild);
    }
    recList.textContent = "";
    fetch('/getMatches')
        .then(response => response.json())
        .then(data => {
            // Use the data in the frontend
            sortedMatches = data.sortedMatches;
            favouriteBeer = data.favouriteBeer;

            if (!sortedMatches) {
                ReactDOM.render(<EmptyList />, recList);
            }
            if (sortedMatches.length == 0) {
                ReactDOM.render(<EmptyList />, recList);
            }

            else {
                const introP = document.getElementById("introP");
                ReactDOM.render(<IntroParagraph />, introP);
                for (let beer of sortedMatches) {
                    const fragment = document.createDocumentFragment();
                    ReactDOM.render(<BeerCard beer={beer} favouriteBeer={favouriteBeer} />, fragment);
                    recList.appendChild(fragment);
                    embolden(beer, favouriteBeer);
                    hideScore(beer);
                }
            }


        })
        .catch(error => console.error('Error fetching data:', error));

}

function IntroParagraph() {
    return (<p>Here are some beers we think you'd enjoy...</p>);
}

function BeerCard({ beer, favouriteBeer }) {

    function addSpaces(list) {
        var withSpaces = list.join(", ");
        return withSpaces;
    }

    if (!beer.beerType) {
        beer.beerType = beer.beerLOA;
    }

    if (!beer.beerIngredients || beer.beerIngredients.length == 1 || beer.beerIngredients.length == 0) {
        beer.beerIngredients = ["unknown"];
    }

    if (!beer.beerFlavours || beer.beerFlavours.length == 0) {
        beer.beerFlavours = ["unknown"];
    }

    if (!beer.beerDesc) {
        beer.beerDesc = "Sorry, but we don't have a description for this beer yet."
    }

    const placeholderImage = "placeholder.png";

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }


    const cardStyle = {
        backgroundColor: beer.matchScore === "100.00" ? 'green' : 'bg-gray-800'
    };

    //The code below is used for reporting beers with incorrect information.
    let shortBeer = {
        "beerName": beer.beerName, "beerImage": beer.beerImage, "beerURL": beer.beerURL,
        "brewery": beer.brewery, "beerType": beer.beerType, "beerABV": beer.beerABV, "isVegan": beer.isVegan,
        "isGF": beer.isGF, "isLowCal": beer.isLowCal, "isAlcoholFree": beer.isAlcoholFree
    };
    let beerInfo = JSON.stringify(shortBeer);

    return (<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 
    dark:border-gray-700 m-0.5" style={cardStyle}>
        <a href={beer.beerURL}>
            <img className="rounded-t-lg object-scale-down w-48 h-48" src={beer.beerImage ? beer.beerImage : placeholderImage}
                onError={onImageError} /><br />
            <div className="p-5">
                <p className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    target="_blank">{beer.beerName}</p><br />
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-matchScore`}>Match score: {beer.matchScore}%</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-brewery`}>Brewery: {beer.brewery}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-beerType`}>Type: {beer.beerType}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-beerABVGrade`}>ABV: {beer.beerABV}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-beerFlavours`}>Flavours: {addSpaces(beer.beerFlavours)}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">{beer.beerDesc}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">Ingredients: {addSpaces(beer.beerIngredients)}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-isGF`}>Gluten free: {beer.isGF}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-isVegan`}>Vegan: {beer.isVegan}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-isLowCal`}>Low-calorie: {beer.isLowCal}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-isAlcoholFree`}>Low-alcohol: {beer.isAlcoholFree}</p></div></a><br />
        <br />
        <div className="p-5"><a href={`/report?beer=${beerInfo}`} className="reportError">Report incorrect info for {beer.beerName}</a>
        </div></div>);
}

function EmptyList() {
    return (<p className="text-white">Sorry, no beers matching your criteria were found.</p>)
}

function embolden(beer, favouriteBeer) {
    if (beer.matchScore === "100.00") {
        document.getElementById(`${beer._id}-matchScore`).style.fontWeight = "bold";
    }

    let matchingFlavours = [];
    for (let i = 0; i < favouriteBeer.length; i++) {
        for (const [key, value] of Object.entries(beer)) {
            if (key == "beerFlavours") {
                for (let j = 0; j < beer.beerFlavours.length; j++) {
                    if (beer.beerFlavours[j] === favouriteBeer[i].beerFlavour) {
                        matchingFlavours.push(beer.beerFlavours[j]);

                    }
                }
            }

            else {
                if (favouriteBeer[i].hasOwnProperty(key) && favouriteBeer[i][key] === value) {
                    const element = document.getElementById(`${beer._id}-${key}`);
                    if (element) {
                        element.classList.remove("font-normal");
                        element.classList.add("font-bold");
                    }
                }
            }
        }
    }
    const element = document.getElementById(`${beer._id}-beerFlavours`);
    let modifiedText = element.innerText;

    // Create a modified version of the text with the matching portion in bold
    matchingFlavours.forEach((toBold) => {

        // Create a modified version of the text with the matching portion in bold
        modifiedText = modifiedText.replace(new RegExp(toBold, 'g'), `<b>${toBold}</b>`);
    })
    element.innerHTML = modifiedText;

}

function hideScore(beer) {
    let element = document.getElementById(`${beer._id}-matchScore`);
    if (element) {
        console.log("It's alive!");
    }
    if (beer.matchScore === 0) {
        element.style.display = "none";
    }
    else {
        return (beer.matchScore);
    }
}