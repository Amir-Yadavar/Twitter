import Image from "next/image";
import SidebarItemMenu from "./SidebarItemMenu";
import { HomeIcon } from '@heroicons/react/24/solid'
// import { EllipsisHorizontalCircleIcon} from '@heroicons/react/24/outline'
import { BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, HashtagIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 fixed h-full">
      {/* logo twitter */}
      <div className="cursor-pointer w-fit rounded-full hover:bg-blue-300 p-0 ">
        <Image width="50" height="50" src={'/img/twitter-logo2.png'} alt="amir-yadavar" className="w-24 hover:bg-blue-300 "></Image>
      </div>

      {/* Menu */}
      <div className="">
        <SidebarItemMenu text="Home" Icon={HomeIcon} active />
        <SidebarItemMenu text="Explore" Icon={HashtagIcon} />
        <SidebarItemMenu text="Notifications" Icon={BellIcon} />
        <SidebarItemMenu text="Messages" Icon={InboxIcon} />
        <SidebarItemMenu text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarItemMenu text="Lists" Icon={ClipboardIcon} />
        <SidebarItemMenu text="Profile" Icon={UserIcon} />
        <SidebarItemMenu text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>

      {/* Button */}

      <button className="bg-blue-400 text-white rounded-full mx-3 w-52 h-12 transition hover:brightness-90 font-bold hidden xl:block">Tweet</button>


      {/* mini profile */}

      <div className="hoverEffect flex items-center justify-between w-60 my-16 p-2">
        <Image src="/img/profile-user.jpg" alt="amir-yadavar" width="100" height="100" className="rounded-full w-12 h-12" />
        <div className="hidden xl:inline">
          <h4 className="font-bold">Amir Yadavar</h4>
          <p className="text-gray-500">@amirYadvar</p>
        </div>
        <EllipsisHorizontalIcon className="h-7 hidden xl:inline" />
      </div>
    </div>
  )
}
