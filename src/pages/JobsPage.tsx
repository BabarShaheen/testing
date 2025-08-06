import { Card, CardContent, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { MapPin, Clock, Briefcase, Users } from 'lucide-react';
import { HeroSection, SectionHeader, ContactCTA } from '../components/common';

export function JobsPage() {
  const jobs = [
    {
      title: 'Senior Compliance Consultant',
      department: 'Consulting',
      location: 'London, UK',
      type: 'Full-time',
      experience: '5+ years',
      salary: '£45,000 - £55,000',
      description:
        'Lead compliance projects for our clients, specializing in ISO certifications and regulatory compliance.',
      requirements: [
        "Bachelor's degree in relevant field",
        '5+ years compliance experience',
        'ISO lead auditor qualification preferred',
      ],
      posted: '2 days ago',
    },
    {
      title: 'Health & Safety Advisor',
      department: 'Health & Safety',
      location: 'Manchester, UK',
      type: 'Full-time',
      experience: '3+ years',
      salary: '£35,000 - £42,000',
      description:
        'Provide health and safety consultancy services to small and medium businesses across various industries.',
      requirements: [
        'NEBOSH General Certificate',
        '3+ years H&S experience',
        'IOSH membership preferred',
      ],
      posted: '1 week ago',
    },
    {
      title: 'Junior Quality Consultant',
      department: 'Quality Assurance',
      location: 'Birmingham, UK',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '£28,000 - £32,000',
      description:
        'Support senior consultants in delivering quality management system implementations and audits.',
      requirements: [
        'Degree in Engineering or Quality Management',
        '1-2 years relevant experience',
        'Strong analytical skills',
      ],
      posted: '3 days ago',
    },
  ];

  const benefits = [
    'Competitive salary and annual reviews',
    'Professional development opportunities',
    'Flexible working arrangements',
    'Company pension scheme',
    'Health and wellbeing support',
    'Professional membership fees covered',
  ];

  return (
    <div className="min-h-screen py-20">
      <HeroSection
        title="Join Our Team"
        description="Build your career with the UK's leading compliance consultancy"
      />

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Work With Us?"
            description="Join a team of professionals dedicated to helping businesses achieve compliance excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-blue mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Work alongside industry experts and expand your knowledge in
                  compliance and safety.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-blue mb-2">
                  Career Growth
                </h3>
                <p className="text-gray-600">
                  Advance your career with training opportunities and
                  professional development programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-blue mb-2">
                  Work-Life Balance
                </h3>
                <p className="text-gray-600">
                  Enjoy flexible working arrangements and a supportive work
                  environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current job opportunities and find your next career
              move
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-teal-dark">
                          {job.title}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="bg-orange text-white"
                        >
                          {job.type}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-3">{job.description}</p>

                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Experience:</span>{' '}
                        {job.experience} |
                        <span className="font-medium ml-2">Salary:</span>{' '}
                        {job.salary}
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Button className="bg-teal-dark hover:bg-teal-dark/90 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Employee Benefits"
            description="We offer a comprehensive benefits package to support our team"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-orange rounded-full mr-3"></div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Don't See the Right Role?"
        description="We're always looking for talented professionals. Send us your CV and we'll keep you in mind for future opportunities."
        buttonText="Send Your CV"
        className="bg-crimson-gradient text-white relative overflow-hidden"
      />
    </div>
  );
}
