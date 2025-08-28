import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/common/PageTransition';
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
import { SafetyAdviserPage } from './pages/services/safety-advisor/SafetyAdviserPage';
import { HealthSafetyPage } from './pages/services/safety-advisor/HealthSafetyPage';
import { ChasAssistancePage } from './pages/services/safety-advisor/ChasAssistancePage';
import SiaContractorPage from './pages/services/sia-contractor/SiaContractorPage';
import { IsoCertificationsPage } from './pages/services/iso-certifications/IsoCertificationsPage';
import StaffVettingPage from './pages/services/StaffVettingPage';
import PatTestingPage from './pages/services/PatTestingPage';
import { RiskAssessmentsPage } from './pages/services/RiskAssessmentsPage';
import BafeCertificationPage from './pages/services/BafeCertificationPage';
import { SmasAccreditationPage } from './pages/services/safety-advisor/SmasAccreditationPage';
import { AcclaimAccreditationPage } from './pages/services/safety-advisor/AcclaimAccreditationPage';
import { ConstructionlineAccreditationPage } from './pages/services/safety-advisor/ConstructionlineAccreditationPage';
import SiaAcsPage from './pages/services/iso-certifications/SiaAcsPage';
import AcsEligibilityPage from './pages/services/sia-contractor/AcsEligibilityPage';
import AcsCompliancePage from './pages/services/sia-contractor/AcsCompliancePage';
import InsurancePage from './pages/about-us/InsurancePage';
import CareersPage from './pages/about-us/CareersPage';
import Iso9001Page from './pages/services/iso-certifications/Iso9001Page';
import OHSAS18001Page from './pages/services/iso-certifications/OHSAS18001Page';
import Iso14001Page from './pages/services/iso-certifications/Iso14001Page';
import Iso27001Page from './pages/services/iso-certifications/Iso27001Page';
import FireSafetyCertificationPage from './pages/services/FireSafetyCertificationPage';
import Iso45001Page from './pages/services/iso-certifications/Iso45001Page';
import AISauditPage from './pages/services/sia-contractor/AISauditPage';
// Placeholder components for remaining pages

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToTop />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Main Pages */}
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              }
            />

            {/* Services Routes */}
            <Route
              path="/services"
              element={
                <PageTransition>
                  <ServicesPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/:serviceId"
              element={
                <PageTransition>
                  <SafetyAdviserPage />
                </PageTransition>
              }
            />

            {/* Safety Adviser Routes */}
            <Route
              path="/services/safety-adviser"
              element={
                <PageTransition>
                  <SafetyAdviserPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/safety-advisor/health-safety"
              element={
                <PageTransition>
                  <HealthSafetyPage />
                </PageTransition>
              }
            />

            <Route
              path="/services/safety-advisor/chas-assistance"
              element={
                <PageTransition>
                  <ChasAssistancePage />
                </PageTransition>
              }
            />

            {/* SIA Contractor Routes */}
            <Route
              path="/services/sia-contractor"
              element={
                <PageTransition>
                  <SiaContractorPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/sia-acs"
              element={
                <PageTransition>
                  <SiaAcsPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/sia-contractor/acs-audit"
              element={
                <PageTransition>
                  <AcsCompliancePage />
                </PageTransition>
              }
            />
            <Route
              path="/services/sia-contractor/acs-eligibility"
              element={
                <PageTransition>
                  <AcsEligibilityPage />
                </PageTransition>
              }
            />

            <Route
              path="/services/sia-contractor/ais-audit"
              element={
                <PageTransition>
                  <AISauditPage />
                </PageTransition>
              }
            />

            {/* ISO Certifications Routes */}
            <Route
              path="/services/iso-certifications"
              element={
                <PageTransition>
                  <IsoCertificationsPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/iso-certifications/iso-9001"
              element={
                <PageTransition>
                  <Iso9001Page />
                </PageTransition>
              }
            />
            <Route
              path="/services/iso-certifications/iso-14001"
              element={
                <PageTransition>
                  <Iso14001Page />
                </PageTransition>
              }
            />
            <Route
              path="/services/iso-certifications/iso-27001"
              element={
                <PageTransition>
                  <Iso27001Page />
                </PageTransition>
              }
            />
            <Route
              path="/services/iso-certifications/iso-45001"
              element={
                <PageTransition>
                  <Iso45001Page />
                </PageTransition>
              }
            />
            <Route
              path="/iso-14001"
              element={
                <PageTransition>
                  <Iso14001Page />
                </PageTransition>
              }
            />

            <Route
              path="/services/iso-certifications/sia-acs-integration"
              element={
                <PageTransition>
                  <SiaAcsPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/iso-certifications/ohsas-18001"
              element={
                <PageTransition>
                  <OHSAS18001Page />
                </PageTransition>
              }
            />

            {/* Other Services Routes */}
            <Route
              path="/services/staff-vetting"
              element={
                <PageTransition>
                  <StaffVettingPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/pat-testing"
              element={
                <PageTransition>
                  <PatTestingPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/fire-safety"
              element={
                <PageTransition>
                  <FireSafetyCertificationPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/risk-assessments"
              element={
                <PageTransition>
                  <RiskAssessmentsPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/bafe-certification"
              element={
                <PageTransition>
                  <BafeCertificationPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/smas-accreditation"
              element={
                <PageTransition>
                  <SmasAccreditationPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/acclaim-accreditation"
              element={
                <PageTransition>
                  <AcclaimAccreditationPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/constructionline-accreditation"
              element={
                <PageTransition>
                  <ConstructionlineAccreditationPage />
                </PageTransition>
              }
            />

            {/* About Us Routes */}
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              }
            />
            <Route
              path="/about/accreditation"
              element={
                <PageTransition>
                  <SSIPAccreditationPage />
                </PageTransition>
              }
            />
            <Route
              path="/about/policies"
              element={
                <PageTransition>
                  <PoliciesPage />
                </PageTransition>
              }
            />
            <Route
              path="/about/insurance"
              element={
                <PageTransition>
                  <InsurancePage />
                </PageTransition>
              }
            />
            <Route
              path="/about/careers"
              element={
                <PageTransition>
                  <CareersPage />
                </PageTransition>
              }
            />
            <Route
              path="/about/"
              element={
                <PageTransition>
                  <CareersPage />
                </PageTransition>
              }
            />

            {/* Jobs Route */}
            <Route
              path="/jobs"
              element={
                <PageTransition>
                  <JobsPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
