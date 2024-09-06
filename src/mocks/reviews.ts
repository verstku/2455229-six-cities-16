import type { Review } from '@customTypes/review.ts';

export const REVIEWS: Review[] = [
  {
    id: '77eee052-1588-4b63-846b-06bed0b7a35b',
    comment:
      'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2024-07-16T21:00:00.313Z',
    rating: 5,
    user: {
      name: 'Mollie',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: true,
    },
  },
  {
    id: '3e8351b7-103f-4752-a3df-bacb01531d7b',
    comment:
      'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2024-08-15T21:00:00.313Z',
    rating: 3,
    user: {
      name: 'Kendall',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/10.jpg',
      isPro: false,
    },
  },
  {
    id: '9c186416-702c-4aa7-b2a5-12f0686bec96',
    comment:
      'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2024-09-15T21:00:00.313Z',
    rating: 1,
    user: {
      name: 'Sophie',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/9.jpg',
      isPro: true,
    },
  },
];
