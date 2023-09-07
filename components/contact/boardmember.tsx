import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface BoardmemberProps {
    firstname: string;
    lastname: string;
    tasklist?: string[];
    avatar?: string | StaticImport;
}

export default async function Boardmember({firstname, lastname, avatar, tasklist}: BoardmemberProps) {
    return <div className={"flex flex-col gap-1"}>
        {avatar && <Image src={avatar} alt={firstname + "'s gezicht"} className={"first:rounded-t-lg rounded-sm w-full"} width={380} height={380}/>}
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