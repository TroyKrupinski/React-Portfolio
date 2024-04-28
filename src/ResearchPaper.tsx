import React from 'react';

interface ResearchPaperProps {
    title: string;
    summary: string;
    pdfLink: string;
}

const ResearchPaper: React.FC<ResearchPaperProps> = ({ title, summary, pdfLink  }) => {
    return (
        <div className="research-paper" onClick={() => window.open(pdfLink, "_blank")}>
            <h3 className="interactive-text">{title}</h3>
            <p className="interactive-text">{summary}</p>
        </div>
    );
};

export default ResearchPaper;
