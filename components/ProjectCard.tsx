
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-700 flex flex-col group hover:-translate-y-3 hover:shadow-[0_40px_100px_rgba(79,70,229,0.15)] shadow-xl h-full">
      {project.image && (
        <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 flex items-center justify-center">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      )}
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-3xl font-black text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tighter">
            {project.title}
          </h3>
          {project.metrics && (
            <span className="text-[10px] font-black px-4 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 rounded-full shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all uppercase tracking-[0.2em]">
              {project.metrics}
            </span>
          )}
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed flex-grow font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2.5 mb-10">
          {project.tools.map((tool, idx) => (
            <span key={idx} className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors border border-slate-100 dark:border-slate-700/50">
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-8 pt-8 border-t border-slate-100 dark:border-slate-800/50">
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-black text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white flex items-center gap-2.5 transition-colors uppercase tracking-[0.25em]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              Source
            </a>
          )}
          {project.liveLink && project.liveLink !== "#" && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-black text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center gap-2.5 transition-colors uppercase tracking-[0.25em]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Deployment
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
