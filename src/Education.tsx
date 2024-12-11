import React from 'react';
import { SectionContainer } from './SectionContainer';

const Education: React.FC = () => {
    const educationEntries = [
        {
            degree: "Masters in Artificial Intelligence – Summer 2025",
            gpa: "GPA: 4",
            institution: "University of North Texas, Denton, TX",
            concentration: "Concentration:  Biomedical Engineering",
            current: "Guided under the supervision of Dr. Mark Albert, Ph.D.",

        },
        {
            degree: "Bachelor of Applied Science in Computer Programming, Data Analytics & Administration – 2023",
            concentration: "Minor in Computer Science & Computer Engineering",
            institution: "University of North Texas, Denton, TX",   
            current: "The National Society of Leadership, University of North Texas",
            gpa: "GPA: 3.87",
        }
        ,
        {
            degree: "Professional Certificate in Full-Stack Web Development – 2019",
            concentration: "Concentration:  MERN Stack",
            institution: "University of Texas, Austin, TX",  
            current: "GPA: 4",
            // Add more details if necessary
        },
        {
            degree: "Associate of Science in Computer Programming spec. Web Development – 2021",
            concentration:"Cloud Computing, Web Development, IT, Networking",
            institution: "Austin Community College, Austin, TX",
            current: "GPA: 3.4",
            
        },
        {
            degree: "Certificate in Information Technology – 2021",
            institution: "Austin Community College, Austin, TX",
            concentration: "IT, Networking, Cybersecurity",
            current: "GPA: 3.4",
        },
        {
            degree: "Certificate in Advanced Data Analytics – 2023",
            institution: "University of North Texas, Denton, TX",   
            concentration: "Data Analytics, Data Science, Machine Learning",
            current: "GPA: 3.8"         // Add more details if necessary
        }

    ];

    const honorsAndAwards = [
        "President's List, Neal Joseph Smatresk, University of North Texas",
        "Golden Key International Honour Society, University of North Texas",
        "The National Society of Leadership, University of North Texas",
        "Phi Sigma Pi - Phi Sigma Pi National Honor Fraternity, Austin Community College",
        "Dean's List, University of North Texas",
        "Austin Community College Honors, Austin Community College",

    ];

    return (
        <SectionContainer title="Education, Honors & Awards">
            {educationEntries.map((edu, index) => (
                <div key={index} className="education-entry">
                    <h2 className="interactive-text">{edu.degree}</h2>
                    <h3 className="interactive-text">{edu.institution}</h3>

                    <a className="interactive-text">{edu.concentration}</a>
                    <br></br>                    <br></br>

                    <a className='interactive-text'>{edu.current}</a>
                    <br></br>                    <br></br>
                    <a className='interactive-text'>{edu.gpa}</a>
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
