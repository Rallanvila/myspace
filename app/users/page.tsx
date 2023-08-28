import { prisma } from '@/lib/prisma';

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1 className='text-xl font-bold'>Users:</h1>
      <div className='grid grid-cols-3 gap-4'>
        {users.map((user) => (
          <div
            key={user.id}
            className='flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg'>
            <p className='text-lg font-bold'>{user.name}</p>
            <p className='text-sm text-gray-500'>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
