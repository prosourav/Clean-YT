import React, { useState } from 'react';
import { Tabs, Tab, Box, Container, Typography } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import Editor from './editor';
import { NoteType } from '../../data/types';
import Notes from './note';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;

}


interface BasicTabsProps {
  description: string;
  addNote: (data: string) => void;
  notes: NoteType[]
  removeNote: (id: string) => void;
}

function CustomTabPanel({ children, value, index }: TabPanelProps) {

  return (
    <Container
      role="tabpanel"
      id={`tabpanel-${index}`}
    >
      <Box hidden={value !== index} sx={{ p: 3 }}>{children}</Box>
    </Container>
  );
}



export default function VideoInfo({ description, addNote, notes, removeNote }: BasicTabsProps) {
  const [value, setValue] = useState(0);
  const [content, setContent] = useState('');
  const [showNotePad, setShowNotePad] = useState(true);

  const ChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  console.log("notes", notes);



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