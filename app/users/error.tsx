'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <Image
        src='https://media.tenor.com/0-ApwvpOkCsAAAAd/epic-fail-fail.gif'
        alt='404'
        width={500}
        height={500}
      />
      <h2 className='text-2xl font-bold py-2'>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        type='button'
        className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
        Try Again
      </button>
    </div>
  );
}
