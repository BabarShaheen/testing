import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import {
  HeroSection,
  SectionHeader,
} from '../components/common';

export function ContactPage() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
      consent: false,
    });
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Contact Us"
        description="Get in touch with our expert team for a free consultation"
      />

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-blue mb-4 sm:mb-6">
                Send us a Message
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Complete the form below and we'll respond within 24 hours.
              </p>

              <Card className="border-none shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm sm:text-base">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1 min-h-[44px] text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm sm:text-base">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 min-h-[44px] text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="company"
                          className="text-sm sm:text-base"
                        >
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1 min-h-[44px] text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm sm:text-base">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1 min-h-[44px] text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-sm sm:text-base">
                        Service of Interest
                      </Label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1 min-h-[44px] text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm sm:text-base">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-1 text-sm sm:text-base"
                      />
                    </div>
                    <div className="flex items-start space-x-2">
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
                        className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                      >
                        I agree to the processing of my personal data in
                        accordance with the privacy policy.
                      </Label>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-warm-amber hover:bg-warm-amber/90 text-white min-h-[44px] text-sm sm:text-base"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-blue mb-4 sm:mb-6">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                We're here to help with all your compliance and safety needs.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-warm-amber mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-navy-blue text-sm sm:text-base">
                            Email
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base">
                            info@citrixconsulting.co.uk
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-warm-amber mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-navy-blue text-sm sm:text-base">
                            Phone
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base">
                            +44 (0) 123 456 7890
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-warm-amber mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-navy-blue text-sm sm:text-base">
                            Address
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base">
                            London, United Kingdom
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-warm-amber mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-navy-blue text-sm sm:text-base">
                            Business Hours
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base">
                            Mon-Fri: 9AM-6PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-soft-lavender-grey/5">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold text-navy-blue mb-3 text-sm sm:text-base">
                      Why Choose Us?
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-warm-amber">•</span>
                        <span>Expert compliance consultants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-amber">•</span>
                        <span>Fast response times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-amber">•</span>
                        <span>Proven track record</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-amber">•</span>
                        <span>Competitive pricing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
