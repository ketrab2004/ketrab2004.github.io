import type { NextPage } from "next";

import Img from 'react-optimized-image';
import skyCircle2 from "@images/other/SkyCircle2.png";

const Home: NextPage = () => {
    console.log(skyCircle2);
    
    return (
        <main>
            <h1 className="text-3xl mb-2">Homepage</h1>
            <Img src={skyCircle2} className="w-96" alt="cool" type="project_full" />
            <Img src={skyCircle2} className="w-96" alt="cool" type="project_item" />
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
