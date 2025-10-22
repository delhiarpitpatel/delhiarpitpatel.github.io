'use client';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "PHP", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Backend Frameworks",
      skills: [
        { name: "Laravel", level: 90 },
        { name: "Node.js", level: 80 }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Canva", level: 80 },
        { name: "Figma", level: 75 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "Puppeteer", level: 75 },
        { name: "PM2", level: 70 },
        { name: "CWP", level: 70 },
        { name: "VPS", level: 70 }
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
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className="h-full bg-blue-600 rounded transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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
