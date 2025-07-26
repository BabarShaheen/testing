import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { FileText, Download, Shield, Lock, Eye, AlertCircle } from 'lucide-react';

export function PoliciesPage() {
  const policies = [
    {
      title: 'Privacy Policy',
      description: 'Learn how we collect, use, and protect your personal information.',
      icon: <Shield className="h-6 w-6 text-orange" />,
      lastUpdated: 'January 2024'
    },
    {
      title: 'Terms & Conditions',
      description: 'Our terms of service and conditions of use for our website and services.',
      icon: <FileText className="h-6 w-6 text-orange" />,
      lastUpdated: 'January 2024'
    },
    {
      title: 'Cookie Policy',
      description: 'Information about how we use cookies and similar technologies.',
      icon: <Eye className="h-6 w-6 text-orange" />,
      lastUpdated: 'January 2024'
    },
    {
      title: 'Data Protection Policy',
      description: 'Our commitment to GDPR compliance and data protection.',
      icon: <Lock className="h-6 w-6 text-orange" />,
      lastUpdated: 'January 2024'
    },
    {
      title: 'Complaints Procedure',
      description: 'How to raise concerns or complaints about our services.',
      icon: <AlertCircle className="h-6 w-6 text-orange" />,
      lastUpdated: 'January 2024'
    }
  ];

  const documents = [
    {
      title: 'Company Registration Certificate',
      type: 'PDF',
      size: '2.3 MB'
    },
    {
      title: 'Professional Indemnity Insurance',
      type: 'PDF',
      size: '1.8 MB'
    },
    {
      title: 'ISO 9001 Certificate',
      type: 'PDF',
      size: '1.2 MB'
    },
    {
      title: 'CHAS Membership Certificate',
      type: 'PDF',
      size: '0.9 MB'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Policies & Documents</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Access our policies, terms, and important company documents
          </p>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Policies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to transparency and compliance in all our operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {policy.icon}
                    <CardTitle className="ml-3 text-teal-dark">{policy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{policy.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Updated: {policy.lastUpdated}</span>
                    <Button size="sm" variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                      View Policy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Company Documents</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our official certificates and documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
                        <FileText className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue">{doc.title}</h3>
                        <p className="text-sm text-gray-500">{doc.type} • {doc.size}</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-teal-dark hover:bg-teal-dark/90 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-lg bg-blue-50/50">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-blue mb-4">Your Privacy Matters</h3>
                  <p className="text-gray-600 mb-4">
                    We are committed to protecting your privacy and personal data. Our policies are designed to comply with GDPR and other relevant data protection regulations.
                  </p>
                  <p className="text-gray-600 mb-6">
                    We only collect information necessary to provide our services and never share your data without explicit consent. For detailed information, please review our Privacy Policy.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Read Full Privacy Policy
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}