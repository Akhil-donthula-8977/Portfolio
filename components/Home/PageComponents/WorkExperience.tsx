import React from 'react'

const WorkExperience = () => {
    return (
        <div>
            <section className="bg-gray-900 text-white py-12 relative mt-36 mb-10 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
                    <div className="relative">
                        <div className="absolute top-0 left-4 w-[2px] h-full bg-gray-600"></div>
                        <div className="space-y-12 pl-8">

                            <div className="relative flex items-start space-x-6">
                                <div className="absolute left-[-10px] w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                                    1
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
                                    <h3 className="text-xl font-semibold mb-2">
                                        XOOLIT LLC - Software Engineering Intern
                                        <span className="text-gray-400 text-sm ml-2">(09/23-12/23)</span>
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Developed a new website from the ground up using <span className="font-semibold">Next.js</span> and integrated it with the existing site.</li>
                                        <li>Employed <span className="font-semibold">Playwright</span> and the Page Object Model for thorough automation testing.</li>
                                        <li>Authored over <span className="font-semibold">60 tests</span> for each application, ensuring comprehensive coverage.</li>
                                        <li>Developed APIs in <span className="font-semibold">Express.js</span> for product filtering based on user-selected preferences.</li>
                                        <li>Refactored a large e-commerce application, improving static asset optimization and loading speeds using <span className="font-semibold">Next.js cache features</span> and <span className="font-semibold">Tailwind CSS</span>.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative flex items-start space-x-6">
                                <div className="absolute left-[-10px] w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                                    2
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
                                    <h3 className="text-xl font-semibold mb-2">
                                        VALSCO TECHNOLOGY - Frontend Developer
                                        <span className="text-gray-400 text-sm ml-2">(09/23-11/23)</span>
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Leveraged <span className="font-semibold">React.js</span> and <span className="font-semibold">Tailwind CSS</span> to improve web interfaces, implementing user-centric features and design enhancements.</li>
                                        <li>Crafted user experiences, translating design concepts into seamless, responsive solutions that improved usability and aesthetics.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkExperience