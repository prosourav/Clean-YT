// header input props types
interface InputHeaderProps {
  url?: string;
  handleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: ({ event, refetch }: HandleSubmitProps) => void;
  error: string;
}

// BoxProps
interface BoxType {
  title: string;
  listItems: string[];
  loading?: boolean;
  error?: string;
}

// action buttons props
interface ActionButtonsProps {
  title: string;
  playListId: string;
  playlistTitle: string;
  handleRemove: (title: string, playListId: string) => void;
  addTofav: (playListId: string) => void;
  addToRecents: (playListId: string) => void;
  isInFavoriteList: (playListId: string) => boolean;
  isRotating: boolean;
  handleRefetch: () => void;
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction, boolean>,
  watchUrl: string
}

// card playlists props
interface PlaylistCardItemProps {
  playListId: string
  title: string,
  playlistThumbnail: {
    url: string
  }
  playlistTitle: string,
  channelTitle: string,
  handleRemove: (category: string, id: string) => void,
  addTofav: (id: string) => void,
  addToRecents: (id: string) => void,
  isInFavoriteList: (id: string) => boolean,
}

// confirmation Dialog
interface DialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => void;
  playListName: string
}

// video player
interface VideoPlayerProps {
  url: string;
  handleAdd: () => void;
  handleNext: () => void;
  setPlayed: React.Dispatch<React.SetStateAction<number>>
}

// navigation
interface VideoItem {
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

// videoinfo editor
interface EditorPropsType {
  addNote: (data: string) => void;
}

interface EditorPropsType {
  addNote: (content: string) => void;
  content: string,
  setContent: React.Dispatch<SetStateAction<string>>,
  showNotePad: boolean,
  setShowNotePad: React.Dispatch<SetStateAction<boolean>>
}


// videoinfo index

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface BasicTabsProps {
  description: string;
  addNote: (data: string) => void;
  notes: NoteType[]
  removeNote: (id: string) => void;
}

// notes
interface NoteItem {
  note: {
    key: string;
    id: string;
    time: string;
    content: string;
  }
  removeNote: (id: string) => void;
}