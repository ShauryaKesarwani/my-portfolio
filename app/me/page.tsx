export default function HomePage() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section id="home" className="h-screen snap-start bg-surface0 flex items-center justify-center text-4xl font-bold">
        <span>I&apos;m Shaurya Kesarwani</span>
      </section>
      <section id="skills" className="h-screen snap-start pt-14 bg-surface1 flex items-center justify-center text-4xl font-bold">
        Skills
      </section>
      <section id="projects" className="h-screen text-mauve-200 snap-start bg-surface2 flex items-center justify-center text-4xl font-bold">
        Projects Page
      </section>
    </main>
  );
}
