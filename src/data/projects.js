import connect4 from "../pics/connect4.png"
import mask from "../pics/maskon.png"
import todo from "../pics/todo.png"
import expense from "../pics/expense.png"
import calorie from "../pics/calorie.png"
const projects = [

    {
      id: 3,
      name: "Calorie Counter",
      description:
        "A React web app that helps users track their daily calorie intake and macronutrients. Includes a food database, goal setting, and progress tracking",
      link: "https://calcountish.netlify.app/",
      image: calorie,
    },
    {
      id: 4,
      name: "Connect 4 - AI (CLI)",
      description:
        "A command-line Java implementation of the Connect 4 game with an AI opponent. Uses Minimax algorithm for decision-making.",
      link: "https://github.com/dorpanz/Connect4AI.git",
      image: connect4 ,
    },
    {
      id: 5,
      name: "Expense Tracker (Python CLI)",
      description:
        "A command-line expense tracker built with Python. Features include budget management, spending categories, and report generation.",
      link: "https://github.com/dorpanz/ExpenseTracker.git",
      image: expense,
    },
    {
      id: 6,
      name: "Face Detector Cartoon Mask",
      description:
        "A computer vision project that detects faces in real time and overlays fun cartoon-style masks using OpenCV. Built with Python and image processing techniques",
      image: mask,
    },
  ];
  
  export default projects;
  