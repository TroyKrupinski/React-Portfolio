import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import TechnicalProficiencies from './TechnicalProficiencies';
import CareerExperience from './CareerExperience';
import Education from './Education';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import Repositories from './Repositories';
import { useBackground } from './BackgroundContext';
import Resume from './Resume';
import ResearchPapers from './ResearchPapers';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<string>('home');
    const { changeBackground } = useBackground();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxDocumentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = scrollY / maxDocumentHeight;

            // Create a color that starts at #00FF00 and becomes lighter on scroll
            const greenValue = Math.min(255, Math.floor(255 - (scrollPosition * 155))); // from 100 to 255
            const newColor = `rgb(100, ${greenValue}, 100)`;
            changeBackground(newColor);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [changeBackground]);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxDocumentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const colorValue = Math.floor((scrollPosition / maxDocumentHeight) * 255);
            const newColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
            changeBackground(newColor);
            changeBackground(newColor);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [changeBackground]);
    const navigateTo = (page: string) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <NavBar navigate={navigateTo} />
            {currentPage === 'resume' && <Resume />}
            {currentPage === 'researchPapers' && <ResearchPapers />}

    {currentPage === 'repositories' && <Repositories />}

            {currentPage === 'home' && (
                <>
                <title>Troy Krupinski</title>
                <div className="interactive-component">

                    <Header />
                    </div>
                    <Education />
                    <CareerExperience />

                    <TechnicalProficiencies />
                </>
            )}
            {currentPage === 'contact' && <ContactForm />}
        </div>
    );
};

export default App;
