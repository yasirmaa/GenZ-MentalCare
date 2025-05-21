import React from 'react';
import { Bot, MessageSquare, CheckCircle, Shield, ExternalLink } from 'lucide-react';

const GenZBot: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Bot className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-purple-800 mb-4">GenZ-Bot!</h1>
          <p className="text-xl text-purple-600">Selamat datang di ruang cerita GenZ!</p>
        </div>
        
        <div className="bg-white w-auto rounded-xl shadow-lg p-8 mb-12 overflow-hidden">
          <div className="md:flex items-center">
            <div className="mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Kenalan dengan Chatbot GenZ-MentalCare</h2>
              <p className="text-purple-600 mb-6">
                GenZ-Bot siap menemani kamu 24/7 dengan dukungan yang rahasia dan penuh pengertian. 
                Mau curhat, belajar cara ngatasin stres, atau butuh panduan buat cari bantuan profesional? Bot kita selalu siap bantu kamu!
              </p>
              <a 
                href="http://t.me/MentalGenZ_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all transform hover:scale-105 shadow-md"
              >
                Chat on Telegram
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ChatMessageProps {
  isBot: boolean;
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ isBot, message }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div 
        className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg ${
          isBot 
            ? 'bg-purple-200 text-purple-800 rounded-tl-none' 
            : 'bg-purple-600 text-white rounded-tr-none'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all transform hover:translate-y-[-2px]">
      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-purple-800 mb-2">{title}</h3>
      <p className="text-purple-600">{description}</p>
    </div>
  );
};

export default GenZBot;