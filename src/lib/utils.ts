import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function groupArray<T>(arr: T[], group: number) {
  const groupedArray: T[][] = [];

  for (let i = 0; i < arr.length; i += group) {
    groupedArray.push(arr.slice(i, i + group));
  }

  return groupedArray;
}
