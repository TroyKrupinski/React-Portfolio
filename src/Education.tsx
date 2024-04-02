import React from 'react';
import { SectionContainer } from './SectionContainer';

const Education: React.FC = () => {
    const educationEntries = [
        {
            degree: "Masters in Artificial Intelligence – 2025",
            institution: "University of North Texas, Denton, TX",
            concentration: "Concentration:  Biomedical Engineering"
            // Add more details if necessary
        },
        {
            degree: "Bachelor of Applied Science in Computer Programming, Data Analytics & Administration – 2023",
            concentration: "Minor in Computer Science & Computer Engineering",
            institution: "University of North Texas, Denton, TX",            // Add more details if necessary
        }
        ,
        {
            degree: "Professional Certificate in Full-Stack Web Development – 2019",
            institution: "University of Texas, Austin, TX",            // Add more details if necessary
        },
        {
            degree: "Associate of Science in Computer Programming spec. Web Development – 2021",
            institution: "Austin Community College, Austin, TX",
            // Add more details if necessary
        },
        {
            degree: "Certificate in Information Technology – 2021",
            institution: "Austin Community College, Austin, TX",
            // Add more details if necessary
        },
        {
            degree: "Certificate in Advanced Data Analytics – 2023",
            institution: "University of North Texas, Denton, TX",            // Add more details if necessary
            // Add more details if necessary
        }

        // ... other education entries
    ];

    const honorsAndAwards = [
        "President's List, Neal Joseph Smatresk, University of North Texas",
        "Golden Key International Honour Society, University of North Texas",
        "The National Society of Leadership, University of North Texas",
        "Phi Sigma Pi - Phi Sigma Pi National Honor Fraternity, Austin Community College",
        "Dean's List, University of North Texas",
        "Austin Community College Honors, Austin Community College",
        // ... other honors and awards
    ];

    return (
        <SectionContainer title="Education, Honors & Awards">
            {educationEntries.map((edu, index) => (
                <div key={index} className="education-entry">
                    <h3 className="interactive-text">{edu.degree}</h3>
                    <h4 className="interactive-text">{edu.concentration}</h4>
                    <p className="interactive-text">{edu.institution}</p>
                    {/* Add more details if necessary */}
                </div>
            ))}
            <div className="honors-awards">
                <h3>Honors & Awards</h3>
                <ul>
                    {honorsAndAwards.map((honor, index) => (
                        <li className="interactive-text" key={index}>{honor}</li>
                    ))}
                </ul>
            </div>
        </SectionContainer>
    );
};

export default Education;
