import { Box, Typography, CircularProgress } from '@mui/material'
import { useSearch, useNavigate } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '../../features/characters/api'
import { characterListRoute } from '../../routes/router'
import { CharacterTable } from './CharacterTable'
import { PaginationControls } from './PaginationControls'
import { RefreshButton } from './RefreshButton'

export const CharacterList = () => {
  const search = useSearch({ from: characterListRoute.id })
  const navigate = useNavigate()
  const page = search.page ?? 1

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page),
  })

  const handlePageChange = (newPage: number) => {
    navigate({ search: { page: newPage } })
  }

  if (isLoading)
    return (
      <Box p={2}>
        <CircularProgress />
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
      <PaginationControls
        page={page}
        totalPages={data?.info?.pages ?? 1}
        hasNext={!!data?.info?.next}
        onPageChange={handlePageChange}
      />
    </Box>
  )
}
