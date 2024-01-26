ReactDOM.render(
    <div className="App mx-auto items-center text-center">
        <Header />
        <main>
            <HamburgerMenu />
            <About />
        </main>
    </div>, document.getElementById('root')
);


function Header() {
    return (<header className="App-header">
        <h2 className="mb-4 text-4xl font-extrabold flex justify-center text-center items-center mx-auto leading-none tracking-tight text-gray-900 md:text-5xl 
    lg:text-6xl dark:text-white bg-green-700 h-20">Build Your Perfect Beer</h2>
        <button className="w-12 h-12 absolute top-4 left-2 align-bottom" id="hamburgerButton"><img src="hamburger-menu.png" /></button>
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
                <a href="about.html" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About DataBeers</a>
            </li>
        </ul>
    </div>)
}

function About() {
    return (
        <div className="text-white flex justify-left text-left mx-auto my-4 p-10 w-3/4">
            Welcome to DataBeers! This service aims to help you find new beers you might like based on the properties of beers you
            already know and love. You've got three options:<br /><br />
            1) In the "Build Custom Beer" tab, you can manually choose what properties you want your beer to have—anything from its
            flavours to its alcohol content to its country of origin. <br /><br />
            2) In the "Find Similar Beers" tab, you can search our database for a beer you like and then search for other beers that
            are similar to that beer. Matching is based on the type of beer, flavours, brewery, country of origin, malts, and hops.
            The more properties that match your beer, the higher a beer will rank on the list we show you. <br /><br />
            3) Not exactly sure what kind of beer you want? Just looking for a beer, any beer? In the "Get Random Beer" tab, you
            can only select a couple of properties like whether you want beers that are vegan,
            gluten-free, low-calorie, or alcohol-free. Click the button to get a selection of three random beers
            from our database.<br /><br /><br />
            It's important to note that while we do our best to ensure our database is as accurate as possible, we're limited by
            what information breweries decide to show us as well as by the inherent fallibility of human nature. If something
            really matters to you, make sure you check with the brewery to ensure it's accurate. This is especially true if it's
            something that really, REALLY matters to you, like whether the beer is vegan or gluten-free or whether it contains
            certain allergens. <br /><br />
            If you do find something wrong, we'd appreciate a heads-up via our Report form (which you can find a link to at the
            bottom of every card on the Results page.) We want our database to be as accurate as it possibly can be; otherwise,
            what's the point? <br /><br />
        </div>
    )
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