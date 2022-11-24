import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { HomeIcon, MagnifyingGlassIcon, BoltIcon, CheckBadgeIcon, UserIcon, RectangleStackIcon } from '@heroicons/react/24/outline'


function Header() {
  return (
    <header className="flex flex-col items-center sm:flex-row m-5 justify-between h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={BoltIcon} title="TRENDING" />
        <HeaderItem Icon={CheckBadgeIcon} title="VERIFIED" />
        <HeaderItem Icon={RectangleStackIcon} title="COLLECTIONS" />
        <HeaderItem Icon={MagnifyingGlassIcon} title="SEARCH" />
        <HeaderItem Icon={UserIcon} title="USER" />

      </div>

      <Image
        src="https://links.papareact.com/ua6"
        alt="logo"
        width={200}
        height={100}
        className="object-contain"
      />
    </header>
  )
}

export default Header
