import React from 'react';
import pfp from '../assets/About/pfp.jpeg';

export function AboutPage() {
    return (
        <div className="container mx-auto my-8 px-4">
            <div className="flex flex-col md:flex-row items-center">
                {/* Profile Picture */}
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                    <img
                        src={pfp}
                        alt="Bhavya Johar"
                        className="rounded-full w-64 h-64 object-cover"
                    />
                </div>

                {/* About Text and Links */}
                <div className="w-full md:w-2/3 md:pl-8">
                    <h1 className="text-4xl font-bold mb-4">Hi! I'm Bhavya</h1>
                    <p className="text-lg text-white mb-6">
                        I'm a student at the University of Virginia, intending to major in Computer Science and Commerce. I’m a passionate software developer with a love for creating a variety of different applications. I have experience as a full-stack software engineer intern at Akima, where I was tasked with building a web-application using a multitude of frameworks and technologies. While I have a deep interest in computer science, I love to learn new skills. Currently, I serve as Director of Finance for the Gayner Family Sustainable Investment Fund. My responsibilities include managing a $140,000 equity portfolio which will be used to provide scholarships to students in 25 years. Outside of academics and work, I enjoy going on nice long hikes, and playing tennis with my friends.
                    </p>
                    <div className="flex space-x-4">
                        {/* GitHub Link */}
                        <a
                            href="https://github.com/BhavyaJohar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {/* GitHub SVG Icon */}
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 0C5.371 0 0 5.372 0 12a12.01 12.01 0 008.207 11.386c.6.113.82-.26.82-.577 0-.285-.01-1.043-.016-2.048-3.338.725-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.088-.744.083-.729.083-.729 1.204.085 1.837 1.237 1.837 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.419-1.304.762-1.604-2.665-.303-5.466-1.332-5.466-5.932 0-1.31.469-2.38 1.236-3.221-.124-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.512 11.512 0 016.003 0c2.292-1.552 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.841 1.235 1.911 1.235 3.221 0 4.61-2.805 5.625-5.475 5.921.43.371.815 1.103.815 2.223 0 1.604-.014 2.896-.014 3.289 0 .32.217.694.825.576A12.01 12.01 0 0024 12c0-6.628-5.371-12-12-12z"
                                />
                            </svg>
                        </a>
                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/bhavya-johar-5571b4170/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {/* LinkedIn SVG Icon */}
                                <path
                                    d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.728C24 .774 23.208 0 22.23 0zM7.09 20.452H3.555V9h3.535v11.452zM5.322 7.482c-1.13 0-2.047-.918-2.047-2.047 0-1.13.917-2.047 2.047-2.047 1.13 0 2.047.918 2.047 2.047 0 1.13-.918 2.047-2.047 2.047zm15.13 12.97h-3.535v-5.568c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.446-2.137 2.94v5.665h-3.535V9h3.396v1.561h.049c.473-.896 1.634-1.84 3.362-1.84 3.595 0 4.26 2.367 4.26 5.448v6.283z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
