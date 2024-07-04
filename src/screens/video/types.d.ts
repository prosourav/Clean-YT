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

// video container
interface VideoContainerProps {
  playlistItems: PlaylistItems[];
  visitedplayList: Record<string, Record<string, string>>;
  playlistId: string | undefined;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  videos: string[];
  channelTitle: string;
  activeVideoId: string;
  desc: string;
}