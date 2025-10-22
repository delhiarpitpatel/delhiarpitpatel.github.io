'use client';

import { useState } from 'react';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Automated Large-Scale Database Migration Script",
    description: "A custom PHP solution to handle large-scale database migrations that would otherwise fail due to server timeouts and memory limits. It intelligently exports and imports each table as a compressed ZIP file, making the process robust and reliable.",
    image: "/images/portfolio/app-1.jpg",
    category: "Automation",
    technologies: ["PHP", "MySQL", "ZIP", "CLI"],
    githubUrl: "https://github.com/delhiarpitpatel/automate-sql-import-export-cli"
  },
  {
    id: 2,
    title: "E-commerce & Domain Management Platform",
    description: "A multi-tenant platform with a custom Laravel backend that allows users to manage their products and custom domains from a single dashboard, integrating with the OpenCart e-commerce system.",
    image: "/images/portfolio/app-2.jpg",
    category: "Web Development",
    technologies: ["Laravel", "PHP", "MySQL", "OpenCart"],
    demoUrl: "https://domains.propnal.com/",
    githubUrl: "https://www.randompublications.com/"
  },
  {
    id: 3,
    title: "Mindful Media Timer (Android App)",
    description: "An Android app designed to solve the common problem of media apps running all night. The project brief outlines the architecture for a custom app that automatically stops media playback when the user falls asleep.",
    image: "/images/portfolio/app-3.jpg",
    category: "Mobile Development",
    technologies: ["Android", "Java", "Mobile Development"],
    githubUrl: "https://github.com/delhiarpitpatel/android-mindful-media-timer"
  }
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(projects.map(project => project.category.toLowerCase()))];
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category.toLowerCase() === filter
  );

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my projects and technical capabilities.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                } transition-colors`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;