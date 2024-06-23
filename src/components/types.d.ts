// header input props types
interface InputHeaderProps {
  url: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (value: React.FormEvent<HTMLFormElement>) => void;
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
  handleRemove?: (title: string, playListId: string) => void;
  addTofav?: (playListId: string) => void;
  addToRecents: (playListId: string) => void;
  isInFavoriteList: (playListId: string) => boolean;
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
}
