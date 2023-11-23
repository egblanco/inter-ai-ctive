import { create } from "zustand";

import { Message } from "@/types/message";

type EditFilterProps = {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
};

const editMessages = create<EditFilterProps>((set) => ({
  messages: [],
  setMessages: (messages: Message[]) => set({ messages }),
}));

const useEditMessages = () => editMessages();

export default useEditMessages;
