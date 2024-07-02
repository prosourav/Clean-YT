interface PlayListIdType {
  playlistId?: string;
}


interface SidebarProps {
  playlistItems: PlaylistItems[];
  channelTitle: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>
  url: string,
  playlistTitle: string
  videos: string[];
  activeVideoId:string;
  playlistId
}