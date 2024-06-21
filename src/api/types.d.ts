export interface GetPlayListType {
  playListId: string,
  nextPageToken?: string,
  results?: PlayListsResponseType[]
}

export interface PlayListsResponseType {
  kind?: string;
  etag?: string;
  nextPageToken?: string;
  items?: YoutubePlaylistItem[];
  pageInfo?: PageInfo;
  contentDetails?: ContentDetailsType;
  snippet: YoutubePlaylistItemSnippet;
}

export interface YoutubePlaylistItem {
  kind: string;
  etag: string;
  id: string;
  snippet?: YoutubePlaylistItemSnippet;
  contentDetails: ContentDetailsType;
  items: YoutubePlaylistItem[];
  pageInfo: PageInfo;
}

export interface ContentDetailsType {
  videoId: string;
  videoPublishedAt: string
}

export interface YoutubePlaylistItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubePlaylistItemSnippetThumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: {
    kind: string;
    videoId: string;
  };
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

export interface YoutubePlaylistItemSnippetThumbnails {
  default: YoutubeThumbnail;
  medium: YoutubeThumbnail;
  high: YoutubeThumbnail;
  standard: YoutubeThumbnail;
  maxres: YoutubeThumbnail;
}

export interface YoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

