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
}));

export default useBookingData;