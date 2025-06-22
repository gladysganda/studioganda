"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, image, href }) {
  return (
    <Link href={href} className="group block w-full">
      <motion.div
        className="relative overflow-hidden rounded-lg shadow-md"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 text-white text-xl font-light px-4 py-2 rounded">
          {title}
        </div>
      </motion.div>
    </Link>
  );
}
