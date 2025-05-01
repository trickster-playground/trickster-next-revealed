import ProjectLayout from '@/components/ProjectLayout';

const retribusiProject = {
  title: 'Sistem Informasi Retribusi Daerah Provinsi Kalimantan Barat',
  author: 'PT Tiara Pilar Kreasi',
  duration: 'May 2022 – February 2023',
  summary: 'A web-based information system to to assist the West Kalimantan Province Regional Revenue Agency in monitoring and managing regional levy receipts online and in real-time.',
  techs: [
    { name: 'Laravel', icon: '/static/icons/Laravel.svg', link: 'https://laravel.com/', className: 'bg-red-800' },
    { name: 'Bootstrap', icon: '/static/icons/bootstrap.svg', link: 'https://getbootstrap.com/', className: 'bg-purple-700' },
    { name: 'PHP', icon: '/static/icons/php.svg', link: 'https://php.net/', className: 'bg-indigo-800' },
    { name: 'MySQL', icon: '/static/icons/mysql.svg', link: 'https://mysql.com/', className: 'bg-gray-700' },
    { name: 'JavaScript', icon: '/static/icons/javascript2.svg', link: 'https://javascript.com/', className: 'bg-yellow-600' },
  ],
  features: [
    'Online submission of Regional Retribution Object Registration Forms (SPORD)',
    'Automatic tariff calculation based on local regulations',
    'Secure multi-user access with individual login credentials',
    'Online issuance and tracking of SKRD (Regional Retribution Determination Letters)',
    'Online issuance and tracking of STS (Payment Receipts)',
    'Automatic generation and recording of SSRD (Regional Retribution Deposit Summaries)',
    'Real-time revenue monitoring and reporting dashboard for the Regional Revenue Agency (BAPENDA)',
  ],
  gallery: [
    {
      image: '/static/images/projects/retribusi/Slide1.png',
      title: 'Web Profile - Homepage',
      caption: 'The main homepage provides intuitive navigation to various information regarding regional retribution in West Kalimantan.'
    },
    {
      image: '/static/images/projects/retribusi/Slide2.png',
      title: 'Web Profile - About',
      caption: 'Describes Public Service Retribution, Business Retribution, Specific Licensing, and the roles and responsibilities of the retribution division.'
    },
    {
      image: '/static/images/projects/retribusi/Slide3.png',
      title: 'Web Profile - Service',
      caption: 'Contains information on available services along with links to retribution object tariffs.'
    },
    {
      image: '/static/images/projects/retribusi/Slide4.png',
      title: 'Web Profile - Unit',
      caption: 'Lists government agencies or units (OPD/UPT) responsible for managing retribution in West Kalimantan.'
    },
    {
      image: '/static/images/projects/retribusi/Slide5.png',
      title: 'Web Profile - Team',
      caption: 'Provides information about the retribution management team, including member photos, names, and roles.'
    },
    {
      image: '/static/images/projects/retribusi/Slide6.png',
      title: 'Web Profile - SPORD',
      caption: 'Includes the login and registration forms for SPORD, along with a visual guide to the submission process.'
    },
    {
      image: '/static/images/projects/retribusi/Slide7.png',
      title: 'Web Profile - SPORD Dashboard Admin',
      caption: 'Admin dashboard for managing and tracking SPORD submissions.'
    },
    {
      image: '/static/images/projects/retribusi/Slide8.png',
      title: 'Web Profile - SPORD',
      caption: 'User dashboard to view and manage submitted SPORD data.'
    },
    {
      image: '/static/images/projects/retribusi/Slide9.png',
      title: 'Web Profile - SPORD Detail',
      caption: 'Displays detailed SPORD submission information with a print option.'
    },
    {
      image: '/static/images/projects/retribusi/Slide10.png',
      title: 'Retribution Web [Internal] - Login',
      caption: 'Login interface for Bapenda/OPD to access the retribution recap system.'
    },
    {
      image: '/static/images/projects/retribusi/Slide11.png',
      title: 'Retribution Web [Internal] - Dashboard',
      caption: 'Displays SKRD, STS, and annual recap statistics using interactive charts.'
    },
    {
      image: '/static/images/projects/retribusi/Slide12.png',
      title: 'Retribution Web [Internal] - SKRD Wizard Form',
      caption: 'Displays the SKRD Wizard Form used for managing and generating Regional Retribution Determination Letters (SKRD).'
    },
    {
      image: '/static/images/projects/retribusi/Slide13.png',
      title: 'Retribution Web [Internal] - SKRD Detail',
      caption: 'Shows detailed information of the SKRD along with associated STS and annual recap statistics for monitoring and reporting.'
    }
  ],
  flow: 'User → Register on Web Profile → Login → Fill SPORD Form → Form Verification → Forward to OPD → SKRD Creation → Payment at Bank → STS Issuance → SSRD Compilation → BAPENDA Report → Meeting Discussion',
  contributions: [
    'Developed using Laravel',
    'Built the user interface using Laravel Blade',
    'Integrated the database using MySQL',
    'Deployed the system to the production server',
    'Collaborated with BAPENDA for feedback on the system\'s features',
    'Tested system functionality and ensured compatibility across different browsers and devices',
    'Worked with a team of developers to ensure timely project delivery',
    'Created user documentation',
  ],
  reflection: 'This project sharpened my skills in developing regional-scale information systems and collaborating with non-technical teams. I gained experience in understanding government processes, integrating them into a digital platform, and working on a real-world project with a significant impact on public services.',
};

export default function RetribusiProjectPage() {
  return <ProjectLayout project={retribusiProject} />;
}
