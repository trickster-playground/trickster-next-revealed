import ProjectLayout from '@/components/ProjectLayout';

const esportsProject = {
  title: 'E-Sports Tournament Information System and Gaming Caféin Pontianak City Based on Website',
  author: 'Andi Muhammad Fadhil Masyhun Arham',
  duration: 'Desember 2022 - January 2024',
  summary: 'A website-based information system designed to help gamers find information about tournaments and coffee shop references for gaming in Pontianak City.This system includes locations and reviews from gamers who have visited the coffee shops.Additionally, it aims to assist coffee shops in Pontianak City in organizing gaming tournaments.',
  techs: [
    { name: 'Laravel', icon: '/static/icons/Laravel.svg', link: 'https://laravel.com/', className: 'bg-red-500' },
    { name: 'PHP', icon: '/static/icons/php.svg', link: 'https://php.net/', className: 'bg-indigo-800' },
    { name: 'MySQL', icon: '/static/icons/mysql.svg', link: 'https://mysql.com/', className: 'bg-gray-700' },
    { name: 'JavaScript', icon: '/static/icons/javascript2.svg', link: 'https://javascript.com/', className: 'bg-yellow-600' },
  ],
  features: [
    'Access up-to-date information about gaming coffee shops and e-sport tournaments in Pontianak',
    'Online registration for gamers and teams to join tournaments',
    'Coffee shop profiles to promote tournament venues',
    'Tournament management dashboard for coffee shop owners',
    'Facebook integration for promoting tournament events',
    'Challonge API integration for bracket creation and match management',
    'Real-time notifications and tournament schedule updates',
    'Information support to assist gamers and organizers in decision-making'
  ],
  gallery: [
    {
      image: '/static/images/projects/esports-system/Slide1.png',
      title: 'Landing Page',
      caption: 'The first screen users see before logging into the system.'
    },
    {
      image: '/static/images/projects/esports-system/Slide2.png',
      title: 'Homepage',
      caption: 'Shows latest tournament, Post from users, tournament calendar.'
    },
    {
      image: '/static/images/projects/esports-system/Slide3.png',
      title: 'Pop-up Calendar Event',
      caption: 'Shows the tournament schedule and details when clicked.'
    },
    {
      image: '/static/images/projects/esports-system/Slide4.png',
      title: 'Map of Gaming Cafés',
      caption: 'Shows the location of gaming cafés in Pontianak City and user location.'
    },
    {
      image: '/static/images/projects/esports-system/Slide5.png',
      title: 'Gaming Cafés - Details',
      caption: 'Detail of Gaming Cafés with Form Review.'
    },
    {
      image: '/static/images/projects/esports-system/Slide6.png',
      title: 'Tournament Page',
      caption: 'Shows all tournament on website.'
    },
  ],
  flow: 'User → Register → View Tournament Info → Register Tim → Verified Team → Join Tournament → Play Tournament → Win Tournament',
  contributions: [
    'Developed using Laravel 10',
    'Built the user interface using Laravel Blade',
    'Integrated the database using MySQL',
    'Integrated system with Challonge API for tournament management',
    'Integrated system with Facebook API for spreading information',
    'Deployed the system to the production server',
  ],
  reflection: 'This was my first project using Laravel, where I successfully built a web-based information system to support e-sports tournaments and gaming cafés. It taught me how to integrate third-party APIs and design features that help both gamers and event organizers manage events more efficiently.'

};

export default function EsportsProjectPage() {
  return <ProjectLayout project={esportsProject} />;
}
