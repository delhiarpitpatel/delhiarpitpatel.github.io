'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 pt-20">
      <div className="container mx-auto pt-4 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Arpit Patel
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Full-Stack Developer & Laravel Specialist
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              B.Sc. Computer Science student at Hansraj College, University of Delhi.
              Passionate about building clean, efficient web applications with PHP/Laravel
              and modern frontend technologies.
            </p>

            <div className="bg-white px-6 py-2 mb-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Location:</span>
                  <p className="font-medium">New Delhi, India</p>
                </div>
                <div>
                  <span className="text-gray-600">Education:</span>
                  <p className="font-medium">B.Sc. (Hons) CS (1st Year)</p>
                </div>
                <div>
                  <span className="text-gray-600">Experience:</span>
                  <p className="font-medium">Self-taught Developer</p>
                </div>
                <div>
                  <span className="text-gray-600">Focus:</span>
                  <p className="font-medium">Full-Stack Development</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#portfolio"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/about/profile.jpeg"
                alt="Arpit Patel"
                fill
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;