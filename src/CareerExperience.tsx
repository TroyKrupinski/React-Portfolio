import React from 'react';
import { SectionContainer } from './SectionContainer';

const CareerExperience: React.FC = () => {
    const experiences = [
        {
            role: "Artificial Intelligence Researcher & Graduate Candidate",
            company: "University of North Texas",
            duration: "2024-Current",
            achievements: [
                "First author of 'Objective Classification of Hemiplegic Cerebral Palsy: Objective Cluster Analysis of Whole Time Series Gait Data",
                "Presenting our team's work @ the Annual Meeting of the Orthopedic Research Society, podium spot.",
                "Developed machine learning models to predict donation amounts for charity organizations.",
                "Conducted research on the relationship between number theory and algorithms in computer science.",
                "Student-member of the Orthopedic Research Society.",
            ]
        },
        {
            role: "Freelance Mathematics Tutor & Web/Software Developer",
            company: "Self Employed",
            duration: "2019 – 2024",
            achievements: [
                "Developed scalable full-stack web applications.",
                "Tutored over multiple low-income students in mathematics and computer science.",
                "Implemented IT Solutions using Multiple front-end & back end frameworks.",
                "Achieved GED pass rate of 87% for underprivileged students.",
                "Software Developer skilled in Java, Python, C++, C#, and JavaScript.",
                "Completed multiple projects in web development, data analytics, and software development.",
            ]
        },

        // Add more experiences as needed
    ];

    return (
        <SectionContainer title="Career Experience">
            {experiences.map(exp => (
                <div key={exp.role}>
                    <h2 className="interactive-text">{exp.role}</h2>
                    <a className="interactive-text">{exp.company} - {exp.duration}</a>
                    <ul>
                        {exp.achievements.map(achievement => <li className="interactive-text" key={achievement}>{achievement}</li>)}
                    </ul>
                </div>
            ))}
        </SectionContainer>
    );
};

export default CareerExperience;
