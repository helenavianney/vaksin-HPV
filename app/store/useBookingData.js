import { create } from 'zustand';

const useBookingData = create((set) => ({
  bookingData: {
    nik: '',
    nama: '',
    usia: '',
    gender: '',
    phone: '',
    lab: '',
    tanggungan: '',
    tanggal: '',
    jam: '',
    vaccineType: '',
  },
  
  setBookingData: (data) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('bookingData', JSON.stringify(data));
    }
    set({ bookingData: data });
  },
  
  updateBookingField: (field, value) => set((state) => ({
    bookingData: { ...state.bookingData, [field]: value }
  })),
  
  resetBookingData: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('bookingData');
    }
    set({
      bookingData: {
        nik: '',
        nama: '',
        usia: '',
        gender: '',
        phone: '',
        lab: '',
        tanggungan: '',
        tanggal: '',
        jam: '',
        vaccineType: '',
      }
    });
  },

  loadBookingData: () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bookingData');
      if (saved) {
        set({ bookingData: JSON.parse(saved) });
      }
    }
  },
}));

export default useBookingData;