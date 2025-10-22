'use client';

import Image from 'next/image';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', percentage: 90 },
    { name: 'Backend Development', percentage: 85 },
    { name: 'Database Design', percentage: 80 },
    { name: 'DevOps & Cloud', percentage: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate software developer with expertise in building modern web applications
            and scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Profile Info</h3>
              <div className="space-y-3">
                <p><strong>Name:</strong> <span className="text-gray-600">Arpit Patel</span></p>
                <p><strong>Email:</strong> <span className="text-gray-600">delhiarpitpatel@gmail.com</span></p>
                <p><strong>Location:</strong> <span className="text-gray-600">Your Location</span></p>
                <p><strong>Experience:</strong> <span className="text-gray-600">X years</span></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className="h-full bg-blue-600 rounded"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-image.jpg"
                alt="Arpit Patel working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;