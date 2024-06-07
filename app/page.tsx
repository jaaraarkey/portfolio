import Hero from "@/components/Hero";
import Grid from "@/components/ui/grid";
import { FloatingNav } from "@/components/ui/navbar";
import Image from "next/image";
import { HiOutlineHome } from "react-icons/hi2";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex  flex-col overflow-hidden mx-auto sm:px-10  px-5 bg-opacity-40 ">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{
            name: "Home", link: "/", icon: <HiOutlineHome />
          }]} />
        <Hero />
      </div>
      <Grid />
    </main>
  );
}
