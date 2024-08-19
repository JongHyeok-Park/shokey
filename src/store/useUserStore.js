import { create } from "zustand";

const useUserStore = create(() => set({
  info: {
    id: null,
    userId: null,
    userName: null,
    userGender: null,
    userEmail: null,
    userRole: null,
    influencerId: null
  },
  setInfo: (newInfo) => set({ info: newInfo })
}))

export { useUserStore };