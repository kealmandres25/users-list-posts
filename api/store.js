import { create } from "zustand";

export default useUserStore = create((set) => ({
  users: [],
  posts: [],
  setUsers: (users) => set((state) => ({ users: users })),
  setPosts: (posts) => set((state) => ({ posts: posts })),
}));
