import { PlaylistItems } from "../data/types";

const getVideoItems = (data: PlaylistItems[]): string[] => {
  const finalArray = data.map(item => {
    return item.contentDetails?.videoId;
  });
  return finalArray as string[];
};

export default getVideoItems;