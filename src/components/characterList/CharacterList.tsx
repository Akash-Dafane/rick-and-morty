import { Box, Typography, CircularProgress } from '@mui/material'
import { useSearch } from '@tanstack/react-router'
import { characterListRoute } from '../../routes/router'
import { CharacterTable } from './CharacterTable'
import { PaginationControls } from './PaginationControls'
import { RefreshButton } from './RefreshButton'
import { useCharacterListQuery } from '../../features/characters'

export const CharacterList = () => {
  const search = useSearch({ from: characterListRoute.id })
  const page = search.page ?? 1

  const { data, isLoading, error, refetch } = useCharacterListQuery(page)

  if (isLoading)
    return (
      <Box p={2}>
        <Typography>
          <CircularProgress />
        </Typography>
      </Box>
    )

  if (error)
    return (
      <Box p={2}>
        <Typography color="error">Error loading characters</Typography>
      </Box>
    )

  return (
    <Box p={2}>
      <RefreshButton onClick={refetch} />
      <CharacterTable characters={data?.results ?? []} />
      <PaginationControls page={page} hasNext={!!data?.info?.next} />
    </Box>
  )
}
