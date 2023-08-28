import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

// Dummy data
const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    title: 'Adventures in TypeScript Wonderland',
    slug: 'typescript-wonderland',
    content:
      'Once upon a time in the world of TypeScript, magic types and strict null checks brought order to the codebase...',
  },
  {
    title: 'Redux Revelations: Unraveling the Toolkit',
    slug: 'redux-revelations',
    content:
      'Embark on a journey through the Redux realm as we reveal the secrets of Redux Toolkit, wielding its power to slay state management dragons!',
  },
  {
    title: 'Material-UI Mysteries: Unveiling MUI',
    slug: 'mui-mysteries',
    content:
      'Join us on a quest to uncover the hidden treasures of Material-UI, where UI components are your companions and customization is your sword!',
  },
  {
    title: 'Next.js Odyssey: Navigating Next',
    slug: 'nextjs-odyssey',
    content:
      'Sail through the waves of Next.js as we explore server-side rendering, dynamic routes, and the art of crafting seamless user experiences!',
  },
  {
    title: 'TypeScript Tales: From "Any" to "Never"',
    slug: 'ts-tales',
    content:
      'Once upon a type, TypeScript wizards banished "any" and embraced "never". Join us as we unravel the mysteries of type declarations!',
  },
  {
    title: 'Juggling JSON: A Redux Saga',
    slug: 'redux-saga',
    content:
      'In the kingdom of Redux, sagas weave intricate tales of asynchronous actions. Learn to juggle data flows with Redux Saga magic!',
  },
  {
    title: 'MUI Enchantments: Spells of Styling',
    slug: 'mui-styling',
    content:
      'Cast spells of styling enchantments with Material-UI wizards! Discover the magic of theming, styling, and creating visually stunning UIs.',
  },
  {
    title: 'Next.js Spells: Conquering SEO',
    slug: 'nextjs-seo',
    content:
      'Harness the power of Next.js incantations to conquer the realm of Search Engine Optimization. Rise to the top of the search results!',
  },
  {
    title: 'Redux Resurgence: The Saga Continues',
    slug: 'redux-resurgence',
    content:
      'Witness the resurgence of Redux as new chapters unfold. Explore Redux Thunks, immerse in middleware, and embrace the evolution!',
  },
  // Feel free to add more posts to your heart's content!
];

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    // redirect or render something else
  }
  return NextResponse.json(posts);
}
