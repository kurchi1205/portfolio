import { About, Projects, Contacts, Experience, Education, Awards, Hobbies, Volunteering } from "../components/Sections/section"
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
                "profession": "Data Scientist",
                "socials": [
                    {
                        "name": "gmail",
                        "link": "mailto:prerana1298@gmail.com",
                        "icon": faEnvelope,
                    },
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
                "year": "Oct 2021 - Dec 2021",
                "link": "",
            },
            {
                "companyName": 'Fiverr',
                "experienceDesc": "Turn your text into visual content instantly with Sivi. Using artificial intelligence, you can auto-generate editable banners, social posts, google display ads, and more from your story, webpage, article, etc.",
                "role": "ML Freelancer",
                "companyImage": "fiverr.png",
                "year": "Aug 2020 - Sep 2021",
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
        "sectionName": "Awards & Certifications",
        "sectionType": "item",
        "sectionTo": "awards",
        "sectionValue": [
            {
                "awardName": 'Dashing Debut',
                "awardDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                "awardImage": "experience-1.png",
                "linkText": "", 
                "linkValue": "https://getbootstrap.com/docs/5.0/helpers/stretched-link/",
            },
            {
                "awardName": 'Dashing Debut',
                "awardDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
                "awardImage": "experience-1.png",
                "linkText": "", 
                "linkValue": "",
            },
            {
                "awardName": 'Applied Machine Learning Course',
                "awardDesc": "This certificate above verifies that I have successfully completed the course Applied Machine Learning Course on Sep 2021 as taught by Srikanth Varma Chekuri.",
                "awardImage": "Applied_AI.jpeg",
                "linkText": "", 
                "linkValue": "",
            },
            {
                "awardName": 'Certificate of Presentation',
                "awardDesc": "This certificate was awarded to me for presenting a paper on 'Breast Cancer Diagnosis Using Image Processing and Machine Learning' at the International Conference on Emerging Technology in Modelling and Graphics(IEMGRAPH) 2018.",
                "awardImage": "IEMGraph.jpeg",
                "linkText": "", 
                "linkValue": "",
            },
            {
                "awardName": 'NPTEL Online Certification on Data Science for Engineers',
                "awardDesc": "This certificate was awarded to me for completing the course Data Science for Engineers offered by IIT Madras in Elite+Silver category.",
                "awardImage": "experience-1.png",
                "linkText": "", 
                "linkValue": "",
            },
            {
                "awardName": 'NPTEL Online Certification on Programming, Data Structures and Algorithms using Python',
                "awardDesc": "This certificate was awarded to me for completing the course Data Structures and Algorithms using Python offered by IIT Madras in Elite category.",
                "awardImage": "experience-1.png",
                "linkText": "", 
                "linkValue": "",
            },
            {
                "awardName": 'NPTEL Online Certification on Programming, Data Structures and Algorithms using Python',
                "awardDesc": "This certificate was awarded to me for completing the course Data Structures and Algorithms using Python offered by IIT Madras in Elite category.",
                "awardImage": "experience-1.png",
                "linkText": "", 
                "linkValue": "",
            },
            {
                "awardName": 'NPTEL Online Certification on Programming using C++',
                "awardDesc": "This certificate was awarded to me for completing the course Programming using C++ offered by IIT Kharagpur in Elite category.",
                "awardImage": "experience-1.png",
                "linkText": "", 
                "linkValue": "",
            },
            {
                "awardName": 'Certificate of Excellence by International Centre for Culture and Education',
                "awardDesc": "This certificate was awarded to me for involvement in Green Revolution Global Certification Program",
                "awardImage": "Green_Revolution.jpeg",
                "linkText": "", 
                "linkValue": "",
            }
        ],
        "sectionComponent": Awards
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
    }
]

export default sectionsData