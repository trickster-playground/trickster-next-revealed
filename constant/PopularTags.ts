import { BrandIconType } from '.';

type PopularTag = {
  href: string;
  iconType: BrandIconType;
  slug: string;
  title: string;
};

const popularTags: PopularTag[] = [
  {
    href: '/tags/nextjs',
    iconType: 'NextJS',
    slug: 'nextjs',
    title: 'nextjs'
  },
  {
    href: '/tags/typescript',
    iconType: 'Typescript',
    slug: 'typescript',
    title: 'Typescript'
  },
  {
    href: '/tags/nestjs',
    iconType: 'NestJS',
    slug: 'nestjs',
    title: 'NestJS'
  },
  {
    href: '/tags/react',
    iconType: 'React',
    slug: 'react',
    title: 'React'
  },
  {
    href: '/tags/database',
    iconType: 'Mongodb',
    slug: 'database',
    title: 'Database'
  },
  {
    href: '/tags/devops',
    iconType: 'Docker',
    slug: 'devops',
    title: 'Devops'
  }
];

export default popularTags;
