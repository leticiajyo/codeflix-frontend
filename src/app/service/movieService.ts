import { Movie } from '../types/movie';
import { apiRequest, RequestOptions } from './apiRequest';

export const getMoviebyId = async (id: string): Promise<Movie> => {
  return await apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovie = async (id: string): Promise<Movie> => {
  return apiRequest(`featured/${encodeURIComponent(id)}`);
};

export const getMoviesByGenre = async (
  genre: string,
  options?: RequestOptions
): Promise<Movie[]> => {
  return apiRequest(
    `movies`,
    { genres_like: encodeURIComponent(genre) },
    options
  );
};

export const searchMovies = async (
  title: string = '',
  genre: string = '',
  options: RequestOptions = {
    _limit: 50,
  }
): Promise<Movie[]> => {
  return apiRequest(
    `movies`,
    {
      title_like: encodeURIComponent(title),
      genres_like: encodeURIComponent(genre),
    },
    options
  );
};
