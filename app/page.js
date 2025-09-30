'use client';

import Toast from './components/Toast';
import PromoCarousel from './components/PromoCarousel';
import Image from 'next/image';
import MapComponent from './components/maps/MapComponent';
import useLocationToast from './store/useLocationToast';
import useLocationPermission from './store/useLocationPermission';
import useVaccineTypes from './store/useVaccineTypes';
import { useEffect } from 'react';
import BookingModal from './components/BookingModal';
import ETicket from './components/ETicket';
import useBookingData from './store/useBookingData';
import useModalState from './store/useModalState';
import FAQ from './components/FAQ';
import VaccineInfoModal from './components/VaccineInfoModal';

export default function Home() {
  const { showToast, setShowToast } = useLocationToast();
  const { locationPermission, setLocationPermission } = useLocationPermission();
  const { vaccineTypes, fetchVaccineTypes } = useVaccineTypes();
  const { bookingData, loadBookingData } = useBookingData();
  const { 
    showVaccineInfo, 
    showBooking, 
    showTicket, 
    selectedVaccine,
    openVaccineInfo,
    closeVaccineInfo,
    proceedToBooking,
    closeBooking,
    showTicketAfterBooking,
    closeTicket
  } = useModalState();

  useEffect(() => {
  const fetchData = async () => {
    try {
      await fetchVaccineTypes();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };  
    fetchData();
  }, [fetchVaccineTypes]);

  const handleFindLocation = () => {
    setShowToast(true);
  };

  const handleLocationAccept = () => {
    setLocationPermission(true);
    setShowToast(false);
  };

  const handleLocationDecline = () => {
    setShowToast(false);
  };



  const handleBookingSubmit = (data) => {
    showTicketAfterBooking();
  };

  const handleDownloadTicket = () => {
    loadBookingData();
    if (!bookingData || !bookingData.nama) return;
    
    const ticket = `
      E-TICKET VAKSINASI HPV
      ====================
      NIK: ${bookingData.nik}
      Nama: ${bookingData.nama}
      Usia: ${bookingData.usia}
      Gender: ${bookingData.gender}
      No. HP: ${bookingData.phone}
      Lab: ${bookingData.lab}
      Tanggungan: ${bookingData.tanggungan}
      Jadwal: ${bookingData.tanggal} ${bookingData.jam}
      ====================
      Harap tunjukkan e-ticket ini saat kedatangan
    `;
    const blob = new Blob([ticket], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `e-ticket-vaksin-hpv-${bookingData.nama}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">
      <Toast 
        message="Kami memerlukan akses lokasi untuk menunjukkan laboratorium Prodia terdekat dari lokasi Anda. Ini akan membantu Anda menemukan tempat vaksinasi HPV yang paling mudah dijangkau."
        show={showToast}
        onAccept={handleLocationAccept}
        onDecline={handleLocationDecline}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#382b22] mb-6">
                Lindungi Masa Depanmu dengan <span className="text-pink-600">Vaksin HPV</span>
              </h1>
              <p className="md:text-lg text-gray-700 mb-8">
                Bergabunglah dengan <strong>ribuan remaja cerdas</strong> yang sudah melindungi diri dari kanker serviks. 
                Vaksinasi HPV adalah investasi terbaik untuk kesehatan reproduksimu di masa depan!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r text-center from-pink-500 to-pink-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:shadow-lg hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 gap-2">
                  Daftar Vaksin Sekarang
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-cover bg-center" style={{backgroundImage: 'url(https://cdn.stocksnap.io/img-thumbs/960w/woman-smartphone_MLEPUKHYUU.jpg)'}}></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-cover bg-center" style={{backgroundImage: 'url(https://www.shutterstock.com/shutterstock/photos/2341582245/display_1500/stock-photo-beautiful-young-asian-woman-pointing-finger-to-her-teeth-on-isolated-pink-background-facial-and-2341582245.jpg)'}}></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-cover bg-center" style={{backgroundImage: 'url(https://www.shutterstock.com/shutterstock/photos/2038337828/display_1500/stock-photo-pink-background-portrait-of-a-young-asian-woman-with-pigtails-2038337828.jpg)'}}></div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>2,500+</strong> remaja sudah terlindungi bulan ini
                </p>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/vaksin-hpv.png" 
                alt="Vaksin HPV" 
                width={1000} 
                height={800}
                className="drop-shadow-lg drop-shadow-violet-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promo Carousel Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#382b22] mb-8">Promo Spesial Hari Ini</h2>
          <PromoCarousel />
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#382b22]">Berkolaborasi dengan</h2>
          <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-12 my-2 flex-wrap">
            <Image 
              src="/Laboratorium_Klinik_Prodia.png" 
              alt="Prodia Logo" 
              width={150} 
              height={60}
            />
            <Image 
              src="/Prudential-logo.png" 
              alt="Prudential Logo" 
              width={150} 
              height={60}
            />
            <Image 
              src="/Allianz-logo.png" 
              alt="Allianz Logo" 
              width={150} 
              height={60}
            />
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bermitra dengan <strong>Laboratorium Prodia</strong> sebagai penyedia layanan vaksinasi HPV terpercaya dengan standar internasional. 
            Didukung oleh <strong>asuransi kesehatan terkemuka</strong> seperti Prudential dan Allianz untuk memberikan kemudahan 
            pembayaran dan perlindungan kesehatan yang komprehensif bagi kamu dan keluarga.
          </p>
        </div>
      </section>

      {/* Vaccine Types Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#382b22] text-center mb-12">Jenis Vaksin HPV dari Prodia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {vaccineTypes.map((vaccine, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#382b22] mb-3">{vaccine.name}</h3>
                <p className="text-2xl font-bold text-pink-600 mb-3">{vaccine.price}</p>
                <p className="text-gray-600 text-sm mb-4">{vaccine.description}</p>
                <button 
                  onClick={() => openVaccineInfo(vaccine)}
                  className="w-full py-3 bg-white text-pink-600 rounded-full font-semibold border-2 border-pink-300 hover:bg-pink-50 hover:border-pink-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span className="group-hover:rotate-45 transition-transform duration-300">✨</span>
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* Location Finder Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative">
        {/* Decorative elements */}
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 relative">
            <span className="inline-block animate-bounce mb-4">📍</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Temukan Lab Prodia Terdekat
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Cari lokasi laboratorium Prodia di sekitar kamu untuk vaksinasi HPV yang mudah dan nyaman.
            </p>
            {!locationPermission && (
              <div onClick={handleFindLocation}>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 mx-auto flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-xl sm:text-2xl">🎯</span>
                  Cari Lokasi Terdekat
                </button>
              </div>
            )}
          </div>
          
          {locationPermission && (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-200 transform hover:scale-[1.01] transition-all duration-300">
                <MapComponent />
              <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-pink-50 to-purple-50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">💝</span>
                  <h4 className="text-lg font-bold text-pink-600">Tips Kunjungan Lab</h4>
                </div>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-2 sm:space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">👆</span>
                    Klik marker pada peta untuk melihat detail lokasi lab
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">📞</span>
                    Hubungi lab untuk membuat janji & konsultasi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">🪪</span>
                    Jangan lupa bawa kartu identitas saat kunjungan
                  </li>
                </ul>
                <div className="mt-4 sm:mt-6 bg-pink-50 rounded-xl p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-pink-600 font-medium flex items-center gap-2 flex-wrap">
                    <span>📸</span> Bagikan pengalamanmu! Post foto dengan #VaksinBareng, tag @risaofficial, dan dapatkan 50 poin! <span className="animate-bounce">✨</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <VaccineInfoModal
        show={showVaccineInfo}
        onClose={closeVaccineInfo}
        onBooking={proceedToBooking}
        selectedVaccine={selectedVaccine}
      />

      <BookingModal
        show={showBooking}
        onClose={closeBooking}
        onSubmit={handleBookingSubmit}
        selectedVaccine={selectedVaccine}
      />

      <ETicket
        show={showTicket}
        onClose={closeTicket}
        onDownload={handleDownloadTicket}
      />
    </div>
  )
}