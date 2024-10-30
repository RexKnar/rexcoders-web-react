import Target from 'icons/lineal/Target';
import AwardTwo from 'icons/lineal/AwardTwo';
import BarChart from 'icons/lineal/BarChart';
import Megaphone from 'icons/lineal/Megaphone';
import SettingsThree from 'icons/lineal/SettingsThree';

const clients = [
  { id: 1, image: '/img/brands/c1.png' },
  { id: 2, image: '/img/brands/c2.png' },
  { id: 3, image: '/img/brands/c3.png' },
  { id: 4, image: '/img/brands/c4.png' },
  { id: 5, image: '/img/brands/c5.png' },
  { id: 6, image: '/img/brands/c6.png' },
  { id: 7, image: '/img/brands/c7.png' },
  { id: 8, image: '/img/brands/c8.png' }
];

const whatWeAre = [
  { id: 1, Icon: Target, title: 'Our Mission', description: 'Dapibus eu leo quam ornare curabitur blandit tempus.' },
  { id: 2, Icon: AwardTwo, title: 'Our Values', description: 'Aenean lacinia bibendum nulla sed consectetur.' }
];

const services = [
  { id: 1, Icon: Megaphone, title: 'Marketing', description: 'Nulla vitae elit libero pharetra augue dapibus.' },
  { id: 2, Icon: Target, title: 'Strategy', description: 'Vivamus sagittis lacus augue laoreet vel.' },
  { id: 3, Icon: SettingsThree, title: 'Development', description: 'Cras mattis consectetur purus sit amet.' },
  { id: 4, Icon: BarChart, title: 'Data Analysis', description: 'Aenean lacinia bibendum nulla sed consectetur.' }
];

const teams = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    image: { '1x': '/img/avatars/t1.jpg', '2x': '/img/avatars/t1@2x.jpg 2x' }
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    image: { '1x': '/img/avatars/t2.jpg', '2x': '/img/avatars/t2@2x.jpg 2x' }
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    designation: 'Sales Manager',
    image: { '1x': '/img/avatars/t3.jpg', '2x': '/img/avatars/t3@2x.jpg 2x' }
  },
  {
    id: 4,
    name: 'Jackie Sanders',
    designation: 'Investment Planner',
    image: { '1x': '/img/avatars/t4.jpg', '2x': '/img/avatars/t4@2x.jpg 2x' }
  }
];

const progressList = [
  { id: 1, percent: 100, title: 'Marketing' },
  { id: 2, percent: 80, title: 'Strategy' },
  { id: 3, percent: 85, title: 'Development' }
];

const pricingList = [
  {
    monthlyPrice: 19,
    yearlyPrice: 199,
    planName: 'Premium',
    features: ['5 Projects', '100K API Access', '200MB Storage', 'Weekly Reports', '7/24 Support']
  },
  {
    monthlyPrice: 49,
    yearlyPrice: 499,
    planName: 'Corporate',
    features: ['20 Projects', '300K API Access', '500MB Storage', 'Weekly Reports', '7/24 Support']
  }
];

const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Who is this workshop for?',
    body: 'This workshop is for beginners and intermediate developers who want to learn React.js and improve their front-end development skills.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Do I need to know JavaScript?',
    body: 'Basic knowledge of JavaScript will help, but we’ll guide you through everything you need to know to get started with React.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'What if I can’t attend live?',
    body: 'All participants will receive a recording of the session after the workshop.'
  },
  {
    no: 'Four',
    expand: false,
    heading: 'Can I ask questions during the workshop?',
    body: 'Absolutely! Our instructor will be there to provide guidance and live feedback throughout the session.'
  },
  {
    no: 'Five',
    expand: false,
    heading: 'Is this workshop free?',
    body: 'Yes, this workshop is completely free! All you need to do is sign up and join us at the scheduled time.'
  },
  {
    no: 'Six',
    expand: false,
    heading: 'What if I get stuck during the exercises?',
    body: 'Don’t worry!  You’ll be able to interact with fellow attendees to solve problems together.'
  }
];



export { clients, whatWeAre, services, teams, progressList, pricingList, accordions };
