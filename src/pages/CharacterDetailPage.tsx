import { useParams, useNavigate, useSearch } from '@tanstack/react-router'
import { CharacterDetailCard } from '../components/characterDetail/CharacterDetailCard'
import { BackButton } from '../components/characterDetail/BackButton'
import { Box, CircularProgress, Typography } from '@mui/material'
import { characterDetailRoute, characterListRoute } from '../routes/router'
import { useCharacterDetailQuery } from '../features/characters'

export function CharacterDetailPage() {
  const params = useParams({ strict: false })
  const search = useSearch({ from: characterDetailRoute.id })
  const page = search.page ?? 1
  const navigate = useNavigate()

  const idParam = params.id

  const id = idParam ? Number(idParam) : undefined

  const { data: character, isLoading, error } = useCharacterDetailQuery(id)

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    )

  if (error || !character)
    return (
      <Typography color="error" mt={4} textAlign="center">
        Error loading character.
      </Typography>
    )

  return (
    <Box p={3}>
      <BackButton
        onClick={() =>
          navigate({
            to: characterListRoute.to,
            search: { page },
          })
        }
      />
      <CharacterDetailCard character={character} />
    </Box>
  )
}
