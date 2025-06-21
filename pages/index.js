import Image from 'next/image'

export default function Home() {
  return (
    <main className="text-neutral-800 bg-white">
      {/* Hero */}
      <section className="w-full h-screen relative">
        <Image
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
          alt="Studio Ganda"
          priority
        />
        <div className="absolute bottom-20 left-10">
          <h1 className="text-5xl font-light text-white">Studio Ganda</h1>
          <p className="text-xl text-white mt-4">Architecture & Design</p>
        </div>
      </section>

      {/* Projects */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="group relative overflow-hidden">
            <Image
              src={`/project${i}.jpg`}
              width={800}
              height={600}
              className="transform group-hover:scale-105 transition duration-500"
              alt={`Project ${i}`}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-4">
              <h2 className="text-lg font-semibold">Project {i}</h2>
              <p className="text-sm">Location / Type</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
