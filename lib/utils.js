// lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone) {
  if (!phone) return phone;
  return phone.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3');
}