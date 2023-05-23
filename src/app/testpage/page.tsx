import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const firstName = "Jens";
    const lastName = "Penneman";
    const profilePictureURL = "/assets/img/boardmember/jenspenneman/face2022.JPG";
    const tasks = [
        {name: "Foto-verantwoordelijke"},
        {name: "Drankverantwoordelijke"},
        {name: "Website-verantwoordelijke"},
        {name: "Archivaris"},
    ];
    const contactMedia = [
        {name: "Facebook", text: "Facebook", url: "https://facebook.com"},
        {name: "Instagram", text: "Instagram", url: "https://instagram.com"},
        {name: "Mail", text: "Email me!", url: "https://gmail.com"},
    ];

    return <main className={"min-h-[calc(100svh-72px-56px)] container mx-auto p-2"}>
        <div className={"flex flex-col gap-1"}>
            <Image className={"first:rounded-t-lg rounded-sm"} src={profilePictureURL} alt={"Jens"} width={2638} height={2638}/>
            <h2 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl"}>{firstName} {lastName}</h2>
            <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col gap-1"}>
                {tasks.map((task, index) =>
                    <li className={"border-b-2 last:border-b-0 p-2"} key={index}>{task.name}</li>)
                }
            </ul>
            <nav className={"flex flex-row gap-1"}>
                {contactMedia.map((contactMedium, index) =>
                    <Link className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:truncate p-2"} href={contactMedium.url} target={"_blank"} key={index}>{contactMedium.text}</Link>)
                }
            </nav>
        </div>
    </main>;
}