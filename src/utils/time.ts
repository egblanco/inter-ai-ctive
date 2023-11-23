import { format } from "date-fns";

export const getDateFromTime = (timestamp: number) =>
  format(new Date(timestamp), "HH:mm:ss dd-MM-yyyy");
