import { action, persist } from 'easy-peasy';
import { NoteModel, NoteType } from './types';


const notesModel: NoteModel = persist(
  {
    items: [],
    addToNotes: action((state, payload: NoteType) => {
      state.items.push(payload);
    }),
    removeNotes: action((state, id: string) => {
      state.items = state.items.filter((note) => note.key !== id);
    }),
  },
  { storage: 'localStorage' }
);

export default notesModel;