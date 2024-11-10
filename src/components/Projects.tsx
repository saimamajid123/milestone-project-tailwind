import Image from 'next/image';

const projects = [
    {
        title: 'portfolio Website',
        description: 'Buil a personal portfolio website in next js.',
        imageUrl: '/home.PNG',
    },
    {
        title: 'Blog Website',
        description: 'Build a dynamic blog website in next js with tailwind css.',
        imageUrl: '/proj.PNG',
    },
    {
        title: 'Real Estate Website',
        description: 'Build a figma real estate website in next js using tailwind css.',
        imageUrl: '/estae.PNG',
    },
];

export default function ProjectSection() {
    return (
        <section className="py-12 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Image 
                                src={project.imageUrl} 
                                alt={project.title} 
                                width={500} 
                                height={300} 
                                className="object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                                <p className="text-gray-700">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
