import { About, Projects, Experience, Education, Awards, Hobbies, Volunteering } from '../components/Sections/section'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const sectionsData = [
	{
		sectionName: 'Name',
		sectionType: 'brand',
		sectionValue: 'Prerana Chakraborty',
		sectionTo: 'top',
	},
	{
		sectionName: 'About',
		sectionType: 'item',
		sectionTo: 'about',
		sectionComponent: About,
		sectionValue: {
			info: {
				name: 'Prerana',
				about: `I'm a dedicated Data Scientist with 1.8 years of hands-on experience, specializing in cutting-edge Artificial Intelligence, including Computer Vision, NLP, and Generative AI. I hold a B.Tech in Computer Science and Engineering, combining theoretical knowledge with practical expertise. Beyond AI, I express my creativity through singing and enjoy horse riding outdoors. I'm excited to explore new frontiers, collaborate, and make a meaningful impact in this ever-evolving field.`,
				profession: 'Data Scientist',
				socials: [
					{
						name: 'gmail',
						link: 'mailto:prerana1298@gmail.com',
						icon: faEnvelope,
					},
					{
						name: 'github',
						link: 'https://github.com/kurchi1205',
						icon: faGithub,
					},
					{
						name: 'linkedin',
						link: 'https://www.linkedin.com/in/prerana-chakraborty-44b9931a3/',
						icon: faLinkedin,
					},
					{
						name: 'medium',
						link: 'https://medium.com/@prerana1298',
						icon: faMedium,
					},
				],
			},
			tech: [
				{
					name: 'Skills',
					items: [
						{
							name: 'Languages',
							items: ['Python', 'C++', 'Javascript(beginner)'],
						},
						{
							name: 'Data Science',
							items: ['Pytorch', 'Numpy', 'Matplotlib', 'Pandas', 'SQL', 'MLFlow', 'Weights&Biases'],
						},
						{
							name: 'Database',
							items: ['MySQL'],
						},
					],
				},
				{
					name: 'Tools',
					items: [
						{
							name: 'Framework',
							items: ['FastAPI', 'Pydantic', 'OpenCV'],
						},
						{
							name: 'Cloud',
							items: ['Google Cloud', 'Azure', 'DigitalOcean'],
						},
						{
							name: 'Deployment',
							items: ['Docker', 'CloudRun', 'Vertex'],
						},
					],
				},
				{
					name: 'Domains',
					flatList: true,
					items: ['Data science', 'NLP', 'Computer Vision', 'Generative AI'],
				},
			],
		},
	},
	{
		sectionName: 'Projects',
		sectionType: 'item',
		sectionTo: 'projects',
		sectionComponent: Projects,
		sectionValue: [
			{
				projectName: 'Stable Diffusion Custom Coloring',
				projectDescription: 'Developed a pipeline for textual inversion, integrating variant loss for color customization through upscaled latent adjustments.',
				projectSource: 'https://github.com/kurchi1205/SD-Basics',
				// "projectImage": "Project_1.jpeg"
			},
			{
				projectName: 'Web Traffic forecasting for Wiki Pages',
				projectDescription: 'Utilized Stacked BidirectionalLSTM for Kaggle time series forecasting, achieving 83% SMAPE.',
				projectSource: 'https://medium.com/analytics-vidhya/web-traffic-time-series-forecasting-forecast-future-traffic-for-wikipedia-pages-92c06454dd7',
				// "projectImage": "Project_2.jpeg"
			},
			{
				projectName: 'GPT for Text Generation',
				projectDescription: 'Developed a GPT model with  custom training pipeline. Deployed on Hugging Face Spaces after successful training.',
				projectSource: 'https://github.com/kurchi1205/GPT-Scratch',
				// "projectImage": "Project_3.jpeg"
			},
			{
				projectName: 'Next word Prediction on Swiftkey Dataset',
				projectDescription: 'Addressing an NLP challenge via Markov Chain, LSTM, Bi-LSTM, fine-tuned BERT and GPT. Opted for GPT due to superior performance and minimal loss. The link has details of all the methods.',
				projectSource: 'https://medium.com/analytics-vidhya/next-word-prediction-using-swiftkey-data-f121f59bc7d',
				// "projectImage": "Project_3.jpeg"
			},
			{
				projectName: 'Analysis of a Self Driving Car',
				projectDescription: 'This was my final year project where we built our own densenet model and tried to predict the driving angle of a self driving car.',
				projectSource: 'https://github.com/kurchi1205/Final-Year-Project-',
				// "projectImage": "Project_3.jpeg"
			},
			{
				projectName: 'Breast Cancer Diagnosis Using Image Processing and Machine Learning',
				projectDescription: 'This was my paper which I presented at IEMGRAPH 2018. It was published in Advances in Intelligent Systems and Computing Book series by Springer under Emerging Technology in Modelling and Graphics.',
				projectSource: 'https://doi.org/10.1007/978-981-13-7403-6_12',
			}
		],
	},
	{
		sectionName: 'Experience',
		sectionType: 'item',
		sectionTo: 'experience',
		sectionValue: [
			{
				companyName: 'Sivi.ai',
				experienceDesc:
					'Turn your text into visual content instantly with Sivi. Using artificial intelligence, you can auto-generate editable banners, social posts, google display ads, and more from your story, webpage, article, etc.',
				role: 'Data Scientist',
				companyImage: 'sivi.png',
				year: 'Dec 2021 - Present',
				link: '',
			},
			{
				companyName: 'SigmaRed Technologies',
				experienceDesc:
					'Turn your text into visual content instantly with Sivi. Using artificial intelligence, you can auto-generate editable banners, social posts, google display ads, and more from your story, webpage, article, etc.',
				role: 'ML Intern',
				companyImage: 'sigmared.png',
				year: 'Oct 2021 - Dec 2021',
				link: '',
			},
			{
				companyName: 'Fiverr',
				experienceDesc:
					'Turn your text into visual content instantly with Sivi. Using artificial intelligence, you can auto-generate editable banners, social posts, google display ads, and more from your story, webpage, article, etc.',
				role: 'ML Freelancer',
				companyImage: 'fiverr.png',
				year: 'Aug 2020 - Sep 2021',
				link: '',
			},
		],
		sectionComponent: Experience,
	},
	{
		sectionName: 'Education',
		sectionType: 'item',
		sectionTo: 'education',
		sectionValue: [
			{
				title: 'Mahadevi Birla World Academy',
				image: 'mbwa.png',
				course: 'Secondary and Higher Secondary',
				year: '2003-2016',
			},
			{
				title: 'Institute of Engineering and Management',
				image: 'iem.png',
				course: 'Bachelor of Technology in Computer Science Engineering',
				year: '2016-2020',
			},
		],
		sectionComponent: Education,
	},
	{
		sectionName: 'Awards & Certifications',
		sectionType: 'item',
		sectionTo: 'awards',
		sectionValue: [
			{
				awardName: 'Dashing Debut',
				awardDesc: 'This was awarded to me for good performance in the first year of office.',
				awardImage: 'debut.jpeg',
				linkText: 'See Full View',
				linkValue: 'https://i.ibb.co/qCwJjfj/debut.jpg',
			},
			{
				awardName: 'Certificate of Appreciation',
				awardDesc: 'BNI Hallmark Coimbatore chapter awarded me this certificate for good performance in office.',
				awardImage: 'bni.jpeg',
				linkText: 'See Full View',
				linkValue: 'https://i.ibb.co/Cs64GVg/bni.jpg',
			},
			{
				awardName: 'Applied Machine Learning Course',
				awardDesc: 'This certificate above verifies that I have successfully completed the course Applied Machine Learning Course on Sep 2021 as taught by Srikanth Varma Chekuri.',
				awardImage: 'Applied_AI.png',
				linkText: 'Learn More',
				linkValue: 'https://www.appliedaicourse.com/certificate/f16d88bc5f',
			},
			{
				awardName: 'Certificate of Presentation',
				awardDesc:
					"This certificate was awarded to me for presenting a paper on 'Breast Cancer Diagnosis Using Image Processing and Machine Learning' at the International Conference on Emerging Technology in Modelling and Graphics(IEMGRAPH) 2018.",
				awardImage: 'IEMGraph.png',
				linkText: 'See Full View',
				linkValue: 'https://i.imgur.com/wVfe6mS.jpg',
			},
			{
				awardName: 'NPTEL Online Certification on Data Science for Engineers',
				awardDesc: 'This certificate was awarded to me for completing the course Data Science for Engineers offered by IIT Madras in Elite+Silver category.',
				awardImage: 'dse.png',
				linkText: 'Learn More',
				linkValue: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=noc19-cs13/NPTEL19CS13S11490693191116786.jpg',
			},
			{
				awardName: 'NPTEL Online Certification on Programming, Data Structures and Algorithms using Python',
				awardDesc: 'This certificate was awarded to me for completing the course Data Structures and Algorithms using Python offered by IIT Madras in Elite category.',
				awardImage: 'dsp.png',
				linkText: 'Learn More',
				linkValue: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=noc18-cs21/NPTEL18CS21S45106981810009614.jpg',
			},
			{
				awardName: 'NPTEL Online Certification on Programming using C++',
				awardDesc: 'This certificate was awarded to me for completing the course Programming using C++ offered by IIT Kharagpur in Elite category.',
				awardImage: 'C++.png',
				linkText: '',
				linkValue: '',
			},
			{
				awardName: 'Regression Models',
				awardDesc: 'This certificate was awarded to me for completing the course Regression Models offered by Johns Hopkins University on Coursera.',
				awardImage: 'regression.png',
				linkText: 'See Full View',
				linkValue: 'https://coursera.org/share/8552e6d8e147698031669fa6c4805e08',
			},
			{
				awardName: 'Practical Machine Learning',
				awardDesc: 'This certificate was awarded to me for completing the course Practical Machine Learning offered by Johns Hopkins University on Coursera.',
				awardImage: 'PML.png',
				linkText: 'See Full View',
				linkValue: 'https://coursera.org/share/eea591907912203c4b30a19d967f93cf',
			},
			{
				awardName: 'Developing Data Products',
				awardDesc: 'This certificate was awarded to me for completing the course Develping Data Products offered by Johns Hopkins University on Coursera.',
				awardImage: 'ddp.png',
				linkText: 'See Full View',
				linkValue: 'https://coursera.org/share/b198a3cc8ef2cfe797961a825efacea5',
			},
			{
				awardName: 'Reproducible Research',
				awardDesc: 'This certificate was awarded to me for completing the course Reproducible Research offered by Johns Hopkins University on Coursera.',
				awardImage: 'rr.png',
				linkText: 'See Full View',
				linkValue: 'https://coursera.org/share/d7f19266ca1217a9748f1c563d0db44f',
			},
			{
				awardName: 'Certificate of Excellence by International Centre for Culture and Education',
				awardDesc: 'This certificate was awarded to me for involvement in Green Revolution Global Certification Program',
				awardImage: 'Green_Revolution.jpeg',
				linkText: 'See Full View',
				linkValue: 'https://i.imgur.com/FaUQFro.jpg',
			},
		],
		sectionComponent: Awards,
	},
	{
		sectionName: 'Other Activities',
		sectionType: 'item',
		sectionTo: 'volunteering',
		sectionComponent: Volunteering,
		sectionValue: [
			{
				title: 'Innovacion Tech Fest',
				description:
					'I worked as a volunteer in the Innovacion Tech Fest 2018, organized by IEM. Also I participated in one of the events where I showcased GPS-enabled, touch-triggered assistance safety device.',
				image: 'innovacion.png',
			},
			{
				title: 'Pre-Conference Workshop',
				description: 'I participated in the pre conference workshop to write research papers and on concepts like image processing and machine learning',
				image: 'iemgraph.png',
			},
			{
				title: 'Web Development',
				description: 'I participated in a workshop on basic HTML and CSS skills organized by IEM Innovacion 2017.',
				image: 'webd.png',
			},
		],
	},
	{
		sectionName: 'Hobbies',
		sectionType: 'item',
		sectionTo: 'hobbies',
		sectionComponent: Hobbies,
		sectionValue: [
			{
				hobby: 'Singing',
				image: 'singing.png',
			},
			{
				hobby: 'Baking',
				image: 'baking.png',
			},
			{
				hobby: 'Equestrian',
				image: 'horse_riding.png',
			},
			{
				hobby: 'Swimming',
				image: 'swimming.png',
			},
			{
				hobby: 'Drawing',
				image: 'painting.png',
			},
		],
	},
]

export default sectionsData
