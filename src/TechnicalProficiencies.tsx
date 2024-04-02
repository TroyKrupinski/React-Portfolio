import React from 'react';
import { SectionContainer } from './SectionContainer';

const TechnicalProficiencies: React.FC = () => {
    const skills = ["Tableau", "SAS", "R", "Excel", "HTML / CSS / Bootstrap", "JavaScript / TypeScript", "React", "Python", "SQL", "MongoDB", "Node.js", "Express",  "TensorFlow",  "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Plotly", "Jupyter Notebook", "Git", "GitHub", "AWS", ];
    return (
        <SectionContainer title="Technical Proficiencies">
            <ul>
                {skills.map(skill => <li className="interactive-text" key={skill}>{skill}</li>)}
            </ul>
        </SectionContainer>
    );
};

export default TechnicalProficiencies;
