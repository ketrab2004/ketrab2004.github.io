import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import ProjectView from './Pages/ProjectView';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact"  element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:project"  element={<ProjectView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
