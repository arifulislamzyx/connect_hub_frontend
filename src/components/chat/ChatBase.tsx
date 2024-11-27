"use client";
import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";
import ChatSidebar from "./ChatSidebar";
import { ChatGroupType, GroupChatUserType, MessageType } from "@/type/type";
import ChatNav from "./ChatNav";
import ChatUserDialog from "./ChatUserDialog";
import Chats from "./Chats";

const ChatBase = ({
  users,
  group,
  oldMessages,
}: {
  users: Array<GroupChatUserType> | [];
  group: ChatGroupType;
  oldMessages: Array<MessageType> | [];
}) => {
  // let socket = useMemo(() => {
  //   const socket = getSocket();

  //   socket.auth = {
  //     room: groupId,
  //   };

  //   return socket.connect();
  // }, []);

  // useEffect(() => {
  //   socket.on("message", (data: any) => {
  //     console.log("Here is the Socket Message", data);
  //   });
  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  const [open, setOpen] = useState(true);

  const [chatUser, setChatUser] = useState<GroupChatUserType>();

  useEffect(() => {
    const data = localStorage.getItem(group.id);

    if (data) {
      const userData = JSON.parse(data);
      setChatUser(userData);
    }
  }, [group.id]);

  return (
    <div className="flex">
      <ChatSidebar users={users} />
      <div className="w-full md:w-4/5 bg-gradient-to-b from-gray-50 to-white">
        {open ? (
          <ChatUserDialog open={open} setOpen={setOpen} group={group} />
        ) : (
          <ChatNav chatGroup={group} users={users} />
        )}

        <Chats group={group} chatUser={chatUser} oldMessages={oldMessages} />
      </div>
    </div>
  );
};

export default ChatBase;
