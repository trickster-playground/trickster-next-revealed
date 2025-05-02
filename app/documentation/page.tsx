import Link from "next/link";
import Header from "@/components/Header";
import { IconBook } from "@tabler/icons-react";

const projects = [
  {
    slug: "rusunawa",
    title: "Sistem Informasi Rusunawa Dinas Perumahan dan Permukiman Kota Pontianak",
    stack: ["Laravel 10", "Livewire", "Filament", "MySQL"],
    description:
      "An Information System to facilitate public communication and information, provide transparent information for prospective Rusunawa residents, and increase the efficiency of internal data management such as room data, occupants, payments and resident complaints.",
    timeline: "April 2023 - August 2024",
    site: "https://rusunkite.pontianak.go.id/",
    isPrivate: false,
  },
  {
    slug: "retribusi",
    title: "Sistem Informasi Retribusi Daerah Provinsi Kalimantan Barat",
    stack: ["Laravel 8", "Bootstrap 5", "MySQL"],
    description:
      "An Information System designed to assist the West Kalimantan Province Regional Revenue Agency in monitoring and managing regional levy receipts online and in real-time.",
    timeline: "May 2022 - February 2023",
    site: null,
    isPrivate: true,
  },
  {
    slug: "esports-system",
    title: "E-Sports Tournament System",
    stack: ["Next.js", "Challonge Integration", "TailwindCSS", "MongoDB"],
    description:
      "A thesis project for managing and organizing e-sports tournaments, complete with player registration, bracket integration, and tournament statistics.",
    timeline: "March 2024 - July 2024",
    site: 'https://gamersworld-ptk.elmarsdigitech.com/',
    isPrivate: false,
  },
];

export default function DocumentationPage() {
  return (
    <div className='px-2 max-w-4xl px-4'>
      <Header />
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 py-6 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
            Documentation
          </h1>
        </div>

        <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
          {projects.map((project, idx) => (
            <li key={idx} className='py-6'>
              <article>
                <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                  <dl>
                    <dt className='sr-only'>Published on</dt>
                    <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                      <time>{project.timeline}</time>
                    </dd>
                  </dl>
                  <div className='space-y-5 xl:col-span-3'>
                    <div className='space-y-4'>
                      <div>
                        <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                          <span className='text-gray-900 dark:text-gray-100'>
                            {project.title}
                          </span>
                        </h2>
                        <div className='flex flex-wrap'>
                          {project.stack.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className='mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className='prose max-w-none text-gray-300'>
                        {project.description}
                      </div>
                    </div>
                    <div className='flex gap-4 text-base font-medium leading-6 text-destructive'>
                      {project.site && !project.isPrivate ? (
                        <Link
                          href={project.site}
                          className='text-primary hover:text-sky-600 dark:hover:text-sky-400'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Check site &rarr;
                        </Link>
                      ) : (
                        <p className='text-red-500'>Web is private</p>
                      )}
                      <p className='text-white'>|</p>
                      <Link
                        href={`/documentation/${project.slug}`}
                        className='flex items-center gap-2 text-emerald-400 hover:text-emerald-500'
                      >
                        Documentation <IconBook className='size-5' />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
