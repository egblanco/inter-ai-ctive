import { USER_TYPE } from "@/constants/common";
import React from "react";

export interface Message {
  id: string;
  created: number;
  content: string | React.ReactNode;
  role: USER_TYPE.user | USER_TYPE.gpt;
}

export interface Conversation {
  completion: Completion;
}

export interface Completion {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
}

export interface Choice {
  index: number;
  message: MessageConversation;
  finish_reason: string;
}

export interface MessageConversation {
  role: string;
  content: string;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
