import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Ravi Ranjan,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    window.open(`mailto:raviranjan35@outlook.com?subject=${subject}&body=${body}`);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      value: 'raviranjan35@outlook.com',
      action: () => window.open(`mailto:raviranjan35@outlook.com`, '_blank'),
      gradient: 'from-red-500 to-pink-500',
      description: 'Drop me an email'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      value: 'Connect with me',
      action: () => window.open('https://linkedin.com/in/raviranjan946', '_blank'),
      gradient: 'from-blue-500 to-blue-700',
      description: 'Let\'s connect professionally'
    },
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      value: 'Send a message',
      action: () => window.open(`https://wa.me/918709805710?text=Hi%20Ravi%20Ranjan,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!`, '_blank'),
      gradient: 'from-green-500 to-green-600',
      description: 'Quick chat on WhatsApp'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      value: 'Check my code',
      action: () => window.open('https://github.com/ravi1122', '_blank'),
      gradient: 'from-gray-700 to-gray-900',
      description: 'Explore my repositories'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to start a conversation? I'm always open to discussing new opportunities and exciting projects.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.button
                    key={method.name}
                    onClick={method.action}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-gray-100 dark:border-gray-700"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${method.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${method.icon} text-lg`}></i>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {method.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {method.description}
                    </p>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {method.value}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Quick Info */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl p-6 mt-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Response Time</h4>
                    <p className="text-gray-600 dark:text-gray-400">Usually within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-globe text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Availability</h4>
                    <p className="text-gray-600 dark:text-gray-400">Open to new opportunities</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="Project Discussion"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary-500 to-purple-600 hover:from-primary-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <i className="fas fa-paper-plane"></i>
                        <span>Send Message</span>
                      </div>
                    )}
                  </motion.button>
                </form>

                {/* Note */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                  This form will open your default email client. Alternatively, you can contact me directly using the methods above.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;