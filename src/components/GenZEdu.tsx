import React from 'react';
import { MessageCircle, AlertCircle, Lightbulb } from 'lucide-react';

const GenZEdu: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <MessageCircle className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-purple-800 mb-4">GenZ-Edu!</h1>
          <p className="text-xl text-purple-600">Edukasi Kesehatan Mental untuk Gen Z</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-10 transform transition-all hover:shadow-lg">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
            <span className="bg-purple-100 p-2 rounded-full mr-3">
              <MessageCircle className="h-6 w-6 text-purple-600" />
            </span>
            Hubungan Gen Z dan Kesehatan Mental
          </h2>
          <p className="text-purple-700 mb-4">
            Gen Z punya tantangan kesehatan mental yang unik karena pengaruh teknologi, lingkungan sosial, dan budaya sekitar mereka, yaitu:
          </p>
          <ul className="space-y-3 text-purple-600 ml-6">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span><strong>Digital Natives:</strong> <br />Tumbuh bareng smartphone dan media sosial bikin Gen Z rentan stres karena FOMO, cyberbullying, dan sering banding-bandingin diri dengan orang lain.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span><strong>Information Overload:</strong> <br />Tiap hari mendapatkan asupan berita, termasuk soal krisis global. Nggak heran jadi gampang overthinking.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span><strong>Academic Pressure:</strong> <br />Persaingan makin ketat, tugas numpuk, overthinking tentang masa depan, dan semua itu membuat mental jadi tidak stabil.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-10 transform transition-all hover:shadow-lg">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
            <span className="bg-purple-100 p-2 rounded-full mr-3">
              <AlertCircle className="h-6 w-6 text-purple-600" />
            </span>
            Dampak dari Kesehatan Mental yang Tidak Stabil
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Dampak Jangka Pendek</h3>
              <ul className="space-y-2 text-purple-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Susah untuk fokus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Jadi suka menghindar atau menarik diri dari lingkungan sosial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tidur nggak teratur atau sering begadang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Emosi gampang meledak, mood naik-turun</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Sulit konsentrasi, pikiran ke mana-mana</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Dampak Jangka Panjang</h3>
              <ul className="space-y-2 text-purple-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Bisa muncul gangguan kesehatan yang serius</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Hubungan dengan orang lain jadi terganggu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Peluang karier bisa terhambat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Risiko terjerumus ke alkohol atau obat-obatan terlarang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Kualitas hidup jadi menurun, ngerasa hampa terus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 transform transition-all hover:shadow-lg">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
            <span className="bg-purple-100 p-2 rounded-full mr-3">
              <Lightbulb className="h-6 w-6 text-purple-600" />
            </span>
            Cara Menjaga Kesehatan Mental 
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-5 rounded-lg transition-transform hover:scale-105">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Kebiasaan Sehari-Hari</h3>
              <ul className="space-y-2 text-purple-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tidur cukup dan teratur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Makan makanan yang bergizi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Olahraga ringan dan aktif bergerak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Luangkan waktu untuk meditasi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Istirahat sejenak dari media sosial</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg transition-transform hover:scale-105">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Dukungan Sosial</h3>
              <ul className="space-y-2 text-purple-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Menjaga hubungan baik dengan teman</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Berkomunikasi terbuka dengan keluarga</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Mengikuti komunitas yang positif</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Mengikuti kegiatan volunteer</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg transition-transform hover:scale-105">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Bantuan Profesional</h3>
              <ul className="space-y-2 text-purple-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Konsultasi dengan psikolog atau konselor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Cek kondisi mental secara rutin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Menggunakan aplikasi kesehatan mental</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenZEdu;