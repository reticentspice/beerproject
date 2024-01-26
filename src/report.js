

ReactDOM.render(
    <div className="App mx-auto items-center text-center">
        <Header />
        <main className="flex flex-row">
            <HamburgerMenu />
            <div className="flex-auto p-4">
                <BeerCard /></div>
            <div className="flex-auto w-2/4">
                <ReportForm /></div>
        </main></div>, document.getElementById('root')
)

function Header() {
    return (<header className="App-header">
        <h2 className="mb-4 text-4xl font-extrabold flex justify-center text-center items-center mx-auto leading-none tracking-tight text-gray-900 md:text-5xl 
lg:text-6xl dark:text-white bg-green-700 h-20">Report Something Wrong</h2>
        <button className="w-12 h-12 absolute top-4 left-2" id="hamburgerButton"><img src="hamburger-menu.png" /></button>
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

function ReportForm() {

    return (<form method="post" action="/submitReport" encType="application/x-www-form-urlencoded"
        onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
        <p className="text-base text-gray-900 italic dark:text-white">
            We try to ensure all the information in our database is as accurate as possible. Unfortunately, due to being only
            human and therefore often fallible, mistakes do occur. If you've noticed something wrong with one of the beers we've
            suggested to you, we'd love to have the chance to fix it! Please fill in the fields below and let us know what's
            wrong and where we should look to find more accurate information.
        </p>

        <label htmlFor="repairsToMake" className="block mb-2 text-sm font-medium text-gray-900 text-base italic dark:text-white">Please describe what we need to fix.</label>
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
        <div className="flex flex-row max-w-sm min-w-sm">
            <img className="rounded-t-lg object-scale-down w-48 h-48 bg-white top-0 left-0" src={beerData.beer.beerImage ? beerData.beer.beerImage : placeholderImage}
                onError={onImageError} /><br />
            <div className="p-2">
                <p className="mb-1 font-normal text-left justify-left text-gray-700 dark:text-gray-400">Brewery: {beerData.beer.brewery}</p>
                <p className="mb-1 font-normal text-left justify-left text-gray-700 dark:text-gray-400">Type: {beerData.beer.beerType}</p>
                <p className="mb-4 font-normal text-left justify-left text-gray-700 dark:text-gray-400">ABV: {beerData.beer.beerABV}</p></div></div>
        <div className="p-5">
            <p className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                target="_blank">{beerData.beer.beerName}</p><br />

            <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">{beerData.beer.beerDesc}</p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Gluten free: {beerData.beer.isGF}</p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Vegan: {beerData.beer.isVegan}</p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Low-calorie: {beerData.beer.isLowCal}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Low-alcohol: {beerData.beer.isAlcoholFree}</p></div><br />
        <br />
    </div>);
}

function ReportButton() {
    return (
        <button id="makeReport" type="report" value="report" className="focus:outline-none text-white 
        bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm 
        px-5 py-2.5 me-2 mb-24 dark:bg-green-600 dark:hover:bg-green-700 
        dark:focus:ring-green-800">Report error</button>)
};

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