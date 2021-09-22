import React from "react";
import { Avatar, Typography, ListItemText } from "@mui/material";
import { StyledListItem } from "./Sidebar.styles";

function SidebarOption({ Icon, title, user, handleClick, subheader }) {
  return (
    <StyledListItem
      sx={{ pl: !subheader ? 4 : 1, color: "grey.400" }}
      onClick={handleClick}
    >
      {Icon && <Icon fontSize="small" />}
      {user && <Avatar sx={{ width: 24, height: 24 }}>{user.charAt(0)}</Avatar>}
      {!Icon && !user && <Typography variant="body1">#</Typography>}
      <ListItemText primary={title} sx={{ marginLeft: 1 }} />
    </StyledListItem>
  );
}

export default SidebarOption;
