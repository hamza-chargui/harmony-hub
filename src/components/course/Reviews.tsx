import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const ratings = [
  { stars: 5, pct: 78 },
  { stars: 4, pct: 16 },
  { stars: 3, pct: 4 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

const reviews = [
  {
    name: "Elena Marquez",
    initials: "EM",
    date: "2 weeks ago",
    rating: 5,
    text: "Best production course I've taken. Marcus explains complex topics like compression and saturation in a way that finally clicked. The project files alone are worth the price.",
  },
  {
    name: "Devon Park",
    initials: "DP",
    date: "1 month ago",
    rating: 5,
    text: "I went from messy bedroom mixes to releasing my first EP on Spotify. The mixing module is incredible — I keep coming back to it.",
  },
  {
    name: "Sara Lindqvist",
    initials: "SL",
    date: "1 month ago",
    rating: 4,
    text: "Beautifully shot, calm pacing, no fluff. I'd love a deeper module on mastering, but everything else is excellent.",
  },
];

const Stars = ({ value, size = "sm" }: { value: number; size?: "sm" | "md" }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn(
          size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4",
          i < value
            ? "fill-[hsl(var(--warning))] text-[hsl(var(--warning))]"
            : "text-border"
        )}
      />
    ))}
  </div>
);

export const Reviews = () => {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold tracking-tight mb-6">Student reviews</h2>
      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card h-fit">
          <div className="text-center">
            <p className="font-display text-5xl font-bold">4.9</p>
            <Stars value={5} size="md" />
            <p className="mt-2 text-xs text-muted-foreground">2,847 reviews</p>
          </div>
          <div className="mt-6 space-y-2">
            {ratings.map((r) => (
              <div key={r.stars} className="flex items-center gap-2 text-xs">
                <span className="w-3 text-muted-foreground">{r.stars}</span>
                <Star className="h-3 w-3 fill-[hsl(var(--warning))] text-[hsl(var(--warning))]" />
                <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary"
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
                <span className="w-8 text-right text-muted-foreground tabular-nums">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <ul className="space-y-5">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-accent-foreground">
                  {r.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <p className="font-semibold">{r.name}</p>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <Stars value={r.rating} />
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              </div>
            </li>
          ))}
          <li>
            <button className="w-full rounded-xl border border-border bg-card py-3 text-sm font-medium hover:bg-secondary transition-colors">
              Show all 2,847 reviews
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};