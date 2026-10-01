import About from "@/components/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-20 md:pt-24">
        <About showAll />
      </div>
    </main>
  );
}
