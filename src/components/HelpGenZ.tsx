import React from 'react';
import { Users, ExternalLink, ArrowRight } from 'lucide-react';

const HelpGenZ: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-purple-800 mb-4">Help-GenZ!</h1>
          <p className="text-xl text-purple-600">Jangan takut untuk konsultasi, Yuk hubungi psikolog!</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <PsychologistCard 
            name="Jimmy Hardjo, M.Psi." 
            title="Psikolog Klinis"
            specialty="Kecemasan & Depresi" 
            image="src/components/image/jimmy.jpeg"
            profileUrl="https://darinaaren.github.io/ProfilGenZ/Profil%20Psikolog%20Jimmy.html"
          />
          
          <PsychologistCard 
            name="Mix Maleo, M.Psi." 
            title="Psikolog Klinis"
            specialty="Masalah Perilaku Remaja" 
            image="src/components/image/mix.jpeg"
            profileUrl="https://darinaaren.github.io/ProfilGenZ/Profil%20Psikolog%20Mix.html"
          />
          
          <PsychologistCard 
            name="Puspita Indah, M.Psi." 
            title="Konselor"
            specialty="Manajemen Stress" 
            image="src/components/image/puimek.jpeg"
            profileUrl="https://darinaaren.github.io/ProfilGenZ/"
          />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Alur Konsultasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <ConsultationStep 
              number="1"
              title="Klik 'Lihat Profil'"
              description="Untuk menentukan Psikolog/Konselor yang kamu inginkan"
            />
            <ConsultationStep 
              number="2"
              title="Isi Formulir"
              description="Lengkapi formulir dan pastikan jadwak dan data diri yang diisikan sudah benar"
            />
            <ConsultationStep 
              number="3"
              title="Pilih Jadwal"
              description="Memilih tanggal dan jam yang paling nyaman buat kamu"
            />
            <ConsultationStep 
              number="4"
              title="Pembayaran"
              description="Lakukan pembayaran dengan memilih metode pembayaran yang kamu inginkan "
            />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl shadow-lg p-8 text-white">
          <div className="md:flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Siap buat mulai konsultasi?</h3>
              <p className="text-purple-100 mb-6 md:mb-0">Yuk, ambil langkah pertama buat jaga kesehatan mentalmu hari ini!</p>
            </div>
            <a 
              href="https://bit.ly/FormBookingGenZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-100 transition-all transform hover:scale-105 shadow-md"
            >
              Klik Disini!
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PsychologistCardProps {
  name: string;
  title: string;
  specialty: string;
  image: string;
  profileUrl: string;
}

const PsychologistCard: React.FC<PsychologistCardProps> = ({ name, title, specialty, image, profileUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:scale-105">
      <div className="h-48 relative">
        <img 
          className="h-full w-full object-cover object-top" 
          src={image} 
          alt={name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-40"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-purple-800">{name}</h3>
        <p className="text-purple-600 font-medium">{title}</p>
        <p className="text-purple-500 text-sm mb-4">Specialty: {specialty}</p>
        <a 
          href={profileUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
        >
          View Profile
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

interface ConsultationStepProps {
  number: string;
  title: string;
  description: string;
}

const ConsultationStep: React.FC<ConsultationStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mb-3">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-purple-800 mb-2">{title}</h3>
      <p className="text-purple-600">{description}</p>
    </div>
  );
};

export default HelpGenZ;