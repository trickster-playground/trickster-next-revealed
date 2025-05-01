import Header from '@/components/Header';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';


interface Project {
  title: string;
  author: string;
  duration: string;
  summary: string;
  techs: { name: string; icon: string; link: string; className?: string }[];
  features: string[];
  gallery: { image: string; title:string; caption: string }[];
  flow?: string;
  contributions: string[];
  reflection: string;
}

export default function ProjectLayout({ project }: { project: Project }) {
  const className = 'flex w-full justify-center items-center space-x-2 rounded-lg p-3 border-2 border-white';

  return (
    <div className='px-2'>
      <Header />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 max-w-4xl p-2">
        <div className="space-y-2 py-4 md:space-y-5">
          {/* Project Header */}
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {project.title}
          </h1>
          <p className="text-lg leading-3 text-blue-500">
            By {project.author}
          </p>

          <p className="text-white text-base mt-2">
            {project.summary}
          </p>
          <p className="text-sm text-gray-400">
            Duration: {project.duration}
          </p>

          {/* Tech Stack */}
          <div className="popular-tags grid grid-cols-3 gap-4 py-1 xl:grid-cols-6">
            {project.techs.map((tech) => (
              <Link
                key={tech.name}
                href={tech.link}
                className={cn('bg-gray-800  transition hover:brightness-110', className, tech.className)}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="size-6"
                />
                <div className="my-auto hidden md:block text-white">{tech.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Project Features */}
        <div className="py-6">
          <h2 className="text-2xl font-semibold text-white mb-4">✨ Features</h2>
          <ul className="list-disc pl-5 text-white space-y-1">
            {project.features.map((feat, i) => <li key={i}>{feat}</li>)}
          </ul>
        </div>

        {/* Project Gallery */}
        <div className="space-y-6 py-6">
          {project.gallery.map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-gray-300 text-lg italic mb-2">{item.caption}</p>
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={600}
                className="rounded-lg w-full"
              />
            </div>
          ))}
        </div>

        {/* Flow (optional) */}
        {project.flow && (
          <div className="py-6">
            <h2 className="text-2xl font-semibold text-white mb-2">📊 Flow</h2>
            <p className="text-white">{project.flow}</p>
          </div>
        )}

        {/* Contributions */}
        <div className="py-6">
          <h2 className="text-2xl font-semibold text-white mb-2">🧑‍💻  My Contributions</h2>
          <ul className="list-disc pl-5 text-white space-y-1">
            {project.contributions.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        {/* Reflection */}
        <div className="py-6">
          <h2 className="text-2xl font-semibold text-white mb-2">📌 Reflection</h2>
          <p className="text-white">{project.reflection}</p>
        </div>
      </div>
    </div>
  );
}
