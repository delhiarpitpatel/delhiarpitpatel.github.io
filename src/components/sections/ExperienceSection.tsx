'use client';

const ExperienceSection = () => {
  const timelineItems = [
    {
      year: "2025 - 28",
      title: "B.Sc. (Hons) Computer Science",
      subtitle: "Hansraj College, University of Delhi",
      description: "Currently pursuing Bachelor's in Computer Science, focusing on software development and system design.",
      type: "education"
    },
    {
      year: "2023 - 25",
      title: "12th Grade",
      subtitle: "S. B. Mills Sr. Sec. School, Shivaji Marg, New Delhi",
      description: "Completed senior secondary education with a focus on science and mathematics, building a strong foundation for computer science studies.",
      type: "education"
    },
    {
      year: "2020 - Now",
      title: "Self-Taught Developer Journey",
      subtitle: "Started Learning Programming",
      description: "Began my programming journey, teaching myself PHP, web development, and various technologies through online resources and personal projects.",
      type: "experience"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-blue-500';
      case 'experience': return 'bg-green-500';
      case 'project': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education': return '🎓';
      case 'experience': return '💼';
      case 'project': return '🚀';
      default: return '📌';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of my educational background, experiences, and key projects
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500"></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #3b82f6 2px, transparent 2px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="relative">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10 ml-4 ">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg border-4 border-white">
                    <span className="text-xs font-bold">{item.year}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border-l-4 border-blue-500 flex-grow transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                  {/* Icon in top right corner */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`w-12 h-12 ${getTypeColor(item.type)} rounded-full flex items-center justify-center text-white text-lg shadow-lg border-2 border-white`}>
                      {getTypeIcon(item.type)}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500 rounded-full opacity-10"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-500 rounded-full opacity-10"></div>

                  {/* Content */}
                  <div className="relative z-10 pr-16">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <h3 className="text-xl font-bold text-blue-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-blue-700 font-medium mb-3 text-sm">
                      {item.subtitle}
                    </p>
                    <p className="text-blue-800 leading-relaxed">
                      {item.description}
                    </p>
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

export default ExperienceSection;
