import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css'; // only if you are using react-pdf-viewer
const pdfFile = '/Resume.pdf'; // No import statement required

const Resume: React.FC = () => {
    return (
        
        <div className="resume-container">
            {/* If using react-pdf-viewer, set up the viewer here */}
            {/* Otherwise, you can use an iframe as shown below */}
            <iframe 
                src={pdfFile}
                width="100%"
                height="100%"
                style={{ minHeight: '100vh' }} // Adjust the height as needed
            >
                This browser does not support PDFs. Please download the PDF to view it: 
                <a href={pdfFile}>Download PDF</a>
            </iframe>
        </div>
    );
};

export default Resume;
