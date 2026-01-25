
import React, { useState, useEffect } from 'react';
import { portfolioData } from './data';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { AIChat } from './components/AIChat';
import { downloadCV } from './cvService';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showCVModal, setShowCVModal] = useState(false);

  // Load theme from localStorage and synchronize with document class
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 selection:bg-indigo-500/30 text-slate-900 dark:text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter text-indigo-600 dark:text-indigo-400 hover:scale-105 transition-transform">
            MNF<span className="text-slate-400">.</span>AI
          </a>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 dark:text-slate-400">
              <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a>
              <a href="#contact" className="px-4 py-1.5 bg-indigo-600 dark:bg-indigo-500 text-white dark:text-slate-950 rounded-full hover:shadow-lg hover:shadow-indigo-500/20 transition-all font-black text-xs uppercase tracking-widest">Contact</a>
            </div>

            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:ring-2 hover:ring-indigo-500/20 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-48 pb-32 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block px-4 py-2 mb-10 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full shadow-sm animate-pulse">
          Enterprise AI Architecture • Superior Intelligence
        </div>
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9] text-slate-950 dark:text-white">
          {portfolioData.name.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 text-glow" : ""}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 max-w-4xl mb-14 font-light leading-relaxed">
          Brid the gap between <span className="text-slate-900 dark:text-slate-200 font-medium">cutting-edge ML research</span> and <span className="text-slate-900 dark:text-slate-200 font-medium">production</span>, I build scalable engineering solutions that turn complex models into <span className="text-indigo-600 dark:text-indigo-400 italic">high-impact, real-world superior results</span>.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <a href="#contact" className="px-12 py-5 bg-indigo-600 text-white font-black text-xl rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/30 hover:-translate-y-1.5 active:scale-95">
            Hire Mohammed
          </a>
          <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="px-12 py-5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-950 dark:text-white font-black text-xl rounded-2xl hover:border-indigo-500 transition-all hover:-translate-y-1.5 shadow-xl">
            GitHub Profile
          </a>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-5xl space-y-16">
          <div className="relative group">
            <div className="absolute -left-10 top-0 bottom-0 w-2.5 bg-gradient-to-b from-indigo-600 via-cyan-500 to-transparent rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white mb-8 leading-tight">Delivering Scalable Intelligence at the Edge</h3>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {portfolioData.summary}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group border-b-4 border-b-indigo-500 shadow-sm">
              <span className="block text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">Academic Background</span>
              <p className="text-slate-950 dark:text-slate-200 font-bold text-lg leading-snug">{portfolioData.education.degree}</p>
              <p className="text-slate-500 text-xs mt-4 font-bold uppercase tracking-wider">{portfolioData.education.institution}</p>
            </div>
            <div className="p-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group border-b-4 border-b-purple-500 shadow-sm">
              <span className="block text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4">Specializations</span>
              <p className="text-slate-950 dark:text-slate-200 font-bold text-lg leading-snug">Data Science • GenAI • CV • MLOps</p>
              <p className="text-slate-500 text-xs mt-4 font-bold uppercase tracking-wider">Production Efficiency</p>
            </div>
            <div className="p-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group border-b-4 border-b-cyan-500 shadow-sm">
              <span className="block text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-4">Linguistics</span>
              <div className="space-y-3 mt-1">
                {portfolioData.languages.map((l, i) => (
                  <p key={i} className="text-slate-950 dark:text-slate-200 text-sm font-bold flex justify-between items-center">
                    <span>{l.language}</span>
                    <span className="text-slate-400 text-[10px] uppercase font-black">{l.level}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="p-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group border-b-4 border-b-pink-500 shadow-sm">
              <span className="block text-pink-600 dark:text-pink-400 text-[10px] font-black uppercase tracking-widest mb-4">Engagement Status</span>
              <p className="text-slate-950 dark:text-slate-200 font-bold text-lg leading-snug">Accepting Opportunities</p>
              <p className="text-slate-500 text-xs mt-4 font-bold uppercase tracking-wider">Freelance & Direct Hire</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Expertise">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skillGroups.map((group, i) => (
            <div key={i} className="p-12 bg-white dark:bg-slate-900/40 rounded-[3rem] border border-slate-200 dark:border-slate-800/50 hover:border-indigo-500/50 transition-all duration-500 group shadow-xl hover:-translate-y-2">
              <h3 className="text-indigo-600 dark:text-indigo-400 font-black mb-10 text-[10px] uppercase tracking-[0.3em]">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, j) => (
                  <span key={j} className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl text-sm font-bold border border-slate-200 dark:border-slate-700 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-slate-950 transition-all cursor-default shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work History">
        <div className="space-y-24">
          {portfolioData.internships.map((job, i) => (
            <div key={i} className="relative pl-14 border-l-4 border-indigo-100 dark:border-slate-800">
              <div className="absolute w-10 h-10 bg-indigo-600 rounded-2xl -left-[22px] top-0 shadow-[0_10px_30px_rgba(79,70,229,0.4)] border-4 border-white dark:border-slate-950 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div className="flex flex-wrap justify-between items-start mb-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-2">{job.role}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-black text-2xl tracking-tight">{job.company}</p>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-black mt-2 bg-white dark:bg-slate-900 px-8 py-3 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm uppercase tracking-[0.2em]">{job.period}</span>
              </div>
              
              <p className="text-2xl text-slate-600 dark:text-slate-300 mb-12 italic leading-relaxed max-w-5xl font-light">
                {job.description}
              </p>

              <div className="grid gap-8">
                {job.achievements.map((item, j) => (
                  <div key={j} className="flex items-start gap-8 p-8 bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-transparent hover:border-indigo-500/20 transition-all shadow-sm group">
                    <div className="w-12 h-12 shrink-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 transition-all group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-400 text-xl leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Core Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioData.projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </Section>

      {/* Courses Section */}
      <Section id="courses" title="Certifications">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.courses.map((c, i) => (
            <div key={i} className="group relative p-10 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-[3rem] flex flex-col hover:border-indigo-500/50 hover:-translate-y-3 transition-all duration-500 shadow-2xl">
              <div className="mb-8 flex justify-between items-center">
                <span className="px-5 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-100 dark:border-indigo-500/20 shadow-sm">
                  {c.platform}
                </span>
                {c.link && (
                   <a href={c.link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                   </a>
                )}
              </div>
              
              <h4 className="text-2xl font-black text-slate-950 dark:text-white mb-6 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {c.name}
              </h4>
              
              {c.duration && (
                <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  Duration: {c.duration}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-indigo-500/20 rounded-[5rem] p-12 md:p-24 text-center max-w-5xl mx-auto shadow-[0_50px_100px_rgba(0,0,0,0.08)] dark:shadow-[0_50px_100px_rgba(79,70,229,0.15)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[160px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none"></div>
          
          <h3 className="text-5xl md:text-8xl font-black mb-10 relative text-slate-950 dark:text-white tracking-tighter leading-none">Connect for <span className="italic font-serif text-indigo-600">Superior</span> Results.</h3>
          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 mb-20 max-w-3xl mx-auto leading-relaxed relative font-light">
            I am ready to architect your next high-impact AI strategy. If your team values precision, scalability, and excellence, let's talk.
          </p>

          <div className="flex flex-col items-center gap-16">
            <div className="flex flex-wrap justify-center gap-10 w-full pt-8">
              <div className="flex flex-col gap-5">
                <button 
                  onClick={copyEmail}
                  className="flex items-center gap-6 px-12 py-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] hover:bg-white dark:hover:bg-indigo-600/10 hover:border-indigo-500 transition-all group/link shadow-xl relative"
                >
                  <div className="p-4 bg-indigo-100 dark:bg-indigo-500/20 rounded-2xl text-indigo-600 dark:text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-slate-400 uppercase font-black tracking-[0.3em] mb-2">Direct Mail</span>
                    <span className="text-slate-950 dark:text-slate-200 font-black text-2xl">{portfolioData.contact.email}</span>
                  </div>
                  {copied && (
                    <span className="absolute -top-16 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold py-4 px-8 rounded-3xl animate-bounce shadow-2xl ring-4 ring-white dark:ring-slate-900">
                      Email Address Copied!
                    </span>
                  )}
                </button>
                <a href={`mailto:${portfolioData.contact.email}`} className="text-xs text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-black uppercase tracking-[0.4em] transition-all text-center">Open in Mail App</a>
              </div>

              <a href={`https://wa.me/${portfolioData.contact.phone.replace(/\s+/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-6 px-12 py-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] hover:bg-white dark:hover:bg-green-600/10 hover:border-green-500 transition-all group/link shadow-xl h-fit self-start">
                <div className="p-4 bg-green-100 dark:bg-green-500/20 rounded-2xl text-green-600 dark:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-slate-400 uppercase font-black tracking-[0.3em] mb-2">WhatsApp</span>
                  <span className="text-slate-950 dark:text-slate-200 font-black text-2xl">Chat on WhatsApp</span>
                </div>
              </a>

              <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-6 px-12 py-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] hover:bg-white dark:hover:bg-white/10 hover:border-indigo-500 transition-all group/link shadow-xl h-fit self-start">
                <div className="p-4 bg-indigo-100 dark:bg-indigo-500/20 rounded-2xl text-indigo-600 dark:text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-slate-400 uppercase font-black tracking-[0.3em] mb-2">LinkedIn Portfolio</span>
                  <span className="text-slate-950 dark:text-slate-200 font-black text-2xl">Connect with Mohammed</span>
                </div>
              </a>

              <button 
                onClick={() => setShowCVModal(true)}
                className="flex items-center gap-6 px-12 py-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] hover:bg-white dark:hover:bg-cyan-600/10 hover:border-cyan-500 transition-all group/link shadow-xl h-fit self-start"
              >
                <div className="p-4 bg-cyan-100 dark:bg-cyan-500/20 rounded-2xl text-cyan-600 dark:text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-slate-400 uppercase font-black tracking-[0.3em] mb-2">Download CV</span>
                  <span className="text-slate-950 dark:text-slate-200 font-black text-2xl">Get My Resume</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* CV Download Modal */}
      {showCVModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-md w-full border border-slate-200 dark:border-slate-800 animate-in">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-500/20 rounded-xl text-cyan-600 dark:text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
                </div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">Download CV</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 mb-8 font-light">Choose your preferred format:</p>

              <div className="space-y-3 mb-6">
                <button
                  onClick={() => {
                    downloadCV(portfolioData, 'pdf');
                    setShowCVModal(false);
                  }}
                  className="w-full flex items-center gap-4 px-6 py-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl hover:bg-red-100 dark:hover:bg-red-500/20 transition-all text-left group"
                >
                  <div className="p-3 bg-red-100 dark:bg-red-500/20 rounded-lg text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M9 9h1m6 0h-1M9 13h6M9 17h6"/></svg>
                  </div>
                  <div>
                    <p className="font-black text-slate-950 dark:text-white">PDF Format</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Professional & ATS-friendly</p>
                  </div>
                </button>

                <button
                  onClick={() => {
                    downloadCV(portfolioData, 'word');
                    setShowCVModal(false);
                  }}
                  className="w-full flex items-center gap-4 px-6 py-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all text-left group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M8 9h8M8 13h8M8 17h4"/></svg>
                  </div>
                  <div>
                    <p className="font-black text-slate-950 dark:text-white">Word Format</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Editable .docx file</p>
                  </div>
                </button>
              </div>

              <button
                onClick={() => setShowCVModal(false)}
                className="w-full px-6 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-black text-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-slate-200 dark:border-slate-800/50 text-center">
        <div className="flex justify-center gap-12 mb-12">
           <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all transform hover:scale-125"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
           <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all transform hover:scale-125"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-sm font-black uppercase tracking-[0.5em] mb-6">
          © {new Date().getFullYear()} {portfolioData.name}
        </p>
        <p className="text-[10px] text-slate-300 dark:text-slate-800 font-mono font-black uppercase tracking-[0.8em]">
          Refined Intelligence • Infinite Scalability
        </p>
      </footer>

      {/* Floating Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-32 right-8 w-16 h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] shadow-2xl flex items-center justify-center text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-2 z-40 group hover:ring-8 hover:ring-indigo-500/10 shadow-indigo-500/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-[-6px] transition-transform"><polyline points="18 15 12 9 6 15"/></svg>
      </button>

      <AIChat />
    </div>
  );
};

export default App;
