import React from 'react';
import { SectionContainer } from './SectionContainer';

const CareerExperience: React.FC = () => {
    const experiences = [
        {
            role: "Freelance Mathematics Tutor & Web/Software Developer",
            company: "Self Employed",
            duration: "2019 – Present",
            achievements: [
                "Developed scalable web applications.",
                "Applied Artificial Intelligence to automate business processes.",
                "Implemented IT Solutions using Multiple Javascript frameworks.",
                "Achieved GED pass rate of 87% for underprivileged students."
            ]
        },
        {
            role: "Artificial Intelligence Researcher",
            company: "University of North Texas",
            duration: "Summer 2024",
            achievements: [

            ]
        },
        // Add more experiences as needed
    ];

    return (
        <SectionContainer title="Career Experience">
            {experiences.map(exp => (
                <div key={exp.role}>
                    <h4 className="interactive-text">{exp.role}</h4>
                    <p className="interactive-text">{exp.company} - {exp.duration}</p>
                    <ul>
                        {exp.achievements.map(achievement => <li className="interactive-text" key={achievement}>{achievement}</li>)}
                    </ul>
                </div>
            ))}
        </SectionContainer>
    );
};

export default CareerExperience;
