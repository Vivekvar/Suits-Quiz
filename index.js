var chalk = require('chalk');
var readlineSync = require('readline-sync');
console.log("Hello and welcome to the game on the TV show " + chalk.bold.green('SUITS'));
var participant = readlineSync.question("May I have your name please? \n");
console.log("\n");
console.log(chalk.cyan('The rules of the game are :- \n'));
console.log(chalk.bgWhite.black.bold('1) This game consists of two levels,\n First level contains 6 question and are of ') + chalk.underline.bold.blue('YES/NO') + chalk.bgWhite.black.bold(' type. \n\n2) Second level contains another 6 questions which are of ') + chalk.underline.bold.blue('MCQ') + chalk.bgWhite.black.bold('type. \n\n3) There is no negative marking.\n\n4) Please do not enter an invalid reponse more than 3 times or else you will be out of the game.\n\n5) If you have a score of 50% or more in level 1 then only you will be able  to qualify for level 2.'));
console.log("All the best " + chalk.bgWhite.black.bold(participant) + " and we wish you high marks and lots of fun.\n")
console.log("The level 1 questions are :- ");
var questions = [{
  ques : chalk.bold.white.bgYellow('Suits is set in a fictional law firm in Chicago. \n'), 
  ans : "N"
},
{
ques : chalk.bold.white.bgYellow('Harvey full name is Harvey Reginald Specter. \n'), 
  ans : "Y"
}, 
{
  ques : chalk.bold.white.bgYellow('Secretary of Harvey Specter was Donna Paulsen. \n'), 
  ans : "Y"
},
{
  ques : chalk.bold.white.bgYellow('Rachel Zane was the expert in all financial matters. \n'), 
  ans : "N"
},
{
  ques : chalk.bold.white.bgYellow('Louis Litt had a rivalry with Mike Ross. \n'), 
  ans : "N"
},
{
  ques : chalk.bold.white.bgYellow('Mike Ross was engaged to Rachel Zane. \n'), 
  ans : "Y"
},
{
  ques : chalk.bold.white.bgYellow('Whose ashes does Louis have in his office?. \n') + chalk.bold.magenta('A: Donna\nB: Jessica\nC: Norma\nD: Harvey\n'),
  ans : "C"
},
{
  ques : chalk.bold.white.bgYellow('Who is the senior SEC official that Harvey butts head with on more than one occasion?. \n') + chalk.bold.magenta('A: Edward Darby\nB: Travis Tanner\nC: Sean Cahill\nD: Tony Gionopoulos\n'),
  ans : "C"
},
{
  ques : chalk.bold.white.bgYellow('How did the firm get Daniel to resign?. \n') + chalk.bold.magenta('A: Bribe\nB: Death\nC: Paper\nD: Threat\n'),
  ans : "D"
},
{
  ques : chalk.bold.white.bgYellow('Whose father is a named partner in a competing firm?. \n') + chalk.bold.magenta('A: Rachel\nB: Jessica\nC: Mike\nD: Harvey\n'),
  ans : "A"
},
{
  ques : chalk.bold.white.bgYellow('What law exam did Mike charge to take for others?. \n') + chalk.bold.magenta('A: SAT\nB: LSAT\nC: ACT\nD: GRE\n'),
  ans : "B"
},
{
  ques : chalk.bold.white.bgYellow('What does Louis do when he is stressed?. \n') + chalk.bold.magenta('A: Goes Mudding\nB: Sleeps\nC: Cries\nD: Performs Yoga\n'),
  ans : "A"
},
]
var score = 0, i = 0, flag = 0, invalidCount = 0;
function play(ques, ans, participantAns) {
  if (participantAns === ans) {
    console.log("YAY! you are absolutely right.");
    score++;
    console.log("Your score is " + score + ".\n");
  }
  else {
    if (participantAns != 'N' && participantAns != 'Y') {
      if (i >= 6) {
        if (participantAns === 'A' || participantAns === 'B' || participantAns === 'C' ||participantAns === 'D') {
          console.log("You had it wrong! Try next.\n")
          if (i >= 6) {
            console.log("Correct option :- " + ans + "\n");
          }
          console.log("Your score is " + score + ".\n");
        }
        else {
          console.log("Please enter a valid reponse.\n");
          i--;
          invalidCount++;
          if (invalidCount == 3) {
            flag = 1;
          }  
        }
      }
      else {
        console.log("Please enter a valid reponse.\n");
        i--;
        invalidCount++;
        if (invalidCount == 3) {
          flag = 1;
        }
      }
    }
    else {
      console.log("You had it wrong! Try next.\n")
      if (i >= 6) {
        console.log("Correct option :- " + ans + "\n");
      }
      console.log("Your score is " + score + ".\n");
    }
  }
}
for (i = 0; i < 6; i++) {
  if (!flag) {
    console.log("Question  " + (i + 1) + " :-\n");
    console.log(questions[i].ques + "\n");
    var participantAns = readlineSync.question("Enter Y or N to answer \n");
    play(questions[i].ques, questions[i].ans, participantAns);
  }
  else {
    console.log("You entered an invalid response 3 times. Therefore, you are out of the game.\n")
    break;
  }
}
if (score < 3) {
  console.log("You did not qualify for level 2");
}
else {
  console.log("Congrats! you have qualified for level 1\n\nLet us play Level 2\n");
  for (i = 6; i < 12; i++) {
    if (!flag) {
      console.log("Question  " + (i - 5) + " :-\n");
      console.log(questions[i].ques + "\n");
      var participantAns = readlineSync.question("Enter A, B, C or D to answer \n")
      play(questions[i].ques, questions[i].ans, participantAns);
    }
    else {
      console.log("You entered an invalid response 3 times. Therefore, you are out of the game.\n")
      break;
    }
  }
}
console.log(chalk.bold.white.bgBlue('Hey! ' + participant + ' do not foget to check the leaderboard.'))
var leaderboard = [{
  user : "Rohan",
  marks : "11/12"
},
{
  user : "Yash",
  marks : "10/12"
},
{
  user : "Avinash",
  marks : "10/12"
},
]
for (i = 0; i < 3; i++) {
  console.log(chalk.bgWhite.black.bold(leaderboard[i].user + " :- " + leaderboard[i].marks + "\n"));
}
console.log("\nIf you have scored 10 or more marks do send me a screenshot of your score, in order to get featured on leaderboard\n\n");
console.log("Thank You!\n");