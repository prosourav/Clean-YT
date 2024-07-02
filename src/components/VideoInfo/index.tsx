import React, { useState } from 'react';
import { Tabs, Tab, Box, Container } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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

interface BasicTabsProps {
  description: string;
}

export default function VideoInfo({ description }: BasicTabsProps) {
  const [value, setValue] = useState(0);

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
        Notes
      </CustomTabPanel>
    </Box>
  );
}