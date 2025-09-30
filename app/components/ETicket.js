'use client';

import Image from "next/image";

export default function ETicket({ show, onClose, onDownload, bookingData }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto border-2 border-pink-200">
        <div className="text-center mb-6">
          <span className="text-4xl mb-4 inline-block">🎫</span>
          <h3 className="text-xl font-bold text-pink-600">Tiket Digital Vaksin HPV</h3>
          <p className="text-gray-600 mt-2">Terima kasih, <span className="font-semibold">{bookingData.nama}</span>!</p>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-6">
          <div className="space-y-3 text-sm">
            <div><strong>NIK:</strong> {bookingData.nik}</div>
            <div><strong>Nama:</strong> {bookingData.nama}</div>
            <div><strong>Usia:</strong> {bookingData.usia} tahun</div>
            <div><strong>Jenis Kelamin:</strong> {bookingData.gender}</div>
            <div><strong>No. HP:</strong> {bookingData.phone}</div>
            <div><strong>Lab:</strong> {bookingData.lab}</div>
            <div><strong>Jenis Vaksin:</strong> {bookingData.vaccineType}</div>
            <div><strong>Tanggungan:</strong> {bookingData.tanggungan}</div>
            <div><strong>Jadwal:</strong> {bookingData.tanggal} {bookingData.jam}</div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onDownload}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Image width="20" height="20" src="/download-icon.png" alt="download-icon"/> 
            Download E-Ticket
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 bg-white text-pink-600 rounded-full font-semibold border-2 border-pink-300 hover:bg-pink-50 hover:border-pink-400 transition-all duration-300"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}