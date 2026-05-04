import { useState } from "react";
import { ChevronDown, PlayCircle, FileText, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Lesson {
  title: string;
  duration: string;
  type: "video" | "reading";
  free?: boolean;
}
interface Section {
  title: string;
  lessons: Lesson[];
}

const sections: Section[] = [
  {
    title: "Foundations of Production",
    lessons: [
      { title: "Welcome & studio setup", duration: "8:42", type: "video", free: true },
      { title: "Understanding signal flow", duration: "14:20", type: "video", free: true },
      { title: "DAW essentials cheat sheet", duration: "5 min read", type: "reading" },
      { title: "Your first session template", duration: "11:05", type: "video" },
    ],
  },
  {
    title: "Sound Design & Synthesis",
    lessons: [
      { title: "Subtractive synthesis from scratch", duration: "22:18", type: "video" },
      { title: "Designing analog-style basses", duration: "18:50", type: "video" },
      { title: "FM synthesis demystified", duration: "26:33", type: "video" },
      { title: "Layering and macro controls", duration: "15:42", type: "video" },
    ],
  },
  {
    title: "Mixing in the Box",
    lessons: [
      { title: "Gain staging and headroom", duration: "12:10", type: "video" },
      { title: "EQ: surgical vs musical", duration: "24:55", type: "video" },
      { title: "Compression that breathes", duration: "19:40", type: "video" },
      { title: "Reverb & space design", duration: "21:12", type: "video" },
    ],
  },
  {
    title: "Mastering & Release",
    lessons: [
      { title: "Mastering chain walkthrough", duration: "28:04", type: "video" },
      { title: "Reference tracks workflow", duration: "13:27", type: "video" },
      { title: "Loudness for streaming", duration: "16:18", type: "video" },
      { title: "Distribution checklist", duration: "4 min read", type: "reading" },
    ],
  },
];

export const Curriculum = () => {
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (i: number) =>
    setOpen((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  const totalLessons = sections.reduce((s, sec) => s + sec.lessons.length, 0);

  return (
    <section>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">Curriculum</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {sections.length} sections • {totalLessons} lessons • 12h 24m total
          </p>
        </div>
        <button
          onClick={() =>
            setOpen(open.length === sections.length ? [] : sections.map((_, i) => i))
          }
          className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
        >
          {open.length === sections.length ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
        {sections.map((section, i) => {
          const isOpen = open.includes(i);
          return (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-secondary/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                  <span className="font-semibold">{section.title}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {section.lessons.length} lessons
                </span>
              </button>
              {isOpen && (
                <ul className="bg-secondary/30 divide-y divide-border/60">
                  {section.lessons.map((lesson, j) => (
                    <li
                      key={j}
                      className="flex items-center justify-between gap-4 px-5 py-3 pl-12 text-sm"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {lesson.type === "video" ? (
                          <PlayCircle className="h-4 w-4 text-muted-foreground shrink-0" />
                        ) : (
                          <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                        )}
                        <span className="truncate">{lesson.title}</span>
                        {lesson.free && (
                          <span className="rounded bg-primary-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
                            Preview
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground shrink-0">
                        {!lesson.free && <Lock className="h-3 w-3" />}
                        <span className="tabular-nums">{lesson.duration}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};