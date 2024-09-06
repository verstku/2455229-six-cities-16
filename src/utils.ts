import type { Size, ComponentForImage } from '@customTypes/size';
import { IMAGES_SIZES } from '@constants';

export function getRatingWidth(rating: number): string {
  return `${Math.round(rating) * 20}%`;
}

export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getImageSize(size: Size, component: ComponentForImage) {
  return IMAGES_SIZES[component][size];
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export function randomInteger(min: number, max: number) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
