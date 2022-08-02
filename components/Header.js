
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon } from "@heroicons/react/solid"

export default function Header() {
    return (
    <div className="bg-gray-700 flex flex-col sm:flex-row items-center justify-between text-gray-300 p-6 select-none">
        <div className="flex">
            <HeaderIcon Icon={HomeIcon} title="HOME" />
            <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
            <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
            <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
        </div>
        <Image className="cursor-pointer  active:brightness-110" src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" height={100} width={100}/>
    </div>
    )
}

