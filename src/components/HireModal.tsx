import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { emailjs, emailConfig } from '../config/emailjs';

interface HireModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const HireModal = ({ showModal, setShowModal }: HireModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (showModal) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => setMounted(false), 300);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Moatasem Nagy', // Add recipient name
      };

      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      if (response.status === 200) {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setShowModal(false);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const contactMethods = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/201018134103',
      value: '+201018134103',
      color: 'text-green-500',
      clickable: true
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'moatasemnagy3@gmail.com',
      color: 'text-[#00ff87]',
      clickable: false
    }
  ];

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      <div className="min-h-screen px-4 text-center">
        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative inline-block w-full max-w-2xl p-8 my-8 text-left align-middle bg-[#1a1a1a] shadow-2xl rounded-2xl border border-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Let's Create Something Amazing
              </h3>
              <p className="mt-2 text-gray-400">Fill out the form below or contact me directly</p>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {contactMethods.map((method, index) => (
              method.clickable ? (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 sm:p-4 space-x-2 sm:space-x-4 rounded-lg bg-gray-900/50 border border-gray-800 transition-all duration-300 hover:border-gray-700 group"
                >
                  <method.icon size={20} className={`transition-colors duration-300 ${method.color} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-300 truncate">{method.label}</p>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">{method.value}</p>
                  </div>
                  <FaArrowRight className={`hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 ${method.color} flex-shrink-0`} size={16} />
                </a>
              ) : (
                <div
                  key={index}
                  className="flex items-center p-3 sm:p-4 space-x-2 sm:space-x-4 rounded-lg bg-gray-900/50 border border-gray-800"
                >
                  <method.icon size={20} className={`transition-colors duration-300 ${method.color} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-300 truncate">{method.label}</p>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">{method.value}</p>
                  </div>
                </div>
              )
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 px-4 py-3 rounded-lg border border-gray-800 focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 px-4 py-3 rounded-lg border border-gray-800 focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-gray-900/50 px-4 py-3 rounded-lg border border-gray-800 focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <motion.button
                type="submit"
                className="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-[#00c067] to-[#40cfdf] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c067] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
              <p className="mt-2 text-sm text-center text-gray-400">
                I typically respond within 24 hours
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default HireModal;