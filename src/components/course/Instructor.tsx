import { Star, Users, PlaySquare } from "lucide-react";
import instructorImg from "@/assets/instructor.jpg";

export const Instructor = () => {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold tracking-tight mb-6">Your instructor</h2>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <div className="flex flex-col sm:flex-row gap-5">
          <img
            src={instructorImg}
            alt="Marcus Vale"
            width={512}
            height={512}
            loading="lazy"
            className="h-20 w-20 rounded-full object-cover ring-4 ring-primary-soft"
          />
          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold">Marcus Vale</h3>
            <p className="text-sm text-primary font-medium">Grammy-winning Producer & Sound Designer</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5" /> 4.9 instructor rating
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" /> 84,210 students
              </span>
              <span className="flex items-center gap-1.5">
                <PlaySquare className="h-3.5 w-3.5" /> 7 courses
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Marcus has produced records for artists across pop, electronic, and indie for over
              fifteen years. His approach blends technical precision with genuine musicality —
              he'll teach you to trust your ears.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};