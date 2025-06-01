import type { CharacterResponse, Character } from './types'
import { API_URL } from '../../../config'

export const fetchCharacters = async (page = 1): Promise<CharacterResponse> => {
  const res = await fetch(`${API_URL}/character?page=${page}`)
  if (!res.ok) throw new Error('Failed to fetch characters')
  return res.json()
}

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const res = await fetch(`${API_URL}/character/${id}`)
  if (!res.ok) throw new Error('Failed to fetch character')
  return res.json()
}
