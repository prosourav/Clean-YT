import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
} from '@mui/material';
import { ExpandCircleDown } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';


const Notes: React.FC<NoteItem> = ({ note, removeNote }) => {
  const [show, setShow] = useState(false);

  const handleDelete = () => removeNote(note.key);

  const toggleShow = () => setShow(!show);

  return (
    <Box sx={{ margin: 'auto', mt: 4 }}>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

            <Chip label={note.time} color="secondary" />
            <Box>
              <DeleteIcon color="primary" sx={{ cursor: 'pointer' }} onClick={handleDelete} />
              <ExpandCircleDown onClick={toggleShow} sx={{ cursor: 'pointer' }} />
            </Box>

          </Box>
          {show && <Typography variant="body1" component="div" sx={{ border: '1px solid red', padding: '2px 16px', margin: '20px' }}
            dangerouslySetInnerHTML={{ __html: note.content }}
          />}
        </CardContent>
      </Card>

    </Box>
  );
};

export default Notes;