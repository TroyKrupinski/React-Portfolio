import React from 'react';
import ResearchPaper from './ResearchPaper';

const ResearchPapers: React.FC = () => {
    const papers = [
        {
            title: 'Applied Artificial Intelligence in Charity Organization Donations',
            summary: 'Using AI to predict donation amounts for charity organizations.',
            pdfLink: '/chairty.pdf',
        },
        {
            title: 'Number Theory and Algorithms in Computer Science',
            summary: 'Exploring the relationship between number theory and algorithms, and their applications in computer science.',
            pdfLink: '/research-paper-two.pdf',
        },
        // ...other papers
    ];

    return (
        <div className="research-papers-container">
            {papers.map((paper, index) => (
                <ResearchPaper
                    key={index}
                    title={paper.title}
                    summary={paper.summary}
                    pdfLink={paper.pdfLink}
                />
            ))}
        </div>
    );
};

export default ResearchPapers;
