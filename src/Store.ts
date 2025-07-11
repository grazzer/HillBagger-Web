import { create } from "zustand";

type Store = {
  burgerMenuOpen: boolean;
  setBurgerMenuOpen: (input: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  burgerMenuOpen: false,
  setBurgerMenuOpen: (input: boolean) => {
    set({ burgerMenuOpen: input });
  },
}));
