import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import {
  CheckCircle,
  Clock,
  Star,
  Users,
  Award,
  ArrowLeft,
  Shield,
  FileText,
  Leaf,
  Target,
} from 'lucide-react';
import { getServiceById, Service } from '../data/servicesData';

// --- NEW: fallback data for the three new services (if not found in getServiceById)
const newServicesMap: Record<string, Service> = {
  'smas-accreditation': {
    id: 'smas-accreditation',
    iconName: 'Award',
    title: 'SMAS Accreditation',
    badge: 'SSIP Approved',
    subtitle: 'Streamlined health & safety assessment for UK contractors.',
    description:
      'Achieve SMAS Worksafe accreditation with expert support at every stage. Our consultants guide you through document preparation, evidence submission, and compliance to quickly secure your SSIP certificate.',
    timeline: '2-5 working days',
    pricing: 'From £249+VAT',
    benefits: [
      'Fast-tracked SMAS Worksafe approval',
      'Expert help with documentation & evidence',
      'Improved eligibility for principal contractor roles',
      'Reduced risk of failed submissions',
      'Dedicated support throughout renewal',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'We assess your business and gather required documentation for SMAS Worksafe.',
      },
      {
        step: 2,
        title: 'Application Preparation',
        description: 'We complete your application, ensure evidence meets SMAS standards, and submit on your behalf.',
      },
      {
        step: 3,
        title: 'Accreditation Achieved',
        description: 'We track your application, respond to assessor queries, and deliver your SSIP certificate.',
      },
    ],
    stats: {
      successRate: '99%',
      clientRating: '4.9/5',
      avgProjectTime: '3 days',
      clientsServed: '500+ businesses',
    },
    relatedServices: [
      {
        id: 'acclaim-accreditation',
        name: 'Acclaim Accreditation',
        price: 'From £239+VAT',
      },
      {
        id: 'constructionline-accreditation',
        name: 'Constructionline Accreditation',
        price: 'From £289+VAT',
      },
    ],
    features: [
      'Dedicated account manager',
      'Compliant with SSIP standards',
      'Priority support available',
    ],
    color: 'amber', // adjust to match your brand or theme
  },
  'acclaim-accreditation': {
    id: 'acclaim-accreditation',
    iconName: 'Shield',
    title: 'Acclaim Accreditation',
    badge: 'SSIP Member',
    subtitle: 'Showcase your health & safety competence to major clients.',
    description:
      'Let us help you achieve Acclaim Accreditation for public and private sector contracts. We review, complete, and submit your application, handling all documentation and compliance requirements.',
    timeline: '3-6 working days',
    pricing: 'From £239+VAT',
    benefits: [
      'Enhance your profile for major tenders',
      'Professional support with health & safety paperwork',
      'Minimise resubmission risk',
      'Support for annual renewals and evidence',
      'Meet prequalification standards for buyers',
    ],
    process: [
      {
        step: 1,
        title: 'Gap Analysis',
        description: 'We audit your health & safety management against Acclaim requirements.',
      },
      {
        step: 2,
        title: 'Application & Submission',
        description: 'Our experts prepare and submit your Acclaim application, with all supporting evidence.',
      },
      {
        step: 3,
        title: 'Post-Accreditation Support',
        description: 'We offer guidance for any queries, plus support for maintaining your accreditation.',
      },
    ],
    stats: {
      successRate: '98%',
      clientRating: '4.8/5',
      avgProjectTime: '4 days',
      clientsServed: '350+ contractors',
    },
    relatedServices: [
      {
        id: 'smas-accreditation',
        name: 'SMAS Accreditation',
        price: 'From £249+VAT',
      },
      {
        id: 'constructionline-accreditation',
        name: 'Constructionline Accreditation',
        price: 'From £289+VAT',
      },
    ],
    features: [
      'Streamlined renewal process',
      'Guidance for complex documentation',
      'Priority consultant response',
    ],
    color: 'emerald', // example color
  },
  'constructionline-accreditation': {
    id: 'constructionline-accreditation',
    iconName: 'Award',
    title: 'Constructionline Accreditation',
    badge: 'Supply Chain',
    subtitle: 'Open up contract opportunities across the construction industry.',
    description:
      'Maximise your exposure and contract success with Constructionline Bronze, Silver, or Gold accreditation. We handle the registration, evidence, and compliance process for you.',
    timeline: '5-10 working days',
    pricing: 'From £289+VAT',
    benefits: [
      'Access to thousands of buyers and tenders',
      'Bronze, Silver, or Gold registration handled for you',
      'Ongoing renewal and compliance reminders',
      'All evidence and document collation managed',
      'Personal guidance for higher-level accreditations',
    ],
    process: [
      {
        step: 1,
        title: 'Eligibility Review',
        description: 'We check your business meets Constructionline requirements and advise on Bronze/Silver/Gold tiers.',
      },
      {
        step: 2,
        title: 'Application Management',
        description: 'We gather and upload your company evidence, manage all forms, and submit for assessment.',
      },
      {
        step: 3,
        title: 'Registration & Ongoing Support',
        description: 'You get full access to Constructionline plus help with renewals and profile optimisation.',
      },
    ],
    stats: {
      successRate: '97%',
      clientRating: '4.8/5',
      avgProjectTime: '6 days',
      clientsServed: '250+ construction firms',
    },
    relatedServices: [
      {
        id: 'smas-accreditation',
        name: 'SMAS Accreditation',
        price: 'From £249+VAT',
      },
      {
        id: 'acclaim-accreditation',
        name: 'Acclaim Accreditation',
        price: 'From £239+VAT',
      },
    ],
    features: [
      'Tender eligibility guidance',
      'Tiered support options',
      'UK-wide compliance expertise',
    ],
    color: 'crimson', // example color
  },
};


export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consent: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // First try to get from main/global data, else from local fallback.
    let foundService = getServiceById(serviceId || '');
    if (!foundService && serviceId && newServicesMap[serviceId]) {
      foundService = newServicesMap[serviceId];
    }
    setService(foundService);
    setIsLoading(false);
  }, [serviceId]);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return Shield;
      case 'Award':
        return Award;
      case 'FileText':
        return FileText;
      case 'Users':
        return Users;
      case 'CheckCircle':
        return CheckCircle;
      case 'Leaf':
        return Leaf;
      case 'Target':
        return Target;
      case 'Clock':
        return Clock;
      default:
        return Shield;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you for your quote request for ${service?.title}! We will contact you within 24 hours.`
    );
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      consent: false,
    });
  };

  const handleRelatedServiceClick = (relatedServiceId: string) => {
    navigate(`/services/${relatedServiceId}`);
  };

  const handleBackClick = () => {
    navigate('/services');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="text-6xl text-gray-400 mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-navy-blue mb-2">
            Service Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <Button
            onClick={handleBackClick}
            className="bg-warm-amber hover:bg-warm-amber/90 text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = getIconComponent(service.iconName);

  return (
    <div className="min-h-screen py-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Button
          onClick={handleBackClick}
          variant="outline"
          className="border-crimson-pink text-crimson-pink hover:bg-crimson-pink hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>
      </div>

      {/* Hero Section */}
      <section className="bg-crimson-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <IconComponent className="h-12 w-12 text-warm-amber" />
                </div>
                {service.badge && (
                  <Badge
                    variant="secondary"
                    className="bg-leaf-green text-white ml-4"
                  >
                    {service.badge}
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-100 mb-6">{service.subtitle}</p>
              <p className="text-lg text-gray-200 mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-warm-amber hover:bg-warm-amber/90 text-white px-8 py-3"
                  onClick={() => {
                    const element = document.getElementById('quote-form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get a Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-crimson-pink px-8 py-3"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <Clock className="h-8 w-8 text-warm-amber mx-auto mb-2" />
                    <div className="text-lg font-semibold">Timeline</div>
                    <div className="text-gray-100">{service.timeline}</div>
                  </div>
                  <div>
                    <Award className="h-8 w-8 text-warm-amber mx-auto mb-2" />
                    <div className="text-lg font-semibold">Pricing</div>
                    <div className="text-gray-100">{service.pricing}</div>
                  </div>
                  <div>
                    <Users className="h-8 w-8 text-warm-amber mx-auto mb-2" />
                    <div className="text-lg font-semibold">Success Rate</div>
                    <div className="text-gray-100">
                      {service.stats?.successRate}
                    </div>
                  </div>
                  <div>
                    <Star className="h-8 w-8 text-warm-amber mx-auto mb-2" />
                    <div className="text-lg font-semibold">Client Rating</div>
                    <div className="text-gray-100">
                      {service.stats?.clientRating}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why {service.title} is essential for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits?.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-leaf-green mr-3 flex-shrink-0" />
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven step-by-step approach to {service.title}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process?.map((step, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-warm-amber rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-crimson-pink">
                      {step.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-4">
                Request a Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get a personalized quote for your {service.title} project. Our
                team will contact you within 24 hours.
              </p>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 h-32"
                        placeholder={`Tell us about your organization and ${service.title} requirements...`}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({
                            ...prev,
                            consent: checked as boolean,
                          }))
                        }
                      />
                      <Label
                        htmlFor="consent"
                        className="text-sm text-gray-600"
                      >
                        I agree to be contacted regarding my quote request
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-warm-amber hover:bg-warm-amber/90 text-white"
                      disabled={!formData.consent}
                    >
                      Request Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-navy-blue mb-6">
                Related Services
              </h3>
              <div className="space-y-4">
                {service.relatedServices?.map((relatedService, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-sm cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-crimson-pink">
                            {relatedService.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {relatedService.price}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-crimson-pink text-crimson-pink hover:bg-crimson-pink hover:text-white"
                          onClick={() =>
                            handleRelatedServiceClick(relatedService.id)
                          }
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
