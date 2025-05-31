import { create } from "zustand";
import { useShallow } from 'zustand/react/shallow'

interface FormState {
  email: string;
  senha: string;
  setField: (field: "email" | "senha", value: string) => void;
  reset: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  email: "",
  senha: "",
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  reset: () => set({ email: "", senha: "" }),
}));

export const useFormStoreWithShallow = <T>(selector: (state: FormState) => T) => useFormStore(useShallow(selector));
