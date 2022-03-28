import React from "react";

//import '../css/Home.css';

function Home(): JSX.Element {
    return (
        <main>
            <h1>Homepage</h1>
            <img src="img/SkyCircle2.png" className="Home-logo animate-spin" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </main>
    );
}

export default Home;
