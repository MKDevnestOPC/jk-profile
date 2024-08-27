import logoImg from '@/assets/images/logo-img.png'
import logoTrns from '@/assets/images/logo-trans.png'
import profile from '@/assets/images/bannerImg.png'
import aboutImg from "@/assets/images/about-bg.jpeg"
import gitBg from "@/assets/images/gitBg.jpg"

import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconLinkdin from "@/components/icons/IconLinkdin.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconCapisator from "@/components/icons/IconCapisator.vue";
import IconMike from "@/components/icons/IconMike.vue";
import IconWeb from "@/components/icons/IconWeb.vue";

import IconLaravel from "@/components/icons/IconLaravel.vue";
import IconVueJs from "@/components/icons/IconVueJs.vue";
import IconJavascipt from "@/components/icons/IconJavascript.vue";
import IconTailwindCss from "@/components/icons/IconTailwindCss.vue";

import IconMenu from "@/components/icons/IconMenu.vue";
import IconGrid from "@/components/icons/IconGrid.vue"
import IconBonFire from "@/components/icons/IconBonFire.vue"


// projects serial
import Project1 from "@/assets/images/project1.png"
import Project2 from "@/assets/images/project2.png"
import Project3 from "@/assets/images/project3.png"
import Project4 from "@/assets/images/project4.png"
import Project5 from "@/assets/images/project5.png"
import Project6 from "@/assets/images/project6.png"
import Project7 from "@/assets/images/project7.png"
import Project8 from "@/assets/images/project8.png"
import Project9 from "@/assets/images/project9.png"

// projects serial end

import testimunial1 from "@/assets/images/testimunial1.jpg"
import testimunial2 from "@/assets/images/testimunial2.jpg"
import testimunial3 from "@/assets/images/testimunial4.jpg"

export function useData(){

    // nav items
    const navItems = [
        {title:'Home', icon:null, id:'#home', link:null},
        {title:'Features', icon:null, id:'#feature', link:null},
        {title:'About', icon:null, id:'#about', link:null},
        {title:'Projects', icon:null, id:'#projects', link:null},
        {title:'Resume', icon:null, id:'#resume', link:null},
        {title:'Testimonial', icon:null, id:'#testimonial', link:null},
        {title:'Contacts', icon:null, id:'#contacts', link:null},
    ];

    // main home data
    const userData = {
        name:'Jugol Kumar',
        slogan:"Welcome to My World.",
        about:`I am a positive, enthusiastic and competent Web Developer who, over the years, has built up a diverse range
        of skills, qualities and attributes that guarantee I will perform highly in this role. Prefer to work under a well-
        reputed organization that runs with the modern organization & modern management system. To obtain a
        position in a challenging environment, which offers the opportunity to continue to learn, use perception and
        technical skills, and enhance productivity in the work place. Hence, a leading company like yours has to be a
        prior choice to reflect the objectives.`,
        typer:[
            "Web Developler",
            "Laravel Developer",
            "Full Stack Software Developer",
            "Vue js Frontend Developer",
            "Nuxt js Frontend Developer",
            "Web Designer"
        ]
    }

    const socalMedias = [
        {
            title:"Find Me",
            socalMedia:[
                {icon:IconFacebook, name:'Facebook', link:'https://www.facebook.com/zogul.kumar/'},
                {icon:IconLinkdin, name:'Linkedin', link:'https://www.linkedin.com/in/jugol-kumar-5855b6208'},
                {icon:IconGithub, name:'Github', link:'https://github.com/jugol-kumar'},
            ]
        },
        {
            title:"Best Skill On",
            socalMedia:[
                {icon:IconLaravel, name:'Laravel', link:'https://laravel.com/'},
                {icon:IconVueJs, name:'Vue Js', link:'https://vuejs.org/'},
                {icon:IconJavascipt, name:'Javascript', link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
                {icon:IconTailwindCss, name:'Tailwind Css', link:'https://tailwindcss.com/'},
            ]
        }
    ]

    
    // about page data;
    const aboutInfo = [
        {title:"Years Experience", count:"03"},
        {title:"Completed projects", count:"10"},
        {title:"Companies Work", count:"04"},
    ];
    const cvLink = "https://drive.google.com/file/d/1PtiQHFN_xZuNUKS_UiyuSVfp3wxpdk1D/view?usp=sharing";

    const aboutMe = `I am Jugol Kumar. Full stuck web application developer. I am working on porch as senior software developer and more then 3 years + working experience in this sector. I'm Currently sturdy in Computer Science and Engineering form Dhaka International University . Currently working on creativetechpark as a software developer. I will always try my best. I never stopped learning new programming skills and technologies. I always focus on client satisfaction with good quality products.`


    // features items
    const featureItems = [
        {title:"Web Design", icon:IconMenu, desc:`Welcome to our website, where innovative design meets seamless functionality. Explore our captivating digital experience a world of creativity and inspiration.`},

        {title:"Web Developemnt", icon:IconGrid, desc:`Elevate your web development with Laravel. Harness the power of this robust framework for efficient and scalable web applications`},

        {title:"Rest Api", icon:IconBonFire, desc:`Power your applications with REST API. Seamlessly connect and exchange data, enabling efficient communication and integration across platforms.`},

        {title:"Collaboration", icon:IconCapisator, desc:`Collaborate with other developers, to ensure that meets the desired specifications and provide technical support and assistance to users.`},
    
    
        {title:"SEO Optimisation", icon:IconMike, desc:`Maximize your online presence with our comprehensive SEO optimization solutions. From keyword research to on-page seo, we'll help you rank higher traffic.`},

        {title:"Web Solution", icon:IconWeb, desc:`Transform your digital presence with our comprehensive web solutions. From design to development, we've got you covered innovative strategies`}
    ]
    
    // project items

    const projectItems = [
        {
            id:1,
            title:"Comfortwing Ecommerce", 
            image:Project1, desc:`Comfortwing Is An Full Custom Ecommer Website, Bootstrap Css And Frontend Developemnt With Vue Js And Laravel Fremwork`, 
            gitHub:"#", 
            liveLink:"https://comfortwing.com/"
        },
        {
            id:2,
            title:"Portfolio 1", 
            image:Project2, 
            desc:`Personal Profollio Website Design Wwith Tailwind Css And Fontend Development With Vue js.`, 
            gitHub:"https://github.com/jugol-kumar/portfolio",
            liveLink:"https://test2.ctpse.info"
        },
        {
            id:3,
            title:"Ecommerce", 
            image:Project3,
            desc:`Peradise Single Vendor Ecommerce Website. Development With Backend Laravel, Frontend Vue Js And Request System Inertia. Also Javascript And Animatino Css`, gitHub:"#", 
            gitHub:"https://github.com/jugol-kumar/chaldal-se",
            liveLink:"https://psc.gomkgo.com"
        },
        {
            id:4,
            title:"Medicine Selling", 
            image:Project4, 
            desc:`This Is An Medicine Selling Website Developed By Me , Using Technalogy Is Backend Laravel, Frontend Laravel Blade And Jquery Javascript. Ajax Request System`, gitHub:"#",
            gitHub:"https://github.com/jugol-kumar/Bangla-mads",
            liveLink:"https://medihelp24.com/"
        },
        {
            id:5,
            title:"Grocery Ecommerce", 
            image:Project5,
            desc:`Grocery Ecommerce Website, Design Technalogy Is For Design Tailwind Css And Frontend Development By Nuxt 3 Backend With Laravel Restfull Api, JWT Login Secqurity.`,
            gitHub:"https://github.com/jugol-kumar/Tailwindcss",
            liveLink:"#"
        },
        {
            id:6,
            title:"Grocery Ecommerce", 
            image:Project6, 
            desc:`This is also Grocery Ecommerce website for selling altipe grocery products. Frontend Development by vue js and request system is inertia. Backend development by laravel latest.`,
            gitHub:"https://github.com/jugol-kumar/ctp-ecommerce",
            liveLink:"http://test.amblefashion.com/"
        },
        {
            id:7,
            title:"Ecommerce Backend", 
            image:Project7, 
            desc:`This backend for the single vendor ecommerce website develop by laravel with restfull api.`,
            gitHub:"https://github.com/jugol-kumar/ctp-ecommerce",
            liveLink:"#"
        },
        {
            id:8,
            title:"Shopping Ecommerce", 
            image:Project8, 
            desc:`This Single Vendor Ecommerce website develop for selling garments products. Using Technalogy is backend larave, frontend vue js and request system ins inertia`,
            gitHub:"https://github.com/jugol-kumar/ctp-ecommerce",
            liveLink:"https://amblefashion.com/",
        },
        {
            id:9,
            title:"customer relationship management", 
            image:Project9, 
            desc:`customer relationship management Project Develop by Laravel, Vue Js , Inertia, Etc.`,
            gitHub:"https://github.com/jugol-kumar/ctp-crm",
            liveLink:"https://crm.ctpse.info/"
        },
    ]

    // resume items
    const educationLavel = [
        {title:'B.SC in computer science & engineering.', subTitle:'Dhaka International University (2021 - Runing)', result:'12 / 4.8', desc:'Bachelor of Science or B.SC cover 2 phases in Dhaka International University'},

        {title:'Diploma in computer science and engineering', subTitle:'Chapai nawabganj polytechnic institute (2016 - 2020)', result:'3.68 / 4.00', desc:'Passed Deploma in computer science and engineering from Chapai nawabganj polytechnic institute'},
        
        {title:'Secondary School Certificate (SSC)', subTitle:'Krishna Gopal Pur High School (2010 - 2016)', result:'4.61 / 5.00', desc:'Passed Secondary School Certificate (SSC) from Krishna Gopal Pur High School in session 2025-2026'},
    ]

    // training quelifications
    const trainingQualification = [
        {title:'6 Month Web Design And Development', subTitle:'Info Network Link (INL) (2019 - 2019)', result:'6 Month', desc:'I will complated 6 month web design and development from scratch form Info Network Link (INL). 57/14 (1st floor)- West Panthapath, Dhaka – 1215'},

        {title:'3 Month SEIP Mobile App Development with Android', subTitle:'Pencil Box Training Institute EDB Trade Centre (2021 - 2022)', result:'3 Month', desc:'3 Month Self Employment Investment Program complated from  Pencil Box Training Institute EDB Trade Centre. (5thFloor), 93 Kazi Nazrul Islam Avenue, Dhaka- 1215.'},

        {title:'Think With Redux Way By Sumit', subTitle:'Think With Redux Way Online Course (2022 - 2023)', result:'Free Time', desc:'Thinks With Redux Way Online Course Provide By Learn With Sumit. And This Course Still Learinig Mode. Learn With Sumit'},

    ]

    // job exprience
    const jobExprience = [
        {title:'Full Stuck Software Developer', subTitle:'Creative Tech Park (2022 - Runing)', result:'1.6 Years', desc:'Mo-33 Dhaka Merul Badda Dhaka-1212, Creative Tech Park Software Company Joined As Full Stuck Software Developer.'},

        {title:'Full Stuck Laravel Developer', subTitle:'Tuitiion Terminal(2020 - 2021)', result:'1.3 Years', desc:'Joind There As Full Suck Laravel Web Application Developer. And Work There More Then 1.3 Years.'},
        
        {title:'Laravel Web Developer', subTitle:'Creative Zone It (2020 - 2020)', result:'8 Month', desc:'I will joined Creative Zone It as a laravel developer for develope an multivendor ecommer app. I will work there more then 8 month.'},
    ]

    // company exprience
    const companyExprience = [
        {title:'Creative Tech Park', subTitle:'Software Company', result:'1.6 Years', desc:'Mo-33 Dhaka Merul Badda Dhaka-1212', link:'https://creativetechpark.com'},
     
        {title:'Tuition Terminal', subTitle:'Software Company', result:'1.6 Years', desc:'F#D-4,H#10/5,R#,Tolarbagh R/A,Section#1,Mirpur,Dhaka-1216', link:'https://tuitionterminal.com.bd'},  
        
        {title:'Creative Zone It', subTitle:'IT & Training Center', result:'8 Month', desc:'29/30, Suvash Bosh Avenue, 2nd Floor,Luxmibazar, Dhaka-1100.', link:'https://creativezoneit.com'},
    ]

    // skills items
    const designSkills = [
        {title:'HTML', skill:'100%'},
        {title:'CSS', skill:'98%'},
        {title:'Javascript', skill:'80%'},
        {title:'jQuery', skill:'90%'},
        {title:'Tailwind Css', skill:'75%'},
        {title:'Nuxt Js', skill:'85%'},
        {title:'Vue Js', skill:'90%'},
        {title:'React Js', skill:'50%'},
        {title:'Bootstrap', skill:'95%'},
        {title:'XML(android)', skill:'60%'},
    ]   
     const developmentSkills = [
        {title:'Laravel', skill:'90%'},
        {title:'PHP', skill:'95%'},
        {title:'Node Js', skill:'60%'},
        {title:'REST API', skill:'80%'},
        {title:'Java', skill:'50%'},
        {title:'AJAX', skill:'98%'},
        {title:'mySqli', skill:'90%'},
        {title:'SQLITE', skill:'80%'},
        {title:'Mongo DB', skill:'50%'},
        {title:'Firebase', skill:'40%'},
    ]

    // testimunial data
     const testimunialItems = [
        {
            image:testimunial1, 
            title:'AMCPaedia - Course & Exam Management System.', 
            desc:'Your website is truly exceptional! The design is visually stunning, with an elegant and modern aesthetic that immediately captures attention. The layout is intuitive and user-friendly, allowing visitors to navigate effortlessly and find the information they need. The content is engaging and well-written, effectively conveying your message and showcasing your expertise.',
            via: 'Company',
            timeLine:'Jan 4, 2022 - Mar 5, 2022',
            star:5,
            user:{name:"Dr. Tonmoy Dhor", deg:"Woner Of AMCPaedia", loc:'Sydney, Austrolia'}
        },
        {
            image:testimunial2, 
            title:'Porch - Multivendor Ecommerce Website', 
            desc:'Your website is a masterpiece! The design is captivating, incorporating stunning visuals and a seamless user interface. The content is compelling, delivering your message with clarity and impact. The attention to detail is exceptional, evident in the flawless execution and the harmonious combination of colors, fonts, and imagery.',
            via: 'Company',
            timeLine:'Apr 2, 2022 - Jun 10, 2022',
            star:4,
            user:{name:"Md. Sawroar Hossain Babu", deg:"CEO Of Porch", loc:'Dhaka, Bangladesh'}
        },
        
     ]

    const contactData = {
        name:"Jugol Kumar",
        subTitle:"Full Stuck Developer",
        img:gitBg,
        phone:"+008 01723 717933",
        email:"Jugolkumar23@gmail.com",
        about:"HELLO EVERYONE. IM SRI JUGOL KUMAR. AS A WEB-DEVELOPER. I LIKE DEVELOPMENT WEBSITE WITH LARAVEL FREMWORK . USING VUE JS JAVASCRIPT FREMWORK FOR FORNT SIDE.",
    }



    return {navItems, logoImg, logoTrns, userData,socalMedias, profile, aboutInfo, cvLink, aboutMe, featureItems, aboutImg, projectItems, educationLavel, trainingQualification, jobExprience, designSkills, developmentSkills, companyExprience, testimunialItems, contactData};
}