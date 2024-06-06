import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='-top-10 -left-full md:-left-32 md:-top-20 h-[80vh] w-[50vw]' fill="purple" />
                <Spotlight className='top-28 left-80 md:-left-32 h-[80vh] w-[50vw]' fill="blue" />
            </div>
            <div className='flex justify-center relative my-20 z-10' >
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'> diving into web</h2>

                    <TextGenerateEffect className='text-center text-[40px] md:text-xl  lg:text-6xl'
                        // ? To edit content of the title change next line ->
                        words="Words go here and here" />
                    <p className='text-center md:tracking-wider mb4 text:sm md:text-lg lg:text-2xl'>  Hello I&apos; Oleg, a Next.js develoer based in Belgium.
                    </p>
                </div>
            </div >
        </div >
    )
}

export default Hero;