import { Metadata } from 'next';

export interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export const metadata: Metadata = {
  title: 'Blog Post',
  description: 'Blog posts',
};

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch('http://localhost:3000/api/content')
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1 className='text-2xl mb-2'>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
