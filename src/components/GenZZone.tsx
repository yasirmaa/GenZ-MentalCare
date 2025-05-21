import React from 'react';
import { Heart } from 'lucide-react';

const GenZZone: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-purple-800 mb-4">GenZ-Zone!</h1>
          <p className="text-xl text-purple-600">Mengenal lebih dekat Siapa Gen Z dan Apa itu Kesehatan Mental</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 transform transition-all hover:shadow-lg">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img 
                className="h-48 w-full object-cover md:h-full md:w-48" 
                src="src/components/image/genz.jpeg" 
                alt="Generation Z" 
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-purple-500 font-semibold">Who are they?</div>
              <h2 className="mt-2 text-xl font-semibold text-purple-800">Siapa itu GenZ?</h2>
              <p className="mt-2 text-purple-600">
                Generasi Z atau lebih sering dikenal sebagai GenZ adalah generasi yang lahir dari tahun 1997 - 2012. 
                GenZ ini adalah generasi yang tumbuh di tengah perkembangan teknologi digital, internet, dan juga media sosial. 
                Jadi, jangan kaget kalau mereka memang “gaul abiezz”
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 transform transition-all hover:shadow-lg">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-purple-500 font-semibold">Characteristics</div>
              <h2 className="mt-2 text-xl font-semibold text-purple-800">Karakteristik GenZ!</h2>
              <p className="mt-2 text-purple-600">
                Gen Z adalah generasi yang akrab banget dengan teknologi dan internet. 
                Mereka aktif di media sosial, tapi banyak yang pilih akun private karena sadar pentingnya privasi. 
                Gen Z juga dikenal mandiri, open minded, dan punya toleransi tinggi terhadap perbedaan. 
                Meski begitu, mereka sering melakukan multitasking, kebiasaan yang kadang bikin fokus jadi terganggu.
              </p>
            </div>
            <div className="md:shrink-0">
              <img 
                className="h-48 w-full object-cover md:h-full md:w-48" 
                src="src/components/image/karakter.jpeg" 
                alt="Gen Z Characteristics" 
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 transform transition-all hover:shadow-lg">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img 
                className="h-48 w-full object-cover md:h-full md:w-48" 
                src="src/components/image/mental.jpeg" 
                alt="Mental Health" 
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-purple-500 font-semibold">Mental Health</div>
              <h2 className="mt-2 text-xl font-semibold text-purple-800">Apa itu Kesehatan Mental?</h2>
              <p className="mt-2 text-purple-600">
                Kesehatan mental adalah kondisi di mana seseorang bisa menghadapi tekanan hidup dengan tetap produktif dan berperan di lingkungan sekitarnya. 
                Kesehatan mental menyangkut perasaan, pikiran, dan batin. 
                Kesehatan mental memiliki peran penting untuk kehidupan supaya hidup bisa lebih bahagia!
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-purple-500 font-semibold">Importance?</div>
              <h2 className="mt-2 text-xl font-semibold text-purple-800">Kenapa Kesehatan Mental itu Penting?</h2>
              <p className="mt-2 text-purple-600">
                Kesehatan mental penting karena mempengaruhi terhadap semua aspek kehidupan. 
                Jika mental sehat maka masalah akan mudah untuk dihadapi, bisa membangun hubungan yang baik, bisa bekerja dengan maksimal, 
                dan berkembang menjadi pribadi yang lebih baik. 
              </p>
            </div>
            <div className="md:shrink-0">
              <img 
                className="h-48 w-full object-cover md:h-full md:w-48" 
                src="src/components/image/health.jpeg" 
                alt="Mental Health Importance" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenZZone;