import { create } from 'zustand';

const useUserLocation = create((set) => ({
    position: null,
    setPosition: (p) => set({ position: p }),
}));

export default useUserLocation;