'use client';

import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function HeroSlider() {
  const slides = [
    {
      image: '/images/project1.jpg',
      title: 'Project One',
      link: '/project-one',
    },
    {
      image: '/images/project2.jpg',
      title: 'Project Two',
      link: '/project-two',
    },
    {
      image: '/images/project3.jpg',
      title: 'Project Three',
      link: '/project-three',
    },
    {
      image: '/images/project4.jpg',
      title: 'Project Four',
      link: '/project-four',
    },
    {
      image: '/images/project5.jpg',
      title: 'Project Five',
      link: '/project-five',
    },
    {
      image: '/images/project6.jpg',
      title: 'Project Six',
      link: '/project-six',
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt={slides[index].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Clickable Label */}
      <div className="absolute bottom-6 left-6 text-white px-4 py-2 hover:underline transition">
        <Link href={slides[index].link} className="text-sm font-light">
          {slides[index].title}
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const projects = [
    {
      title: 'Project One',
      image: '/images/project1.jpg',
      href: '/project-one',
    },
    {
      title: 'Project Two',
      image: '/images/project2.jpg',
      href: '/project-two',
    },
    {
      title: 'Project Three',
      image: '/images/project3.jpg',
      href: '/project-three',
    },
    {
      title: 'Project Four',
      image: '/images/project4.jpg',
      href: '/project-four',
    },
    {
      title: 'Project Five',
      image: '/images/project5.jpg',
      href: '/project-five',
    },
    {
      title: 'Project Six',
      image: '/images/project6.jpg',
      href: '/project-six',
    },
  ];

  return (
    <main className="min-h-screen text-neutral-800 scroll-smooth">
      
    {/* Hero Section */}
    <HeroSlider />

    {/* About Section */}
    <section id="about" className="py-32 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-light mb-6">About</h2>
      <p className="max-w-2xl">
        Studio Ganda is a multidisciplinary design studio based in [City]. We focus on architecture,
        spatial design, and visual storytelling to shape meaningful environments.
      </p>
      <Link href="/about" className="underline mt-4 inline-block text-sm hover:opacity-60 transition">
        Learn more →
      </Link>
    </section>

    {/* Projects Preview Section */}
    <section id="projects" className="py-14 px-6 md:px-20 bg-neutral-100">
      <h2 className="text-4xl font-light mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
      <Link href="/projects" className="underline mt-10 inline-block text-sm hover:opacity-60 transition">
        View all projects →
      </Link>
    </section>

    {/* Contact Preview Section */}
    <section id="contact" className="py-14 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-light mb-12">Contact</h2>
      <p className="max-w-xl">
        Interested in working together or just want to say hello?
      </p>
      <p className="mt-2">Email: <a href="mailto:hello@studioganda.co" className="underline">hello@studioganda.co</a></p>
      <Link href="/contact" className="underline mt-4 inline-block text-sm hover:opacity-60 transition">
        Get in touch →
      </Link>
    </section>
  </main>
  );
}
