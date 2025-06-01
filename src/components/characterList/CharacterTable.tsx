import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Paper,
} from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { characterDetailRoute } from '../../routes/router'
import type { Character } from '../../features/characters/types'

type CharacterTableProps = {
  characters: Character[]
}

export const CharacterTable = ({ characters }: CharacterTableProps) => {
  const navigate = useNavigate()

  const handleRowClick = (id: number) => {
    navigate({
      to: characterDetailRoute.to,
      params: { id: id.toString() },
    })
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {['Image', 'Name', 'Species'].map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map(({ id, image, name, species }) => (
            <TableRow
              key={id}
              hover
              sx={{ cursor: 'pointer' }}
              onClick={() => handleRowClick(id)}
            >
              <TableCell>
                <Avatar src={image} alt={name} />
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{species}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

