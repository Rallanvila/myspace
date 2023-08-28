import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return (
    <div>
      <h1 className='text-xl font-bold'>User Profile</h1>
      <div className='flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg'>
        <p className='text-lg font-bold'>{user.name}</p>
        <p className='text-sm text-gray-500'>{user.email}</p>
      </div>
    </div>
  );
}
