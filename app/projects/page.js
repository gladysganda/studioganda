import Image from 'next/image';
import Link from 'next/link';

const projects = [
  { slug: 'tropical-house', title: 'Tropical Courtyard House', image: '/images/project1.jpg' },
  { slug: 'urban-villa', title: 'Urban Villa', image: '/images/project2.jpg' },
  { slug: 'gallery-house', title: 'Gallery House', image: '/images/project3.jpg' },
  { slug: 'tostem', title: 'Tostem', image: '/images/project4.jpg' },
  { slug: 'AA44', title: 'AA44', image: '/images/project5.jpg' },
  { slug: 'Telkomcel', title: 'Telkomcel', image: '/images/project6.jpg' },
];

export default function WorksPage() {
  return (
    <div className="pt-30 px-6 md:px-16 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-light mb-14">Projects</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <Link key={project.slug} href={`/our-works/${project.slug}`} className="block group">
            <Image src={project.image} alt={project.title} width={1200} height={800} className="rounded mb-4 transition-transform group-hover:scale-105" />
            <h2 className="text-xl font-light">{project.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}