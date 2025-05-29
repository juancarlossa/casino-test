import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode,
  title: string,
  description?: string,
  gradientBackground?: 'bg-gradient-middle' | 'bg-gradient-top'
}

export function Section ({ children, title, description, gradientBackground = 'bg-gradient-middle' }: SectionProps) {
  return (
    <section className={`${gradientBackground} w-full flex justify-center items-center pt-20`}>
      <article className="flex w-[90vw] flex-col items-center justify-center space-y-5 lg:w-[60vw]">
        <div>
          <h2 className="text-center text-2xl font-bold leading-tight md:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground mt-2 text-center">
              {description}
            </p>
          )}
        </div>
        <span className="mx-auto mb-10 h-1 w-24 rounded bg-yellow-400" />
        {children}
      </article>
    </section>
  )
}