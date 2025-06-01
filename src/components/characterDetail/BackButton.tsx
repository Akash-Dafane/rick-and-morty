import { Button } from '../common/index'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface BackButtonProps {
  onClick: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <Button
      variant="outlined"
      color="primary"
      label="Back to List"
      startIcon={<ArrowBackIcon />}
      onClick={onClick}
      sx={{ mb: 2 }}
    />
  )
}
