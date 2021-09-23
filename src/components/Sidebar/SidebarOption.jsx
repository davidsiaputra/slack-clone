import React from "react";
import { Avatar, Typography, ListItemText } from "@mui/material";
import { StyledListItem } from "./Sidebar.styles";
import { useDispatch, useSelector } from "react-redux";
import { enterChat } from "../../redux/chatSlice";

function SidebarOption({
  chatId,
  Icon,
  title,
  user,
  handleClick,
  subheader,
  collectionName,
}) {
  const dispatch = useDispatch();
  const currentChatId = useSelector((state) => state.chat.id);

  const handleClickChat = () => {
    if (chatId && collectionName) {
      dispatch(
        enterChat({
          id: chatId,
          collectionName,
        })
      );
    }
  };

  return (
    <StyledListItem
      sx={{
        pl: !subheader ? 4 : 1,
        color: "grey.400",
        "&.Mui-selected": {
          background: (theme) => theme.palette.info.main,
          color: "common.white",
          "&:hover": {
            background: (theme) => theme.palette.info.dark,
          },
        },
      }}
      onClick={chatId ? handleClickChat : handleClick}
      selected={chatId && currentChatId === chatId}
      disableRipple
    >
      {Icon && <Icon fontSize="small" />}
      {user && <Avatar sx={{ width: 24, height: 24 }}>{user.charAt(0)}</Avatar>}
      {!Icon && !user && (
        <Typography variant="body1" sx={{ fontWeight: 300 }}>
          #
        </Typography>
      )}
      <ListItemText primary={title} sx={{ marginLeft: 1 }} />
    </StyledListItem>
  );
}

export default SidebarOption;
