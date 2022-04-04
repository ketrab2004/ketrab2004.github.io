import type { NextPage } from "next";

// import ExportedImage from "next-image-export-optimizer"; // no typescript definitions :(
// import skyCircle2 from "@images/other/SkyCircle2.png";

const Home: NextPage = () => {
    return (
        <main>
            <h1 className="text-3xl mb-2">Homepage</h1>
            {/* <ExportedImage src="./other/SkyCircle2.png" className="w-96" alt="cool" />
            <ExportedImage src="./other/SkyCircle2.png" className="w-96" alt="cool" /> */}
            {/* <Picture src="./images/other/SkyCircle2.png" className="Home-logo animate-spin" alt="logo" /> */}
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
    )
}

export default Home
