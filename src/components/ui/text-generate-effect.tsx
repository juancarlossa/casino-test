"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  htmlTag
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  htmlTag: 'span' | 'p' | 'h1' | 'h2'
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ")

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
      }
    );
  }, [scope, animate, duration, filter]);

  const renderWords = ({ htmlTag }: { htmlTag: 'span' | 'p' | 'h1' | 'h2' }) => {
    if (htmlTag === 'span')
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className="text-black opacity-0 dark:text-white"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      )

    if (htmlTag === 'h1')
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className="w-full text-black opacity-0 dark:text-white"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                <h1>{word}{" "}</h1>
              </motion.span>
            );
          })}
        </motion.div>
      )

    if (htmlTag === 'p')
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.p
                key={word + idx}
                className="text-black opacity-0 dark:text-white"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.p>
            );
          })}
        </motion.div>
      )
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide text-black dark:text-white">
          {renderWords({ htmlTag: htmlTag })}
        </div>
      </div>
    </div>
  );
};
