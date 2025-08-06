import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import SSIPAccreditationPage from './pages/about-us/AccreditationPage';
import PoliciesPage from './pages/about-us/PoliciesPage';
import { JobsPage } from './pages/JobsPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SafetyAdviserPage } from './pages/services/safety-advisor/SafetyAdviserPage';
import { HealthSafetyPage } from './pages/services/safety-advisor/HealthSafetyPage';
import { ChasAssistancePage } from './pages/services/safety-advisor/ChasAssistancePage';
import SiaContractorPage from './pages/services/sia-contractor/SiaContractorPage';
import { IsoCertificationsPage } from './pages/services/iso-certifications/IsoCertificationsPage';
import StaffVettingPage from './pages/services/StaffVettingPage';
import PatTestingPage from './pages/services/PatTestingPage';
import { RiskAssessmentsPage } from './pages/services/RiskAssessmentsPage';
import BafeCertificationPage from './pages/services/BafeCertificationPage';
import SiaAcsPage from './pages/services/iso-certifications/SiaAcsPage';
import AcsEligibilityPage from './pages/services/sia-contractor/AcsEligibilityPage';
import AcsCompliancePage from './pages/services/sia-contractor/AcsCompliancePage';
import InsurancePage from './pages/about-us/InsurancePage';
import CareersPage from './pages/about-us/CareersPage';
import Iso9001Page from './pages/services/iso-certifications/Iso9001Page';
import OHSAS18001Page from './pages/services/iso-certifications/OHSAS18001Page';
import Iso14001Page from './pages/services/iso-certifications/Iso14001Page';
import FireSafetyCertificationPage from './pages/services/FireSafetyCertificationPage';
// Placeholder components for remaining pages

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToTop />
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Services Routes */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<SafetyAdviserPage />} />

          {/* Safety Adviser Routes */}
          <Route
            path="/services/safety-adviser"
            element={<SafetyAdviserPage />}
          />
          <Route
            path="/services/safety-advisor/health-safety"
            element={<HealthSafetyPage />}
          />
          <Route
            path="/services/safety-adviser/health-safety/accreditation-support"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/safety-advisor/chas-assistance"
            element={<ChasAssistancePage />}
          />

          {/* SIA Contractor Routes */}
          <Route
            path="/services/sia-contractor"
            element={<SiaContractorPage />}
          />
          <Route path="/services/sia-acs" element={<SiaAcsPage />} />
          <Route
            path="/services/sia-contractor/acs-audit"
            element={<AcsCompliancePage />}
          />
          <Route
            path="/services/sia-contractor/acs-eligibility"
            element={<AcsEligibilityPage />}
          />

          {/* ISO Certifications Routes */}
          <Route
            path="/services/iso-certifications"
            element={<IsoCertificationsPage />}
          />
          <Route
            path="/services/iso-certifications/iso-9001"
            element={<Iso9001Page />}
          />
          <Route
            path="/services/iso-certifications/iso-14001"
            element={<Iso14001Page />}
          />
          <Route path="/iso-14001" element={<Iso14001Page />} />
          <Route
            path="/services/iso-certifications/iso-14001/certification"
            element={<ServiceDetailPage />}
          />
          <Route
            path="/services/iso-certifications/sia-acs-integration"
            element={<SiaAcsPage />}
          />
          <Route
            path="/services/iso-certifications/ohsas-18001"
            element={<OHSAS18001Page />}
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
            path="/services/fire-safety"
            element={<FireSafetyCertificationPage />}
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
          <Route
            path="/about/accreditation"
            element={<SSIPAccreditationPage />}
          />
          <Route path="/about/policies" element={<PoliciesPage />} />
          <Route path="/about/insurance" element={<InsurancePage />} />
          <Route path="/about/careers" element={<CareersPage />} />
          <Route path="/about/" element={<CareersPage />} />

          {/* Jobs Route */}
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
