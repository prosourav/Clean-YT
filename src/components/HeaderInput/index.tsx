import React from 'react';
import { Box, Button, Container, FormControl, TextField } from '@mui/material';

const InputHeader: React.FC<InputHeaderProps> = ({ url, handleChange, handleSubmit }) => {

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <FormControl component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <TextField
              id="outlined-error"
              label="Paste your url here"
              value={url}
              onChange={handleChange}
              color='secondary'
              sx={{
                flexGrow: 1,
                marginRight: 1,
              }}
              fullWidth
            />
            <Button type="submit" variant="contained" sx={{ flexShrink: 0, padding:'16px 30px' }}>Add</Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
};

export default InputHeader;

