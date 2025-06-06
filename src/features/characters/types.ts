export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: { name: string }
  location: { name: string }
  image: string
  episode: string[]
  url: string
  created: string
}

export interface CharacterResponse {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

export interface Props {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}
