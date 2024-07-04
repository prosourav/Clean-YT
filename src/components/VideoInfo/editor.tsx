import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

interface EditorPropsType {
  addNote: (content: string) => void;
}

const Editor: React.FC<EditorPropsType> = ({ addNote }) => {
  const [content, setContent] = useState('');
  const [notePad, setNotePad] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addNote(content);
    setContent('');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        p: 2,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2,
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" component="h1" gutterBottom>
        Take a note
        <Button sx={{margin:0, padding:0, width:'0px'}} onClick={() => setNotePad(prev => !prev)} size="small">
          {notePad ? <ToggleOnIcon color='secondary' /> : <ToggleOffIcon color='secondary' />}
        </Button>
      </Typography>
      {notePad && (
        <>
          <Box sx={{ '.ql-editor': { minHeight: '100px' } }}>
            <ReactQuill
              value={content}
              onChange={(value) => setContent(value)}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ['bold', 'italic', 'underline'],
                  ['code-block'],
                ],
              }}
              theme="snow"
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Save Note
          </Button>
        </>
      )}
    </Box>
  );
};

export default Editor;