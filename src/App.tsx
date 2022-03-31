import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from '@components';

import * as Pages from '@pages';


function App(): JSX.Element {
    return (<>
        <Navbar />

        <Routes>
            <Route path="/" element={<Pages.Home />} />
            <Route path="/contact"  element={<Pages.Contact />} />
            <Route path="/projects" element={<Pages.Projects />} />
            <Route path="/projects/:project"  element={<Pages.ProjectView />} />

            <Route path="*" element={<Pages.Error404 />}/>
        </Routes>

        {/* <Footer /> */}
    </>);
}

export default App;
