import axios from "axios";
import { GetPlayListType, PlayListsResponseType } from "./types";

const key = import.meta.env.VITE_API_KEY;
const playlist_url = import.meta.env.VITE_BASE_URL_PLAYLIST;
const playList_details_url = import.meta.env.VITE_BASE_URL_PLAYLIST_DETAILS;

const getPlayList = async ({ playListId, nextPageToken = '', results = [] }: GetPlayListType): Promise<PlayListsResponseType[]> => {
  const url = `${playlist_url}&playlistId=${playListId}&key=${key}&pageToken=${nextPageToken}`;
  const { data } = await axios.get(url);

  results = [...results, ...data.items];

  if (data.nextPageToken) {
    return getPlayList({ playListId, nextPageToken: data.nextPageToken, results });
  }

  return results;
};

const getPlayListDetails = async (playListId: string) => {
  const url = `${playList_details_url}&id=${playListId}&key=${key}`;
  const { data } = await axios.get(url);
  const response = await getPlayList({ playListId });

  const {
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelId,
    channelTitle,
  } = data.items[0].snippet;

  const playlistItems = response.map(item => {
    const { title, description, thumbnails: { high } } = item.snippet;
    return {
      title,
      description,
      thumbnail: high,
      contentDetails: item.contentDetails,
    };
  });

  return {
    playListId,
    playlistTitle,
    playlistDescription,
    playlistThumbnail: thumbnails.high,
    channelId,
    channelTitle,
    playlistItems,
  };
};


export default getPlayListDetails;
