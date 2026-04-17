"use client";

export default function SkillsPanel() {
  return (
    <div className="hidden lg:flex flex-col gap-4 p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-[#08F7FE]/20 w-[130px] shrink-0">
      <h3 className="text-[10px] font-bold tracking-widest text-[#08F7FE] uppercase text-center">
        Active Skills
      </h3>

      <div className="flex flex-col items-center gap-1">
        <div className="w-12 h-12 rounded-lg border border-[#08F7FE]/40 bg-black/30 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-[#08F7FE]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <span className="text-[9px] tracking-wider text-white/70 uppercase">
          Time Warp
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="w-12 h-12 rounded-lg border border-[#BF00FF]/40 bg-black/30 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-[#BF00FF]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <span className="text-[9px] tracking-wider text-white/70 uppercase">
          Purple Shield
        </span>
      </div>
    </div>
  );
}
