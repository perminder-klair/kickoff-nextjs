import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  isLoggedIn: boolean;
  user: object;
};

type Actions = {
  reset: () => void;
  // eslint-disable-next-line no-unused-vars
  setIsLoggedIn: (data: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setUser: (data: object) => void;
};

// define the initial state
const initialState: State = {
  isLoggedIn: false,
  user: {},
};

// eslint-disable-next-line import/prefer-default-export
export const useStore = create<State & Actions>()(
  // devtools(
  persist(
    (set) => ({
      ...initialState,
      reset: () => set(initialState),

      setIsLoggedIn: (data: boolean) => set({ isLoggedIn: data }),
      setUser: (data: object) => set({ user: data }),
    }),
    {
      name: 'kickoff-nextjs',
    }
  )
  // ),
);
