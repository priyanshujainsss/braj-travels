import { business } from "@/data/business";

const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || business.phoneRaw;

export function getTelUrl(): string {
  return `tel:${PHONE_NUMBER}`;
}

export function getPhoneDisplay(): string {
  return business.phoneDisplay;
}
