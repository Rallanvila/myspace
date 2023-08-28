'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
      <>
        <Link href={`/dashboard`}>
          <Image
            src={session.user?.image ?? '/moonman.jpeg'}
            width={32}
            height={32}
            alt='Your Name'
          />
        </Link>
        <SignOutButton />
      </>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return (
    <button
      className='bg-white ml-6 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'
      onClick={() => signOut()}>
      Sign out
    </button>
  );
}
