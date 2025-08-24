// import React, { useState } from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaUser, FaComment, FaClock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

//   // Contact information
//   const contactInfo = [
//     {
//       icon: <FaEnvelope />,
//       title: 'Email',
//       value: 'nabhyadav6829@gmail.com',
//       link: 'mailto:nabhyadav6829@gmail.com',
//       description: 'Drop me a line anytime'
//     },
//     {
//       icon: <FaPhone />,
//       title: 'Phone',
//       value: '+91 9690969201',
//       link: 'tel:+91 9690969201',
//       description: 'Available'
//     },
//     {
//       icon: <FaMapMarkerAlt />,
//       title: 'Ghaziabad',
//       value: 'Ghaziabad, Uttar Pradesh',
//       link: '#contact',
//       description: 'Open to remote opportunities'
//     }
//   ];

//   // Social media links
//   const socialLinks = [
//     {
//       icon: <FaGithub />,
//       name: 'GitHub',
//       url: 'https://github.com/yourusername',
//       color: 'hover:text-gray-400'
//     },
//     {
//       icon: <FaLinkedin />,
//       name: 'LinkedIn',
//       url: 'https://linkedin.com/in/yourusername',
//       color: 'hover:text-blue-400'
//     },
//     {
//       icon: <FaTwitter />,
//       name: 'Twitter',
//       url: 'https://twitter.com/yourusername',
//       color: 'hover:text-cyan-400'
//     }
//   ];

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission with EmailJS
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // EmailJS form submission
//       await emailjs.send(
//         'service_a00dheg', 
//         'template_anevuvl', 
//         {
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message
//         },
//         'iICrVezhwGYgciHCg' // Replace with your EmailJS public key
//       );

//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//       // Clear status after 5 seconds
//       setTimeout(() => setSubmitStatus(null), 5000);
//     }
//   };

//   return (
//     <section id="contact" className="bg-slate-900 py-20 px-4 font-sans text-slate-100">
//       <div className="container max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
//             Get In <span className="text-cyan-400">Touch</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
//           <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
//             Ready to start your next project? Let's collaborate and create something amazing together.
//             I'm always excited to work on new challenges and innovative solutions.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Left Column: Contact Information */}
//           <div>
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
//               Let's Start a Conversation
//             </h3>
//             <p className="text-lg text-slate-300 mb-12 leading-relaxed">
//               I'm currently available for freelance work and full-time opportunities.
//               Whether you have a project in mind, want to discuss potential collaboration,
//               or just want to say hello, I'd love to hear from you.
//             </p>

//             {/* Contact Info Cards */}
//             <div className="space-y-6 mb-12">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="group">
//                   <a
//                     href={info.link}
//                     className="flex items-center gap-6 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-600/50 p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
//                   >
//                     <div className="flex-shrink-0">
//                       <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
//                         {info.icon}
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="text-lg font-semibold text-white mb-1">
//                         {info.title}
//                       </h4>
//                       <p className="text-cyan-400 font-medium mb-1">
//                         {info.value}
//                       </p>
//                       <p className="text-slate-400 text-sm">
//                         {info.description}
//                       </p>
//                     </div>
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Contact Form */}
//           <div>
//             <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-600/50 p-8">
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
//                 Send Me a Message
//               </h3>

//               {/* Status Messages */}
//               {submitStatus === 'success' && (
//                 <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400">
//                   <FaCheckCircle />
//                   <span>Message sent successfully! I'll get back to you soon.</span>
//                 </div>
//               )}

//               {submitStatus === 'error' && (
//                 <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400">
//                   <FaExclamationTriangle />
//                   <span>Something went wrong. Please try again or email me directly.</span>
//                 </div>
//               )}

//               <div onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   {/* Name Field */}
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
//                       Your Name
//                     </label>
//                     <div className="relative">
//                       <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg py-3 px-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                   </div>

//                   {/* Email Field */}
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg py-3 px-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
//                         placeholder="john@example.com"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Subject Field */}
//                 <div className="mb-6">
//                   <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Let's work together!"
//                   />
//                 </div>

//                 {/* Message Field */}
//                 <div className="mb-8">
//                   <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
//                     Message
//                   </label>
//                   <div className="relative">
//                     <FaComment className="absolute left-4 top-4 text-slate-400" />
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                       rows="6"
//                       className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg py-3 px-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
//                       placeholder="Tell me about your project or just say hello..."
//                     ></textarea>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <FaClock className="animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <FaPaperPlane />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;














import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaUser, FaComment, FaClock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Contact information
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'nabhyadav6829@gmail.com',
      link: 'mailto:nabhyadav6829@gmail.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9690969201',
      link: 'tel:+91 9690969201',
      description: 'Available'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Ghaziabad',
      value: 'Ghaziabad, Uttar Pradesh',
      link: '#contact',
      description: 'Open to remote opportunities'
    }
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-400'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-400'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-cyan-400'
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS form submission
      await emailjs.send(
        'service_a00dheg', 
        'template_anevuvl', 
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'iICrVezhwGYgciHCg' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="bg-slate-900 py-20 px-4 font-sans text-slate-100">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's collaborate and create something amazing together.
            I'm always excited to work on new challenges and innovative solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Information */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Let's Start a Conversation
            </h3>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              I'm currently available for freelance work and full-time opportunities.
              Whether you have a project in mind, want to discuss potential collaboration,
              or just want to say hello, I'd love to hear from you.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <a
                    href={info.link}
                    className="flex items-center gap-6 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-600/50 p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-cyan-400 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-600/50 p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Send Me a Message
              </h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400">
                  <FaCheckCircle />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400">
                  <FaExclamationTriangle />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg py-3 px-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg py-3 px-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Let's work together!"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-4 top-4 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg py-3 px-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <FaClock className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
