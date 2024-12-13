// NavBar.tsx
import React from 'react';
import untLogo from './UNTEng.png';
interface NavBarProps {
    navigate: (page: string) => void; // Ensure this matches the function signature in App.tsx
}

const NavBar: React.FC<NavBarProps> = ({ navigate }) => {
    return (
        <nav>
            <div style={{ textAlign: 'center' }}>

     
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '1rem' 
            }}>
                <h5 style={{ 
                    fontSize: '20px', 
                    fontStyle: 'italic',
                    margin: '0'
                }}>Troy Krupinski</h5>
                <img 
                    src={untLogo} 
                    alt="UNT College of Engineering Logo" 
                    className="unt-logo" 
                    style={{ 
                    width: '10rem', 
                    height: '5rem',
                    marginBottom: '0.5rem'
                    }}
                />
            </div>
            </div>
            <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1rem'
            }}>
            <button onClick={() => navigate('home')} style={{ fontSize: '15px', padding: '3px' }}>Home</button>
            <button onClick={() => navigate('resume')} style={{ fontSize: '15px', padding: '3px' }}>Resume</button>
            <button onClick={() => navigate('researchPapers')} style={{ fontSize: '15px', padding: '3px' }}>Research Papers</button>
            <button onClick={() => navigate('repositories')} style={{ fontSize: '15px', padding: '3px' }}>Repositories & Projects</button>
            </div>
        </nav>
    );
};

export default NavBar;
