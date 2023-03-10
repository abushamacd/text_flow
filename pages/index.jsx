import ActiveUser from "@/components/ActiveFrnd";
import ChatList from "@/components/FrndList";
import CustomHead from "@/components/CustomHead";
import Media from "@/components/Media";
import Search from "@/snippets/Search";
import UserDetails from "@/components/FriendDetails";
import Message from "@/components/Message";
import MessageSend from "@/components/MessageSend";

export default function Home() {
  return (
    <>
      <CustomHead title={"Welcome"} />
      <main className="flex justify-between screen_92">
        <div className="w-1/5 ">
          <ActiveUser />
          <Search />
          <ChatList />
        </div>
        <div className="w-3/5 border border-custom_color rounded-lg screen_92 flex flex-col justify-end">
          <Message />
          <MessageSend />
        </div>
        <div className="w-1/5">
          <UserDetails />
          <Media />
        </div>
      </main>
    </>
  );
}
