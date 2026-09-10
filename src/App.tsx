import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { SelectedWork } from './components/SelectedWork';
import { SeoCaseStudy } from './components/SeoCaseStudy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111] selection:bg-[#111111] selection:text-[#f4f1eb]">
      {/* Navigation Header */}
      <Navigation />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* 01 - About */}
        <About />

        {/* 02 - What I Do */}
        <Services />

        {/* 03 - Experience */}
        <Experience />

        {/* 04 - Selected Work */}
        <SelectedWork />

        {/* 05 - SEO Strategy */}
        <SeoCaseStudy />

        {/* 06 - Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
