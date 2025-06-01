import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '../api'
import type { CharacterResponse } from '../types'

export const useCharacterListQuery = (page: number) =>
  useQuery<CharacterResponse>({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page),
  })
