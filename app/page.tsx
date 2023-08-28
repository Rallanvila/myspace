import { Post } from './blog/[slug]/page';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    return <h3 className='text-2xl mb-2'>You are not logged in</h3>;
  }

  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );

  return (
    <main>
      <h1 className='text-2xl mb-2'>Blog Posts</h1>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className='block mb-2 text-blue-600 underline font-semibold'>
          {post.title}
        </Link>
      ))}
    </main>
  );
}
