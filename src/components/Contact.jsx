// import React, { useState } from 'react';
// import axios from 'axios';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     // console.log('Form submitted:', formData);
//     axios.post("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact",formData);
//     // Reset form
//     setFormData({ name: '', email: '', message: '' });
//     alert('Message sent successfully! I will get back to you soon.');
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="text-[#FF6600]" size={24} />,
//       title: "Email",
//       info: "sridharchml@gmail.com",
//       link: "mailto:sridharchml@gmail.com"
//     },
//     {
//       icon: <Linkedin className="text-[#FF6600]" size={24} />,
//       title: "LinkedIn",
//       info: "Connect with me",
//       link: "https://www.linkedin.com/in/sridhar-b-1a8708282"
//     },
//     {
//       icon: <Github className="text-[#FF6600]" size={24} />,
//       title: "GitHub",
//       info: "View my repositories",
//       link: "https://github.com/Sridhar2601"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mb-4">
//             Get In Touch
//           </h2>
//           <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Ready to start a conversation? I'm always open to discussing new opportunities, 
//             collaborating on projects, or just having a chat about technology.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div>
//             <h3 className="text-2xl font-bold text-[#0A192F] mb-8">Let's Connect</h3>

//             <div className="space-y-6 mb-8">
//               {contactInfo.map((contact, index) => (
//                 <a
//                   key={index}
//                   href={contact.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
//                 >
//                   <div className="mr-4 p-3 bg-gray-50 rounded-lg group-hover:bg-gradient-to-r from-[#0A192F] to-[#112240] group-hover:text-white transition-colors duration-300">
//                     {contact.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-[#0A192F] mb-1">{contact.title}</h4>
//                     <p className="text-gray-600 group-hover:text-[#0A192F] transition-colors duration-300">
//                       {contact.info}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Quick Message */}
//             <div className="bg-gradient-to-r from-[#0A192F] to-[#112240] p-8 rounded-lg text-white">
//               <div className="flex items-center mb-4">
//                 <MessageCircle className="text-[#FF6600] mr-3" size={32} />
//                 <h4 className="text-xl font-bold">Quick Response</h4>
//               </div>
//               <p className="mb-4 text-gray-300">
//                 I typically respond to messages within 24 hours. Feel free to reach out through 
//                 any of the channels above or use the contact form.
//               </p>
//               <div className="flex space-x-4">
//                 <a
//                   href="https://www.linkedin.com/in/sridhar-b-1a8708282"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#FF6600] hover:text-white transition-colors duration-300"
//                 >
//                   <Linkedin size={24} />
//                 </a>
//                 <a
//                   href="https://github.com/Sridhar2601"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#FF6600] hover:text-white transition-colors duration-300"
//                 >
//                   <Github size={24} />
//                 </a>
//                 <a
//                   href="mailto:sridharchml@gmail.com"
//                   className="text-[#FF6600] hover:text-white transition-colors duration-300"
//                 >
//                   <Mail size={24} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <h3 className="text-2xl font-bold text-[#0A192F] mb-8">Send a Message</h3>

//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
//               <div className="mb-6">
//                 <label htmlFor="name" className="block text-[#0A192F] font-semibold mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all duration-300"
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-[#0A192F] font-semibold mb-2">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all duration-300"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-[#0A192F] font-semibold mb-2">
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="6"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all duration-300 resize-vertical"
//                   placeholder="Tell me about your project or how I can help you..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#FF6600] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#e55a00] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
//               >
//                 <Send size={20} />
//                 <span>Send Message</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Contact;


import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/contact", formData)
  .then(res => {
    alert(res.data.message);
    setFormData({ name: '', email: '', message: '' });
  })
  .catch(err => {
    alert("Error sending message. Please try again.");
    console.error(err);
  });

  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#FF6600]" size={24} />,
      title: "Email",
      info: "sridharchml@gmail.com",
      link: "mailto:sridharchml@gmail.com"
    },
    {
      icon: <Linkedin className="text-[#FF6600]" size={24} />,
      title: "LinkedIn",
      info: "Connect with me",
      link: "https://www.linkedin.com/in/sridhar-b-1a8708282"
    },
    {
      icon: <Github className="text-[#FF6600]" size={24} />,
      title: "GitHub",
      info: "View my repositories",
      link: "https://github.com/Sridhar2601"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start a conversation? I'm always open to discussing new opportunities, 
            collaborating on projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#0A192F] mb-8">Let's Connect</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="mr-4 p-3 bg-gray-50 rounded-lg group-hover:bg-gradient-to-r from-[#0A192F] to-[#112240] group-hover:text-white transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A192F] mb-1">{contact.title}</h4>
                    <p className="text-gray-600 group-hover:text-[#0A192F] transition-colors duration-300">
                      {contact.info}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Message */}
            <div className="bg-gradient-to-r from-[#0A192F] to-[#112240] p-8 rounded-lg text-white">
              <div className="flex items-center mb-4">
                <MessageCircle className="text-[#FF6600] mr-3" size={32} />
                <h4 className="text-xl font-bold">Quick Response</h4>
              </div>
              <p className="mb-4 text-gray-300">
                I typically respond to messages within 24 hours. Feel free to reach out through 
                any of the channels above or use the contact form.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/sridhar-b-1a8708282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF6600] hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Sridhar2601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF6600] hover:text-white transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:sridharchml@gmail.com"
                  className="text-[#FF6600] hover:text-white transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-[#0A192F] mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#0A192F] font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[#0A192F] font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[#0A192F] font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell me about your project or how I can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6600] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#e55a00] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
