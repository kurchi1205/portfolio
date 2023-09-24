import { About, Projects, Contacts, Experience, Education, Awards, Hobbies, Volunteering } from "../components/Sections/section"
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const sectionsData = [
    {
        "sectionName": "Name",
        "sectionType": "brand",
        "sectionValue": "Prerana Chakraborty",
        "sectionTo": "top",
    },
    {
        "sectionName": "About",
        "sectionType": "item",
        "sectionTo": "about",
        "sectionComponent": About,
        "sectionValue": {
            "info": {
                "name": "Prerana",
                "about": `a dedicated Data Scientist with 1.8 years of hands-on experience, specializing in cutting-edge Artificial Intelligence, particularly in the realms of Computer Vision, Natural Language Processing (NLP), and Generative AI. My journey in the field has been marked by an unwavering passion for pushing the boundaries of AI technology.
                I excel in crafting end-to-end Machine Learning pipelines, encompassing model training, fine-tuning, and deployment.\n
                Beyond my technical contributions, I am proud to be a contributor to the Pandas library, enhancing the toolkit used by data scientists worldwide. Additionally, I have authored research publications with Springer, where I delve into topics that intrigue and challenge me.\n
                My academic foundation includes a B.Tech in Computer Science and Engineering, providing me with the theoretical depth to complement my practical expertise. When I'm not immersed in the world of data and AI, you can often find me expressing my creativity as a singer or enjoying the outdoors while horse riding.\n
                As I continue my journey in AI and data science, I am excited to explore new frontiers, collaborate with fellow enthusiasts, and make a meaningful impact in this ever-evolving field. `,
                "profession": "Data Scientist"
            }
        }
    },
    {
        "sectionName": "Projects",
        "sectionType": "item",
        "sectionTo": "projects",
        "sectionComponent": Projects,
        "sectionValue": [
            {
                "projectName": 'Project 1',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                "projectImage": "Project_1.jpeg"
            },
            {
                "projectName": 'Project 2',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                "projectImage": "Project_2.jpeg"
            },
            {
                "projectName": 'Project 3',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                "projectImage": "Project_3.jpeg"
            },
            {
                "projectName": 'Project 4',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                "projectImage": "Project_3.jpeg"
            },
            {
                "projectName": 'Project 5',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                "projectImage": "Project_3.jpeg"
            },
            

        ]
    },
    {
        "sectionName": "Experience",
        "sectionType": "item",
        "sectionTo": "experience",
        "sectionValue": [
            {
                "companyName": 'Sivi.ai',
                "experienceDesc": "Turn your text into visual content instantly with Sivi. Using artificial intelligence, you can auto-generate editable banners, social posts, google display ads, and more from your story, webpage, article, etc.",
                "role": "Data Scientist",
                "companyImage": "sivi.png"
                // redirect link
            },
            {
                "companyName": 'SigmaRed Technologies',
                "experienceDesc": "Turn your text into visual content instantly with Sivi. Using artificial intelligence, you can auto-generate editable banners, social posts, google display ads, and more from your story, webpage, article, etc.",
                "role": "ML Intern",
                "companyImage": "sigmared.png"
            },
            {
                "companyName": 'Fiverr',
                "experienceDesc": "Turn your text into visual content instantly with Sivi. Using artificial intelligence, you can auto-generate editable banners, social posts, google display ads, and more from your story, webpage, article, etc.",
                "role": "ML Freelancer",
                "companyImage": "fiverr.png"
            }
        ],
        "sectionComponent": Experience,
    },
    {
        "sectionName": "Education",
        "sectionType": "item",
        "sectionTo": "education",
        "sectionValue": [
            {
                "title": 'Mahadevi Birla World Academy',
                "image": "mbwa.png",
                "course": "Secondary and Higher Secondary",
                "year": "2003-2016",
            },
            {
                "title": 'IEM',
                "image": "education-1.png",
                "course": "Bachelor of Engineering in Computer Science",
                "year": "2016-2020",
            }
        ],
        "sectionComponent": Education
    },
    {
        "sectionName": "Awards",
        "sectionType": "item",
        "sectionTo": "awards",
        "sectionValue": [
            {
                "awardName": 'Dashing Debut',
                "awardDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                "awardImage": "experience-1.png"
            },
            {
                "awardName": 'Dashing Debut',
                "awardDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                "awardImage": "experience-1.png"
            },
            {
                "awardName": 'Dashing Debut',
                "awardDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                "awardImage": "experience-1.png"
            }
        ],
        "sectionComponent": Awards
    },
    {
        "sectionName": "Hobbies",
        "sectionType": "item",
        "sectionTo": "hobbies",
        "sectionComponent": Hobbies,
        "sectionValue": [
            {
                'hobby': 'Baking',
                'image': 'baking.png',
            },
            {
                'hobby': 'Baking',
                'image': 'baking.png',
            },
            {
                'hobby': 'Baking',
                'image': 'baking.png',
            }
        ]
    },
    {
        "sectionName": "Volunteering",
        "sectionType": "item",
        "sectionTo": "volunteering",
        "sectionComponent": Volunteering,
        "sectionValue": [
            {
                'title': 'Volunteering-1',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
                'image': 'volunteer1.jpeg',
            },
            {
                'title': 'Volunteering-2',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
                'image': 'volunteer1.jpeg',
            },
            {
                'title': 'Volunteering-3',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
                'image': 'volunteer1.jpeg',
            }
        ]
    },
    {
        "sectionName": "Contacts",
        "sectionType": "item",
        "sectionTo": "contacts",
        "sectionComponent": Contacts,
        "sectionValue": {
            "socials": [
                {
                    "name": "github",
                    "link": "https://github.com",
                    "icon": faGithub,
                },
                {
                    "name": "twitter",
                    "link": "https://twitter.com",
                    "icon": faTwitter,
                },
                {
                    "name": "linkedin",
                    "link": "https://linkedin.com",
                    "icon": faLinkedin,
                }
            ],
            "email": "example@gmail.com"
        }
    }
]

export default sectionsData