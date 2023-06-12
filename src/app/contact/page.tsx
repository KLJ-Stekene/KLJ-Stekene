import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/site.config";

export const metadata = {
    title: "Contact",
};

export default function ContactNL() {
    return <main className={"min-h-[calc(100svh-72px-56px)] print:min-h[100svh] flex flex-col gap-2"}>
        <figure className={"container mx-auto h-[45svh] transition-all duration-300 relative px-2"}>
            <Image priority className={"h-full object-cover rounded-lg"} src={"/assets/img/boardmember/2022/groepsfoto.jpg"} alt={"Groepsfoto van het bestuur"} width={1900} height={450}/>
        </figure>
        <section className={"container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 print:grid-cols-3 gap-2 px-2"}>
            <h2 className={"sm:col-span-2 lg:col-span-3 xl:col-span-4 print:col-span-3 text-center font-bold text-3xl"}>Bestuursleden</h2>
            {siteConfig.bestuur.leden
                .map((bestuurslid, index) =>
                    <div key={index} className={"flex flex-col gap-1"}>
                        <Image priority className={"first:rounded-t-lg rounded-sm w-full"} src={bestuurslid.avatar} alt={bestuurslid.firstname + "'s gezicht"} width={380} height={380}/>
                        <h3 className={"bg-gray-100 dark:bg-gray-900 first:rounded-t-lg rounded-sm p-2 text-xl font-semibold"}>{bestuurslid.firstname} {bestuurslid.lastname}</h3>
                        <ul className={"bg-gray-100 dark:bg-gray-900 rounded-sm flex flex-col flex-grow gap-1"}>
                            {bestuurslid.tasklist
                                .map((task, index) =>
                                    <li key={index} className={"border-b-2 last:border-b-0 dark:border-gray-800 p-2 print:truncate"}>{task}</li>,
                                )
                            }
                        </ul>
                        <nav className={"flex flex-row gap-1"}>
                            {bestuurslid.socialMedia
                                .map((socialMedium, index) =>
                                    <Link key={index} className={"bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 first:rounded-bl-lg rounded-sm last:rounded-br-lg last:flex-grow last:print:truncate p-2"} href={socialMedium.URL} target={"_blank"}>{socialMedium.text}</Link>,
                                )
                            }
                        </nav>
                    </div>,
                )
            }
        </section>
    </main>;
}