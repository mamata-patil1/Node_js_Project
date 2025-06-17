const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,

  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n 1:add a task");
  console.log("\n 2:view a task");
  console.log("\n 3:exit");

  rl.question("please chhose on option ", handleInput);
};

const handleInput = (option) => {
  if (option == 1) {
    rl.question("enter the task:", (task) => {
      todos.push(task);
      console.log("task added", task);
      showMenu();
    });
  } else if (option == 2) {
    console.log("\n To do list");

    todos.forEach((task, index) => {
      console.log(`${index + 1}.${task}`);
    });
    showMenu();
  } else if (option == 3) {
    console.log("Good Bye");
    rl.close();
  } else {
    console.log("please select valid option");
    showMenu();
  }
};

showMenu();
