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
                "about": `I'm a dedicated Data Scientist with 1.8 years of hands-on experience, specializing in cutting-edge Artificial Intelligence, including Computer Vision, NLP, and Generative AI. I hold a B.Tech in Computer Science and Engineering, combining theoretical knowledge with practical expertise. Beyond AI, I express my creativity through singing and enjoy horse riding outdoors. I'm excited to explore new frontiers, collaborate, and make a meaningful impact in this ever-evolving field.`,
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
                // "projectImage": "Project_1.jpeg"
            },
            {
                "projectName": 'Project 2',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                // "projectImage": "Project_2.jpeg"
            },
            {
                "projectName": 'Project 3',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                // "projectImage": "Project_3.jpeg"
            },
            {
                "projectName": 'Project 4',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                // "projectImage": "Project_3.jpeg"
            },
            {
                "projectName": 'Project 5',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                // "projectImage": "Project_3.jpeg"
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
                "companyImage": "sivi.png",
                "year": "Dec 2021 - Present",
                "link": "",
            },
            {
                "companyName": 'SigmaRed Technologies',
                "experienceDesc": "Turn your text into visual content instantly with Sivi. Using artificial intelligence, you can auto-generate editable banners, social posts, google display ads, and more from your story, webpage, article, etc.",
                "role": "ML Intern",
                "companyImage": "sigmared.png",
                "year": "Jan 2021 - Mar 2021",
                "link": "",
            },
            {
                "companyName": 'Fiverr',
                "experienceDesc": "Turn your text into visual content instantly with Sivi. Using artificial intelligence, you can auto-generate editable banners, social posts, google display ads, and more from your story, webpage, article, etc.",
                "role": "ML Freelancer",
                "companyImage": "fiverr.png",
                "year": "Apr 2021 - Nov 2021",
                "link": "",
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
                'hobby': 'Singing',
                'image': 'singing.png',
            },
            {
                'hobby': 'Baking',
                'image': 'baking.png',
            },
            {
                'hobby': 'Horse Riding',
                'image': 'horse_riding.png',
            },
            {
                'hobby': 'Swimming',
                'image': 'swimming.png',
            },
            {
                'hobby': 'Drawing',
                'image': 'painting.png',
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