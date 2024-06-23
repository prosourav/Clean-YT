import { action, persist } from 'easy-peasy';
import { ThemeModel } from './types';

const themeModel: ThemeModel = persist(
  {
    theme: {
      mode: 'dark',
      primaryColor: 'rgb(255,0,0)',
      secondaryColor: '#fff',
    },
    toggleTheme: action((state) => {
      state.theme.mode = state.theme.mode === 'light' ? 'dark' : 'light';
    }),
  },
  { storage: 'localStorage' }
);

export default themeModel;

