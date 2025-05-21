import React from 'react';
import { Book, ExternalLink } from 'lucide-react';

const GenZRead: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Book className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-purple-800 mb-4">GenZ-Read!</h1>
          <p className="text-xl text-purple-600">Artikel Kesehatan Mental untuk Generasi Z</p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <ArticleCard 
            title="Dampak Media Sosial terhadap Kesehatan Mental Remaja"
            description="Pelajari bagaimana media sosial memengaruhi kesehatan mental remaja—mulai dari sisi positif dan negatifnya, hingga tips supaya tetap sehat secara mental saat online."
            image="src/components/image/sosmed.jpeg"
            link="https://darinaaren.github.io/Artikel/Dampak%20Media%20Sosial.html"
            tags={["Media Sosial", "Kesehatan Mental", "Remaja"]}
          />
          
          <ArticleCard 
            title="Mengatasi Kecemasan: Strategi Efektif untuk Kesehatan Mental yang Lebih Baik"
            description="Temukan tips sederhana untuk atasi cemas—mulai dari teknik pernapasan, pendekatan kognitif-perilaku, sampai perubahan gaya hidup biar mental lebih stabil."
            image="src/components/image/cemas.jpeg"
            link="https://darinaaren.github.io/Artikel/Mengatasi%20Kecemasan.html"
            tags={["Kecemasan", "Strategi", "Kesehatan Mental"]}
          />
          
          <ArticleCard 
            title="Pentingnya Menjaga Kesehatan Mental di Tempat Kerja"
            description="Cari tahu kenapa menjaga kesehatan mental saat bekerja itu penting—termasuk tips menjaga work-life balance dan membangun lingkungan kerja yang suportif."
            image="src/components/image/mh.jpeg"
            link="https://darinaaren.github.io/Artikel/"
            tags={["Tempat Kerja", "Kesehatan Mental", "Keseimbangan"]}
          />
        </div>
        
        
      </div>
    </div>
  );
};

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, image, link, tags }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 relative">
        <img 
          className="h-full w-full object-cover" 
          src={image} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-50"></div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block bg-purple-100 text-purple-600 px-2 py-1 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-purple-800 mb-2">{title}</h3>
        <p className="text-purple-600 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
        >
          Read Article
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-purple-50 rounded-lg p-6 text-center transform transition-all hover:scale-105">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-purple-800 mb-2">{title}</h3>
      <p className="text-purple-600">{description}</p>
    </div>
  );
};

export default GenZRead;