export interface TechnicalProficiency {
    categories: string[];
}

export interface CareerExperience {
    role: string;
    company: string;
    location: string;
    duration: string;
    achievements: string[];
}

export interface EducationDetail {
    degree: string;
    institution: string;
    location: string;
    duration: string;
    gpa: string; // GPA is optional
}
