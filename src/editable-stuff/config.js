// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hang",
  middleName: "",
  lastName: "Xia",
  message: "| Master Student | Computer Software engineering | Full Stack Developer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/summersummerhan/project/tree/main/project",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/summersummerins/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hang-xia-59379716b/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hangxia.png"),
  imageSize: 375,
  message:
  "Hello. My name is HangXia. I am completing my master's program at Northeastern University, and I have a great passion for learning new knowledge and am willing to communicate with people",
  resume: "https://drive.google.com/file/d/1ER09lYFwqXQdxFiINqPYIH96Tb9GRsNr/view",
};


const repos = {
  show: true,
  heading: "My Github",
  gitHubUsername: "summersummerhan", //i.e."johnDoe12Gh"
  reposLength: 1,
  specificRepos: ["project"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "During my undergraduate period, I have been working in my college's student union, managing the college students affairs and liaising with outside businesses to fund student activities.                 I work as 'Administrative and event assistant' at Northeastern University now, which is responsible for working on admin projects and editing event flyers.",
  images: [
    { 
      img: require("../editable-stuff/Student.png"),   
    },
    { 
      img: require("../editable-stuff/CHA.png"), 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JAVA", value: 90 },
    { name: "SQL", value: 70 },
    { name: "Data Structures", value: 85 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 70 },
    { name: "HTML/CSS", value: 75 },

  ],
  softSkills: [

    { name: "Collaboration", value: 90 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 70 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for intern Software Engineering opportunities! If you know of any positions available,  or if you just want to say hi, please feel free to email me at",
  email: "xia.han@northeastern.edu",
};




export { navBar, mainBody, about, repos, skills, leadership,getInTouch };
