// NavBar.tsx
import React from 'react';

interface NavBarProps {
    navigate: (page: string) => void; // Ensure this matches the function signature in App.tsx
}

const NavBar: React.FC<NavBarProps> = ({ navigate }) => {
    return (
        <nav>
            <button onClick={() => navigate('resume')}>Resume</button>
            <button onClick={() => navigate('researchPapers')}>Research Papers</button>

            <button onClick={() => navigate('home')}>Home</button>
            <button onClick={() => navigate('contact')}>Contact</button>
            <button onClick={() => navigate('repositories')}>Repositories</button>

        </nav>
    );
};

export default NavBar;
