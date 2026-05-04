import { Check, Award, Download, Infinity as InfinityIcon, Smartphone } from "lucide-react";

export const EnrollCard = () => {
  return (
    <aside className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:sticky lg:top-24">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl font-bold tracking-tight">$89</span>
        <span className="text-base text-muted-foreground line-through">$199</span>
        <span className="ml-auto rounded-full bg-primary-soft px-2 py-1 text-xs font-semibold text-accent-foreground">
          55% off
        </span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">Sale ends in 2 days</p>

      <button className="mt-5 w-full rounded-xl bg-gradient-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.01] active:scale-[0.99]">
        Enroll now
      </button>
      <button className="mt-2 w-full rounded-xl border border-border bg-background py-3.5 text-sm font-semibold hover:bg-secondary transition-colors">
        Add to wishlist
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        30-day money-back guarantee
      </p>

      <div className="mt-6 space-y-3 text-sm">
        <p className="font-semibold">This course includes:</p>
        {[
          { icon: InfinityIcon, label: "Lifetime access" },
          { icon: Smartphone, label: "Watch on mobile & TV" },
          { icon: Download, label: "Downloadable project files" },
          { icon: Award, label: "Certificate of completion" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-muted-foreground">
            <Icon className="h-4 w-4 text-primary" />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          What you'll learn
        </p>
        <ul className="space-y-2 text-sm">
          {[
            "Build a release-ready track from scratch",
            "Master mixing fundamentals",
            "Design original sounds with synthesis",
            "Prepare music for streaming platforms",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};