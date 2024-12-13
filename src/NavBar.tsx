// NavBar.tsx
import React from 'react';
import untLogo from './UNTEng.png';
interface NavBarProps {
    navigate: (page: string) => void; // Ensure this matches the function signature in App.tsx
}

const NavBar: React.FC<NavBarProps> = ({ navigate }) => {
    return (
        <nav>
            <img src={untLogo} alt="UNT College of Engineering Logo" className="unt-logo" style={{ width: '10rem', height: '5rem' }}/>
            <h5 style={{ fontSize: '14px', fontStyle: 'italic' }}>Troy Krupinski</h5>
            <button onClick={() => navigate('home')} style={{ fontSize: '15px', padding: '5px' }}>Home</button>
            <button onClick={() => navigate('resume')} style={{ fontSize: '15px', padding: '5px' }}>Resume</button>
            <button onClick={() => navigate('researchPapers')} style={{ fontSize: '15px', padding: '5px' }}>Research Papers</button>
            <button onClick={() => navigate('repositories')} style={{ fontSize: '15px', padding: '5px' }}>Repositories</button>
        </nav>
    );
};

export default NavBar;
