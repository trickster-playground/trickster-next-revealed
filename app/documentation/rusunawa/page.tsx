import ProjectLayout from '@/components/ProjectLayout';

const rusunawaProject = {
  title: 'Sistem Informasi Rusunawa Dinas Perumahan dan Permukiman Kota Pontianak',
  author: 'PT Tiara Pilar Kreasi',
  duration: 'April 2023 – August 2024',
  summary: 'A web-based information system to manage resident registration, room availability, complaint handling, and maintenance reports.',
  techs: [
    { name: 'Laravel', icon: '/static/icons/Laravel.svg', link: 'https://laravel.com/', className: 'bg-red-500' },
    { name: 'Filament', icon: '/static/icons/Filament.svg', link: 'https://filamentphp.com/', className: 'bg-yellow-500' },
    { name: 'PHP', icon: '/static/icons/php.svg', link: 'https://php.net/', className: 'bg-indigo-800' },
    { name: 'MySQL', icon: '/static/icons/mysql.svg', link: 'https://mysql.com/', className: 'bg-gray-700' },
    { name: 'JavaScript', icon: '/static/icons/javascript2.svg', link: 'https://javascript.com/', className: 'bg-yellow-600' },
  ],
  features: [
    'Online registration for apartment residents',
    'View real-time room availability status',
    'Resident and payment data management',
    'Resident complaint handling',
  ],
  gallery: [
    {
      image: '/static/images/projects/rusunawa/Slide1.png',
      title: 'Homepage',
      caption: 'Homepage displaying general system overview.'
    },
    {
      image: '/static/images/projects/rusunawa/Slide2.png',
      title: 'Rules & SOP',
      caption: 'Page containing rules and standard operating procedures.'
    },
    {
      image: '/static/images/projects/rusunawa/Slide3.png',
      title: 'Room Availability',
      caption: 'Interactive map showing available rooms by tower and floor.'
    },
    {
      image: '/static/images/projects/rusunawa/Slide4.png',
      title: 'Resident Registration',
      caption: 'Form for new resident registration and application.'
    },
    {
      image: '/static/images/projects/rusunawa/Slide5.png',
      title: 'Admin Dashboard',
      caption: 'Dashboard overview with system statistics and management tools.'
    },
    {
      image: '/static/images/projects/rusunawa/Slide6.png',
      title: 'Application Management',
      caption: 'Menu to manage public housing applications and add new entries.'
    },
    {
      image: '/static/images/projects/rusunawa/Slide7.png',
      title: 'Room Management',
      caption: 'Manage room data including tower, floor, pricing, and availability.'
    },
    {
      image: '/static/images/projects/rusunawa/Slide8.png',
      title: 'Access Control',
      caption: 'Role-based access system for Super Admins and Operators.'
    },
    {
      image: '/static/images/projects/rusunawa/Slide9.png',
      title: 'Mobile View',
      caption: 'Responsive design for seamless access on mobile devices.'
    },
    {
      image: '/static/images/projects/rusunawa/Slide10.png',
      title: 'Real-Time Notifications',
      caption: 'Instant alerts for updates related to users and data changes.'
    }
  ],
  flow: 'Visitor → View Info → Register → Verified → Move In',
  contributions: [
    'Developed using Laravel and Filament',
    'Built the user interface using Laravel Blade',
    'Integrated the database using MySQL',
    'Deployed the system to the production server',
    'Created user documentation',
  ],
  reflection: 'This project sharpened my skills in developing regional-scale information systems and collaborating with non-technical teams.',
};

export default function RusunawaProjectPage() {
  return <ProjectLayout project={rusunawaProject} />;
}
