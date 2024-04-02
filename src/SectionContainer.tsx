import React from 'react';

interface SectionContainerProps {
    title: string;
    children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ title, children }) => (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
);
