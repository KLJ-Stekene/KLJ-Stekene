import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface BoardmembersGroupProps {
    name: string;
    email?: string;
    avatar?: string | StaticImport;
}

export default async function BoardmembersGroup({name, email, avatar}: BoardmembersGroupProps) {
    return <div className={"flex flex-col gap-1"}>
        {avatar && <div className={"h-[45svh] relative"}>
            <Image src={avatar} alt={name + "'s group"} className={"object-cover rounded-t-lg rounded-sm"} fill/>
        </div>}
        <div className={"flex flex-row gap-1"}>
            <h3 className={"bg-gray-100 dark:bg-gray-900 flex-grow rounded-sm rounded-b-lg rounded-br-sm p-2 text-xl font-semibold text-center"}>{name}</h3>
            {email && <Link href={"mailto:" + email} target={"_blank"}
                            className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-sm rounded-br-lg p-2 px-4 uppercase"}>Mail</Link>}
        </div>
    </div>
}