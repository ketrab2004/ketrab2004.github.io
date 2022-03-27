import React from 'react';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import ProjectView from './Pages/ProjectView';

import { Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:project"  element={<ProjectView />} />
        </Routes>
    );
}

export default App;
