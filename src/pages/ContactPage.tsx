import { useState, useRef } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';
import { HeroSection } from '../components/common';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Get EmailJS configuration from environment variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);
    setSubmitting(true);

    try {
      if (!form.current) throw new Error('Form not found');

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status !== 200) {
        throw new Error('Failed to send message');
      }

      // Success
      setSubmitMessage(
        'Thank you! Your message has been sent. We will contact you within 24 hours.'
      );
      setShowModal(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        consent: false,
      });
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setSubmitMessage(
        err?.text ||
          err?.message ||
          'Something went wrong while sending your message.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white to-soft-lavender-grey/30">
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-charcoal-navy/60 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-md mx-auto"
            >
              <div className="rounded-2xl shadow-2xl overflow-hidden bg-white">
                {/* Header */}
                <div className="bg-crimson-gradient p-6 text-pure-white relative">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <X className="h-4 w-4 text-white" />
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-full">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-pure-white/90 text-sm mt-1">
                        We'll get back to you within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 bg-white">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-soft-lavender-grey/30 rounded-lg">
                      <Mail className="h-5 w-5 text-crimson-pink" />
                      <div>
                        <p className="text-sm font-medium text-charcoal-navy">
                          Confirmation Email Sent
                        </p>
                        <p className="text-xs text-gray-600">
                          A copy has been sent to {formData.email}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-warm-amber/10 to-crimson-pink/10 p-4 rounded-lg border border-warm-amber/20">
                      <h4 className="font-semibold text-charcoal-navy mb-2">
                        What happens next?
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-crimson-pink rounded-full"></div>
                          Our team will review your enquiry
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-crimson-pink rounded-full"></div>
                          We'll contact you within 24 hours
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-crimson-pink rounded-full"></div>
                          We'll provide a detailed consultation
                        </li>
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full mt-6 bg-crimson-gradient text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <HeroSection
        title="Contact Us"
        description="Get in touch with our expert team for a free consultation"
      />

      {/* Contact Form and Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-navy mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Complete the form below and we'll respond within 24 hours. Our
                  expert team is ready to help with all your compliance and
                  safety needs.
                </p>
              </div>

              <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-semibold text-charcoal-navy"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-soft-lavender-grey focus:border-crimson-pink focus:ring-2 focus:ring-crimson-pink/20 transition-all rounded-xl"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold text-charcoal-navy"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-soft-lavender-grey focus:border-crimson-pink focus:ring-2 focus:ring-crimson-pink/20 transition-all rounded-xl"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-sm font-semibold text-charcoal-navy"
                        >
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-soft-lavender-grey focus:border-crimson-pink focus:ring-2 focus:ring-crimson-pink/20 transition-all rounded-xl"
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-semibold text-charcoal-navy"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-soft-lavender-grey focus:border-crimson-pink focus:ring-2 focus:ring-crimson-pink/20 transition-all rounded-xl"
                          placeholder="+44 (0) 123 456 7890"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="text-sm font-semibold text-charcoal-navy"
                      >
                        Service of Interest
                      </Label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="h-12 border-2 border-soft-lavender-grey focus:border-crimson-pink focus:ring-2 focus:ring-crimson-pink/20 transition-all rounded-xl"
                        placeholder="e.g., ISO Certification, Staff Vetting, PAT Testing"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-semibold text-charcoal-navy"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="border-2 border-soft-lavender-grey focus:border-crimson-pink focus:ring-2 focus:ring-crimson-pink/20 transition-all rounded-xl resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-soft-lavender-grey/30 rounded-xl">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({
                            ...prev,
                            consent: checked as boolean,
                          }))
                        }
                        className="mt-1"
                      />
                      <Label
                        htmlFor="consent"
                        className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                      >
                        I agree to the processing of my personal data in
                        accordance with the{' '}
                        <span className="text-crimson-pink font-semibold hover:underline">
                          privacy policy
                        </span>
                        .
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting || !formData.consent}
                      className="w-full h-14 bg-crimson-gradient text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {submitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </Button>

                    {submitMessage && !showModal && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-50 border border-red-200"
                      >
                        <p className="text-sm text-red-700">{submitMessage}</p>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-navy mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're here to help with all your compliance and safety needs.
                  Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-crimson-gradient rounded-xl shadow-lg">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-charcoal-navy text-lg mb-1">
                            Email
                          </h3>
                          <p className="text-gray-600 text-base">
                            info@citrixconsulting.co.uk
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            We typically respond within 2 hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-crimson-gradient rounded-xl shadow-lg">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-charcoal-navy text-lg mb-1">
                            Phone
                          </h3>
                          <p className="text-gray-600 text-base">
                            +44 (0) 123 456 7890
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Mon-Fri: 9AM-6PM GMT
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-crimson-gradient rounded-xl shadow-lg">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-charcoal-navy text-lg mb-1">
                            Address
                          </h3>
                          <p className="text-gray-600 text-base">
                            London, United Kingdom
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Serving clients nationwide
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-crimson-gradient rounded-xl shadow-lg">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-charcoal-navy text-lg mb-1">
                            Business Hours
                          </h3>
                          <p className="text-gray-600 text-base">
                            Mon-Fri: 9AM-6PM
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Emergency support available
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-charcoal-navy to-charcoal-navy/90 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 sm:p-8 text-white">
                    <h3 className="font-bold text-2xl mb-4 text-pure-white">
                      Why Choose Citrix Consulting?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-crimson-pink rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-pure-white/90">
                          Expert compliance consultants with 15+ years
                          experience
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-crimson-pink rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-pure-white/90">
                          Fast response times - typically within 2 hours
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-crimson-pink rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-pure-white/90">
                          Proven track record with 500+ successful projects
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-crimson-pink rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-pure-white/90">
                          Competitive pricing with transparent quotes
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-crimson-pink rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-pure-white/90">
                          Full compliance with UK regulations and standards
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
