import { create } from "zustand";

const useUserStore = create((set) => ({
  info: null,
  setInfo: (newInfo) => set({ info: newInfo })
}))

export { useUserStore };