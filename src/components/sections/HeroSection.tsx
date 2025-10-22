'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Arpit Patel
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Software Developer
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              I build modern web applications with a focus on user experience and performance.
            </p>
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
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/profile.jpg"
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