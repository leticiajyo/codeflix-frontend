import Image from 'next/image';
import { Movie } from '../types/movie';

export const MovieCard = ({ movie }: { movie: Movie }) => (
  <div className='group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw]'>
    <Image
      alt={movie.title}
      src={movie.bannerFileURL}
      width={600}
      height={400}
      className='rounded-md object-cover object-top transition'
    />
  </div>
);
