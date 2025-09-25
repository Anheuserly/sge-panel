import Link from "next/link";
import Image from "next/image";
import React from "react";
import AmcmepLogo from "../static/amcmep-icon.svg";

// App icons
import IconServiceApp from "../static/iconserviceapp.png";
import IconPartnerApp from "../static/iconpartnerapp.png";

const serviceAreas = [
  { name: "Delhi", href: "/delhi" },
  { name: "Gurgaon", href: "/gurgaon" },
  { name: "Faridabad", href: "/faridabad" },
  { name: "Noida", href: "/noida" },
  { name: "Greater Noida", href: "/greater-noida" },
  { name: "Ghaziabad", href: "/ghaziabad" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Grid Layout */}
        <div className="footer-grid">
          {/* Company Info */}
          <div>
            <div className="company-logo">
              <Image
                src={AmcmepLogo}
                alt="Amcmep Logo"
                className="w-10 h-10"
                priority
              />
              <h3 className="company-name">amcmep.in</h3>
            </div>
            <p className="company-description">
              Providing comprehensive fire safety and AMC services across Delhi
              NCR with 24/7 support.
            </p>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="#" aria-label="Twitter" className="social-icon"></a>
              <a href="#" aria-label="LinkedIn" className="social-icon"></a>
              <a href="#" aria-label="Facebook" className="social-icon"></a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="section-title">Service Areas</h3>
            <div className="service-areas">
              {serviceAreas.map((area) => (
                <Link key={area.name} href={area.href} className="area-item">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="section-title">Quick Links</h3>
            <ul className="quick-links">
              <li><Link href="/services" className="link">Services</Link></li>
              <li><Link href="/partners" className="link">Partners</Link></li>
              <li><Link href="/about" className="link">About Us</Link></li>
              <li><Link href="/contact" className="link">Contact</Link></li>
              <li><Link href="/privacy" className="link">Privacy Policy</Link></li>
              <li><Link href="/terms" className="link">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Mobile Apps */}
          <div>
            <h3 className="section-title">Download Our Apps</h3>
            <div className="space-y-6">
              {/* Customer App */}
              <div className="app-card flex items-center gap-4">
                <Image
                  src={IconServiceApp}
                  alt="Customer App Icon"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <h4 className="app-title">Amcmep 24/7 Service App</h4>
                  <p className="app-description">
                    For customers to request AMC services
                  </p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mepsge.amcsge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                  >
                    Get on Google Play
                  </a>
                </div>
              </div>

              {/* Partner App */}
              <div className="app-card flex items-center gap-4">
                <Image
                  src={IconPartnerApp}
                  alt="Partner App Icon"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <h4 className="app-title">Amcmep 24/7 Partner App</h4>
                  <p className="app-description">
                    For partners to manage inspections
                  </p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mepsge.amcsgepartner.amcsgepartner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                  >
                    Get on Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-section">
          <div className="contact-item">
            <p className="contact-label">24/7 Support</p>
            <p className="contact-value">+91-9871936847</p>
          </div>
          <div className="contact-item">
            <p className="contact-label">Email Us</p>
            <p className="contact-value">anilkumarsaini0507@gmail.com</p>
          </div>
          <div className="contact-item">
            <p className="contact-label">Head Office</p>
            <p className="contact-value">
              House No. 535, Second Floor, Left Side, Khasra No. 60, 128-D21,
              Chattarpur Pahadi, New Delhi, Delhi 110074
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} amcmep.in. All rights reserved. |{" "}
            <Link href="/privacy" className="copyright-link">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="copyright-link">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
