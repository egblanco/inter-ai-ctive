export interface VisionPreview {
  completion: Completion;
}

export interface Completion {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: Usage;
  choices: Choice[];
}

export interface Choice {
  message: Message;
  finish_details: FinishDetails;
  index: number;
}

export interface FinishDetails {
  type: string;
  stop: string;
}

export interface Message {
  role: string;
  content: string;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
