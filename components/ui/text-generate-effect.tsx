"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";


export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();

    let wordsArray = words.split(" ");

    useEffect(() => {
        // Animate the spans when the scope changes
        animate(
            "span",
            {
                opacity: .8,
            },
            {
                duration: 2,
                delay: stagger(0.3),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            // In order to change accent color and the accented word change the line below:
                            className={`${idx > 1 ? 'text-violet-300' : 'dark:text-white text-black '} opacity-0`}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-normal", className)}>
            <div className="my-4">
                <div className=" dark:text-white text-black text-6xl font-bold leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
