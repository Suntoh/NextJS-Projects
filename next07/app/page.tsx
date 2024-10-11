import Image from "next/image";
import Posts from "./components/Posts";

//export const revalidate = 10
//seconds  => 86400 = 1day

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center
      text-white dark:text-slate-200">
          Hello and Welcome 😊&nbsp;
        <span className="whitescope-nowrap">
          I&lsquo;m <span className="font-bold">Suntoh</span>.
        </span>
      </p>
      <Posts />
    
    </main>
    )
}
