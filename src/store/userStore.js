import {create} from 'zustand'

const useUserStore = create((set) => ({
  userName: '',
  id: '',
  setUserName: (userName) => set(() => ({userName: userName})),
  setId: (id) => set({id}),
  clearUser: () => set({userName: '', id: ''})
}))

export default useUserStore;