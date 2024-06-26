import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

export interface VideoItem {
  id?: string;
  primary: string;
  secondary: string;
  img: string;
}

interface FixedBottomNavigationProps {
  videos: VideoItem[];
  changeVideo: (item: string) => void;
  activeVideoId: string;
}

const FixedBottomNavigation: React.FC<FixedBottomNavigationProps> = ({ videos, changeVideo, activeVideoId }) => {
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const currentItem = itemRefs.current.find((ref) => ref?.id === activeVideoId);
    if (currentItem) {
      currentItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeVideoId]);

  return (
    <>
      {videos.map(({ primary, secondary, img, id }, index) => (
        <ListItemButton
          key={id}
          onClick={() => changeVideo(id as string)}
          sx={{
            backgroundColor: activeVideoId === id ? '#333333' : 'transparent',
            borderRadius: '4px'
          }}
          ref={(el) => (itemRefs.current[index] = el)}
          id={id}
        >
          <ListItemAvatar>
            <Avatar
              alt="Profile Picture"
              src={img}
              sx={{ width: 120, height: 60, borderRadius: 1, pr: 2 }}
            />
          </ListItemAvatar>
          <ListItemText primary={primary} secondary={secondary} />
        </ListItemButton>
      ))}
    </>
  );
};

export default FixedBottomNavigation;
