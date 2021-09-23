import { Drawer, ListItemButton, styled } from "@mui/material";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: "240px",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxSizing: "border-box",
    width: "240px",
  },
}));

export const StyledListItem = styled(ListItemButton)(({ theme }) => ({
  ":hover": {
    background: theme.palette.primary.dark,
  },
  paddingTop: 0,
  paddingBottom: 0,
}));
