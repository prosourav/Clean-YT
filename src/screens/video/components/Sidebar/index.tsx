import * as React from 'react';
import FixedBottomNavigation from '../../../../components/VideoNav';
import { Box, Grid, List } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const SideBar: React.FC<SidebarProps> = ({ playlistItems, channelTitle, setUrl, playlistId, playlistTitle, videos, activeVideoId }) => {

  const processdData = playlistItems.map((playlistItem) => {
    return {
      id: playlistItem.contentDetails?.videoId,
      primary: playlistItem.title,
      secondary: channelTitle,
      img: playlistItem.thumbnail?.url,
    };
  });

  const navigate = useNavigate();

  const ChangeVideo = (vid: string) => {
    if (vid === activeVideoId) {
      return;
    }
    const parts = playlistId.split('&watch=');
    const basePlaylistId = parts[0];
    setUrl(vid);
    return navigate(`/player/${basePlaylistId}&watch=${vid}`);
  };


  return (
    <Box>
      <Grid sx={{
        position: 'sticky', backgroundColor: "#6b6565",
        padding: '30px 15px', color: '#fff', fontWeight: 'bold',
        borderRadius: '3px'
      }}>
        {playlistTitle} -
        ({videos.length}/{videos.findIndex(v => v === activeVideoId) + 1})

      </Grid>

      <List sx={{ pb: 7, height: '65vh', overflow: 'auto' }}>
        <FixedBottomNavigation videos={processdData}
          changeVideo={ChangeVideo} activeVideoId={activeVideoId} />
      </List>
    </Box>
  );
};

export default SideBar;
