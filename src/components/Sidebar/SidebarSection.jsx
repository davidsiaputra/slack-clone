import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

import { Collapse, List } from "@mui/material";
import SidebarOption from "./SidebarOption";

// Icons
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

function SidebarSection({ collectionName, title, handleAdd }) {
  const [rooms, setRooms] = useState([]);
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    const unsubscribeToRooms = onSnapshot(
      collection(db, collectionName),
      (requestedCollection) => {
        setRooms(requestedCollection.docs);
      }
    );

    return () => {
      unsubscribeToRooms();
    };
  }, [collectionName]);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <List disablePadding>
      <SidebarOption
        title={title}
        handleClick={handleOpen}
        Icon={open ? ExpandLess : ExpandMore}
        subheader
      />
      <Collapse in={open} unmountOnExit>
        <List disablePadding>
          {rooms?.map((room) => (
            <SidebarOption
              key={room.id}
              chatId={room.id}
              title={room.data().name}
              collectionName={collectionName}
            />
          ))}
        </List>
        <SidebarOption
          title={`Add ${title}`}
          Icon={AddBoxSharpIcon}
          handleClick={handleAdd}
        />
      </Collapse>
    </List>
  );
}

export default SidebarSection;
