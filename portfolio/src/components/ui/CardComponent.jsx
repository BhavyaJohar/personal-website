import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function CardComponent({ title, description, imageUrl, projectLink, githubLink }) {
    return (
        <CardContainer className="inter-var" containerClassName="">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ={50}
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ={60}
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ={100} className="w-full mt-4">
                    <img
                        src={imageUrl}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={title}
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        GitHub →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        View Project
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
