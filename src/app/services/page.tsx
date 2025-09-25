import Link from 'next/link';
import ServiceCard from '../../components/ServiceCard';
import React from 'react';


export const metadata = {
  title: "Our Services - AMCMEP | Fire Safety & AMC Solutions",
  description:
    "Discover AMCMEP’s wide range of fire safety, detection, suppression, extinguishers, AMC, and consultation services tailored for residential, commercial, and industrial clients.",
  alternates: { canonical: "https://www.amcmep.in/services" },
};

const serviceCategories = [
  {
    id: "fire-protection",
    title: "Fire Protection Systems",
    description: "Comprehensive fire protection installation for buildings and facilities",
    icon: "🔥",
    features: ["Sprinkler Systems", "Fire Hydrants", "Fire Pumps", "Standpipes"]
  },
  {
    id: "fire-suppression",
    title: "Fire Suppression Systems",
    description: "Advanced suppression systems for specialized environments",
    icon: "🧯",
    features: ["Clean Agent Systems", "CO2 Systems", "Kitchen Hood Systems", "FM-200"]
  },
  {
    id: "detection-systems",
    title: "Detection Systems",
    description: "Early warning systems to detect fire emergencies",
    icon: "📟",
    features: ["Smoke Detectors", "Heat Detectors", "Alarm Systems", "Monitoring"]
  },
  {
    id: "amc-services",
    title: "AMC Services",
    description: "Annual Maintenance Contracts for ongoing protection",
    icon: "🔧",
    features: ["Regular Inspections", "System Testing", "24/7 Support", "Documentation"]
  },
  {
    id: "fire-extinguishers",
    title: "Fire Extinguishers",
    description: "Portable firefighting equipment for immediate response",
    icon: "🧨",
    features: ["ABC Type", "CO2 Type", "Specialty Types", "Refilling Services"]
  },
  {
    id: "consultation",
    title: "Consultation & Planning",
    description: "Expert guidance for fire safety compliance",
    icon: "📋",
    features: ["Risk Assessment", "Compliance Audit", "Evacuation Planning", "Training"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-gray-500 sm:mt-4">
            Browse our comprehensive range of fire safety and protection services
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900">Can't find what you're looking for?</h2>
            <p className="mt-2 text-gray-600">We offer custom solutions tailored to your specific needs</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}