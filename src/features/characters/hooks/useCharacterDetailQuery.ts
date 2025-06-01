import { useQuery } from '@tanstack/react-query';
import { fetchCharacterById } from '../api';
import type { Character } from '../types';

export const useCharacterDetailQuery = (id?: number) =>
  useQuery<Character>({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id!),
    enabled: !!id,
  });
