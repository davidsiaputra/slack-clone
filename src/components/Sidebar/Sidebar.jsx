import React from "react";
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Grid,
  List,
  ListItem,
  Toolbar,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { BoldTypography } from "../StyledMuiComponents/StyledTypography";
import { StyledDrawer } from "./Sidebar.styles";
import { StyledIconButton } from "../Header/Header.styles";
import Channels from "./Channels";

function Sidebar({ handleDrawerToggle, mobileOpen }) {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  const drawer = (
    <Box>
      <Toolbar />
      <List>
        {/* App Title */}
        {width < theme.breakpoints.values.sm && (
          <ListItem sx={{ paddingTop: 0 }}>
            <BoldTypography variant="h5" component="h1">
              Siapuda Slack
            </BoldTypography>
          </ListItem>
        )}
        {/* Username and edit icon */}
        <ListItem disableGutters>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={9} container alignItems="center">
              <StyledIconButton>
                <Avatar />
              </StyledIconButton>
              <BoldTypography variant="h6">Username</BoldTypography>
            </Grid>
            <Grid item xs={3}>
              <StyledIconButton>
                <EditIcon
                  fontSize="large"
                  sx={{
                    padding: "8px",
                    background: "white",
                    color: "primary.main",
                    borderRadius: 20,
                  }}
                />
              </StyledIconButton>
            </Grid>
          </Grid>
        </ListItem>
        <Channels />
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
