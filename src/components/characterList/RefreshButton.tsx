import { Button } from '../common/index'

export const RefreshButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      label=" Refresh Page"
      onClick={onClick}
      sx={{ mb: 2 }}
    />
  )
}
