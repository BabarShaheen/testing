import { Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { JobsPage } from './pages/JobsPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SafetyAdviserPage } from './pages/SafetyAdviserPage';
import { HealthSafetyPage } from './pages/HealthSafetyPage';
import { ChasAssistancePage } from './pages/ChasAssistancePage';
import SiaContractorPage from './pages/SiaContractorPage';
import { IsoCertificationsPage } from './pages/IsoCertificationsPage';
import { StaffVettingPage } from './pages/StaffVettingPage';
import { PatTestingPage } from './pages/PatTestingPage';
import { RiskAssessmentsPage } from './pages/RiskAssessmentsPage';
import { BafeCertificationPage } from './pages/BafeCertificationPage';

// Placeholder components for remaining pages
const InsurancePage = () => (
  <div className="min-h-screen bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-navy-blue mb-8">Insurance</h1>
      <p className="text-lg text-gray-600">
        Comprehensive insurance information and support.
      </p>
    </div>
  </div>
);

const CareersPage = () => (
  <div className="min-h-screen bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-navy-blue mb-8">Careers</h1>
      <p className="text-lg text-gray-600">
        Join our team and build your career with us.
      </p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Services Routes */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />

          {/* Safety Adviser Routes */}
          <Route
            path="/services/safety-adviser"
            element={<SafetyAdviserPage />}
          />
          <Route
            path="/services/safety-adviser/health-safety"
            element={<HealthSafetyPage />}
          />
          <Route
            path="/services/safety-adviser/health-safety/accreditation-support"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/safety-adviser/chas-assistance"
            element={<ChasAssistancePage />}
          />

          {/* SIA Contractor Routes */}
          <Route
            path="/services/sia-contractor"
            element={<SiaContractorPage />}
          />
          <Route
            path="/services/sia-contractor/acs-audits"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/sia-contractor/acs-eligibility"
            element={<ServiceDetailPage />}
          />

          {/* ISO Certifications Routes */}
          <Route
            path="/services/iso-certifications"
            element={<IsoCertificationsPage />}
          />
          <Route
            path="/services/iso-certifications/iso-9001"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/iso-certifications/iso-14001"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/iso-certifications/iso-14001/certification"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/iso-certifications/iso-14001/sia-acs-integration"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/iso-certifications/ohsas-18001"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/iso-certifications/ohsas-18001/certification"
            element={<ServiceDetailPage />}
          />

          {/* Other Services Routes */}
          <Route
            path="/services/staff-vetting"
            element={<StaffVettingPage />}
          />
          <Route path="/services/pat-testing" element={<PatTestingPage />} />
          <Route
            path="/services/pat-testing/pricing"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/pat-testing/fire-safety"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/risk-assessments"
            element={<RiskAssessmentsPage />}
          />
          <Route
            path="/services/bafe-certification"
            element={<BafeCertificationPage />}
          />

          {/* Health & Safety Specific Routes */}
          <Route
            path="/services/site-inspections"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/fire-risk-assessment"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/accident-investigations"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/workplace-audits"
            element={<ServiceDetailPage />}
          />

          {/* About Us Routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/about/insurance" element={<InsurancePage />} />
          <Route path="/about/careers" element={<CareersPage />} />

          {/* Jobs Route */}
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
