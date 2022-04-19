
import { Box } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import { ChatState } from "../Context/ChatProvider";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const ChatPage = () => {
  console.log("here");
  const { user } = ChatState();
  console.log(user);
  return (
    
    <div style={{ width: "100%" }}>
      {console.log("hello")}
      {user && <SideDrawer />}
      <Box
        d='flex'
        justifyContent='space-between'
        w='100%'
        h='91.5vh'
        p='10px'
      >
        {user && <MyChats />}
        {user && (<Chatbox />)}
      </Box>
    </div>
  );
};
export default ChatPage;
