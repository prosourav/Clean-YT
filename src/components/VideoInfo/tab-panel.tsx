import { Container, Box } from "@mui/material";

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

export default CustomTabPanel;