let sortedMatches;
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
            if (sortedMatches.length == 0) {
                ReactDOM.render(<EmptyList />, recList);
            }

            else {
                const introP = document.getElementById("introP");
                ReactDOM.render(<IntroParagraph />, introP);
                for (let beer of sortedMatches) {
                    const fragment = document.createDocumentFragment();
                    ReactDOM.render(<BeerCard beer={beer} />, fragment);
                    recList.appendChild(fragment);
                }
            }


        })
        .catch(error => console.error('Error fetching data:', error));

}

function IntroParagraph() {
    return (<p>Here are some beers we think you'd enjoy...</p>);
}

function BeerCard({ beer }) {
    function addSpaces(ingredientList) {
        var withSpaces = ingredientList.join(", ");
        return withSpaces;
    }


    if (!beer.beerIngredients || beer.beerIngredients.length == 1 || beer.beerIngredients.length == 0) {
        beer.beerIngredients = ["unknown"];
    }



    const placeholderImage = "placeholder.png";

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }

    return (<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 
    dark:border-gray-700 m-0.5">
        <a href={beer.beerURL}>
            <img className="rounded-t-lg object-scale-down w-48 h-48" src={beer.beerImage ? beer.beerImage : placeholderImage}
                onError={onImageError} /><br />
            <div className="p-5">
                <p className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    target="_blank">{beer.beerName}</p><br />
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Match score: {beer.matchScore}%</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Brewery: {beer.brewery}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Type: {beer.beerType}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">ABV: {beer.beerABV}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">{beer.beerDesc}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">Ingredients: {addSpaces(beer.beerIngredients)}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Gluten free: {beer.isGF}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Vegan: {beer.isVegan}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Low-calorie: {beer.isLowCal}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Low-alcohol: {beer.isAlcoholFree}</p><br />
            </div></a></div>);
}

function EmptyList() {
    return (<p className="text-white">Sorry, no beers matching your criteria were found.</p>)
}

