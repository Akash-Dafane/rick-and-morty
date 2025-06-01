import { Button, Box } from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { characterListRoute } from '../../routes/router'

export const PaginationControls = ({ page, hasNext }: { page: number; hasNext: boolean }) => {
  const navigate = useNavigate()

  return (
    <Box mt={2} display="flex" justifyContent="center" gap={2}>
      <Button
        variant="outlined"
        disabled={page === 1}
        onClick={() =>
          navigate({
            to: characterListRoute.to,
            search: (prev: { page?: number }) => ({
              page: (prev.page ?? 1) - 1,
            }),
            replace: true,
          })
        }
      >
        Previous
      </Button>

      <Button
        variant="outlined"
        disabled={!hasNext}
        onClick={() =>
          navigate({
            to: characterListRoute.to,
            search: (prev: { page?: number }) => ({
              page: (prev.page ?? 1) + 1,
            }),
            replace: true,
          })
        }
      >
        Next
      </Button>
    </Box>
  )
}
