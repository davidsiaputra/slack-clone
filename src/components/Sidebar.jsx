import * as React from "react";
import { styled } from "@mui/system";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useTheme } from "@mui/material";

const drawerWidth = 240;

function Sidebar() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />
      <List>
        <StyledListItem
          button
          sx={{
            ":hover, :focus": {
              background: "rgba(255, 255, 255, 0.4)",
            },
          }}
        >
          <Typography variant="body1">Channel Name</Typography>
        </StyledListItem>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <Container>
            <StyledListItem button key={text}>
              <ListItemText primary={text} />
            </StyledListItem>
          </Container>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box display="flex">
      <CssBaseline />
      <Box component="nav">
        {width < theme.breakpoints.values.sm ? (
          <StyledDrawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </StyledDrawer>
        ) : (
          <StyledDrawer variant="permanent">{drawer}</StyledDrawer>
        )}
      </Box>
    </Box>
  );
}

export default Sidebar;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxSizing: "border-box",
    width: drawerWidth,
  },
}));

const StyledListItem = styled(ListItem)({
  ":hover, :focus": {
    background: "rgba(255, 255, 255, 0.4)",
  },
  paddingBottom: 0,
  paddingTop: 0,
});
