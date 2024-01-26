let sortedMatches;
let favouriteBeer;

window.onload = showBeers();

ReactDOM.render(<div className="w-full">
    <Header />
    <HamburgerMenu />
</div>, document.getElementById("headerRoot"));

function Header() {
    return (<header className="App-header w-full">
        <h2 className="mb-6 text-4xl font-extrabold flex justify-center text-center items-center mx-auto leading-none tracking-tight text-white 
    md:text-5xl lg:text-6xl dark:text-white bg-green-700 w-full h-20">
            Have a Beer!</h2>
        <button className="w-12 h-12 absolute top-4 left-2" id="hamburgerButton"><img src="hamburger-menu.png" /></button>
        <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
    font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 
    focus:outline-none dark:focus:ring-blue-800 top-4 right-2 position: absolute">Try another search</a>
    </header>);
}

function HamburgerMenu() {
    return (<div id="hamburgerMenu" className="hidden absolute left-0 top-20 flex flex-col justify-left text-left 
    z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
            <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
            </li>
            <li>
                <a href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign in or up</a>
            </li>
            <li>
                <a href="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About DataBeers</a>
            </li>
        </ul>
    </div>)
}


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
                ReactDOM.render(<p>Here are some beers we think you'd enjoy...</p>, document.getElementById("introP"));
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
        backgroundColor: beer.matchScore === "100.00" ? 'rgba(4, 120, 87, var(--tw-bg-opacity))' : 'bg-gray-800'
    };

    //The code below is used for reporting beers with incorrect information.
    let shortBeer = {
        "beerName": beer.beerName, "beerImage": beer.beerImage, "beerURL": beer.beerURL,
        "brewery": beer.brewery, "beerType": beer.beerType, "beerABV": beer.beerABV, "isVegan": beer.isVegan,
        "isGF": beer.isGF, "isLowCal": beer.isLowCal, "isAlcoholFree": beer.isAlcoholFree
    };
    let beerInfo = JSON.stringify(shortBeer);

    return (<div className="max-w-sm min-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 
    dark:border-gray-700 m-0.5" style={cardStyle}>
        <a href={beer.beerURL}>
            <div className="flex flex-row">
                <img className="rounded-t-lg object-scale-down w-48 h-48 bg-white" src={beer.beerImage ? beer.beerImage : placeholderImage}
                    onError={onImageError} />
                <div className="p-2"> <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-matchScore`}>Match score: {beer.matchScore}%</p>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-brewery`}>Brewery: {beer.brewery}</p>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-beerType`}>Type: {beer.beerType}</p>
                    <p className="mb-4 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-beerABVGrade`}>ABV: {beer.beerABV}</p></div>
            </div><br />
            <div className="p-5">
                <p className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    target="_blank">{beer.beerName}</p><br />

                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-beerFlavours`}>Flavours: {addSpaces(beer.beerFlavours)}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">{beer.beerDesc}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">Ingredients: {addSpaces(beer.beerIngredients)}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-isGF`}>Gluten free: {beer.isGF}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-isVegan`}>Vegan: {beer.isVegan}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-isLowCal`}>Low-calorie: {beer.isLowCal}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" id={`${beer._id}-isAlcoholFree`}>Low-alcohol: {beer.isAlcoholFree}</p></div></a><br />
        <br />
        <div className="p-5"><a href={`/report?beer=${beerInfo}`} className="reportError text-red-600">Report incorrect info for {beer.beerName}</a>
        </div></div>);
}

function EmptyList() {
    return (<p className="text-white">Sorry, no beers matching your criteria were found.</p>)
}

function embolden(beer, favouriteBeer) {

    if (beer.matchScore === "100.00") {
        document.getElementById(`${beer._id}-matchScore`).style.fontWeight = "bold";
    }

    for (let i = 0; i < favouriteBeer.length; i++) {
        if (favouriteBeer[i].hasOwnProperty("beerLOA") && !favouriteBeer[i].hasOwnProperty("beerType")) {
            favouriteBeer[i].beerType = favouriteBeer[i].beerLOA;
        }
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
                    //    if (key == "beerLOA" && !favouriteBeer.beerType) {
                    //       favouriteBeer[i].beerType = favouriteBeer[i].beerLOA;
                    //   }
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
    }
    if (beer.matchScore === 0) {
        element.style.display = "none";
    }
    else {
        return (beer.matchScore);
    }
}

document.getElementById("hamburgerButton").addEventListener("click", function () {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const computedStyle = window.getComputedStyle(hamburgerMenu);
    if (computedStyle.display === "none") {
        hamburgerMenu.style.display = "block";
    }
    else if (computedStyle.display === "block") {
        hamburgerMenu.style.display = "none";
    }
})