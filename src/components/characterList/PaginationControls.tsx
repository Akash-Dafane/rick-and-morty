import { Box } from '@mui/material'
import { Button } from '../common'
import type { Props } from '../../features/characters'

export const PaginationControls = ({ page, totalPages, onPageChange }: Props) => {
  const windowSize = 5

  const pagesToShow = Math.min(windowSize, totalPages)

  let startPage = page - Math.floor(pagesToShow / 2)

  if (startPage < 1) startPage = 1

  if (startPage + pagesToShow - 1 > totalPages) {
    startPage = totalPages - pagesToShow + 1
    if (startPage < 1) startPage = 1
  }

  const pages = []
  for (let i = 0; i < pagesToShow; i++) {
    pages.push(startPage + i)
  }

  return (
    <Box mt={3} display="flex" gap={2} alignItems="center" justifyContent="center" flexWrap="wrap">
      <Button
        variant="contained"
        color="primary"
        label="Previous"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      />

      {pages.length &&
        pages.map((p) => (
          <>
            <Button
              key={p}
              variant={p === page ? 'contained' : 'outlined'}
              color={p === page ? 'primary' : 'inherit'}
              onClick={() => onPageChange(p)}
              label={`${p}`}
            />
          </>
        ))}

      <Button
        variant="contained"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        color="primary"
        label="Next"
      />
    </Box>
  )
}
