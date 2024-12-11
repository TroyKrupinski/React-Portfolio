import React, { useEffect, useState } from 'react';

interface Repository {
    name: string;
    html_url: string;
    description: string;
    language: string;
    stargazers_count: number;
    created_at: string;
}

const Repositories: React.FC = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/TroyKrupinski/repos')
            .then(response => response.json())
            .then(data => {
                data.sort((a: Repository, b: Repository) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                setRepos(data);
                setIsLoading(false);
                
            })
            .catch(error => console.error("Failed to load repositories", error));
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <div className="git">
            <h2>https://github.com/TroyKrupinski?tab=repositories</h2>
            <h2>Public Repositories</h2>
            </div>
            <ul>


                {repos.map(repo => (
                    <div className="interactive-component">

                    <li key={repo.name} className="repo-container">
                        

                        <a className="interactive-text" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a> {}

                        <p>
                            {repo.name == "project1" ? "UT Austin Bootcamp project that uses HTML, CSS, and Javascript" : ""}
                            {repo.name == "ADTA5230GROUP13" ? "Developed a classification model using data from the most recent campaign that can effectively capture likely donors so that the expected net profit is maximized" : ""}
                            {repo.name == "project-2" ? "": ""}
                            
                            {repo.description ? repo.description : 
                                repo.name == "FriendFinder" ? "Basic full-stack application that matches users based on personality" :
                                repo.name == "project2" ? "UT Austin Bootcamp project that uses MySQL, Node, Express, Handlebars, and ORM" :
                                repo.name =="project3" ? "UT Austin Bootcamp project that uses MongoDB, Express, React, and Node" :
                                repo.name == "Project2_CSCE5215" ? "A CelebA dataset-based project using VGG16 for gender, age, smiling, and facial feature classification." :
                                repo.name == "ADTA5340-HospitalAnalytics" ? "Using machine learning to predict patient length of stay":
                                repo.name == "H2M" ? "Contributor to a project which recreated old MW2 multiplayer in the MW2 Campaign Remaster engine":
                                repo.description ? repo.description : repo.name
                            }
                        </p>

                    </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};
export default Repositories;
