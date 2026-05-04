import { Play } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/course-hero.jpg";

export const VideoPreview = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-foreground shadow-elegant">
      <img
        src={heroImage}
        alt="Course preview"
        width={1280}
        height={768}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
      <button
        onClick={() => setPlaying(true)}
        aria-label="Play preview"
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-background/95 shadow-elegant transition-transform duration-300 group-hover:scale-110">
          <Play className="h-7 w-7 fill-primary text-primary translate-x-0.5" />
        </span>
      </button>
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-background">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider opacity-80">Preview</p>
          <p className="text-base font-semibold">Welcome to the studio</p>
        </div>
        <span className="rounded-md bg-background/15 px-2 py-1 text-xs font-medium backdrop-blur">2:14</span>
      </div>
      {playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-foreground text-background text-sm">
          Video would play here
        </div>
      )}
    </div>
  );
};