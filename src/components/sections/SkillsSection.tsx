'use client';

import Image from 'next/image';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "PHP", logo: "/images/logos/php.svg" },
        { name: "JavaScript", logo: "/images/logos/javascript.svg" },
        { name: "Python", logo: "/images/logos/python.svg" }
      ]
    },
    {
      title: "Backend Frameworks",
      skills: [
        { name: "Laravel", logo: "/images/logos/laravel.svg" },
        { name: "Node.js", logo: "/images/logos/nodejs.svg" }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML", logo: "/images/logos/html5.svg" },
        { name: "CSS", logo: "/images/logos/css3.svg" },
        { name: "Tailwind CSS", logo: "/images/logos/tailwindcss.svg" },
        { name: "Canva", logo: "/images/logos/canva.svg" },
        { name: "Figma", logo: "/images/logos/figma.svg" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", logo: "/images/logos/mysql.svg" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", logo: "/images/logos/git.svg" },
        { name: "GitHub", logo: "/images/logos/github.svg" },
        { name: "REST APIs", logo: "🔗" },
        { name: "Puppeteer", logo: "/images/logos/puppeteer.svg" },
        { name: "PM2", logo: "/images/logos/pm2.svg" },
        { name: "CWP", logo: "/images/logos/apache.svg" },
        { name: "VPS", logo: "🖥️" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill.logo.startsWith('/') ? (
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={50}
                        height={50}
                        className="w-12 h-12"
                      />
                    ) : (
                      <span className="text-3xl">{skill.logo}</span>
                    )}
                    <span className="text-xs font-medium text-center text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
