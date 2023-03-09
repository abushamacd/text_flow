import ActiveUser from "@/components/ActiveFrnd";
import ChatList from "@/components/FrndList";
import CustomHead from "@/components/CustomHead";
import Media from "@/components/Media";
import Search from "@/components/Search";
import UserDetails from "@/components/FriendDetails";

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
        <div className="w-3/5 border-2">text</div>
        <div className="w-1/5">
          <UserDetails />
          <Media />
        </div>
      </main>
    </>
  );
}
