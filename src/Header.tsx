import React from 'react';
import untLogo from './UNTEng.png';
const Header: React.FC = () => (
    <header>
         <img src={untLogo} alt="UNT College of Engineering Logo" className="unt-logo"/>
        <h1>Troy Krupinski</h1>
        <i>Artificial Intelligence Researcher</i>
        <p>Graduate Candidate & Student Member of the Orthopedic Research Society</p>
        <p>TroyKrupinski@my.unt.edu • (512) 517-5334 • Denton, TX</p>
    </header>
);

export default Header;
