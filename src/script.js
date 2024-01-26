
window.onload = getOptions();

ReactDOM.render(
    <div className="App mx-auto items-center text-center">
        <Header />
        <main>
            <HamburgerMenu />
            <Tabs />
            <div id="default-tab-content">
                <div className="p-4 rounded-lg" id="myBeer" role="tabpanel" aria-labelledby="my-beer-tab">
                    <p className="text-base text-gray-900 italic dark:text-white">*Ignore any options you don't care about.</p>
                    <form method="post" action="/submit" encType="application/x-www-form-urlencoded">
                        <Dietary />
                        <Form />
                        <ImportanceSelector />
                        <SubmitButton />
                    </form></div>
                <RandomDiv />
                <SimilarDiv />
            </div>
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
                <a href="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About DataBeers</a>
            </li>
        </ul>
    </div>)
}

function Tabs() {
    return (<div className="mb-4 border-b border-gray-200 dark:border-gray-700" id="mainTab">
        <ul className="flex flex-wrap -mb-px text-sm text-white font-medium text-center items-center justify-center w-full rounded-lg" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <li className="me-2" role="presentation">
                <button className="inline-block p-4 border-b-2 text-white rounded-t-lg text-blue-600 hover:text-blue-600 
        dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500" id="my-beer-tab" data-tabs-target="#myBeer" type="button" role="tab" aria-controls="myBeer" aria-selected="false">Build Custom Beer</button>
            </li>
            <li className="me-2" role="presentation">
                <button className="inline-block p-4 border-b-2 text-white rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="similar-beer-tab" data-tabs-target="#similar" type="button" role="tab" aria-controls="similarBeer" aria-selected="false">Find Similar Beers</button>
            </li>
            <li className="me-2" role="presentation">
                <button className="inline-block p-4 border-b-2 text-white rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="random-beer-tab" data-tabs-target="#randomBeer" type="button" role="tab" aria-controls="randomBeer" aria-selected="false">Get Random Beer</button>
            </li>
        </ul>
    </div>)
}

function Dietary() {
    return (
        <div id="dietaryDiv" className=" text-center flex flex-col items-center mt-10 justify-center mx-auto my-1 w-2/3">

            <div className="w-full px-8 mx-auto space-y-2 flex items-center justify-center lg:max-w-md">

                <details className="w-full p-4 rounded-lg text-gray-500 bg-gray-800 border border-b-0 border-gray-200 rounded-t-xl 
            focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 
            hover:bg-blue-100 dark:hover:bg-gray-700 gap-3">

                    <summary className="text-xl font-bold dark:text-white text-center mx-auto list-none cursor-pointer">Dietary requirements</summary><br />
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col justify-start items-start p-4">
                            <div className="dietaryDiv flex justify-center items-center mb-4">

                                <label htmlFor="vegan" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegan </label>&nbsp;&nbsp;

                                <input type="checkbox" id="vegan" name="vegan" value="isVegan"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" />
                            </div>

                            <div className="dietaryDiv flex justify-center items-center mb-4">

                                <label htmlFor="glutenFree" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gluten-free </label>&nbsp;&nbsp;

                                <input type="checkbox" id="glutenFree" name="glutenFree" value="isGF"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" />
                            </div>

                            <div className="dietaryDiv flex justify-center items-center mb-4">

                                <label htmlFor="lowCal" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Low-calorie </label>&nbsp;&nbsp;

                                <input type="checkbox" name="lowCal" id="lowCal" value="isLowCal"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" /></div>

                            <div className="dietaryDiv flex justify-center items-center mb-4">

                                <label htmlFor="alcoholFree" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alcohol-free </label>&nbsp;&nbsp;

                                <input type="checkbox" name="alcoholFree" id="alcoholFree" value="isAlcoholFree"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
dark:bg-gray-700 dark:border-gray-600" /></div>
                        </div><div className="flex flex-col justify-start items-start p-4">
                            <div className="dietaryDiv flex justify-center items-center mb-4">

                                <label htmlFor="noWheat" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No wheat </label>&nbsp;&nbsp;

                                <input type="checkbox" name="noWheat" id="noWheat" value="isWheatFree"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
dark:bg-gray-700 dark:border-gray-600" /></div>
                            <div className="dietaryDiv flex justify-center items-center mb-4">

                                <label htmlFor="noOats" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No oats </label>&nbsp;&nbsp;

                                <input type="checkbox" name="noOats" id="noOats" value="isOatFree"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
dark:bg-gray-700 dark:border-gray-600" /></div>
                            <div className="dietaryDiv flex justify-center items-center mb-4">

                                <label htmlFor="noLactose" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No lactose </label>&nbsp;&nbsp;

                                <input type="checkbox" name="noLactose" id="noLactose" value="isLactoseFree"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
dark:bg-gray-700 dark:border-gray-600" /></div>
                        </div></div>
                </details>
            </div>
        </div>
    )
};

function Form() {
    return (<div id="optionWrapper" className=" text-center flex flex-col items-center justify-center mx-auto my-1 w-2/3">

        <div className="w-full px-8 mx-auto space-y-2 flex items-center justify-center lg:max-w-md">

            <details className="w-full p-4 rounded-lg text-gray-500 border border-b-0 bg-gray-800 border-gray-200 rounded-t-xl 
            focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 
            hover:bg-blue-100 dark:hover:bg-gray-700 gap-3">

                <summary className="text-xl font-bold dark:text-white text-center mx-auto list-none cursor-pointer">What kind of beer are you looking for?</summary>
                <br />

                <div id="beerTypeDiv" className="max-w-sm mx-auto">

                    <label htmlFor="beerType" className="block mb-2 leading-relaxed text-sm font-medium text-gray-900 dark:text-white">Beer type: </label>

                    <select id="beerType" name="beerType" className="propertyToAdd
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option>Select an option</option>
                        <option value="ale">Ale</option>
                        <option value="amber ale">Amber</option>
                        <option value="belgian ale">Belgian</option>
                        <option value="bock">Bock</option>
                        <option value="brown ale">Brown</option>
                        <option value="dark ale">Dark ale</option>
                        <option value="lager">Lager</option>
                        <option value="dark lager">Dark lager</option>
                        <option value="mild">Mild</option>
                        <option value="pale ale">Pale ale</option>
                        <option value="pale lager">Pale lager</option>
                        <option value="porter">Porter</option>
                        <option value="sour">Sour</option>
                        <option value="specialty beer">Specialty beer</option>
                        <option value="stout">Stout</option>
                        <option value="wheat beer">Wheat beer</option>
                    </select>

                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

                    <input type="checkbox" value="required" name="beerTypeReq"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600 requiredCheck" />
                    <br /><br />
                </div>

                <div id="beerFlavourDiv" className="max-w-sm mx-auto">

                    <label htmlFor="beerFlavours" className="block mb-2 leading-relaxed text-sm font-medium text-gray-900 dark:text-white">Beer flavour: </label>

                    <FlavourSelector flavourNumber={1} />

                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

                    <input type="checkbox" value="required" name="beerFlavourReq"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600 requiredCheck" /><br />

                    <button id="addFlavour1" type="button" className="text-gray-900 bg-white border border-gray-300 
            focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg 
            text-sm px-5 py-2.5 me-2 my-2 dark:bg-purple-500 dark:text-white dark:border-gray-600 
            dark:hover:bg-purple-400 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add another flavour</button><br /><br />
                </div>

                <div id="beerFlavourDiv1"></div>
                <div id="beerFlavourDiv2"></div>

                <div id="beerHopsDiv" className="max-w-sm mx-auto">

                    <label htmlFor="beerHops1" className="block mb-2 leading-relaxed text-sm font-medium text-gray-900 dark:text-white">Hops variety: </label>

                    <HopSelector hopsNumber={1} />

                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

                    <input type="checkbox" value="required" name="beerHopReq"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
dark:bg-gray-700 dark:border-gray-600 requiredCheck" /><br />

                    <button id="addHops1" type="button" className="text-gray-900 bg-white border border-gray-300 
focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg 
text-sm px-5 py-2.5 me-2 my-2 dark:bg-purple-500 dark:text-white dark:border-gray-600 
dark:hover:bg-purple-400 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add another hops variety</button><br /><br />
                </div>

                <div id="beerHopsDiv1"></div>
                <div id="beerHopsDiv2"></div>

                <div id="beerMaltDiv" className="max-w-sm mx-auto">

                    <label htmlFor="beerMalts" className="block mb-2 leading-relaxed text-sm font-medium text-gray-900 dark:text-white">Malt: </label>

                    <MaltSelector maltNumber={1} />

                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

                    <input type="checkbox" value="required" name="beerMaltReq"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
dark:bg-gray-700 dark:border-gray-600 requiredCheck" /><br />

                    <button id="addMalt1" type="button" className="text-gray-900 bg-white border border-gray-300 
focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg 
text-sm px-5 py-2.5 me-2 my-2 dark:bg-purple-500 dark:text-white dark:border-gray-600 
dark:hover:bg-purple-400 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add another malt</button><br /><br />
                </div>

                <div id="beerMaltsDiv1"></div>
                <div id="beerMaltsDiv2"></div>


                <div id="beerABVDiv" className="max-w-sm mx-auto">

                    <label htmlFor="beerABVGrade" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">ABV: </label>

                    <select id="beerABVGrade" name="beerABVGrade"
                        className="propertyToAdd
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option>Select an option</option>
                        <option value="none">Alcohol-free (&lt;0.5% ABV</option>
                        <option value="low">Low alcohol (0.5-4% ABV)</option>
                        <option value="mid">Medium alcohol (4-5.9% ABV)</option>
                        <option value="high">High alcohol (6-9% ABV)</option>
                        <option value="very high">Very high alcohol (&gt;9% ABV)</option>
                    </select>

                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

                    <input type="checkbox" value="required" name="beerABVReq"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600 requiredCheck" /><br /><br />
                </div>

                <div id="beerCountryDiv" className="max-w-sm mx-auto">

                    <label htmlFor="beerCountry" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">Beer country: </label>

                    <select id="beerCountry" name="beerCountry" className="propertyToAdd
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option>Select an option</option>
                        <option value="England">England</option>
                        <option value="Northern Ireland">Northern Ireland</option>
                        <option value="Scotland">Scotland</option>
                        <option value="Wales">Wales</option>
                    </select>

                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

                    <input type="checkbox" value="required" name="beerCountryReq"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600 requiredCheck" /><br /><br />
                </div></details></div></div>
    )
};

function FlavourDiv2() {
    return (<div id="flavourDiv2" className="max-w-sm mx-auto">

        <label htmlFor="beerFlavours2" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">Beer flavour: </label>

        <FlavourSelector flavourNumber={2} />

        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

        <input type="checkbox" value="required" name="beerFlavour2Req"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" /><br />

        <button id="addFlavour2" type="button" className="text-gray-900 bg-white border border-gray-300 
            focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg 
            text-sm px-5 py-2.5 me-2 my-2 dark:bg-purple-500 dark:text-white dark:border-gray-600 
            dark:hover:bg-purple-400 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add another flavour</button><br /><br />
    </div>)
}

function FlavourDiv3() {
    return (<div id="flavourDiv3" className="max-w-sm mx-auto">

        <label htmlFor="beerFlavours3" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">Beer flavour: </label>

        <FlavourSelector flavourNumber={3} />

        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

        <input type="checkbox" value="required" name="beerFlavour3Req"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" /><br /><br />
    </div>);
}

function HopsDiv2() {
    return (<div id="hopsDiv2" className="max-w-sm mx-auto">

        <label htmlFor="beerHops2" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">Hops variety: </label>

        <HopSelector hopsNumber={2} />

        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

        <input type="checkbox" value="required" name="beerHops2Req"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" /><br />

        <button id="addHops2" type="button" className="text-gray-900 bg-white border border-gray-300 
            focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg 
            text-sm px-5 py-2.5 me-2 my-2 dark:bg-purple-500 dark:text-white dark:border-gray-600 
            dark:hover:bg-purple-400 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add another hops variety</button><br /><br />
    </div>)
}

function HopsDiv3() {
    return (<div id="hopsDiv3" className="max-w-sm mx-auto">

        <label htmlFor="beerHops3" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">Hops variety: </label>

        <HopSelector hopsNumber={3} />

        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

        <input type="checkbox" value="required" name="beerHops3Req"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" /><br /><br />
    </div>);
}

function MaltDiv2() {
    return (<div id="maltDiv2" className="max-w-sm mx-auto">

        <label htmlFor="beerMalts2" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">Malt: </label>

        <MaltSelector maltNumber={2} />

        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

        <input type="checkbox" value="required" name="beerMalt2Req"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" /><br />

        <button id="addMalt2" type="button" className="text-gray-900 bg-white border border-gray-300 
            focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg 
            text-sm px-5 py-2.5 me-2 my-2 dark:bg-purple-500 dark:text-white dark:border-gray-600 
            dark:hover:bg-purple-400 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add another malt</button><br /><br />
    </div>)
}

function MaltDiv3() {
    return (<div id="maltDiv3" className="max-w-sm mx-auto">

        <label htmlFor="beerMalts3" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">Malt: </label>

        <MaltSelector maltNumber={3} />

        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

        <input type="checkbox" value="required" name="beerMalt3Req"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" /><br /><br />
    </div>);
}

function FlavourSelector({ flavourNumber }) {
    return (<select
        id={`beerFlavours${flavourNumber}`}
        name={`beerFlavours${flavourNumber}`}
        className="propertyToAdd
    bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
        <option>Select an option</option>
        <option value="balanced">Balanced</option>
        <option value="biscuit">Biscuity</option>
        <option value="bitter">Bitter</option>
        <option value="caramel">Caramel</option>
        <option value="chocolate">Chocolate</option>
        <option value="citrus">Citrus</option>
        <option value="coffee">Coffee</option>
        <option value="crisp">Crisp</option>
        <option value="dry">Dry</option>
        <option value="floral">Floral</option>
        <option value="fruit">Fruity</option>
        <option value="full-bodied">Full-bodied</option>
        <option value="grapefruit">Grapefruit</option>
        <option value="herbal">Herbal</option>
        <option value="hops">Hoppy</option>
        <option value="lemon">Lemon</option>
        <option value="malt">Malty</option>
        <option value="mango">Mango</option>
        <option value="orange">Orange</option>
        <option value="peach">Peach</option>
        <option value="pine">Pine</option>
        <option value="pineapple">Pineapple</option>
        <option value="rich">Rich</option>
        <option value="roasted">Roasted</option>
        <option value="spicy">Spicy</option>
        <option value="sweet">Sweet</option>
        <option value="toffee">Toffee</option>
        <option value="tropical">Tropical</option>
        <option value="vanilla">Vanilla</option>
        <option value="zesty">Zesty</option>
    </select>
    );
}

function HopSelector({ hopsNumber }) {
    return (<select
        id={`beerHops${hopsNumber}`}
        name={`beerHops${hopsNumber}`}
        className="propertyToAdd
        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
        <option>Select an option</option>
        <option value="Admiral">Admiral</option>
        <option value="Ahtanum">Ahtanum</option>
        <option value="Amarillo">Amarillo</option>
        <option value="Azacca">Azacca</option>
        <option value="Bramling Cross">Bramling Cross</option>
        <option value="Cascade">Cascade</option>
        <option value="Celeia">Celeia</option>
        <option value="Centennial">Centennial</option>
        <option value="Challenger">Challenger</option>
        <option value="Chinook">Chinook</option>
        <option value="Citra">Citra</option>
        <option value="Columbus">Columbus</option>
        <option value="Ekuanot">Ekuanot</option>
        <option value="El Dorado">El Dorado</option>
        <option value="First Gold">First Gold</option>
        <option value="Fuggles">Fuggles</option>
        <option value="Galaxy">Galaxy</option>
        <option value="Golding">Golding</option>
        <option value="Herkules">Herkules</option>
        <option value="Idaho 7">Idaho 7</option>
        <option value="Magnum">Magnum</option>
        <option value="Mosaic">Mosaic</option>
        <option value="Perle">Perle</option>
        <option value="Pilgrim">Pilgrim</option>
        <option value="Nelson Sauvin">Nelson Sauvin</option>
        <option value="Saaz">Saaz</option>
        <option value="Sabro">Sabro</option>
        <option value="Simcoe">Simcoe</option>
        <option value="Target">Target</option>
        <option value="Willamette">Willamette</option>
    </select>
    );
}

function MaltSelector({ maltNumber }) {
    return (<select
        id={`beerMalts${maltNumber}`}
        name={`beerMalts${maltNumber}`}
        className="propertyToAdd
            bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
        <option>Select an option</option>
        <option value="Amber">Amber</option>
        <option value="Black">Black</option>
        <option value="Brown">Brown</option>
        <option value="Cara">Cara</option>
        <option value="Caramalt">Caramalt</option>
        <option value="Carapils">Carapils</option>
        <option value="Chocolate">Chocolate</option>
        <option value="Crystal">Crystal</option>
        <option value="Dark Crystal">Dark Crystal</option>
        <option value="Dextrin">Dextrin</option>
        <option value="Extra Pale">Extra Pale</option>
        <option value="Golden Naked Oats">Golden Naked Oats</option>
        <option value="Jumbo Oats">Jumbo Oats</option>
        <option value="Low Colour Maris Otter">Low Colour Maris Otter</option>
        <option value="Maris Otter">Maris Otter</option>
        <option value="Malted Barley">Malted Barley</option>
        <option value="Malted Oats">Malted Oats</option>
        <option value="Malted Wheat">Malted Wheat</option>
        <option value="Munich">Munich</option>
        <option value="Oats">Oats</option>
        <option value="Pale">Pale</option>
        <option value="Pale Ale">Pale Ale</option>
        <option value="Pale Crystal">Pale Crystal</option>
        <option value="Pilsner">Pilsner</option>
        <option value="Roasted Barley">Roasted Barley</option>
        <option value="Torrefied Wheat">Torrefied Wheat</option>
        <option value="Vienna">Vienna</option>
        <option value="Wheat">Wheat</option>
    </select>
    );

}

function ImportanceSelector() {
    return (
        <div className=" text-center flex flex-col items-center justify-center mx-auto mb-10 w-2/3">

            <div className="w-full px-8 mx-auto space-y-2 flex items-center justify-center lg:max-w-md">

                <details className=" w-full p-4 rounded-lg text-gray-500 bg-gray-800 border border-b-0 border-gray-200 rounded-t-xl 
            focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 
            hover:bg-blue-100 dark:hover:bg-gray-700 gap-3">

                    <summary className="text-xl font-bold dark:text-white text-center mx-auto list-none 
                    cursor-pointer">Required elements aside, what's most important to you?</summary>

                    <button id="resetImportant" className="text-gray-900 bg-white border border-gray-300 
            focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg 
            text-sm px-5 py-2.5 me-2 my-2 dark:bg-purple-500 dark:text-white dark:border-gray-600 
            dark:hover:bg-purple-400 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">Reset these lists</button>

                    <div id="firstChoice" className="max-w-sm mx-auto">

                        <label htmlFor="firstOptionsList" className="block mb-2 leading-relaxed text-sm font-medium text-gray-900 dark:text-white">What matters most?</label>

                        <select id="firstOptionsList" name="firstOptionsList" className="importanceToAdd
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option value="dontCare">Nothing in particular</option>
                        </select>
                    </div><br />

                    <div id="secondChoice" className="max-w-sm mx-auto">

                        <label htmlFor="secondOptionsList" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">What else is important to you?</label>

                        <select id="secondOptionsList" name="secondOptionsList" className="importanceToAdd
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option value="dontCare">Nothing in particular</option>
                        </select>
                    </div><br />

                    <div id="thirdChoice" className="max-w-sm mx-auto">

                        <label htmlFor="thirdOptionsList" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">What else is important to you?</label>

                        <select id="thirdOptionsList" name="thirdOptionsList" className="importanceToAdd
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option value="dontCare">Nothing in particular</option>
                        </select>
                    </div>
                    <br />
                </details></div></div>
    )
};

function SubmitButton() {
    return (
        <button id="getRecommendations" type="submit" value="Submit" className="focus:outline-none text-white 
        bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm 
        px-5 py-2.5 me-2 mb-24 dark:bg-green-600 dark:hover:bg-green-700 
        dark:focus:ring-green-800">Get recommendations</button>)
};

function RandomDiv() {
    return (<div className="hidden p-4 rounded-lg" id="randomBeer" role="tabpanel" aria-labelledby="random-beer-tab">
        <form method="post" action="/getRandom">
            <AvoidAF />
            <button id="getRandom" type="submit" value="Submit" className="focus:outline-none text-white 
        bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm 
        px-5 py-2.5 me-2 mt-4 mb-4 dark:bg-green-600 dark:hover:bg-green-700 
        dark:focus:ring-green-800">Surprise me</button></form></div>)
};

function SimilarDiv() {
    return (<div className="hidden p-4 rounded-lg" id="similarBeer" role="tabpanel" aria-labelledby="similar-beer-tab">
        <form method="post" action="/getSimilar">
            <label htmlFor="similarBox" className="text-base text-gray-900 italic dark:text-white">Type the name of a beer you
                love into the box below!</label><br /><br />
            <NameSelect /><br /><br />
            <AvoidAF />
            <button id="getSimilar" type="submit" value="Submit" className="focus:outline-none text-white 
        bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm 
        px-5 py-2.5 me-2 mb-24 dark:bg-green-600 dark:hover:bg-green-700 
        dark:focus:ring-green-800" disabled>Get recommendations</button>
        </form>
    </div>)
}

function AvoidAF() {
    return (
        <div>
            <label htmlFor="dontAvoidAF" className="text-base text-gray-900 italic dark:text-white">Include alcohol-free beers   </label>
            <input type="checkbox" id="dontAvoidAF" name="dontAvoidAF" value="dontAvoidAF" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" /><br /><br /></div>
    )
}
function addName() {
    let input = document.getElementById("similarBox");
    let buttonName = this.innerText;
    input.value = buttonName;
    let div = document.getElementById("searchDropdown");
    let p = div.getElementsByTagName("a");
    for (let i = 0; i < p.length; i++) {
        p[i].style.display = "none";
    }
    const similarButton = document.getElementById("getSimilar");
    similarButton.disabled = false;
}

function getOptions() {
    fetch('/getArray')
        .then(response => response.json())
        .then(data => {
            // Use the data in the frontend

            const searchArray = data.searchArray;
            let searchDropdown = document.getElementById("searchDropdown");
            for (let i = 0; i < searchArray.length; i++) {
                let searchOption = document.createElement('a');
                let searchSpace = document.createElement("br");
                searchOption.onclick = addName;
                searchOption.textContent = searchArray[i];
                searchDropdown.appendChild(searchOption);
                searchOption.appendChild(searchSpace);
            }

        })
        .catch(error => console.error('Error fetching data:', error));
}

function NameSelect() {

    function filterFunction() {
        let filter;
        let input = document.getElementById("similarBox");
        let searchDropdown = document.getElementById("searchDropdown");
        if (input.value) {
            filter = input.value.toUpperCase();
        }
        let div = document.getElementById("searchDropdown");
        let p = div.getElementsByTagName("a");
        for (let i = 0; i < p.length; i++) {
            let txtValue = p[i].textContent || p[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                searchDropdown.style.display = "block";
                p[i].style.display = "";
            } else {
                p[i].style.display = "none";
            }
        }
    }


    return (
        <div className="dropdown">
            <input type="text" placeholder="Search..." id="similarBox" name="similarBox" onKeyUp={filterFunction}
                autoComplete="off">
            </input>
            <div id="searchDropdown" className="dropdownContent"></div> </div>)
}


document.getElementById("my-beer-tab").addEventListener("click", function () {
    document.getElementById("myBeer").style.display = "block";
    document.getElementById("randomBeer").style.display = "none";
    document.getElementById("similarBeer").style.display = "none";
    document.getElementById("my-beer-tab").classList.add("text-blue-600", "hover:text-blue-600",
        "dark:text-blue-500", "dark:hover:text-blue-400", "border-blue-600", "dark:border-blue-500");
    document.getElementById("random-beer-tab").classList.remove("text-blue-600", "hover:text-blue-600",
        "dark:text-blue-500", "dark:hover:text-blue-400", "border-blue-600", "dark:border-blue-500");
    document.getElementById("similar-beer-tab").classList.remove("text-blue-600", "hover:text-blue-600",
        "dark:text-blue-500", "dark:hover:text-blue-400", "border-blue-600", "dark:border-blue-500");
})

document.getElementById("random-beer-tab").addEventListener("click", function () {
    document.getElementById("myBeer").style.display = "none";
    document.getElementById("randomBeer").style.display = "block";
    document.getElementById("similarBeer").style.display = "none";
    document.getElementById("random-beer-tab").classList.add("text-blue-600", "hover:text-blue-600",
        "dark:text-blue-500", "dark:hover:text-blue-400", "border-blue-600", "dark:border-blue-500");
    document.getElementById("my-beer-tab").classList.remove("text-blue-600", "hover:text-blue-600",
        "dark:text-blue-500", "dark:hover:text-blue-400", "border-blue-600", "dark:border-blue-500");
    document.getElementById("my-beer-tab").classList.add("hover:text-gray-600", "hover:border-gray-300", "dark:hover:text-gray-300")
    document.getElementById("similar-beer-tab").classList.remove("text-blue-600", "hover:text-blue-600",
        "dark:text-blue-500", "dark:hover:text-blue-400", "border-blue-600", "dark:border-blue-500");
})

document.getElementById("similar-beer-tab").addEventListener("click", function () {
    document.getElementById("myBeer").style.display = "none";
    document.getElementById("randomBeer").style.display = "none";
    document.getElementById("similarBeer").style.display = "block";
    document.getElementById("similar-beer-tab").classList.add("text-blue-600", "hover:text-blue-600",
        "dark:text-blue-500", "dark:hover:text-blue-400", "border-blue-600", "dark:border-blue-500");
    document.getElementById("my-beer-tab").classList.remove("text-blue-600", "hover:text-blue-600",
        "dark:text-blue-500", "dark:hover:text-blue-400", "border-blue-600", "dark:border-blue-500");
    document.getElementById("my-beer-tab").classList.add("hover:text-gray-600", "hover:border-gray-300", "dark:hover:text-gray-300")
    document.getElementById("random-beer-tab").classList.remove("text-blue-600", "hover:text-blue-600",
        "dark:text-blue-500", "dark:hover:text-blue-400", "border-blue-600", "dark:border-blue-500");
})

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

let optionsList = [];

const optionsLists = ["firstOptionsList", "secondOptionsList", "thirdOptionsList"];
let selectedOptions = [];

const selectsToCheck = ["beerType", "beerABVGrade", "beerCountry", "beerFlavours1", "beerFlavours2", "beerFlavours3",
    "beerHops1", "beerHops2", "beerHops3", "beerMalts1", "beerMalts2", "beerMalts3"];

for (let j = 0; j < optionsLists.length; j++) {
    let optionInQuestion = document.getElementById(optionsLists[j]);
    optionInQuestion.addEventListener("click", function () {
        let innerOptionsList = [];
        if (optionInQuestion) {
            for (let k = 0; k < optionInQuestion.options.length; k++) {
                innerOptionsList.push(optionInQuestion.options[k].value);
            }
        }

        for (let i = 0; i < selectsToCheck.length; i++) {
            let checkedSelect = document.getElementById(selectsToCheck[i]);
            if (checkedSelect && checkedSelect.value && checkedSelect.value !== "Select an option") {
                let valueToAdd = checkedSelect.value;
                let siblingCheckbox = checkedSelect.nextSibling;
                siblingCheckbox = siblingCheckbox.nextSibling;
                siblingCheckbox = siblingCheckbox.nextElementSibling;
                console.log(siblingCheckbox);
                let isChecked = siblingCheckbox && siblingCheckbox.checked;
                console.log(isChecked);
                if (!innerOptionsList.includes(valueToAdd) && !selectedOptions.includes(valueToAdd) && !isChecked) {
                    var newOption = document.createElement("option");
                    newOption.value = valueToAdd;
                    newOption.text = valueToAdd;
                    document.getElementById(optionsLists[j]).append(newOption);
                }
            }
        }
    });

    optionInQuestion.addEventListener("change", function () {
        console.log("Changed");
        let valueToAdd = optionInQuestion.value;
        selectedOptions.push(valueToAdd);
    })
}

for (let i = 0; i < selectsToCheck.length; i++) {
    if (document.getElementById(selectsToCheck[i])) {
        document.getElementById(selectsToCheck[i]).addEventListener("change", function () {
            resetImportanceLists();
            selectedOptions = [];
        })
    }
}

document.addEventListener("click", function (event) {
    const beerFlavourDiv1 = document.getElementById("beerFlavourDiv1");
    const beerFlavourDiv2 = document.getElementById("beerFlavourDiv2");
    const beerHopsDiv1 = document.getElementById("beerHopsDiv1");
    const beerHopsDiv2 = document.getElementById("beerHopsDiv2");
    const beerMaltsDiv1 = document.getElementById("beerMaltsDiv1");
    const beerMaltsDiv2 = document.getElementById("beerMaltsDiv2");

    const clickedElement = event.target;

    if (clickedElement.id !== "searchDropdown") {
        document.getElementById("searchDropdown").style.display = "none";
    }

    if (clickedElement.id === "addFlavour1") {
        ReactDOM.render(<FlavourDiv2 />, beerFlavourDiv1);
    }

    if (clickedElement.id === "addFlavour2") {
        ReactDOM.render(<FlavourDiv3 />, beerFlavourDiv2);
    }

    if (clickedElement.id === "addHops1") {
        ReactDOM.render(<HopsDiv2 />, beerHopsDiv1);
    }

    if (clickedElement.id === "addHops2") {
        ReactDOM.render(<HopsDiv3 />, beerHopsDiv2);
    }

    if (clickedElement.id === "addMalt1") {
        ReactDOM.render(<MaltDiv2 />, beerMaltsDiv1);
    }

    if (clickedElement.id === "addMalt2") {
        ReactDOM.render(<MaltDiv3 />, beerMaltsDiv2);
    }

    if (clickedElement.id === "resetImportant") {
        resetImportanceLists();
    }
});


Array.from(document.getElementsByClassName("requiredCheck")).forEach(function (element) {
    element.addEventListener("change", function () {
        resetImportanceLists();
    });
});

function resetImportanceLists() {
    document.getElementById("firstOptionsList").innerHTML = "";
    document.getElementById("secondOptionsList").innerHTML = "";
    document.getElementById("thirdOptionsList").innerHTML = "";

    var dontCareOption = document.createElement("option");
    dontCareOption.value = "dontCare";
    dontCareOption.text = "Nothing in particular";
    document.getElementById("firstOptionsList").appendChild(dontCareOption.cloneNode(true));
    document.getElementById("secondOptionsList").appendChild(dontCareOption.cloneNode(true));
    document.getElementById("thirdOptionsList").appendChild(dontCareOption.cloneNode(true));

    selectedOptions = [];
}

