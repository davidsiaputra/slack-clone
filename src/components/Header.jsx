import React from "react";
import {
  AppBar,
  Avatar,
  Grid,
  Box,
  IconButton,
  TextField,
  InputAdornment,
  Toolbar,
  useTheme,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function Header() {
  const theme = useTheme();
  return (
    <Box component={AppBar} elevation={0} zIndex={theme.zIndex.drawer + 1}>
      <Toolbar>
        {/* Header Left */}
        <Grid item xs={3} container justifyContent="space-between">
          <IconButton
            sx={{
              ":hover": {
                opacity: 0.9,
              },
            }}
          >
            <Avatar variant="square" />
          </IconButton>
          <IconButton color="inherit">
            <AccessTimeIcon />
          </IconButton>
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
