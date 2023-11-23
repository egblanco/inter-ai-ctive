import React from "react";

export interface Message {
  id: string;
  created: number;
  content: string | React.ReactNode;
  role: "user" | "gpt";
}
