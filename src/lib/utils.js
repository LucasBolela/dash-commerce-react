import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const textShrink = (string) => {
  return `${string.slice(0, 25)} ...`
}

export const formatCurrency = (value) => value.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
})