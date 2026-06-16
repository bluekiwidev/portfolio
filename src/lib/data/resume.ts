import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon, Youtube } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

// Your resume data
export let DATA = {
	name: 'Bluekiwidev',
	initials: 'BKD',
	url: 'https://github.com/bluekiwidev',
	description:
		'A software engineer that loves to build unique solutions to unique problems.',
	avatarUrl: 'https://avatars.githubusercontent.com/u/111331826?v=4',
	skills: [
		'Svelte',
		'Sveltekit',
		'Typescript',
		'Node.js',
		'Go',
		'Docker',
		'C++',
		'C'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/SikandarJODD/portfolio-template',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
		}
	},

	projects: [
		{
			title: 'Notely',
			href: 'https://chatcollect.com',
			dates: 'Apr 2026 - Present',
			active: true,
			description:
				'An open source, visual colaboration, idea sharing platform.',
			technologies: [
				'Svelte',
				'Typescript',
				'PostgreSQL',
				'Cloudflare Workers',
				'TailwindCSS',
				'(Soon to be) Magic UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://notely.marwon128.workers.dev',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/magicuidesign/magicui',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: ''
		},
		{
			title: 'Calduino',
			href: '',
			dates: 'May 2025 - Aug 2025',
			active: false,
			description: 'A half working, half broken calculator built with two arduino boards.',
			technologies: [
				'C++',
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/bluekiwidev/Calduino',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: ''
		},
		{
			title: 'Li-ion-battery-visualiser',
			href: 'https://visualbattery.marwon128.workers.dev',
			dates: 'Apr 2026 - Apr 2026',
			active: true,
			description:
				'A website to design and visualise physical designs for lithium ion batteries.',
			technologies: [
				'JavaScript',
				'Cloudflare Workers',
				'WebGL',
				'Mix of models'
			],
			links: [
				{
					type: 'Website',
					href: 'https://visualbattery.marwon128.workers.dev',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://github.com/bluekiwidev/Li-ion-battery-visualiser',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: ''
		},
		{
			title: 'Every Calendar',
			href: 'https://ecal.bluekiwi.lol',
			dates: 'April 2026 - Present',
			active: true,
			description:
				'A publically editable calendar for dedicating days to whatever you want.',
			technologies: [
				'Svelte',
				'JavaScript',
				'Cloudlfare D1',
				'Cloudflare Workers',
				'(Soon to be) Magic UI',

			],
			links: [
				{
					type: 'Website',
					href: 'https://ecal.bluekiwi.lol',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://github.com/bluekiwidev/everycalendar',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: ''
		},
		{
			title: 'Periodic Table Generator',
			href: '',
			dates: 'April 2026 - Present',
			active: true,
			description:
				'A tool written in go to generate 6.5 x 5cm cards for each element in the periodic table to be displayed on a wall.',
			technologies: [
				'Go',
				'The printer',
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/bluekiwidev/Periodic-table-generator',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: ''
		},
		{
			title: 'Totally not extremely complicated recipes',
			href: 'https://tnecr.bluekiwi.lol',
			dates: 'Jan 2026 - Present',
			active: true,
			description:
				'An archive of recipes me and my friend have made.',
			technologies: [
				'HTML',
				'Cloudflare Workers',
			],
			links: [
				{
					type: 'Website',
					href: 'https://tnecr.bluekiwi.lol',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://github.com/bluekiwidev/totally-not-extremely-complicated-recipes',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: ''
		}
	],
};
