import { create } from "zustand";

import { Message } from "@/types/message";

type EditFilterProps = {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  name: string;
  setName: (name: string) => void;
};

const editMessages = create<EditFilterProps>((set) => ({
  messages: [],
  setMessages: (messages: Message[]) => set({ messages }),
  name: "",
  setName: (name: string) => set({ name }),
}));

const useEditMessages = () => editMessages();

export default useEditMessages;
