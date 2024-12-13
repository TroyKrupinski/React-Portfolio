import React, { useRef, useEffect } from 'react';
import untLogo from './UNTEng.png';

const Header: React.FC = () => {
    const podiumRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (podiumRef.current) {
            podiumRef.current.innerHTML = `<a href="https://www.abstractsonline.com/notify/NotifySummary.asp?Action=Ihavereadthisnotice.&MKey=%7B3D7BA944-0529-4DA6-9C8D-D7AFB33E2C10%7D&CKey=%7B502BE1EA-2A67-40A8-A04A-79AD11DD2EB4%7D&NKey=%7B0FE9B03A-A5DB-4BBC-A933-3A32562FC894%7D&strFrom=Notify">Podium position at ORS Meeting, Feb 7th.</a>`;
        }
    }, []);

    return (
        <header>
            <img src={untLogo} alt="UNT College of Engineering Logo" className="unt-logo"/>
            <h1>Troy Krupinski</h1>
            <i>Artificial Intelligence Researcher</i>
            <p>Graduate Candidate & Student Member of the Orthopedic Research Society</p>
            <p>TroyKrupinski@my.unt.edu • (512) 517-5334 • Denton, TX</p>
            
            <p ref={podiumRef}></p>
            <p>
            <div className="header">

                <a href="https://www.abstractsonline.com/notify/NotifySummary.asp?Action=Ihavereadthisnotice.&MKey=%7B3D7BA944-0529-4DA6-9C8D-D7AFB33E2C10%7D&CKey=%7B502BE1EA-2A67-40A8-A04A-79AD11DD2EB4%7D&NKey=%7B0FE9B03A-A5DB-4BBC-A933-3A32562FC894%7D&strFrom=Notify">
                    ORS Annual Meeting - Podium Presentation - Feb 7th. Presenting and discussing my abstact "Explainable Deep Clustering Of Instrumented Gait Data From Children With Unilateral Cerebral Palsy"
                </a>
                </div>
            </p>
        </header>
    );
};

export default Header;
