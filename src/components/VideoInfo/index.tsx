import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import Editor from './editor';
import Notes from './note';
import CustomTabPanel from './tab-panel';



export default function VideoInfo({ description, addNote, notes, removeNote }: BasicTabsProps) {
  const [value, setValue] = useState(0);
  const [content, setContent] = useState('');
  const [showNotePad, setShowNotePad] = useState(true);

  const ChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Box>
      <Tabs
        value={value}
        onChange={ChangeTab}
        variant="fullWidth"
      >
        <Tab label="Overview" />
        <Tab label="Notes" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        {description}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Editor {...{ addNote, content, setContent, showNotePad, setShowNotePad }} />

        {
          notes.length > 0 && <>
           <Typography variant='h6' sx={{marginTop:'10px'}}>
              All Notes
            </Typography> 
            {notes.map((note) => <Notes key={note.key} note={note} removeNote={removeNote} />)}
          </>
        }
      </CustomTabPanel>
    </Box>
  );
}