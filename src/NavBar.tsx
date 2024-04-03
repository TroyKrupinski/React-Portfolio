// NavBar.tsx
import React from 'react';
import untLogo from './UNTEng.png';
interface NavBarProps {
    navigate: (page: string) => void; // Ensure this matches the function signature in App.tsx
}

const NavBar: React.FC<NavBarProps> = ({ navigate }) => {
    return (
        <nav>
                     <img src={untLogo} alt="UNT College of Engineering Logo" className="unt-logo2"/>

                        <h5>Troy Krupinski</h5>

            <button onClick={() => navigate('resume')}>Resume</button>
            <button onClick={() => navigate('researchPapers')}>Research Papers</button>

            <button onClick={() => navigate('home')}>Home</button>
            <button onClick={() => navigate('contact')}>Contact</button>
            <button onClick={() => navigate('repositories')}>Repositories</button>
        </nav>
    );
};

export default NavBar;
