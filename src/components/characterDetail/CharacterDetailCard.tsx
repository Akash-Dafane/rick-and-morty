import { Card, CardContent, CardMedia, Typography, Box, useTheme } from '@mui/material'
import type { Character } from '../../features/characters/types'

export function CharacterDetailCard({ character }: { character: Character }) {
  const theme = useTheme()

  const details = [
    { label: 'Status', value: character.status },
    { label: 'Species', value: character.species },
    { label: 'Gender', value: character.gender },
    { label: 'Origin', value: character.origin.name },
    { label: 'Location', value: character.location.name },
  ]

  return (
    <Card
      sx={{
        maxWidth: 900,
        mx: 'auto',
        mt: 4,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        boxShadow: 10,
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        sx={{
          width: { xs: '100%', md: 350 },
          height: 'auto',
          objectFit: 'cover',
        }}
      />

      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 1.5,
          p: { xs: 2, md: 3 },
        }}
      >
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          {character.name}
        </Typography>

        {details.map(({ label, value }) => (
          <Box key={label} display="flex" gap={1}>
            <Typography variant="body1" fontWeight={600}>
              {label}:
            </Typography>
            <Typography variant="body1">{value}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}
