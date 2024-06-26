import SyncIcon from '@mui/icons-material/Sync';
import { IconButton } from '@mui/material';

interface SyncButton {
  handleRefetch: () => void;
  isRotating: boolean;
}


const SyncIconButton: React.FC<SyncButton> = ({ handleRefetch, isRotating }) => {

  return (
    <IconButton
      onClick={handleRefetch}
      sx={{
        '& .MuiSvgIcon-root': {
          transition: 'transform 1s linear',
          transform: isRotating ? 'rotate(360deg)' : 'rotate(0deg)',
        },
      }}
    >
      <SyncIcon />
    </IconButton>
  );
};

export default SyncIconButton;