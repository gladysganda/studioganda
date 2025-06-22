import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="pt-30 px-6 md:px-20 py-20 max-w-5xl mx-auto font-light text-neutral-800">
      <h1 className="text-4xl font-light text-white mb-12">About</h1>
      <div className="mb-12 space-y-4 font-light text-white">
        <p>Studio Ganda is an architectural practice based in Medan. We create spaces rooted in climate, culture, and craft. Every project is a search for balance — between light and shadow, interior and exterior, form and material.</p>
        <p>Founded in 2023 by Gilbert Ganda, our work ranges from private homes to cultural and commercial buildings.</p>
      </div>
      <Image src="/images/gilbert.jpg" alt="Studio Portrait" width={1600} height={900} className="rounded-xl mb-12" />
      <div>
        <h2 className="text-2xl font-medium text-white mb-4">Team</h2>
        <ul className="space-y-1 text-white">
          <li><strong>Gilbert Ganda</strong> — Principal Architect</li>
        </ul>
      </div>
    </main>
  );
}