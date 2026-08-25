import { Mail } from "lucide-react";

const NowPlayingBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-spotify-border bg-spotify-dark-secondary/95 backdrop-blur-md">
    <div className="h-1 w-full bg-spotify-gradient" aria-hidden="true" />
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5">
      <div className="flex min-w-0 items-center gap-3">
        <div className="equalizer shrink-0" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-spotify-text-primary">RFI Orchestrator</p>
          <p className="truncate text-xs text-spotify-text-tertiary">Now live · 500+ users</p>
        </div>
      </div>
      <a
        href="#contact"
        className="hidden shrink-0 items-center gap-2 rounded-full bg-spotify-green px-4 py-1.5 text-sm font-bold text-black hover:bg-spotify-green-hover sm:inline-flex"
      >
        <Mail size={14} />
        Contact
      </a>
      <a
        href="#contact"
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-spotify-green px-3 py-1.5 text-xs font-bold text-black sm:hidden"
      >
        <Mail size={14} />
        Email
      </a>
    </div>
  </div>
);

export default NowPlayingBar;
