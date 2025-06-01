import { Box } from '@mui/material'
import { Button } from '../common'
import { useNavigate } from '@tanstack/react-router'
import { characterListRoute } from '../../routes/router'

export const PaginationControls = ({ page, hasNext }: { page: number; hasNext: boolean }) => {
  const navigate = useNavigate()

  return (
    <Box mt={2} display="flex" justifyContent="center" gap={2}>
      <Button
        variant="outlined"
        disabled={page === 1}
        label="Previous"
        color="primary"
        onClick={() =>
          navigate({
            to: characterListRoute.to,
            search: (prev: { page?: number }) => ({
              page: (prev.page ?? 1) - 1,
            }),
            replace: true,
          })
        }
      />

      <Button
        variant="outlined"
        disabled={!hasNext}
        label="Next"
        color="primary"
        onClick={() =>
          navigate({
            to: characterListRoute.to,
            search: (prev: { page?: number }) => ({
              page: (prev.page ?? 1) + 1,
            }),
            replace: true,
          })
        }
      />
    </Box>
  )
}
