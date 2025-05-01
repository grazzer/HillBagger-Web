import { create } from "zustand";
import { getHills } from "./services/hillsApi";

type HillsStore = {
  hillsList: [any];
  countHills: number;
  searchString: string;
  selectedClassification: string;
  selectedDirection: string;
  pagination: number;
  setSearchString: (input: string) => void;
  setSelectedClassification: (input: string) => void;
  setSelectedDirection: (input: string) => void;
  setPagination: (input: number) => void;

  selectedHillIndex: number;
  setSelectedHillIndex: (index: number) => void;

  updateList: () => Promise<void>;
};

export const useHillsStore = create<HillsStore>((set, get) => ({
  hillsList: [null],
  countHills: 0,
  searchString: "",
  selectedClassification: "all",
  selectedDirection: "n1",
  pagination: 0,

  setSearchString: (input) => {
    set({ searchString: input });
    get().updateList();
  },
  setSelectedClassification: (input) => {
    set({ selectedClassification: input });
    get().updateList();
  },
  setSelectedDirection: (input) => {
    set({ selectedDirection: input });
    get().updateList();
  },
  setPagination: (input) => {
    set({ pagination: input });
    get().updateList();
  },

  selectedHillIndex: 0,
  setSelectedHillIndex: (index) => {
    set({ selectedHillIndex: index });
  },

  updateList: async () => {
    const [resHills, resCount] = await getHills(
      "/" +
        get().selectedClassification +
        "?" +
        "p=" +
        get().pagination +
        "&d=" +
        get().selectedDirection +
        "&s=" +
        get().searchString
    );
    set(() => ({ hillsList: resHills }));
    set(() => ({ countHills: resCount }));
    return;
  },
}));
