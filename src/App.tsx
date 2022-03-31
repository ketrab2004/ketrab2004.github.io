import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '@components/Navbar';

import Home from '@pages/Home';
import Contact from '@pages/Contact';
import Projects from '@pages/Projects';
import ProjectView from '@pages/ProjectView';
import Error404 from '@pages/404';

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
