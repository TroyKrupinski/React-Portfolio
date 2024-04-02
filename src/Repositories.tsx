import React, { useEffect, useState } from 'react';

interface Repository {
    name: string;
    html_url: string;
    description: string;
    language: string;
    stargazers_count: number;
}

const Repositories: React.FC = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/TroyKrupinski/repos')
            .then(response => response.json())
            .then(data => {
                setRepos(data);
                setIsLoading(false);
            })
            .catch(error => console.error("Failed to load repositories", error));
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h6>Repositories</h6>

            <ul>
                {repos.map(repo => (
                                                <div className="interactive-component">

                    <li key={repo.name} className="repo-container">
                        <a className="interactive-text" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a> - Stars: {repo.stargazers_count}
                        <p >{repo.description}</p>
                    </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};
export default Repositories;
