import ProjectDetail from './ProjectDetail';

const projectsData = [
    {
        name: 'My Amazing Project',
        mainPhoto: 'path/to/main-photo.jpg',
        languages: 'React, Tailwind CSS, Framer Motion',
        description: 'This is a detailed description of my amazing project. It showcases various features and functionalities using the latest technologies.',
        additionalPhotos: [
            'path/to/additional-photo1.jpg',
            'path/to/additional-photo2.jpg',
            'path/to/additional-photo3.jpg',
            'path/to/additional-photo4.jpg'
        ]
    },
    // Add more project objects as needed
];

const App = () => {
    return (
        <div className="app">
            {projectsData.map((project, index) => (
                <ProjectDetail key={index} project={project} />
            ))}
        </div>
    );
};

export default App;
