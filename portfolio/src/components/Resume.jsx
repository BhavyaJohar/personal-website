import React from "react";
import { TracingBeam } from "./ui/TracingBeam"; // Importing the TracingBeam component

const Resume = () => {
    return (
        <div className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Wrapping resume content in TracingBeam for scroll effect */}
            <TracingBeam>
                <div className="px-6 md:px-10 lg:px-24 space-y-16">

                    {/* Education Section */}
                    <section id="education" className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">Education</h2>
                        <div>
                            <h3 className="text-xl font-semibold">University of Virginia | College of Arts and Sciences</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Expected Graduation: May 2027</p>
                            <p className="italic">B.A. Computer Science & B.S. Commerce (Finance Concentration)</p>
                            <p className="text-sm">Cumulative GPA: 4.0/4.0</p>
                            <p>Relevant Coursework: Data Structures & Algorithms, Computer Systems & Organization, Multivariable Calculus, Applied Linear Algebra</p>
                            <p>Honors: Dean’s List, Gosnell Prize Nominee</p>
                        </div>
                    </section>

                    {/* Professional Experience Section */}
                    <section id="experience" className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">Professional Experience</h2>

                        <div>
                            <h3 className="text-xl font-semibold">Software Engineer (STEM Intern)</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Akima - Herndon, VA | June 2024 – August 2024</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Led a cross-functional team of 7 as Scrum Master, managing agile workflows, and ensuring on-time project milestone completion.</li>
                                <li>Engineered a web-based application using AWS, Java (backend), React.js (UI), Leaflet API, and Tableau for updates.</li>
                                <li>Developed an XR app for Meta Quest 3 with Unity3D and C#, supporting real-time 3D interaction for 20 concurrent users.</li>
                                <li>Presented these projects to the US Army and Air Force, demonstrating technical expertise and innovative solutions.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Director of Finance</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Gayner Family Sustainable Investment Fund - Charlottesville, VA | September 2023 – Present</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Managed a $140,000 equity portfolio, provided performance reports, and implemented strategic adjustments to maximize returns.</li>
                                <li>Collaborated with Thomas S. Gayner, CEO of Markel Corp., to learn long-term investment strategies (~25 years).</li>
                                <li>Conducted research on Rolls-Royce PLC, yielding a successful investment with a 59% upside in 6 months.</li>
                                <li>Educated students on evaluating competitive advantages, reinvestment opportunities, and management structures.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leadership Experience Section */}
                    <section id="leadership" className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">Leadership Experience</h2>
                        <div>
                            <h3 className="text-xl font-semibold">Treasurer</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Class Council - Charlottesville, VA | September 2023 – Present</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Managed a $30,000 budget, preparing detailed financial reports, and ensuring accuracy in all financial transactions.</li>
                                <li>Collaborated with the Undergraduate Research Network and UVA Career Center to provide research and internship opportunities.</li>
                                <li>Organized a majors fair to help students explore academic interests and select appropriate majors.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Volunteer Experience Section */}
                    <section id="volunteer" className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">Volunteer Experience</h2>
                        <div>
                            <h3 className="text-xl font-semibold">Program Director</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Madison House - Charlottesville, VA | September 2023 – Present</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Volunteered 50 hours with the Holiday Sharing Program (HOLS) and assisted as a coach for the Madison House Basketball Program.</li>
                                <li>Raised $2,000 in funds, serving 53 families through impactful community initiatives.</li>
                                <li>Dedicated 36 hours to planning and conducting basketball practice sessions, focusing on skill development and teamwork.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section id="skills" className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">Skills</h2>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">Java</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">Python</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">C#</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">JavaScript</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">HTML & CSS</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">AWS</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">React.js</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">MySQL</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">Vite</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">Tailwind CSS</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">Pandas</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">Numpy</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">Sci-Kit Learn</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full">Git</span>
                        </div>
                    </section>

                </div>
            </TracingBeam>
        </div>
    );
};

export default Resume;
