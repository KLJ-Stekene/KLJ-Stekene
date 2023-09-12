import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface BoardmemberProps {
    firstname: string;
    lastname: string;
    tasklist?: string[];
    avatar?: string | StaticImport;
    crazyAvatar?: string | StaticImport;
}

export default async function Boardmember({firstname, lastname, tasklist, avatar, crazyAvatar}: BoardmemberProps) {
    return <div className={"flex flex-col gap-1"}>
        <BoardmembersAvatar firstname={firstname} avatar={avatar} crazyAvatar={crazyAvatar}/>
        <div className={"flex flex-row gap-1"}>
            <h3 className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex-grow p-2 text-xl font-semibold"}>{firstname} {lastname}</h3>
            <Link href={`mailto:${firstname}.${lastname}@kljstekene.be`} target={"_blank"}
                  className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-sm p-2 px-4 uppercase"}>Mail</Link>
        </div>
        {tasklist && <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm last:rounded-b-lg flex flex-col flex-grow gap-1"}>
            {tasklist?.map((task, index) => <BoardmembersTask key={index} name={task}/>)}
        </ul>}
    </div>
}

interface BoardmembersTaskProps {
    name: string;
}

async function BoardmembersTask({name}: BoardmembersTaskProps) {
    return <li className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>{name}</li>
}

interface BoardmembersAvatarProps {
    firstname: string;
    avatar?: string | StaticImport;
    crazyAvatar?: string | StaticImport;
}

async function BoardmembersAvatar({firstname, avatar, crazyAvatar}: BoardmembersAvatarProps) {
    if (!avatar) return undefined;

    return <div className={"relative"}>
        <Image src={avatar} alt={firstname + "'s gezicht"} width={380} height={380} className={"w-full rounded-t-lg rounded-sm top-0"}/>
        {!!crazyAvatar && <Image src={crazyAvatar} alt={firstname + "'s zot gezicht"} width={380} height={380}
                                 className={"w-full rounded-t-lg rounded-sm absolute top-0 opacity-0 hover:opacity-100 transition-all duration-300"}/>}
    </div>
}