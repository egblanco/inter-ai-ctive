import { USER_TYPE } from "@/app/constants/common";
import React from "react";

export interface Message {
  id: string;
  created: number;
  content: string | React.ReactNode;
  role: USER_TYPE.user | USER_TYPE.gpt;
}
