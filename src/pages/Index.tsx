import { CourseHeader, CourseMeta } from "@/components/course/CourseHeader";
import { VideoPreview } from "@/components/course/VideoPreview";
import { Curriculum } from "@/components/course/Curriculum";
import { EnrollCard } from "@/components/course/EnrollCard";
import { Instructor } from "@/components/course/Instructor";
import { Reviews } from "@/components/course/Reviews";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <CourseHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-primary-glow/10 blur-3xl" />
        </div>
        <div className="container py-10 md:py-14">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Courses</a>
            <span>/</span>
            <a href="#" className="hover:text-foreground">Music</a>
            <span>/</span>
            <span className="text-foreground">Production</span>
          </nav>
          <CourseMeta
            category="Music Production"
            title="The Modern Music Production Masterclass"
            subtitle="Learn the craft of producing release-ready tracks — from your first idea to a finished master — with Grammy-winning producer Marcus Vale."
            rating={4.9}
            reviewCount={2847}
            studentCount={18420}
            language="English"
            duration="12h 24m"
          />
        </div>
      </section>

      {/* Main content */}
      <main className="container py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-14 min-w-0">
            <VideoPreview />

            <section>
              <h2 className="font-display text-2xl font-bold tracking-tight mb-4">About this course</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  This is the complete production course we wish existed when we started. Across
                  84 carefully crafted lessons, you'll move from understanding signal flow and
                  arrangement to designing your own sounds, mixing with intention, and mastering
                  for streaming.
                </p>
                <p>
                  Every concept is paired with a practical exercise inside a real session. By the
                  end, you'll have produced three full tracks across different genres and built
                  the muscle memory of a working producer.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Ableton Live", "Logic Pro", "Mixing", "Mastering", "Sound Design", "Arrangement"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </section>

            <Curriculum />
            <Instructor />
            <Reviews />
          </div>

          <EnrollCard />
        </div>
      </main>

      <footer className="border-t border-border mt-10">
        <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 2026 Sonore. Crafted for musicians.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Help</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
