import React from "react";
import "./App.css";
import {
  Code2,
  FileJson,
  Globe,
  Camera,
  Database,
  Clapperboard,
  Github,
  Linkedin,
  InstagramIcon,
  Mail,
  FileText,
  FolderOpen,
} from "lucide-react";

function App() {
  const techIcons = [
    { icon: Code2, size: "w-10 h-10 sm:h-12 sm:w-12", top: "5%", left: "75%", color: "text-cyan-500"},
    { icon: FileJson, size: "w-10 h-10 sm:h-12 sm:w-12", top: "48%", left: "95%", color: "text-red-500"},
    { icon: Globe, size: "w-10 h-10 sm:h-12 sm:w-12", top: "85%", left: "78%", color: "text-emerald-500"},
    { icon: Camera, size: "w-10 h-10 sm:h-12 sm:w-12", top: "88%", left: "15%", color: "text-indigo-500" },
    { icon: Database, size: "w-10 h-10 sm:h-12 sm:w-12", top: "50%", left: "-5%", color: "text-orange-500" },
    { icon: Clapperboard, size: "w-10 h-10 sm:h-12 sm:w-12", top: "5%", left: "12%", color: "text-purple-500" },
  ];

  const downloadResume = () => {
    const a = document.createElement("a");
    a.href = "/Resume.pdf";
    a.download = "Varoon_Kumar_Resume.pdf";
    a.click();
  };
 

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-900 overflow-hidden p-10">
      {/* Float Animation + BG */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        .bg-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url('/bg.webp');
          background-size: cover;
          background-position: center;
          opacity: 0.1;
          z-index: -1;
        }
      `}</style>

      <div className="absolute inset-0 bg-image z-0"></div>

      {/* MAIN ORBIT CONTAINER */}
      <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] mx-auto select-none mb-8 z-10">

        {/* Orbit Circle */}
        <div className="absolute border border-dashed border-gray-300 dark:border-zinc-600 rounded-full w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] hover:scale-110 transition-all top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        

        {/* FLOATING ICONS AROUND THE ORBIT */}
        {techIcons.map((item, index) => {
          const Icon = item.icon;
          console.log(item.color);
          return (
               <Icon
              key={index}
              className={`absolute rounded-full shadow-lg p-2 bg-white  ${item.color} ${item.size} animate-float`}
              style={{
                top: item.top,
                left: item.left,
                animationDelay: `${index * 0.5}s`,
              }}
            />
            
          );
        })}

        {/* Center Avatar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 cursor-pointer">
          <div className="relative hover:scale-110 transition-all w-44 h-44 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-[#2f2f2f]">
            <img
              src="/me.webp"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center space-y-4 z-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white tracking-tight">
          Hey, I'm Varoon Kumar
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
          Full Stack Developer & Video Editor
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 pt-2">
          <a
            href="https://github.com/varoonk21"  target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition transform hover:scale-110"
            title="GitHub"
          >
            <Github className="w-6 h-6 sm:h-8 sm:w-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/varoonk21/"  target="_blank"
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition transform hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6 sm:h-8 sm:w-8" />
          </a>

          <a
            href="https://www.instagram.com/varunkinsights/"  target="_blank"
            className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition transform hover:scale-110"
            title="Instagram"
          >
            <InstagramIcon className="w-6 h-6 sm:h-8 sm:w-8" />
          </a>

          <a
            href="mailto:varoonk21@gmail.com"  target="_blank"
            className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition transform hover:scale-110"
            title="Mail Me"
          >
            <Mail className="w-6 h-6 sm:h-8 sm:w-8" />
          </a>

          <a
            href="https://drive.google.com/drive/folders/12gpTOFTkmDFaE03oMNXHQikFMtuU_BE1"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition transform hover:scale-110"
            title="Portfolio"
          >
            <FolderOpen className="w-6 h-6 sm:h-8 sm:w-8" />
          </a>
        </div>

        {/* Resume Button */}
        <div className="pt-3">
          <button
            className="group flex items-center gap-2 mx-auto px-6 py-2.5 sm:px-8 sm:py-4 bg-gray-900 text-lg sm:text-xl hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-full cursor-pointer font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            onClick={downloadResume}
          >
            <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
