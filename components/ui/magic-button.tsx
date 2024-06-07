import React from 'react'

const MagicBtn
    = ({
        title, icon, position, handleClick, otherClasses
    }: {
        title: string;
        icon: React.ReactNode;
        position: string;
        handleClick?: () => void;
        otherClasses?: string
    }) => {
        return (
            <div><button className="
            relative 
            inline-flex 
            h-12 
            overflow-hidden 
            rounded-md 
            p-[1px] 
            focus:outline-none 
            focus:ring-1 
            focus:ring-slate-400  
            hover:ring-white
            md:w-60
            md:mt-10">

                <span className="
                absolute 
                inset-[-1000%]
                animate-[spin_10s_linear_infinite] 
                bg-[conic-gradient(from_45deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                />
                <span className={`
                inline-flex 
                h-full 
                w-full 
                cursor-pointer 
                items-center 
                justify-center 
                rounded-md 
                bg-slate-950 
                px-2
                text-sm 
                font-medium 
                text-white 
                backdrop-blur-3xl gap-2 ${otherClasses}`}>
                    {position === "left" && icon}
                    {title}
                    {position === "right" && icon}
                </span>
            </button>

            </div >
        )
    }

export default MagicBtn;
