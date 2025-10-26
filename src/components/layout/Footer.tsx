'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Arpit Patel</h3>
            <p className="text-gray-400">Software Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/delhiarpitpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/delhiarpitpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/@delhiarpitpateldevelopment"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <span className="sr-only">YouTube</span>
              <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Arpit Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
