import type { ColumnDef } from '@tanstack/react-table'
import { Avatar } from '@mui/material'
import type { Character } from '../../features/characters/types'

export const characterTableColumns: ColumnDef<Character>[] = [
  {
    header: 'Image',
    accessorKey: 'image',
    cell: ({ row }) => (
      <Avatar src={row.original.image} alt={row.original.name} sx={{ width: 40, height: 40 }} />
    ),
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Species',
    accessorKey: 'species',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
  },
]
