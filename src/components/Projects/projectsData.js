import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import my from "../../Assets/Projects/my.png";

export const projects = [
  {
    imgPath: my,
    isBlog: false,
    title: "ReadOft: Where Readers, Writers & Ideas Connect",
    description:
      "ReadOft is a modern, community-driven reading and blogging platform designed to bring readers and writers together in a clean,focused environment.It allows users to discover high-quality articles, follow authors, explore topics, and track their reading progress through a personalized dashboard.With a strong emphasis on usability, performance, and thoughtful UI/UX, ReadOft promotes meaningful content over noise and builds a sustainable knowledge-sharing community.",
    ghLink: "https://github.com/abushaidislam/readoft_9800.git",
    demoLink: "https://readoft-9800.vercel.app/",
    demoLabel: "live site",
  },
  {
    imgPath: bitsOfCode,
    isBlog: false,
    title: "Blog Project",
    description:
      "A blog-focused project showcasing clean UI, responsive layout, and well-structured content pages. (Update title/description/links with your exact project details.)",
    ghLink: "https://github.com/abushaidislam",
  },
  {
    imgPath: chatify,
    isBlog: false,
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "https://chatify-49.web.app/",
  },
  {
    imgPath: bitsOfCode,
    isBlog: false,
    title: "Bits-0f-C0de",
    description:
      "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoLink: "https://blogs.soumya-jit.tech/",
  },
  {
    imgPath: editor,
    isBlog: false,
    title: "Editor.io",
    description:
      "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
    ghLink: "https://github.com/soumyajit4419/Editor.io",
    demoLink: "https://editor.soumya-jit.tech/",
  },
  {
    imgPath: leaf,
    isBlog: false,
    title: "Plant AI",
    description:
      "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
    ghLink: "https://github.com/soumyajit4419/Plant_AI",
    demoLink: "https://plant49-ai.herokuapp.com/",
  },
  {
    imgPath: suicide,
    isBlog: false,
    title: "Ai For Social Good",
    description:
      "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.",
    ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good",
  },
  {
    imgPath: emotion,
    isBlog: false,
    title: "Face Recognition and Emotion Detection",
    description:
      "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
    ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
  },
  
];
