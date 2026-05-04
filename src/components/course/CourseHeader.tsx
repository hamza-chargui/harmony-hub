import { Star, Users, Globe, Clock } from "lucide-react";

export const CourseHeader = () => {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary shadow-elegant" />
          <span className="font-display text-lg font-bold tracking-tight">Sonore</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Browse</a>
          <a href="#" className="hover:text-foreground transition-colors">Instructors</a>
          <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
        </nav>
        <button className="text-sm font-medium hover:text-primary transition-colors">Sign in</button>
      </div>
    </header>
  );
};

interface CourseMetaProps {
  category: string;
  title: string;
  subtitle: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  language: string;
  duration: string;
}

export const CourseMeta = ({
  category,
  title,
  subtitle,
  rating,
  reviewCount,
  studentCount,
  language,
  duration,
}: CourseMetaProps) => {
  return (
    <div className="space-y-5">
      <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-accent-foreground">
        {category}
      </span>
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm">
        <div className="flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-[hsl(var(--warning))] text-[hsl(var(--warning))]" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="text-muted-foreground">({reviewCount.toLocaleString()} reviews)</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{studentCount.toLocaleString()} students</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Globe className="h-4 w-4" />
          <span>{language}</span>
        </div>
      </div>
    </div>
  );
};