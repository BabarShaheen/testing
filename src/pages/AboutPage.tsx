import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle, Users, Award, Target, Shield } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Citrix Consulting Services
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Your trusted partner for compliance, safety, and accreditation
            services across the UK
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded over 15 years ago, Citrix Consulting Services Limited
                has established itself as a leading provider of compliance and
                safety solutions for small and medium businesses across the
                United Kingdom.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to help businesses navigate the complex world of
                regulatory compliance, ensuring they meet all necessary
                standards while focusing on what they do best - running their
                business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3" />
                  <span className="text-gray-700">
                    Over 500 successful projects completed
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3" />
                  <span className="text-gray-700">
                    98% client satisfaction rate
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-leaf-green mr-3" />
                  <span className="text-gray-700">
                    Certified and experienced consultants
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                To provide comprehensive, reliable, and cost-effective
                compliance solutions that enable businesses to operate safely,
                legally, and efficiently.
              </p>
              <h3 className="text-2xl font-bold text-navy-blue mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the UK's most trusted compliance consultancy, known for
                our expertise, integrity, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-blue mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We conduct our business with the highest ethical standards and
                  transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-blue mb-2">
                  Partnership
                </h3>
                <p className="text-gray-600">
                  We work closely with our clients as trusted partners in their
                  success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-blue mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for excellence in every project and continuously
                  improve our services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-blue mb-2">
                  Results
                </h3>
                <p className="text-gray-600">
                  We focus on delivering measurable results that make a real
                  difference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Our Accreditations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards through recognized
              accreditations and certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-teal-dark mb-2">
                ISO 9001
              </div>
              <p className="text-sm text-gray-600">Quality Management</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-teal-dark mb-2">CHAS</div>
              <p className="text-sm text-gray-600">Health & Safety</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-teal-dark mb-2">SIA</div>
              <p className="text-sm text-gray-600">Security Industry</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-teal-dark mb-2">IOSH</div>
              <p className="text-sm text-gray-600">Safety Professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business achieve compliance
            excellence.
          </p>
          <Button
            size="lg"
            className="bg-orange hover:bg-orange/90 text-white px-8 py-3"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
