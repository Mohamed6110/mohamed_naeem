
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-32 px-6 max-w-6xl mx-auto border-b border-slate-100 dark:border-slate-800/50 last:border-0 scroll-mt-24 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400 inline-block uppercase tracking-tighter">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};
