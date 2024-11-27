import ChatBase from "@/components/chat/ChatBase";
import { fetchChats } from "@/fetch/chtasFetch";
import { fetchChatGroup, fetchChatGroupUsers } from "@/fetch/groupFetch";
import { ChatGroupType, GroupChatUserType, MessageType } from "@/type/type";
import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  if (params.id.length !== 36) {
    return notFound();
  }
  const group: ChatGroupType | null = await fetchChatGroup(params.id);

  const users: Array<GroupChatUserType> | [] = await fetchChatGroupUsers(
    params.id
  );

  const chats: Array<MessageType> | [] = await fetchChats(params.id);

  if (group === null) {
    return notFound();
  }
  return (
    <div>
      <h1>Let's Try Scoket</h1>
      <ChatBase users={users} group={group} oldMessages={chats} />
    </div>
  );
};

export default Page;
