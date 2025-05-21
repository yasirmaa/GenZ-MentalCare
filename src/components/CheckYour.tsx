import React from 'react';
import { CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

const CheckYour: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <CheckCircle className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-purple-800 mb-4">Check-Your!</h1>
          <p className="text-xl text-purple-600">Self-Assessment for Your Mental Health</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Kenapa Self-Assessment Penting?</h2>
          <p className="text-purple-600 mb-8">
            Melakukan self-assessment kesehatan mental secara rutin bisa bantu kamu memantau kondisi diri, mengenali tanda-tanda awal masalah, dan ambil langkah tepat sebelum makin berat.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <BenefitCard 
              title="Deteksi Dini"
              description="Kenali potensi masalah kesehatan mental sebelum jadi lebih serius."
            />
            <BenefitCard 
              title="Kenali Diri Lebih Dalam"
              description="Pahami pola emosi dan hal-hal yang bisa memicu stres atau kecemasan."
            />
            <BenefitCard 
              title="Mendapatkan Dukungan"
              description="Dapatkan rekomendasi yang sesuai dengan kondisi kamu berdasarkan hasil self-assessment."
            />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Alur Pengerjaannya</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Step 
              number="1"
              title="Isi Tesnya"
              description="Jawab pertanyaan seputar pikiran, perasaan, dan kebiasaanmu—semua bersifat rahasia."
            />
            <Step 
              number="2"
              title="Lihat Hasilnya"
              description="Langsung dapat feedback soal berbagai aspek kesehatan mentalmu."
            />
            <Step 
              number="3"
              title="Pahami Maknanya"
              description="Dapat penjelasan yang jelas tentang arti dari hasil yang kamu dapat."
            />
            <Step 
              number="4"
              title="Akses Rekomendasinya"
              description="Temukan saran dan sumber daya yang sesuai dengan kondisi kamu."
            />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl shadow-lg p-8 text-white mb-12">
          <div className="md:flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Siap cek kesehatan mentalmu?</h3>
              <p className="text-purple-100 mb-6 md:mb-0">Isi self-assessment kami untuk dapat insight berharga tentang kondisi mentalmu.</p>
            </div>
            <a 
              href="https://bit.ly/Self-AssGenZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-100 transition-all transform hover:scale-105 shadow-md"
            >
              Mulai Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Penting untuk Diingat!</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Bukan Diagnosis</h3>
              <p className="text-purple-600">
                Self-assessment hanya memberikan gambaran dan bukan pengganti diagnosis dari profesional. 
                Jika kamu merasa khawatir dengan kesehatan mentalmu, segera konsultasi dengan tenaga ahli yang kompeten.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Minta Bantuan Saat Dibutuhkan</h3>
              <p className="text-purple-600">
                Kalau kamu mengalami stres berat atau pikiran untuk menyakiti diri sendiri, segera cari bantuan darurat melalui layanan darurat atau hotline krisis.
              </p>
              <a 
                href="#help-genz" 
                className="inline-flex items-center mt-3 text-purple-600 hover:text-purple-800 font-medium"
              >
                Find Support
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
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
    <div className="bg-purple-50 rounded-lg p-6 text-center transform transition-all hover:scale-105">
      <h3 className="text-lg font-semibold text-purple-800 mb-2">{title}</h3>
      <p className="text-purple-600">{description}</p>
    </div>
  );
};

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
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

export default CheckYour;