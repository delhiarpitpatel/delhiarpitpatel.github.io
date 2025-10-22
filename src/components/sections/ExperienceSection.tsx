'use client';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "Self-Employed",
      period: "2020 - Present",
      description: "Developing custom web applications using PHP/Laravel, Node.js, and modern frontend technologies. Specializing in automation tools and scalable solutions.",
      technologies: ["PHP", "Laravel", "Node.js", "MySQL", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Student",
      company: "Hansraj College, University of Delhi",
      period: "2022 - Present",
      description: "B.Sc. (Hons) Computer Science student with focus on software development and system design.",
      technologies: ["Computer Science", "Software Engineering", "Database Design"]
    }
  ];

  const education = [
    {
      id: 1,
      institution: "Hansraj College, University of Delhi",
      degree: "B.Sc. (Hons) Computer Science",
      period: "2022 - Present",
      description: "Currently pursuing undergraduate degree in Computer Science"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <span className="text-sm text-gray-500">{edu.period}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{edu.institution}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
