import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: 'Project One',
      image: '/project1.jpg',
      href: '/project-one',
    },
    {
      title: 'Project Two',
      image: '/project2.jpg',
      href: '/project-two',
    },
    {
      title: 'Project Three',
      image: '/project3.jpg',
      href: '/project-three',
    },
  ];

  return (
    <main className="min-h-screen px-4 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </main>
  );
}
