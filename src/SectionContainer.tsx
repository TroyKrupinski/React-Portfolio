import React from 'react';

interface SectionContainerProps {
    title: string;
    children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ title, children }) => (
    <section>
        <h1>{title}</h1>
        {children}
    </section>
);
