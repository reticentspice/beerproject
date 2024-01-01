
ReactDOM.render(
    <div className="App mx-auto items-center text-center">
        <Header />
        <main>
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
        <h2 className="mb-4 text-4xl font-extrabold text-center mx-auto leading-none tracking-tight text-gray-900 md:text-5xl 
    lg:text-6xl dark:text-white bg-green-700">Build Your Perfect Beer</h2>
    </header>);
}

function Tabs() {
    return (<div className="mb-4 border-b border-gray-200 dark:border-gray-700" id="mainTab">
        <ul className="flex flex-wrap -mb-px text-sm text-white font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <li className="me-2" role="presentation">
                <button className="inline-block p-4 border-b-2 text-white rounded-t-lg" id="my-beer-tab" data-tabs-target="#myBeer" type="button" role="tab" aria-controls="myBeer" aria-selected="false">Build Custom Beer</button>
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
                dark:bg-gray-700 dark:border-gray-600" /></div>

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
                        <option value="bock">Bock</option>
                        <option value="brown ale">Brown ale</option>
                        <option value="dark ale">Dark ale</option>
                        <option value="dark lager">Dark lager</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="IPA">IPA</option>
                        <option value="pale ale">Pale ale</option>
                        <option value="pale lager">Pale lager</option>
                        <option value="porter">Porter</option>
                        <option value="sour">Sour</option>
                        <option value="specialty beer">Specialty beer</option>
                        <option value="stout">Stout</option>
                        <option value="strong ale">Strong ale</option>
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

                    <select id="beerFlavours" name="beerFlavours" className="propertyToAdd
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option>Select an option</option>
                        <option value="bitter">Bitter</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="citrus">Citrus</option>
                        <option value="coffee">Coffee</option>
                        <option value="fruit">Fruit</option>
                        <option value="malt">Malt</option>
                        <option value="peat">Peat</option>
                        <option value="tropical">Tropical</option>
                        <option value="grass">Grass</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="papaya">Papaya</option>
                        <option value="caramel">Caramel</option>
                        <option value="sweet">Sweet</option>
                        <option value="lemon">Lemon</option>
                        <option value="zesty">Zesty</option>
                    </select>

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
    return (<div id="beerFlavourDiv2" className="max-w-sm mx-auto">

        <label htmlFor="beerFlavours2" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">Beer flavour: </label>

        <select id="beerFlavours2" name="beerFlavours2" className="propertyToAdd
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option>Select an option</option>
            <option value="bitter">Bitter</option>
            <option value="chocolate">Chocolate</option>
            <option value="citrus">Citrus</option>
            <option value="coffee">Coffee</option>
            <option value="fruit">Fruit</option>
            <option value="malty">Malty</option>
            <option value="peaty">Peaty</option>
        </select>

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
    return (<div id="beerFlavourDiv3" className="max-w-sm mx-auto">

        <label htmlFor="beerFlavours3" className="block leading-relaxed mb-2 text-sm font-medium text-gray-900 dark:text-white">Beer flavour: </label>

        <select id="beerFlavours3" name="beerFlavours3" className="propertyToAdd
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option>Select an option</option>
            <option value="bitter">Bitter</option>
            <option value="chocolate">Chocolate</option>
            <option value="citrus">Citrus</option>
            <option value="coffee">Coffee</option>
            <option value="fruit">Fruit</option>
            <option value="malty">Malty</option>
            <option value="peaty">Peaty</option>
        </select>

        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required </label>&nbsp;&nbsp;

        <input type="checkbox" value="required" name="beerFlavour3Req"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600" /><br /><br />
    </div>);
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
            <button id="getRandom" type="submit" value="Submit" className="focus:outline-none text-white 
        bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm 
        px-5 py-2.5 me-2 mt-4 mb-4 dark:bg-green-600 dark:hover:bg-green-700 
        dark:focus:ring-green-800">Surprise me</button></form></div>)
};

function SimilarDiv() {
    return (<div className="hidden p-4 rounded-lg" id="similarBeer" role="tabpanel" aria-labelledby="similar-beer-tab">
        <label htmlFor="similarBox" className="text-base text-gray-900 italic dark:text-white">Type the name of a beer you
            love into the box below!</label><br /><br />
        <input type="text" id="similarBox"></input>
    </div>)
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
    document.getElementById("random-beer-tab").classList.remove("text-blue-600", "hover:text-blue-600",
        "dark:text-blue-500", "dark:hover:text-blue-400", "border-blue-600", "dark:border-blue-500");
})

let optionsList = [];
let previousType;
let previousFlavour1;
let previousFlavour2;
let previousFlavour3;
let previousABVGrade;
let previousCountry;

let beerTypeOption;
let beerFlavoursOption;
let beerFlavours2Option;
let beerFlavours3Option;
let beerABVGradeOption;
let beerCountryOption;

$("#beerType").on("change", function () {

    if (previousType !== undefined) {
        $("#firstOptionsList option[value='" + previousType + "']").remove();
        $("#secondOptionsList option[value='" + previousType + "']").remove();
        $("#thirdOptionsList option[value='" + previousType + "']").remove();
        var index = optionsList.indexOf(beerTypeOption);
        if (index > -1) {
            optionsList.splice(index, 1);
        }
    }
    beerTypeOption = '<option value="' + $("#beerType").val() + '">' + $("#beerType option:selected").text() + '</option>';
    $("#firstOptionsList").append($(beerTypeOption));
    $("#secondOptionsList").append($(beerTypeOption));
    $("#thirdOptionsList").append($(beerTypeOption));
    optionsList.push(beerTypeOption);
    previousType = $("#beerType").val();
})


$("#beerFlavours").on("change", function () {
    if (previousFlavour1 !== undefined) {
        $("#firstOptionsList option[value='" + previousFlavour1 + "']").remove();
        $("#secondOptionsList option[value='" + previousFlavour1 + "']").remove();
        $("#thirdOptionsList option[value='" + previousFlavour1 + "']").remove();
        var index = optionsList.indexOf(beerFlavoursOption);
        if (index > -1) {
            optionsList.splice(index, 1);
        }
    }
    beerFlavoursOption = '<option value="' + $("#beerFlavours").val() + '">' + $("#beerFlavours option:selected").text() + '</option>';
    $("#firstOptionsList").append($(beerFlavoursOption));
    $("#secondOptionsList").append($(beerFlavoursOption));
    $("#thirdOptionsList").append($(beerFlavoursOption));
    optionsList.push(beerFlavoursOption);
    previousFlavour1 = $("#beerFlavours").val();
})

$(document).on("change", "#beerFlavours2", function () {
    if (previousFlavour2 !== undefined) {
        $("#firstOptionsList option[value='" + previousFlavour2 + "']").remove();
        $("#secondOptionsList option[value='" + previousFlavour2 + "']").remove();
        $("#thirdOptionsList option[value='" + previousFlavour2 + "']").remove();
        var index = optionsList.indexOf(beerFlavours2Option);
        if (index > -1) {
            optionsList.splice(index, 1);
        }
    }
    beerFlavours2Option = '<option value="' + $("#beerFlavours2").val() + '">' + $("#beerFlavours2 option:selected").text() + '</option>';
    $("#firstOptionsList").append($(beerFlavours2Option));
    $("#secondOptionsList").append($(beerFlavours2Option));
    $("#thirdOptionsList").append($(beerFlavours2Option));
    optionsList.push(beerFlavours2Option);
    previousFlavour2 = $("#beerFlavours2").val();
})

$(document).on("change", "#beerFlavours3", function () {
    if (previousFlavour3 !== undefined) {
        $("#firstOptionsList option[value='" + previousFlavour3 + "']").remove();
        $("#secondOptionsList option[value='" + previousFlavour3 + "']").remove();
        $("#thirdOptionsList option[value='" + previousFlavour3 + "']").remove();
        var index = optionsList.indexOf(beerFlavours3Option);
        if (index > -1) {
            optionsList.splice(index, 1);
        }
    }
    beerFlavours3Option = '<option value="' + $("#beerFlavours3").val() + '">' + $("#beerFlavours3 option:selected").text() + '</option>';
    $("#firstOptionsList").append($(beerFlavours3Option));
    $("#secondOptionsList").append($(beerFlavours3Option));
    $("#thirdOptionsList").append($(beerFlavours3Option));
    optionsList.push(beerFlavours3Option);
    previousFlavour3 = $("#beerFlavours3").val();
})

$("#beerABVGrade").on("change", function () {
    if (previousABVGrade !== undefined) {
        $("#firstOptionsList option[value='" + previousABVGrade + "']").remove();
        $("#secondOptionsList option[value='" + previousABVGrade + "']").remove();
        $("#thirdOptionsList option[value='" + previousABVGrade + "']").remove();
        var index = optionsList.indexOf(beerABVGradeOption);
        if (index > -1) {
            optionsList.splice(index, 1);
        }
    }
    beerABVGradeOption = '<option value="' + $("#beerABVGrade").val() + '">' + $("#beerABVGrade option:selected").text() + '</option>';
    $("#firstOptionsList").append($(beerABVGradeOption));
    $("#secondOptionsList").append($(beerABVGradeOption));
    $("#thirdOptionsList").append($(beerABVGradeOption));
    optionsList.push(beerABVGradeOption);
    previousABVGrade = $("#beerABVGrade").val();
})

$("#beerCountry").on("change", function () {
    if (previousCountry !== undefined) {
        $("#firstOptionsList option[value='" + previousCountry + "']").remove();
        $("#secondOptionsList option[value='" + previousCountry + "']").remove();
        $("#thirdOptionsList option[value='" + previousCountry + "']").remove();
        var index = optionsList.indexOf(beerCountryOption);
        if (index > -1) {
            optionsList.splice(index, 1);
        }
    }
    beerCountryOption = '<option value="' + $("#beerCountry").val() + '">' + $("#beerCountry option:selected").text() + '</option>';
    $("#firstOptionsList").append($(beerCountryOption));
    $("#secondOptionsList").append($(beerCountryOption));
    $("#thirdOptionsList").append($(beerCountryOption));
    optionsList.push(beerCountryOption);
    previousCountry = $("#beerCountry").val();
})

$("#firstOptionsList").on("change", function () {
    let firstOption = $("#firstOptionsList option:selected").val();
    let secondOptionsList = $("#secondOptionsList");
    let thirdOptionsList = $("#thirdOptionsList");
    secondOptionsList.find('option[value="' + firstOption + '"]').remove();
    thirdOptionsList.find('option[value="' + firstOption + '"]').remove();
})

$("#secondOptionsList").on("change", function () {
    let secondOption = $("#secondOptionsList option:selected").val();
    let thirdOptionsList = $("#thirdOptionsList");
    thirdOptionsList.find('option[value="' + secondOption + '"]').remove();
})

const beerFlavourDiv1 = document.getElementById("beerFlavourDiv1");
const beerFlavourDiv2 = document.getElementById("beerFlavourDiv2");

document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.id === "addFlavour1") {
        ReactDOM.render(<FlavourDiv2 />, beerFlavourDiv1);
    }

    // Check if the clicked element has the ID "addFlavour1"
    if (clickedElement.id === "addFlavour2") {
        ReactDOM.render(<FlavourDiv3 />, beerFlavourDiv2);
    }

    if (clickedElement.id === "resetImportant") {
        $("#firstOptionsList option").remove();
        $("#secondOptionsList option").remove();
        $("#thirdOptionsList option").remove();
        for (let i = 0; i < optionsList.length; i++) {
            $("#firstOptionsList").append(optionsList[i]);
            $("#secondOptionsList").append(optionsList[i]);
            $("#thirdOptionsList").append(optionsList[i]);
        }
    }
});

$(".requiredCheck").change(function () {
    if ($(this).is(":checked")) {
        let itemToRemove = $(this).siblings("select").val();
        $("#firstOptionsList option[value='" + itemToRemove + "']").remove();
        $("#secondOptionsList option[value='" + itemToRemove + "']").remove();
        $("#thirdOptionsList option[value='" + itemToRemove + "']").remove();
    }
    else {
        let itemToAdd = '<option value="' + $(this).siblings("select").val() + '">' +
            $(this).siblings("select").find(":selected").text() + '</option>';
        $("#firstOptionsList").append(itemToAdd);
        $("#secondOptionsList").append(itemToAdd);
        $("#thirdOptionsList").append(itemToAdd);
    }
})