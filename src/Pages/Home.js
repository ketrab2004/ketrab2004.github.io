import React from "react";

//import '../css/Home.css';

function Home() {
    return (
        <main className="Home">
            <h1>Homepage</h1>
            <img src="img/SkyCircle2.png" className="Home-logo" alt="logo" />
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
