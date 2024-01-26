ReactDOM.render(
    <div className="App w-full items-center text-center">
        <Header />
        <main>
            <HamburgerMenu />
            <Login />
        </main>
    </div>, document.getElementById('root')
);


function Header() {
    return (<header className="App-header">
        <h2 className="mb-4 text-4xl font-extrabold flex justify-center text-center items-center mx-auto leading-none tracking-tight text-gray-900 md:text-5xl 
    lg:text-6xl dark:text-white bg-green-700 h-20 w-full">Sign In or Up</h2>
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

function Login() {
    return (<div>
        <form className="space-y-1" action="/signIn" method="post">
            <label htmlFor="username" className="text-white">Username: </label><input type="text" name="username"></input><br />
            <label htmlFor="password" className="text-white">Password: </label><input type="password" name="password"></input><br />
            <p className="text-white">Don't have an account yet? <a href="#">Sign up</a> here!</p>
            <SubmitButton />
        </form>
        <form className="space-y-1" action="/signUp" method="post">
            <label htmlFor="username" className="text-white">Username: </label><input type="text" name="newUsername"></input><br />
            <label htmlFor="password" className="text-white">Password: </label><input type="password" name="newPassword"></input><br />
            <label htmlFor="password" className="text-white">Confirm password: </label><input type="password" name="newConfirmedPassword"
                id="newConfirmedPassword"></input><br />
            <p className="text-white">Already got an account? <a href="#">Sign in</a> here!</p>
            <SubmitButton />
        </form>
    </div>)
}

function SubmitButton() {
    return (
        <button id="getRecommendations" type="submit" value="Submit" className="focus:outline-none text-white 
        bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm 
        px-5 py-2.5 me-2 mb-24 dark:bg-green-600 dark:hover:bg-green-700 
        dark:focus:ring-green-800">Get recommendations</button>)
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