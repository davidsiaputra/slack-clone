import { Drawer, ListItemButton, styled } from "@mui/material";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxSizing: "border-box",
    width: "240px",
  },
}));

export const StyledListItem = styled(ListItemButton)({
  ":hover, :focus": {
    background: "rgba(255, 255, 255, 0.4)",
  },
  paddingTop: 0,
  paddingBottom: 0,
});
