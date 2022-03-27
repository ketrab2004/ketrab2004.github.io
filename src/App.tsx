import React from 'react';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import ProjectView from './Pages/ProjectView';
import Error404 from './Pages/404';

import { Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:project"  element={<ProjectView />} />

            <Route path="*" element={<Error404 />}/>
        </Routes>
    );
}

export default App;
