import React from "react";
import { CardComponent } from "./ui/CardComponent";
import { projectsData } from "./ui/projectsData";

export function ProjectsPage() {
    const firstRowProjects = projectsData.slice(0, 3);
    const secondRowProjects = projectsData.slice(3);

    return (
        <div className="container mx-auto my-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {firstRowProjects.map((project, index) => (
                    <CardComponent
                        key={project.id || index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        githubLink={project.githubLink}
                        projectLink={project.projectLink}
                    />
                ))}
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
                {secondRowProjects.map((project, index) => (
                    <div key={project.id || index + 3} className="w-full md:w-1/3">
                        <CardComponent
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            githubLink={project.githubLink}
                            projectLink={project.projectLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
