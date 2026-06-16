import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon, Youtube } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import PeerListSvg from '$lib/imgs/peerlist.svg';
import PeerListDarkSvg from '$lib/imgs/peerlist-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import AtomicImg from '$lib/imgs/atomic.png';
import ShopifyImg from '$lib/imgs/shopify.svg';
import NvidiaImg from '$lib/imgs/nvidia.png';
import SplunkImg from '$lib/imgs/splunk.svg';
import LimeImg from '$lib/imgs/lime.svg';
import MitreMediaImg from '$lib/imgs/mitremedia.png';
import BuildSpaceImg from '$lib/imgs/buildspace.jpg';
import WaterLooImg from '$lib/imgs/waterloo.png';
import LaurierImg from '$lib/imgs/laurier.png';
import IBImg from '$lib/imgs/ib.png';

// Your resume data
export let DATA = {
	name: 'Bluekiwidev',
	initials: 'BKD',
	url: 'https://github.com/bluekiwidev',
	//img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	//location: 'Earth',
	//locationLink: 'https://www.google.com/maps/place/mumbai',
	description:
		'A software engineer that loves to build unique solutions to unique problems.',
	//summary:
	//	'At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Sil// icon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).',
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
		email: 'hello@example.com',
		tel: '+123456789',
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
			title: 'Chat Collect',
			href: 'https://chatcollect.com',
			dates: 'Jan 2024 - Feb 2024',
			active: true,
			description:
				'With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Stripe',
				'Shadcn UI',
				'Magic UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://chatcollect.com',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				}
			],
			image: '',
			video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4'
		},
		{
			title: 'Magic UI',
			href: 'https://magicui.design',
			dates: 'June 2023 - Present',
			active: true,
			description: 'Designed, developed and sold animated UI components for developers.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Stripe',
				'Shadcn UI',
				'Magic UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://magicui.design',
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
			video: 'https://cdn.magicui.design/bento-grid.mp4'
		},
		{
			title: 'llm.report',
			href: 'https://llm.report',
			dates: 'April 2023 - September 2023',
			active: true,
			description:
				'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://llm.report',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://github.com/dillionverma/llm.report',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: 'https://cdn.llm.report/openai-demo.mp4'
		},
		{
			title: 'Automatic Chat',
			href: 'https://automatic.chat',
			dates: 'April 2023 - March 2024',
			active: true,
			description:
				'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://automatic.chat',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				}
			],
			image: '',
			video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4'
		}
	],
};
