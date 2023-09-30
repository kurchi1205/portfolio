import { About, Projects, Experience, Education, Awards, Hobbies, Volunteering } from "../components/Sections/section"
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
                        "link": "https://github.com/kurchi1205",
                        "icon": faGithub,
                    },
                    {
                        "name": "linkedin",
                        "link": "https://www.linkedin.com/in/prerana-chakraborty-44b9931a3/",
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
                "linkValue": "https://www.appliedaicourse.com/certificate/f16d88bc5f",
            },
            {
                "awardName": 'Certificate of Presentation',
                "awardDesc": "This certificate was awarded to me for presenting a paper on 'Breast Cancer Diagnosis Using Image Processing and Machine Learning' at the International Conference on Emerging Technology in Modelling and Graphics(IEMGRAPH) 2018.",
                "awardImage": "IEMGraph.jpeg",
                "linkText": "", 
                "linkValue": "https://i.imgur.com/wVfe6mS.jpg",
            },
            {
                "awardName": 'NPTEL Online Certification on Data Science for Engineers',
                "awardDesc": "This certificate was awarded to me for completing the course Data Science for Engineers offered by IIT Madras in Elite+Silver category.",
                "awardImage": "dse.jpeg",
                "linkText": "", 
                "linkValue": "https://archive.nptel.ac.in/noc/Ecertificate/?q=noc19-cs13/NPTEL19CS13S11490693191116786.jpg",
            },
            {
                "awardName": 'NPTEL Online Certification on Programming, Data Structures and Algorithms using Python',
                "awardDesc": "This certificate was awarded to me for completing the course Data Structures and Algorithms using Python offered by IIT Madras in Elite category.",
                "awardImage": "dsp.jpeg",
                "linkText": "", 
                "linkValue": "https://archive.nptel.ac.in/noc/Ecertificate/?q=noc18-cs21/NPTEL18CS21S45106981810009614.jpg",
            },
            {
                "awardName": 'NPTEL Online Certification on Programming using C++',
                "awardDesc": "This certificate was awarded to me for completing the course Programming using C++ offered by IIT Kharagpur in Elite category.",
                "awardImage": "c++.jpeg",
                "linkText": "", 
                "linkValue": "",
            },
            {
                "awardName": 'Regression Models',
                "awardDesc": "This certificate was awarded to me for completing the course Regression Models offered by Johns Hopkins University on Coursera.",
                "awardImage": "regression.jpeg",
                "linkText": "", 
                "linkValue": "https://coursera.org/share/8552e6d8e147698031669fa6c4805e08",

            },
            {
                "awardName": 'Practical Machine Learning',
                "awardDesc": "This certificate was awarded to me for completing the course Practical Machine Learning offered by Johns Hopkins University on Coursera.",
                "awardImage": "pml.jpeg",
                "linkText": "", 
                "linkValue": "https://coursera.org/share/eea591907912203c4b30a19d967f93cf",

            },
            {
                "awardName": 'Developing Data Products',
                "awardDesc": "This certificate was awarded to me for completing the course Develping Data Products offered by Johns Hopkins University on Coursera.",
                "awardImage": "ddp.jpg",
                "linkText": "", 
                "linkValue": "https://coursera.org/share/b198a3cc8ef2cfe797961a825efacea5",

            },
            {
                "awardName": 'Reproducible Research',
                "awardDesc": "This certificate was awarded to me for completing the course Reproducible Research offered by Johns Hopkins University on Coursera.",
                "awardImage": "rr.jpg",
                "linkText": "", 
                "linkValue": "https://coursera.org/share/d7f19266ca1217a9748f1c563d0db44f",

            },
            {
                "awardName": 'Certificate of Excellence by International Centre for Culture and Education',
                "awardDesc": "This certificate was awarded to me for involvement in Green Revolution Global Certification Program",
                "awardImage": "Green_Revolution.jpeg",
                "linkText": "", 
                "linkValue": "https://i.imgur.com/FaUQFro.jpg",
            }
        ],
        "sectionComponent": Awards
    },
    {
        "sectionName": "Other Activities",
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