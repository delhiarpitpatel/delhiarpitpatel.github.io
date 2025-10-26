'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:delhiarpitpatel@gmail.com" className="text-gray-600 hover:text-blue-600">
                      delhiarpitpatel@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+919773697387" className="text-gray-600 hover:text-blue-600">
                      +91 9773697387
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <a href="https://wa.me/919773697387" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                      +91 9773697387
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a href="https://linkedin.com/in/delhiarpitpatel" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                      linkedin.com/in/delhiarpitpatel
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a href="https://github.com/delhiarpitpatel" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                      github.com/delhiarpitpatel
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">YouTube</h4>
                    <a href="https://www.youtube.com/@delhiarpitpateldevelopment" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                      @delhiarpitpateldevelopment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
