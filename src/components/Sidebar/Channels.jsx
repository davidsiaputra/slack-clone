import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

import { Collapse, List } from "@mui/material";
import SidebarOption from "./SidebarOption";

// Icons
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

function Channels() {
  const [channels, setChannels] = useState([]);
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    const unsubscribeToRooms = onSnapshot(
      collection(db, "channels"),
      (channelCollections) => {
        setChannels(channelCollections.docs);
      }
    );

    return () => {
      unsubscribeToRooms();
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const addChannel = async () => {
    const channelName = prompt("Please enter channel name");

    if (channelName) {
      await addDoc(collection(db, "channels"), {
        name: channelName,
      });
    }
  };
  return (
    <List disablePadding>
      <SidebarOption
        title="Channels"
        handleClick={handleOpen}
        Icon={open ? ExpandLess : ExpandMore}
        subheader
      />
      <Collapse in={open} unmountOnExit>
        <List disablePadding>
          {channels?.map((channel) => (
            <SidebarOption key={channel.id} title={channel.data().name} />
          ))}
        </List>
        <SidebarOption
          title="Add Channel"
          Icon={AddBoxSharpIcon}
          handleClick={addChannel}
        />
      </Collapse>
    </List>
  );
}

export default Channels;
