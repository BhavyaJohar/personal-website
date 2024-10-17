import React from 'react';
import { LandingPage } from './components/LandingPage';
import Resume from './components/Resume';
import { SectionHeader } from './components/SectionHeader';
import {ProjectsPage } from "./components/Projects";
import { AboutPage } from "./components/About.jsx";
import { ContactPage } from "./components/Contact.jsx";

function App() {
    return (
        <div className="dark bg-gray-900 text-white">
            {/* Landing Page */}
            <LandingPage />

            <SectionHeader title="About" />

            <AboutPage />

            {/* Project Header */}
            <SectionHeader title="Projects" />

            <ProjectsPage />

            {/* Resume Header */}
            <SectionHeader title="Resume" />

            {/* Resume Section */}
            <Resume />

            <SectionHeader title="Reach Out" />

            <ContactPage />

        </div>
    );
}

export default App;
