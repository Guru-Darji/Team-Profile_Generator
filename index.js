const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./scr/template")

teamArray = [];



function startApp () {

  function createTheTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team members to add."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }


function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "What is the name of the Manager?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the Manager's ID?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is the Manager's email?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the Manager's office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTheTeam();
  });

}


function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the Engineer?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's ID " 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's email?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the GitHub username of the Engineer?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTheTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the Intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the Intern's ID?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the Intern's email?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school did the Intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTheTeam();
    });

  }


function htmlBuilder () {
    console.log("Team has been made!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTheTeam();

}

startApp();