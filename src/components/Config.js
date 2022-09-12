import { createChatBotMessage} from 'react-chatbot-kit';
import LearningOption from "./LearningOption";
import LinkList from "./LinkList/LinkList";
import AcdList from './AcdList/AcdList';
import Fav from './Fav';
import TechnicalList from './TechnicalList/TechnicalList';
import ProjectList from './ProjectList/ProjectList';
import ContactList from './ContactList/ContactList';
import React from 'react';
    const config = {
    
    botName: "Abhishesh Bot",
    
    initialMessages:
    [createChatBotMessage("Hi, I'm Abhishesh. What do you want to know about me?", {widget: "learningOption"})],
    widgets: [
        {
            widgetName: "learningOption",
           widgetFunc: (props) => <LearningOption {...props} />,
        },
        {
          widgetName: "favsong",
         widgetFunc: (props) => <Fav {...props} />,
        },
        {
            widgetName: "Personal Info",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
              poptions: [
                {
                  text: " My Name is Abhishesh Samatkar. I am From Orange city i.e Nagpur.",
                  id: 1,
                },
                {
                  text: " I like Singing also interested in Football. ",
                  id: 2,
                },
                {
                  text: " I am a FullStack Devloper and love to play with Data Structures and Algorithms",
                  id: 3,
                },
              ],
            },
        },
        {
          widgetName: "Academic Info",
          widgetFunc: (props) => <AcdList {...props} />,
          props: {
            acdoptions: [
              {
                text: "I am fresh Engineering Graduate specialised in Computer Science & Engineering.",
                id: 1,
              },
              {
                text: "I've done my graduation from Priyadarshini Bhagwati College of Engineering, Nagpur",
                id: 2,
              },
              {
                text: "Graduation : Computer Science & Engg - 2020",
                id: 3,
              },
              {
                text: "Diploma in : Information Technology - 2017",
                id: 4,
              },
              {
                text: "SSC : General - 2014",
                id: 5,
              },
            ],
          },
      },    
      {
        widgetName: "Technical Stacks",
        widgetFunc: (props) => <TechnicalList {...props} />,
        props: {
          Techoptions: [
            {
              text: "I am a Full-Stack Developer. I have technical stack knowledge about:",
              id: 1,
            },
            {
              text: "FrontEnd Technologies: HTML, CSS, JavaScript, React JS, etc",
              id: 2,
            },
            {
              text: "BackEnd Technologies: Core Java",
              id: 3,
            },
            
          ],
        },
    },
    {
      widgetName: "Project Info",
      widgetFunc: (props) => <ProjectList {...props} />,
      props: {
        projoptions: [
          {
            title: "Facebook Login Page(Clone)",
            text: "This is clone of Facebook Login page.",
            stack:" HTML, CSS.",
            host:"https://abhisheshsamatkar.github.io/Facebook-Login-Page/",
            id: 1,
          },
          {
            title: "Calculator",
            text: "Digital calculator which take the input from the user and gives the output as per the operator used in the input.",
            stack:"ReactJS",
            host:"https://abhisheshsamatkar.github.io/Calculator_Abhishesh/",
            id: 2,
          },
          {
            title: "Tip Calculator",
            text: "Tip calculator which takes billing amount, type of service, and a number of persons as input. As per the three inputs it generates a tip for the serving person.",
            stack:"HTML, CSS, Javascript.",
            host:"https://abhisheshsamatkar.github.io/Javascript-project/",
            id: 4,
          },
          {
            title: "Abhishesh ChatBot",
            text: "Abhishesh ChatBot is chatbot which stimulates conversation through text chats and gives information about me. ",
            stack:" React JS.",
            host:"https://sensational-longma-747b8d.netlify.app/",
            id: 4,
          },
        ],
      },
  },     
  {
    widgetName: "Contact Info",
    widgetFunc: (props) => <ContactList {...props} />,
    props: {
      contoptions: [
        {
          address: "Raje Raghuji Nagar Plot no. - 4/39, Sakkardara Road, Nagpur",
          city: "Nagpur",
          state: "Maharashtra",
          phone: "9970613012",
          linked:"https://www.linkedin.com/in/abhishesh-samatkar-8b594b219/",
          lsymbol:"<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'> <g fill='#069' fill-rule='nonzero'> <path d='M0 7.556h5.333V23.11H0zM2.906 0C1.149 0 0 1.152 0 2.667c0 1.481 1.115 2.666 2.838 2.666h.034c1.791 0 2.906-1.185 2.906-2.666C5.744 1.152 4.663 0 2.906 0zM18.133 7.111c-2.704 0-3.915 1.515-4.592 2.58V7.479H8.444v15.633h5.096v-8.73c0-.467.034-.934.168-1.268.369-.934 1.207-1.9 2.615-1.9 1.844 0 2.581 1.433 2.581 3.535v8.363H24v-8.964c0-4.802-2.514-7.036-5.867-7.036z'/> </g> </svg>",
          github:"https://github.com/AbhisheshSamatkar",
          id: 1,
        },

      ],
    },
},
    ],
    customStyles: {
    botMessageBox: {
    backgroundColor: "rgb(41, 206, 69)",
    },
    chatButton: { backgroundColor: "#376B7E",
    },
    
    },
}
    export default config;