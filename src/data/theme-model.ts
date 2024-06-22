import { action, persist } from 'easy-peasy';
import { ThemeModel } from './types';

const themeModel: ThemeModel = persist(
  {
    theme: {
      mode: 'light',
      primaryColor: '#2196f3',
      secondaryColor: '#f50057',
    },
    toggleTheme: action((state) => {
      state.theme.mode = state.theme.mode === 'light' ? 'dark' : 'light';
    }),
  },
  { storage: 'localStorage' }
);

export default themeModel;

