import Image from 'next/image';

export const BrandIconsMap = {
  React: '/static/icons/react.svg',
  Remix: '/static/icons/remix.svg',
  Git: '/static/icons/git.svg',
  GitHub: '/static/icons/github.svg',
  Javascript: '/static/icons/javascript.svg',
  Typescript: '/static/icons/typescript.svg',
  Node: '/static/icons/nodejs.svg',
  Bash: '/static/icons/bash.svg',
  Liquid: '/static/icons/liquid.svg',
  Markdown: '/static/icons/markdown.svg',
  NextJS: '/static/icons/nextjs.svg',
  TailwindCSS: '/static/icons/tailwind.svg',
  Prisma: '/static/icons/prisma.svg',
  Umami: '/static/icons/umami.svg',
  Vercel: '/static/icons/vercel.svg',
  Railway: '/static/icons/railway.svg',
  Spotify: '/static/icons/spotify.svg',
  NestJS: '/static/icons/nestjs.svg',
  Docker: '/static/icons/docker.svg',
  Postgres: '/static/icons/postgres.svg',
  Mongodb: '/static/icons/mongodb.svg'
};

export type BrandIconType = keyof typeof BrandIconsMap;

const BrandIcon = (props: { type: BrandIconType; className?: string }) => {
  const { type, className } = props;

  const IconSrc = BrandIconsMap[type];

  if (!IconSrc) {
    return <div>Missing icon for {type}.</div>;
  }

  return (
    <Image
      src={IconSrc}
      className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'}
      alt={type}
      width={5}
      height={5}
    />
  );
};

export default BrandIcon;

export const projects = [
  {
    id: 1,
    repository:
      'https://github.com/trickster-playground/trickster-next-esports',
    title: 'NextJs 15 - Social Media Website',
    des: 'Learn to Build A Full-Stack Social Media App With Next.js 15 (React Query, Lucia Auth, TypeScript, Tailwind)',
    img: '/static/images/react15.png',
    iconLists: [
      '/static/images/next.svg',
      '/static/images/react-query.svg',
      '/static/images/ts.svg',
      '/static/images/tail.svg',
      '/static/images/lucia.png'
    ],
    link: 'https://github.com/trickster-playground/trickster-next-esports'
  },
  {
    id: 2,
    repository: 'https://github.com/trickster-playground/trickster-next-zoom',
    title: 'Yoom - Video Conferencing App',
    des: 'Learn Build and Deploy a Full Stack Video Conferencing App with Next JS.',
    img: '/static/images/p2.svg',
    iconLists: [
      '/static/images/next.svg',
      '/static/images/tail.svg',
      '/static/images/ts.svg',
      '/static/images/stream.svg',
      '/static/images/c.svg'
    ],
    link: 'https://github.com/trickster-playground/trickster-next-zoom'
  },
  {
    id: 3,
    repository:
      'https://github.com/trickster-playground/trickster-next-threads',
    title: 'A full stack Threads Clone',
    des: 'Learn Build and Deploy a Full Stack MERN Next.js 14 Threads App | React, Next JS, TypeScript, MongoDB',
    img: '/static/images/threadsclone.png',
    iconLists: [
      '/static/images/next.svg',
      '/static/images/re.svg',
      '/static/images/ts.svg',
      '/static/icons/mongodb.svg',
      '/static/images/c.svg'
    ],
    link: 'https://github.com/trickster-playground/trickster-next-threads'
  },
  {
    id: 4,
    repository:
      'https://github.com/trickster-playground/trickster-social-media-liv',
    title: 'Laravel - Inertia - Vue Js',
    des: 'Build and Deploy Social Media Website with Laravel & Vue.js',
    img: '/static/images/hqdefault.jpg',
    iconLists: [
      '/static/icons/Laravel.svg',
      '/static/icons/inertiajs.svg',
      '/static/icons/vuejs.png',
      '/static/images/tail.svg',
      '/static/icons/mysql.svg'
    ],
    link: 'https://github.com/trickster-playground/trickster-social-media-liv'
  }
];
