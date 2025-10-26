'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhp,
  faJs,
  faPython,
  faLaravel,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

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
    <section id="skills" className="pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing solutions
          </p>
        </div>

        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #3b82f6 2px, transparent 2px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] ${
                  index % 2 === 0
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-100 border-l-4 border-blue-500'
                    : 'bg-gradient-to-br from-purple-50 to-pink-100 border-l-4 border-purple-500'
                }`}
              >
                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 ${
                  index % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'
                }`}></div>
                <div className={`absolute bottom-4 left-4 w-16 h-16 rounded-full opacity-10 ${
                  index % 2 === 0 ? 'bg-indigo-500' : 'bg-pink-500'
                }`}></div>

                {/* Category Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${
                      index % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'
                    }`}></div>
                    <h3 className={`text-xl font-bold ${
                      index % 2 === 0 ? 'text-blue-800' : 'text-purple-800'
                    }`}>
                      {category.title}
                    </h3>
                  </div>

                  <p className={`text-sm mb-6 leading-relaxed ${
                    index % 2 === 0 ? 'text-blue-700' : 'text-purple-700'
                  }`}>
                    {category.title === "Programming Languages" && "Core languages powering my development journey"}
                    {category.title === "Backend Frameworks" && "Robust frameworks for scalable server-side solutions"}
                    {category.title === "Frontend Technologies" && "Modern tools crafting beautiful user experiences"}
                    {category.title === "Databases" && "Data management systems ensuring reliable storage"}
                    {category.title === "Tools & Technologies" && "Essential utilities streamlining development workflow"}
                  </p>

                  {/* Skills Display */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${
                          index % 2 === 0
                            ? 'bg-white/80 hover:bg-blue-100 text-blue-800 hover:text-blue-900'
                            : 'bg-white/80 hover:bg-purple-100 text-purple-800 hover:text-purple-900'
                        } shadow-sm hover:shadow-md`}
                        title={skill.name}
                      >
                        {skill.logo.startsWith('/') ? (
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain transition-transform group-hover:rotate-12"
                            style={{ filter: 'none' }}
                          />
                        ) : (
                          <span className="text-lg transition-transform group-hover:scale-125">{skill.logo}</span>
                        )}
                        <span className="text-sm font-medium whitespace-nowrap">
                          {skill.name}
                        </span>

                        {/* Hover Effect */}
                        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity ${
                          index % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'
                        }`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
