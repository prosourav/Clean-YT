/* eslint-disable @typescript-eslint/no-unused-vars */
import { Playlist } from '../../../../data/types';

interface VideoContainerProps {
  items: Playlist;
}

const SideBar = ({ items }: VideoContainerProps) => {

  // console.log("Items: sidebar", items);

  return (
    <div>
      this is side bar
    </div>
  );
};

export default SideBar;