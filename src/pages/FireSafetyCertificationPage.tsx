// pages/FireSafetyCertificationPage.tsx
import React, { useState } from 'react';
import { courses, Course } from '../data/courseData';
import { BadgeCheck, X } from 'lucide-react';
import { Button } from '../components/ui/button';

const FireSafetyCertificationPage: React.FC = () => {
  // null until user clicks “EXPLORE”
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="bg-white">
      {/* ────────────────────────────  Hero  ──────────────────────────── */}
      <section className="bg-gradient-to-r from-[#007E7A] to-[#00C4B3] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Fire Safety Certification Courses
          </h1>
          <p className="text-lg mb-6">
            Employers are legally required (The Regulatory Reform (Fire Safety)
            Order 2005) to provide information, instruction and training about
            fire precautions in the workplace.
          </p>
          <Button className="bg-[#F7941E] hover:bg-[#e88818] text-lg px-6 py-3 rounded-lg">
            Apply&nbsp;Now
          </Button>
        </div>
      </section>

      {/* ────────────────────────  Course Cards  ─────────────────────── */}
      <section className="py-16 px-4 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1E2A3A] mb-10">
            Top Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <article
                key={course.id}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E2A3A] mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <BadgeCheck className="h-4 w-4 text-green-600 mr-1" />
                      CPD&nbsp;VERIFIED
                    </div>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[#1BB66E] font-semibold text-sm mb-2">
                      {course.duration} &nbsp;|&nbsp;{' '}
                      {course.price ?? 'Prices on request'}
                    </p>
                    <Button
                      onClick={() => setSelectedCourse(course)}
                      className="bg-[#007E7A] hover:bg-[#006561] w-full rounded-md text-white"
                    >
                      EXPLORE
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────  Modal  ──────────────────────────── */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">
          {/* Card */}
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-6">
            {/* close btn */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>

            {/* header */}
            <h3 className="text-2xl font-bold text-[#007E7A] mb-2">
              {selectedCourse.title}
            </h3>
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <BadgeCheck className="h-4 w-4 text-green-600 mr-1" />
              CPD VERIFIED
            </div>

            {/* meta */}
            <p className="text-[#1BB66E] font-semibold mb-4">
              Duration: {selectedCourse.duration}
            </p>

            {/* description */}
            <p className="text-gray-700 mb-4">{selectedCourse.description}</p>

            {/* outline */}
            <Section title="Course Outline">
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {selectedCourse.outline.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>

            {/* business benefits */}
            <Section title="Top 5 Business Benefits">
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {selectedCourse.businessBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Section>

            {/* delegate benefits */}
            <Section title="Top 5 Delegate Benefits">
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {selectedCourse.delegateBenefits.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </Section>

            {/* assessment + certificate */}
            <p className="text-sm text-gray-700 mt-4">
              <strong>Assessment:</strong> {selectedCourse.assessment}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Certification:</strong> {selectedCourse.certification}
            </p>

            {/* CTA */}
            <Button className="bg-[#F7941E] hover:bg-[#e88818] w-full mt-6">
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ───────── helper section component ───────── */
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="mb-4">
    <h4 className="font-semibold text-[#1E2A3A] mb-1">{title}</h4>
    {children}
  </div>
);

export default FireSafetyCertificationPage;
