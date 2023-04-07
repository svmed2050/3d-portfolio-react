import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	realtor,
	proshop,
	devspace,
	crown,
	next,
	messenger,
	openai,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
	{
		id: 'https://drive.google.com/file/d/1q9E_XCIzfnxEgQYMqzKroVscaTN9tm1D/view?usp=sharing',
		title: 'Download CV',
	},
]

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React.js Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Next.js Developer',
		icon: creator,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	// {
	// 	name: 'Three JS',
	// 	icon: threejs,
	// },
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	// {
	// 	name: 'docker',
	// 	icon: docker,
	// },
]

const experiences = [
	{
		title: 'Web Developer',
		company_name: 'HTML, CSS, JavaScript',
		icon: javascript,
		iconBg: '#383E56',
		date: 'Feb 2022 - May 2022',
		points: [
			'Developing and maintaining web applications using JavaScript and other related technologies.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Created more than 20 web-application to approve and consolidate my skills',
		],
	},
	{
		title: 'React Developer',
		company_name: 'React & Redux',
		icon: reactjs,
		iconBg: '#E6DEDD',
		date: 'June 2022 - Sept 2022',
		points: [
			'Dive in and learn React.js from scratch',
			'Learnt Reactjs, Hooks, Redux, React Routing, Animations, Stripe payment and more...',
			'Built powerful, fast, user-friendly and reactive web apps with React & Redux',
			'Styling React apps with "Styled Components" and "CSS Modules"',
			'Working with built-in Hooks and building custom Hooks, made unit tests with Jest and snapshot testing',
		],
	},
	{
		title: 'Backend Developer',
		company_name: 'Node.js, MERN stack',
		icon: nodejs,
		iconBg: '#383E56',
		date: 'Oct 2022 - Jan 2023',
		points: [
			'Completed an internship at SysGears (IT company in Dnipro)',
			'Building an extensive backend API with Node.js & Express',
			'Protecting routes/endpoints with JWT (JSON Web Tokens) + login & register page',
			'Implemented in e-commerce site REST API & CRUD operations, uploading files feature and more',
			'Making extensive API testing with Postman',
			'Gained more practical skills in React Hooks, Async/Await & modern practices',
		],
	},
	{
		title: 'Full stack Developer',
		company_name: 'React + NEXT.js',
		icon: next,
		iconBg: '#E6DEDD',
		date: 'Feb 2023 - Present',
		points: [
			'Making first steps in three.js & framer motion technologies to make great animation within my sites',
			'Implementing Data Fetching Methods - getServerSideProps, getStaticProps, getStaticPaths',
			'Working with Strapi API (CMS)',
			'Acquired valuable skills in Chakra UI, TailwindCSS to build more impressive projects',
		],
	},
]

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
]

const projects = [
	{
		name: 'ProShop (MERN)',
		description:
			'Completely customized eCommerce / shopping cart application. Includes product reviews and ratings, top products carousel, product pagination and search feature. Also it has User profile with orders, Admin product & user management, PayPal / credit card integration and detailed checkout process (shipping, payment method, etc)',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'nodejs',
				color: 'pink-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'text-amber-500',
			},
		],
		image: proshop,
		source_code_link: 'https://github.com/svmed2050/MERN-proshop',
		demo_code_link: 'https://giddy-jacket-tuna.cyclic.app',
	},
	{
		name: 'Real Estate (Next.js)',
		description:
			'A comprehensive platform for rental homes and for sale property. Includes advanced property search and filtering as well as property details page with image carousel (with lazy loading)',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'chakra-ui',
				color: 'green-text-gradient',
			},
			{
				name: 'react',
				color: 'pink-text-gradient',
			},
			{
				name: 'advanced-filtering',
				color: 'text-amber-500',
			},
		],
		image: realtor,
		source_code_link: 'https://github.com/svmed2050/next-real-estate',
		demo_code_link: 'https://next-real-estate-one.vercel.app',
	},
	{
		name: 'DevSpace Blog (Next.js)',
		description:
			'A markdown blog with Next.js and TailwindCSS. Includes blogs categories page, search panel and pagination. Also it has a page with detailed information about each of the posts. ',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'green-text-gradient',
			},
			{
				name: 'serverless-functions',
				color: 'pink-text-gradient',
			},
			{
				name: 'markdown',
				color: 'text-amber-500',
			},
		],
		image: devspace,
		source_code_link: 'https://github.com/svmed2050/devSpaceBlog-Nextjs',
		demo_code_link: 'https://dev-space-blog-nextjs.vercel.app',
	},

	{
		name: 'Clothing Shop (React)',
		description:
			'eCommerce shop with Firebase and fully integrated Strapi payment system. There you can find register and sign in panels (supports google authorization) as well as the cart for making orders',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'redux',
				color: 'green-text-gradient',
			},
			{
				name: 'firebase',
				color: 'pink-text-gradient',
			},
			{
				name: 'styled-components',
				color: 'text-amber-500',
			},
		],
		image: crown,
		source_code_link: 'https://github.com/svmed2050/react-crown-clothing',
		demo_code_link: 'https://regal-stardust-005081.netlify.app',
	},
	// {
	// 	name: 'Unichat Messenger (React)',
	// 	description: `Full-fledged firebase chat application with social authentication (including google and facebook), online-statuses, great design and functionality. It also includes image support, sound notifications, the ability to create multiple rooms and much more.`,
	// 	tags: [
	// 		{
	// 			name: 'react',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'firebase',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'chat-engine',
	// 			color: 'pink-text-gradient',
	// 		},
	// 		{
	// 			name: 'social-auth',
	// 			color: 'text-amber-500',
	// 		},
	// 	],
	// 	image: messenger,
	// 	source_code_link: 'https://github.com/svmed2050/react-messenger-chat',
	// 	demo_code_link: 'https://react-messenger-chat.vercel.app',
	// },
	{
		name: 'OpenAI Image Generation (MERN)',
		description: `Dynamic image layout and hover effect that showcases a user's prompt to generate AI image, their name and the download button. Includes ability to create new AI generated images by clicking the "surprise me button" or entering absolutely any text you can think off
		to share your post with the community`,
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'nodejs',
				color: 'green-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'pink-text-gradient',
			},
			{
				name: 'open-ai',
				color: 'text-amber-500',
			},
		],
		image: openai,
		source_code_link: 'https://github.com/svmed2050/dalle-client-react',
		demo_code_link: 'https://dalle-client-react.vercel.app',
	},
]

export { services, technologies, experiences, testimonials, projects }
