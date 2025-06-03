import { characterTableColumns } from './CharacterTableColumns'
import { CustomDataTable } from '../common'
import type { Character } from '../../features/characters/types'

interface CharacterTableProps {
  characters: Character[]
  onRowClick?: (character: Character) => void
}

export function CharacterTable({ characters, onRowClick }: CharacterTableProps) {
  return <CustomDataTable data={characters} columns={characterTableColumns} onRowClick={onRowClick} />
}
