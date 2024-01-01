

ReactDOM.render(
    <div className="App mx-auto items-center text-center">
        <Header />
        <main className="flex flex-row">
            <div className="flex-auto">
                <BeerCard /></div>
            <div className="flex-auto">
                <p className="text-base text-gray-900 italic dark:text-white">Which part of the information is wrong?</p>
                <ReportForm /></div>
        </main></div>, document.getElementById('root')
)

function Header() {
    return (<header className="App-header">
        <h2 className="mb-4 text-4xl font-extrabold text-center mx-auto leading-none tracking-tight text-gray-900 md:text-5xl 
lg:text-6xl dark:text-white bg-green-700">Report Something Wrong</h2>
    </header>);
}

function ReportForm() {

    return (<form method="post" action="/submitReport" encType="application/x-www-form-urlencoded"><div id="checkBoxContainer">

    </div>

        <label htmlFor="repairsToMake" className="block mb-2 text-sm font-medium text-gray-900 text-base italic dark:text-white">Please describe how we can fix it.</label>
        <textarea id="repairsToMake" rows="4" className="p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border 
border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tell us how we can improve..."></textarea>
        <br />

        <p>`How can we improve?`</p>
        <label htmlFor="sourceInfo" className="block mb-2 text-sm font-medium text-gray-900 text-base italic dark:text-white">Please provide a source we can check.</label>
        <textarea id="sourceInfo" rows="4" className="p-2.5 w-9/12 text-sm text-gray-900 bg-gray-50 rounded-lg border 
border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Where'd you get your information?"></textarea>
        <br />

        <ReportButton />
    </form>);
}



function BeerCard() {

    const placeholderImage = "placeholder.png";

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }

    const urlParams = new URLSearchParams(window.location.search);

    // Create an empty object to store the parsed parameters
    const beerData = {};

    // Iterate through the parameters and add them to the object
    for (const [key, value] of urlParams) {
        try {
            // Parse the value as JSON if it looks like a JSON string
            beerData[key] = JSON.parse(value);
        } catch (error) {
            // If parsing fails, use the original value
            beerData[key] = value;
        }
    }

    console.log(beerData.beer.beerName);
    console.log(beerData.beer.beerURL);

    return (<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 
    dark:border-gray-700 m-0.5">
        <a href={beerData.beer.beerURL}>
            <img className="rounded-t-lg object-scale-down w-48 h-48" src={beerData.beer.beerImage ? beerData.beer.beerImage : placeholderImage}
                onError={onImageError} /><br />
            <div className="p-5">
                <p className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    target="_blank">{beerData.beer.beerName}</p><br />
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Brewery: {beerData.beer.brewery}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Type: {beerData.beer.beerType}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">ABV: {beerData.beer.beerABV}</p>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">{beerData.beer.beerDesc}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Gluten free: {beerData.beer.isGF}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Vegan: {beerData.beer.isVegan}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Low-calorie: {beerData.beer.isLowCal}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Low-alcohol: {beerData.beer.isAlcoholFree}</p></div></a><br />
        <br />
    </div>);
}



const potentialErrors = {
    beerName: "There's a mistake in the beer name", beerImage: "The beer image is wrong or missing",
    beerType: "The beer is the wrong type or the type is missing",
    beerFlavours: "The beer has the wrong or missing flavours",
    brewery: "The beer has the wrong brewery",
    beerCountry: "The beer country is wrong",
    beerDescription: "Something's wrong with the beer description",
    beerIngredients: "The beer ingredients are wrong or are missing (and I know what they are)",
    isVegan: "The beer is wrongly marked vegan/not vegan",
    isGF: "The beer is wrongly marked gluten-free/not gluten-free",
    isLowCal: "The beer is wrongly marked low-calorie/not low-calorie",
    isAF: "The beer is wrongly marked alcohol-free/not alcohol-free",
    other: "Other"
};

//Loop through the object above and add values below where needed to create all the checkboxes.

const checkboxContainer = document.getElementById("checkBoxContainer");

for (const key in potentialErrors) {

    const newDiv = document.createElement("div");
    const newCheckbox = React.createElement(FormCheckbox, { checkboxKey: key, label: potentialErrors[key] });
    ReactDOM.render(newCheckbox, newDiv);
    checkboxContainer.appendChild(newDiv);

}

function FormCheckbox({ checkboxKey, label }) {
    return (<div className="formBox flex justify-center items-center mb-2">

        <label htmlFor={checkboxKey} className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300">{label} </label>&nbsp;&nbsp;

        <input type="checkbox" id={checkboxKey} name={checkboxKey} value={checkboxKey}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
dark:bg-gray-700 dark:border-gray-600" />
    </div>)
}

function ReportButton() {
    return (
        <button id="makeReport" type="report" value="report" className="focus:outline-none text-white 
        bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm 
        px-5 py-2.5 me-2 mb-24 dark:bg-green-600 dark:hover:bg-green-700 
        dark:focus:ring-green-800">Report error</button>)
};