import React from "react";
import {
  AppBar,
  Grid,
  Box,
  IconButton,
  TextField,
  InputAdornment,
  Toolbar,
  useTheme,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { StyledIconButton } from "./Header.styles";
import { BoldTypography } from "../StyledMuiComponents/StyledTypography";

function Header({ handleDrawerToggle }) {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return (
    <Box
      component={AppBar}
      position="fixed"
      elevation={0}
      zIndex={theme.zIndex.drawer + 1}
    >
      <Toolbar>
        {/* Header Left */}
        <Grid item xs={3}>
          {width < theme.breakpoints.values.sm ? (
            <StyledIconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuRoundedIcon />
            </StyledIconButton>
          ) : (
            <BoldTypography variant="h4" component="h1">
              Siapuda Slack
            </BoldTypography>
          )}
        </Grid>

        {/* Header Center */}
        <Grid
          item
          xs={6}
          container
          justifyContent="center"
          sx={{
            borderRadius: "6px",
            border: "1px gray solid",
          }}
        >
          <TextField
            fullWidth
            placeholder="Search channel"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      color: "common.white",
                    }}
                  />
                </InputAdornment>
              ),
              style: { color: "white" },
            }}
          />
        </Grid>

        {/* Header Right */}
        <Grid item xs={3} container justifyContent="flex-end">
          <IconButton color="inherit">
            <HelpOutlineOutlinedIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </Box>
  );
}

export default Header;
