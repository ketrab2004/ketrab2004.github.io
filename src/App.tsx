import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import ProjectView from './Pages/ProjectView';
import Error404 from './Pages/404';

function App(): JSX.Element {
    return (<>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:project"  element={<ProjectView />} />

            <Route path="*" element={<Error404 />}/>
        </Routes>

        {/* <Footer /> */}
    </>);
}

export default App;
