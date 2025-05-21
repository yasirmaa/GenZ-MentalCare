import React, { useState } from 'react';
import { Menu, X, Heart, MessageCircle, Book, CheckCircle, Bot, Users, Home } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GenZZone from './components/GenZZone';
import GenZEdu from './components/GenZEdu';
import HelpGenZ from './components/HelpGenZ';
import GenZRead from './components/GenZRead';
import CheckYour from './components/CheckYour';
import GenZBot from './components/GenZBot';
import OurTeams from './components/OurTeams';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { id: 'home', name: 'Home', icon: <Home size={20} /> },
    { id: 'genz-zone', name: 'GenZ-Zone!', icon: <Heart size={20} /> },
    { id: 'genz-edu', name: 'GenZ-Edu!', icon: <MessageCircle size={20} /> },
    { id: 'help-genz', name: 'Help-GenZ!', icon: <Users size={20} /> },
    { id: 'genz-read', name: 'GenZ-Read!', icon: <Book size={20} /> },
    { id: 'check-your', name: 'Check-Your!', icon: <CheckCircle size={20} /> },
    { id: 'genz-bot', name: 'GenZ-Bot!', icon: <Bot size={20} /> },
    { id: 'our-teams', name: 'Our-Teams!', icon: <Users size={20} /> }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'genz-zone':
        return <GenZZone />;
      case 'genz-edu':
        return <GenZEdu />;
      case 'help-genz':
        return <HelpGenZ />;
      case 'genz-read':
        return <GenZRead />;
      case 'check-your':
        return <CheckYour />;
      case 'genz-bot':
        return <GenZBot />;
      case 'our-teams':
        return <OurTeams />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-purple-50">
      <Navbar 
        menuItems={menuItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

const Hero = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  return (
    <div className="bg-gradient-to-b from-purple-200 to-purple-100 py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <Heart className="h-16 w-16 text-purple-500" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6 animate-fade-in">
          GenZ-Mental Care
        </h1>
        <p className="text-xl md:text-2xl text-purple-700 mb-8 max-w-2xl mx-auto">
          Mendukung kesehatan mental Generasi Z melalui informasi yang relatable, edukasi yang bermanfaat, dan support dari profesional. 
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setActiveSection('genz-zone')}
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all transform hover:scale-105 shadow-md"
          >
            Learn More
          </button>
          <button 
            onClick={() => setActiveSection('help-genz')}
            className="px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all transform hover:scale-105 shadow-md"
          >
            Get Help Now
          </button>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <FeatureCard 
          icon={<MessageCircle className="h-10 w-10 text-purple-500" />}
          title="Education for GenZ!"
          description="Yuk! cari tahu soal kesehatan mental dan kenapa ini penting untuk Gen Z"
          onClick={() => setActiveSection('genz-edu')}
        />
        <FeatureCard 
          icon={<Users className="h-10 w-10 text-purple-500" />}
          title="Help GenZ!"
          description="Ngobrol langsung sama psikolog buat dapet support yang kamu butuhin!"
          onClick={() => setActiveSection('help-genz')}
        />
        <FeatureCard 
          icon={<CheckCircle className="h-10 w-10 text-purple-500" />}
          title="Self Assessment for GenZ!"
          description="Mau tahu kondisi mentalmu? Yuk ikut tesnya!"
          onClick={() => setActiveSection('check-your')}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  onClick 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  onClick: () => void;
}) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-105"
      onClick={onClick}
    >
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
      <p className="text-purple-600">{description}</p>
    </div>
  );
};

export default App;