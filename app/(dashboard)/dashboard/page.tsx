import DashNav from "@/components/Dashboard/DashNav";
import React from "react";
import {
  authOptions,
  CustomSession,
} from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import CreateChat from "@/components/chatGroup/CreateChat";
import { ChatGroupType } from "@/type/type";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";

const Page = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups: Array<ChatGroupType> | [] = await fetchChatGroups(
    session?.user?.token!
  );

  console.log("groups log", groups);
  return (
    <div>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />

      <div className="container">
        <div className="mt-6 text-end">
          <CreateChat user={session?.user!} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groups.length > 0 &&
          groups.map((item, index) => (
            <GroupChatCard group={item} key={index} user={session?.user!} />
          ))}
      </div>
    </div>
  );
};

export default Page;
