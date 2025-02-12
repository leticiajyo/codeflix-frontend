import Header from '@/app/components/Header';
import Player from '@/app/components/Player';
import React from 'react';
import { getMovieById } from '../../service/movieService';

export default async function Watch(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const movie = await getMovieById(id);

  if (!movie) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Sorry, this movie is not available.
          </h1>
        </main>
      </div>
    );
  }

  return <Player movie={movie} />;
}
