import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicBtn from './ui/magic-button'
import Link from 'next/link'
import { HiOutlineArrowUpRight } from "react-icons/hi2";


const Hero = () => {
    return (
        <div className='pb-20 pt-36 '>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='-top-10 -left-full md:-left-32 md:-top-20 h-[80vh] w-[50vw]' fill="purple" />
                <Spotlight className='top-28 left-80 md:-left-32 h-[80vh] w-[50vw]' fill="blue" />
            </div>
            {/* <div className="h-screen  w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center    justify-center absolute top-0 lef-0">

                 <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div> */}
            <div className='flex justify-center relative my-20 z-10 w-screen' >
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    {/* <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'> diving into web</h2> */}

                    <TextGenerateEffect className='text-center text-[40px] md:text-xl  lg:text-6xl'
                        // ? To edit content of the title change next line ->
                        words="Hello! I&apos;m Oleg " />
                    <p className='text-center md:tracking-wider mb4 text:sm md:text-lg lg:text-2xl text-slate-400'>  I&apos;m a Next.js develoer
                    </p>
                    <Link href="#" className='mt-6'  >
                        <MagicBtn title="Get in touch"
                            icon={<HiOutlineArrowUpRight />


                            }
                            position="right" />
                    </Link>
                </div>
            </div >
        </div >
    )
}

export default Hero;