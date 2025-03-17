import connect4 from "../pics/connect4.png"
import healthy from "../pics/healthy.png"
import todo from "../pics/todo.png"
import expense from "../pics/expense.png"
const projects = [

    {
      id: 3,
      name: "Healthy Food Catering",
      description:
        "A food delivery and catering JavaScript service that offers healthy meal plans. Users can customize their meals, track nutrition, and schedule deliveries.",
      link: "https://healthyfood.glitch.me/main.html",
      image: healthy,
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
      name: "To-Do List App",
      description:
        "A simple JavaScript task management app to help users organize their daily activities. Supports task categorization, due dates, and notifications.",
      link: "https://capricious-large-voyage.glitch.me",
      image: todo,
    },
  ];
  
  export default projects;
  