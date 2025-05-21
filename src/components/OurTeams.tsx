import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const OurTeams: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-purple-800 mb-4">Our-Teams!</h1>
          <p className="text-xl text-purple-600">Kenalan Sama Tim di Balik GenZ-Mental Care</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
                <Target className="mr-2 h-6 w-6 text-purple-600" /> Visi
              </h2>
              <p className="text-purple-600 mb-6">
                Menjadi ruang digital yang aman dan nyaman bagi Gen Z untuk menjaga kesehatan mental, berbagi cerita, dan menemukan dukungan yang relevan, kapan saja dan di mana saja.
              </p>
              <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
                <Award className="mr-2 h-6 w-6 text-purple-600" /> Misi
              </h2>
              <p className="text-purple-600">
                GenZ-Mental Care bertujuan meningkatkan kesadaran dan literasi kesehatan mental di kalangan Gen Z dengan menyediakan layanan dukungan melalui chatbot Telegram yang mudah diakses dan relatable. 
                Kami menyebarkan semangat self-care dan empati lewat pendekatan yang ramah anak muda, sekaligus berkolaborasi dengan tenaga ahli untuk menciptakan konten edukatif dan bermanfaat. 
                Dengan begitu, kami ingin menjadi bagian dari solusi dalam menurunkan stigma terkait kesehatan mental di Indonesia.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaboration" 
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="bg-purple-50 rounded-lg p-6 transform transition-all hover:scale-105">
      <h3 className="text-lg font-semibold text-purple-800 mb-2">{title}</h3>
      <p className="text-purple-600">{description}</p>
    </div>
  );
};

interface ValueCardProps {
  title: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title }) => {
  return (
    <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default OurTeams;