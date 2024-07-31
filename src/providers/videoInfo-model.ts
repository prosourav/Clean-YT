import { action, persist, Action } from 'easy-peasy';

export interface VideoInfoModel {
  visitedplayList: Record<string, Record<string, string>>;
  updateVisitedPlayList: Action<VideoInfoModel, Record<string, Record<string, string>>>;
}

const videoInfoModel: VideoInfoModel = persist(
  {
    visitedplayList: {},
    updateVisitedPlayList: action((state, payload) => {
      const key = Object.keys(payload)[0];
      if (key in state.visitedplayList) {
        const updatedPlayListId = {... state.visitedplayList, [key]: payload[key] };
        state.visitedplayList = updatedPlayListId;
      } else {
        state.visitedplayList = {
          ...state.visitedplayList, ...payload
        };
      }
    }),
  },
  { storage: 'localStorage' }
);

export default videoInfoModel;


