import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star, Quote } from 'lucide-react';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Operations Director',
      company: 'BuildTech Solutions',
      content: 'CCS helped us achieve ISO 9001 certification smoothly. Their expertise and support were invaluable throughout the entire process. We couldn\'t have done it without them.',
      rating: 5,
      service: 'ISO 9001 Certification'
    },
    {
      name: 'Mike Thompson',
      position: 'Managing Director',
      company: 'SecureGuard Ltd',
      content: 'Outstanding service for our CHAS accreditation. Professional, efficient, and results-driven. The team guided us through every step with expertise.',
      rating: 5,
      service: 'CHAS Accreditation'
    },
    {
      name: 'Emma Wilson',
      position: 'Facilities Manager',
      company: 'TechFlow Industries',
      content: 'The fire risk assessment was thorough and helped us implement crucial safety measures. The report was detailed and the recommendations were practical.',
      rating: 5,
      service: 'Fire Risk Assessment'
    },
    {
      name: 'James Mitchell',
      position: 'CEO',
      company: 'Innovation Hub',
      content: 'CCS provided exceptional environmental management consulting. They helped us achieve ISO 14001 certification and significantly improve our sustainability practices.',
      rating: 5,
      service: 'Environmental Management'
    },
    {
      name: 'Lisa Chen',
      position: 'Safety Coordinator',
      company: 'Manufacturing Plus',
      content: 'Their health and safety consulting transformed our workplace culture. Accident rates dropped by 75% after implementing their recommendations.',
      rating: 5,
      service: 'Health & Safety Consulting'
    },
    {
      name: 'Robert Davies',
      position: 'Quality Manager',
      company: 'Precision Engineering',
      content: 'The quality assurance program they developed for us exceeded expectations. Customer complaints decreased by 80% within six months.',
      rating: 5,
      service: 'Quality Assurance'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            See what our clients say about working with Citrix Consulting Services
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-leaf-green mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-dark mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy-blue mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from businesses we've helped achieve compliance excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-orange fill-current" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-gray-300" />
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-navy-blue">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                    <p className="text-sm text-teal-dark font-medium">{testimonial.company}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-orange/10 text-orange px-2 py-1 rounded text-xs">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Let us help your business achieve compliance excellence and join our growing list of satisfied clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange hover:bg-orange/90 text-white px-8 py-3"
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-teal-dark px-8 py-3"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}