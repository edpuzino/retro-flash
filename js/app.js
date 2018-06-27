'use strict';

//Arrays of questions and more
var target = 0;
var totalPoints = 0;
var questionsTotal = 0;
var cultQuestions = [];
var actionQuestions = [];
var scifiQuestions = [];
var horrorQuestions = [];
var magicQuestions = [];
var chevyQuestions = [];
var chosenCategory = [];
var newQuestion = [];
var alreadyShown = [];
var question = document.getElementById('question');
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');
var categories = document.getElementById('categories');
var answers = document.getElementById('answers');
var leaders = ['Star', 'Fighter', 'Enduran', 'Lance', 'Guest'];
var scores = [ 340, 310, 290, 280, 250];
console.log(cultQuestions);
console.log(actionQuestions);
console.log(scifiQuestions);
console.log(horrorQuestions);
console.log(magicQuestions);
console.log(chevyQuestions);

//Constructor function to generate the question arrays
function Questions(category, question, answer1, answer2, answer3, answer4, correctAns) {
  this.category = category;
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.correctAns = correctAns;
  if(this.category === 'cult') {
    cultQuestions.push(this);
  } else if(this.category === 'action') {
    actionQuestions.push(this);
  } else if(this.category === 'scifi') {
    scifiQuestions.push(this);
  } else if(this.category === 'horror') {
    horrorQuestions.push(this);
  } else if(this.category === 'magic') {
    magicQuestions.push(this);
  } else {
    chevyQuestions.push(this);
  }
}

//Function to send all of the questions and answers to the constructor function
function populate() {
  new Questions('cult', 'The Goonies search for which pirate\'s treasure?', 'Blackbeard', 'Davy Jones', 'Calico Jack', 'One Eyed-Willy', 4);
  new Questions('cult', 'Which 80s movie theme song was recorded in just 3 hours?', '"Oh Yeah" - Ferris Bueller\'s Day Off', '"Don\'t You (Forget About Me)" - The Breakfast Club', '"Storybook Love" - The Princess Bride', '"Ghostbusters" - Ghostbusters', 2);
  new Questions('magic', 'In the Labyrinth, what other name does the Goblin King go by (Hint: The Goblin King is played by David Bowie!)?', 'The Lord of the Labyrinth', 'Robert', 'Jareth', 'His Highness', 3);
  new Questions('magic', 'What is the name of Atreyu\'s horse in The NeverEnding Story?', 'Artex', 'Teeny Weeny', 'Bastian', 'Urgl', 1);
  new Questions('horror', 'Which movie is in the Guinness Book of Records for the most retakes of a single scene?', 'A Nightmare on Elm Street', 'The Shining', 'The Evil Dead', 'Poltergeist', 2);
  new Questions('horror', 'How many Nightmare on Elm Street films were made in the 80s?', 3, 4, 5, 6, 3);
  new Questions('scifi', 'Which 80s movie was the highest grossing film of the decade?', 'E.T. the Extra-Terrestrial', 'Return of the Jedi', 'Tron', 'Aliens', 1);
  new Questions('scifi', 'This is the only actor to be killed by an Alien, Predator, and a Terminator.', 'Sigourney Weaver', 'Carl Weathers', 'Lance Henriksen', 'Bill Paxton', 4);
  new Questions('chevy', 'What nickname did Chevy Chase\'s wife call him in the National Lampoon movies?', 'Buddy', 'Clark', 'Sparky', 'Mr. Griswold', 3);
  new Questions('cult', 'What song did Ducky lip sync in Pretty in Pink?', '"Try a Little Tenderness"', '"Nothing\'s Gonna Stop Us Now"', '"Saving All My Love for You"', '"Longer"', 1);
  new Questions('action', 'Name That Movie: "Snakes. Why did it have to be snakes?"', 'Indiana Jones and the Template of Doom', 'Crocodile Dundee', 'The Princess Bride', 'Raiders of the Lost Ark', 4);
  new Questions('magic', 'Jim Hensen\'s The Dark Crystal takes place in "another world, another time, in the age of _____."', 'surprise', 'wonder', 'magic', 'uncertainty', 2);
  new Questions('scifi', 'The main street set in Back to the Future is also the main street in what other 80s movie?', 'RoboCop', 'Repo Man', 'Gremlins', 'E.T. the Extra-Terrestrial', 3);
  new Questions('scifi', 'What is the single most valuable commodity in David Lynch\'s Dune?', 'Melange', 'Coffee', 'Salt', 'Plutonium', 1);
  new Questions('horror', 'Which is NOT a movie directed by John Carpenter?', 'The Fog', 'Halloween II', 'The Thing', 'Prince of Darkness', 2);
  new Questions('scifi', 'Whose work did NOT influence Blade Runner?', 'Philip K. Dick', 'Dan O\'Bannon', 'Jean Giraud', 'Arthur C. Clarke', 4);
  new Questions('magic', 'What god does Conan the Barbarian worship?', 'Odin', 'Kull', 'Crom', 'Bhaal', 3);
  new Questions('magic', 'What was the first DVD sent out on Netflix in 1998?', 'Beetlejuice', 'The Dark Crystal', 'The NeverEnding Story', 'Gremlins', 1);
  new Questions('chevy', 'In Three Amigos!, what did the Dusty Bottoms play for the other amigos to dance to in the cantina?', 'Arm in Arm', 'My Little Buttercup', 'Cheek to Cheek', 'My Love, Sweet Love', 2);
  new Questions('chevy', 'In National Lampoon\'s Christmas Vaction, which football team\'s hat did Clark wear?', 'Green Bay Packers', 'Chicago Bears', 'Pittsburgh Steelers', 'Kansas City Chiefs', 2);
  new Questions('chevy', 'In Caddyshack, Ty Webb and Judge Smails each bet what amount in the golf match?', '$20k', '$40k', '$60k', '$80k', 1);
  new Questions('chevy', 'In Funny Farm, what hat does Andy wear for most of the film?', 'Chicago Cubs', 'New York Mets', 'Boston Red Sox', 'New York Yankees', 2);
  new Questions('action', 'In The Warriors, what famous line does Luther screech?', 'Just beat it', 'Come out to play', 'Let\'s get down to it', 'Truth or dare', 2);
  new Questions('action', 'In Escape from New York, what is the only thing that Snake asks for when escaping?', 'A Shower', 'Water', 'A Phone Call', 'A Ride', 4);
  new Questions('action', 'In They Live, Nada is here to, "Kick Ass and _____?"', 'Take Names', 'Take a Break', 'Right Wrongs', 'Chew Bubblegum', 4);
  new Questions('action', 'In Highlander, the main villain - the Kurgan - says "it\'s better to _____."', 'be alone', 'burn the candle at both ends', 'burn out than to fade away', 'be feared than loved', 3);
  new Questions('horror', 'In Halloween, what were the teens watching on tv before Michael Myers arrives?', 'War of the Worlds', 'Frankenstein', 'Dracula', 'The Thing from Another World', 4);
  new Questions('horror', 'In The Lost Boys, what was the name of the main love interest?', 'Star', 'Peony', 'Soleil', 'Moonflower', 1);
  new Questions('horror', 'In Pet Sematary, what was the name of the evil cat that comes back to life?', 'Josie', 'Kitty', 'Churches', 'Maxy', 3);
  new Questions('scifi', 'In The Thing, what computer game did R.J. MacReady play while sitting in his cabin?', 'Tetris', 'Chess', 'Pong', 'Solitaire', 2);
  new Questions('scifi', 'In Aliens, what was the little girl\'s name who was the only survivor at the LV-426 settlement?', 'Sarah', 'Hadley', 'Newt', 'Salamander', 3);
  new Questions('scifi', 'In Blade Runner, what type of origami animal does Gaff make and leave outside Deckard\'s house?', 'Frog', 'Unicorn', 'Horse', 'Swan', 2);
  new Questions('scifi', 'In The Terminator, what was the only possession that Kyle had of Sarah Connor\'s?', 'Tapes', 'A Gun', 'A T-shirt', 'Polaroid', 4);
  new Questions('cult', 'In The Goonies, what was the name of the Fratelli family member whom Chunk befriends?', 'Mouth', 'Sloth', 'Sid', 'Brand', 2);
  new Questions('cult', 'In The Princess Bride, Buttercup knew it was Westley when he said what phrase to her?', 'Where you go I go', 'As I do hope you love me', 'As you wish', 'With your permission', 3);
  new Questions('scifi', 'In Back to the Future, how fast does Doc Brown tell Marty McFly he needs to drive in order to time travel in The DeLorean?', '66 mph', '77 mph', '88 mph', '99 mph', 3);
  new Questions('scifi', 'In E.T. the Extra-Terrestrial, what colorful candy did Elliot leave in a trail to attract E.T.?', 'Skittles', 'Reese\'s Pieces','M&M\'s', 'Runts', 2);
  new Questions('magic', 'In the Labyrinth, what animal does the Goblin King transform into?', 'Owl', 'Cat', 'Dog', 'Spider', 1);
  new Questions('magic', 'In Willow, the main character was not always a powerful sorcerer; what was he beforehand?', 'Farmer', 'Fisher', 'Baker', 'Shopkeeper', 1);
  new Questions('magic', 'In The NeverEnding Story, what was the name of Bastion\'s luckdragon?', 'Troy', 'Artayu', 'Falkor', 'Jaryth', 3);
  new Questions('magic', 'In Clash of the Titans, which titan does Perseus kill to save Andromeda?', 'Kraken', 'Uranus', 'Mars', 'Cronus', 1);
  new Questions('action', 'Bruce Willis was paid an "unheard of" sum of money to star in Die Hard. How much was it?', '$3 Million', '$4 Million', '$5 Million', '$6 Million', 3);
  new Questions('action', 'Name That Movie: "Son, your ego is writing checks your body can\'t cash!"', 'Lethal Weapon', 'Top Gun', 'Bloodsport', 'Beverly Hills Cop', 2);
  new Questions('horror', 'What was the first movie to win an Academy Award for Best Makeup?', 'An American Werewolf in London', 'The Evil Dead', 'Halloween II', 'Friday the 13th', 1);
  new Questions('horror', 'What movie did Andy Warhol call, "A Clockwork Orange of the 1980s?"', 'A Nightmare on Elm Street', 'Re-Animator', 'Christine', 'Videodrome', 4);
  new Questions('horror', 'Who did Steven Spielberg initially ask to write the Poltergeist script?', 'John Carpenter', 'Tobe Hooper', 'Stephen King', 'Dario Argento', 3);
  new Questions('cult', 'How many times was the name "Heather" said during the movie Heathers?', '70', '80', '90', '100', 3);
  new Questions('cult', 'David Lynch\'s Blue Velvet contains subtle references to which historical figure\'s assassination?', 'John F. Kennedy', 'Abraham Lincoln', 'Archduke Franz Ferdinand', 'Martin Luther King Jr.', 2);
  new Questions('cult', 'In the original script of Bill & Ted\'s Excellent Adventure, the time machine was a _____?', 'Treadmill', 'Van', 'Closet', 'Hot Tub', 2);
  new Questions('cult', 'Which movie on IMDB is rated out of 11 instead of 10?', 'Ghostbusters', 'RoboCop', 'Scarface', 'This is Spinal Tap', 4);
  new Questions('chevy', 'How many National Lampoon\'s Vacation movies came out in the 80s?', 1, 2, 3, 4, 3);
  new Questions('chevy', 'The Griswald family win a trip to Europe on what game show?', 'The Price Is Right', 'You Bet Your Life', 'Pig In A Poke', 'Wacky Wally World', 3);
  new Questions('chevy', 'In National Lampoon\'s European Vacation, what Monty Python actor do the Griswalds litterally keep running into?', 'Eric Idle', 'John Cleese', 'Terry Gilliam', 'Terry Jones', 1);
  new Questions('chevy', 'Which "Cheers" actor was in the movie Fletch with Chevy Chase', 'Woody Harrelson', 'Kelsey Grammer', 'George Wendt', 'Ted Danson', 3);
  new Questions('cult', 'Who did not star in the 1982 classic, Fast Times at Ridgemont High?', 'Sean Penn', 'Forest Whitaker', 'Kevin Kline', 'Nicolas Cage', 3);
  new Questions('chevy', 'What 1980 movie did Chevy Chase turn down a leading role in?', 'Airplane', 'American Gigolo', 'Stir Crazy', 'Private Benjamin', 2);
  new Questions('chevy', 'What country was Emmett Fitz-Hume and Austin Millbarge sent to in Spies Like Us?', 'Saudi Arabia', 'Iran', 'Pakistan', 'Afghanistan', 3);
  new Questions('cult', 'In Scarface, Tony Montana came to America from which country?', 'Columbia', 'Puerto Rico', 'Italy', 'Cuba', 4);
  new Questions('chevy', 'What movie did Chevy Chase star in with Gregory Hines?', 'Deal Of The Century', 'The Couch Trip', 'Running Scared', 'Modern Problems', 1);
  new Questions('action', 'Which popular wrestler starred in the movie they live?', 'Hulk Hogan', 'Andre The Giant', '"Rowdy" Roddy Piper', 'Jimmy "Superfly" Snuka', 3);
}
populate();
document.getElementById('populate-question').hidden = true;

function randomQuestion() {
  var randomNumber = Math.floor(Math.random() * chosenCategory.length);
  newQuestion = chosenCategory[randomNumber];
  noRepeats(newQuestion);
  sendQuestion();
  alreadyShown.push(newQuestion);

}

function noRepeats(question){
  for (var i = 0; i < alreadyShown.length; i++){
    if (question !== alreadyShown[i]){
      sendQuestion();
    } else {
      console.error('This question has already shown. Please choose another one.');
      randomQuestion();
    }
  }
}

//Function that sends the questions to the form on the game screen
function sendQuestion() {
  document.getElementById('populate-question').hidden = false;
  question;
  question.textContent = newQuestion.question;
  ans1;
  ans1.textContent = newQuestion.answer1;
  ans2;
  ans2.textContent = newQuestion.answer2;
  ans3;
  ans3.textContent = newQuestion.answer3;
  ans4;
  ans4.textContent = newQuestion.answer4;
}

//Function that checks for the correct answer and adds the points
function pickAnswer(event) {
  event.preventDefault();
  target = event.target.id;
  console.log(target);
  console.log(newQuestion.correctAns);
  if('ans' + newQuestion.correctAns === target) {
    answers.removeEventListener('click', pickAnswer);
    totalPoints += 50;
    var correctAns = document.getElementById('question');
    correctAns.textContent = 'You have chosen wisely! You now have ' + totalPoints + ' points.' + ' Pick another question.';
    categories.addEventListener('click', pickCategory);
    document.getElementById('answers').hidden = true;
    
    if(questionsTotal === 0) {
      localStorage.setItem('totalPoints', 0);
    }

  } if ('ans' + newQuestion.correctAns !== target) {
    totalPoints += -10;
    var wrongAns = document.getElementById('question');
    wrongAns.textContent = 'Wrong! you have lost 10 points, choose wisely';

  localStorage.setItem('totalPoints', totalPoints);
  console.log(totalPoints, target);
  checkTen();
}


//Function that runs when the user has answered ten questions, display scoreboard
function checkTen() {
  questionsTotal++;
  if (questionsTotal === 10) {
    document.getElementById('categories').hidden = true;
    checkStorage();
    checkScore();
    leaderBoard();
  } else {
    console.log(questionsTotal);
  }
}


function checkStorage() {
  if(localStorage.leaders) {
    var getLeaders = localStorage.getItem('leaders');
    leaders = JSON.parse(getLeaders);
    var getScores = localStorage.getItem('scores');
    scores = JSON.parse(getScores);
  }
}

function checkScore() {
  var tempPoints = Number(localStorage.totalPoints);
  var tempUser = localStorage.userName;
  leaders;
  for(var i = 0; i < scores.length; i++) {
    if(tempPoints >= scores[i]) {
      var tempScore = scores[i];
      scores[i] = tempPoints;
      tempPoints = tempScore;
      var tempLeader = leaders[i];
      leaders[i] = tempUser;
      tempUser = tempLeader;
    }
  }
  var setLeader = JSON.stringify(leaders);
  localStorage.setItem('leaders', setLeader);
  var setScores = JSON.stringify(scores);
  localStorage.setItem('scores', setScores);
}

function leaderBoard() {
  var message = document.getElementById('message');
  var ans5 = document.getElementById('ans5');
  ans5.textContent = '';
  message.textContent = 'Congratulations ' + localStorage.userName + ' you scored ' + totalPoints + ' points';
  document.getElementById('answers').hidden = false;
  question.textContent = 'LEADERBOARD';
  ans1.textContent = '1.   ' + leaders[0] + '   ' + scores[0];
  ans2.textContent = '2.   ' + leaders[1] + '   ' + scores[1];
  ans3.textContent = '3.   ' + leaders[2] + '   ' + scores[2];
  ans4.textContent = '4.   ' + leaders[3] + '   ' + scores[3];
  ans5.textContent = '5.   ' + leaders[4] + '   ' + scores[4];

function leaderBoard() {
  var ans5 = document.getElementById('ans5');
  var message = document.getElementById('message');
  ans5.textContent = '';
  var leaders = ['Star', 'Fighter', 'Enduran', 'Lance', 'Guest'];
  var topScores = [ 340, 310, 290, 280, 250];
  message.textContent = 'Congratulations ' + localStorage.userName + ' you scored ' + totalPoints + ' points';
  document.getElementById('answers').hidden = false;
  question.textContent = 'LEADERBOARD';
  ans1.textContent = '1.   ' + leaders[0] + '   ' + topScores[0];
  ans2.textContent = '2.   ' + leaders[1] + '   ' + topScores[1];
  ans3.textContent = '3.   ' + leaders[2] + '   ' + topScores[2];
  ans4.textContent = '4.   ' + leaders[3] + '   ' + topScores[3];
  ans5.textContent = '5.   ' + leaders[4] + '   ' + topScores[4];

}

//Function that runs when a player chooses a category
function pickCategory(event) {
  event.preventDefault();
  document.getElementById('answers').hidden = false;
  answers.addEventListener('click', pickAnswer);
  target = event.target.id;
  if(target === 'cult') {
    chosenCategory = cultQuestions;
  } else if(target === 'action') {
    chosenCategory = actionQuestions;
  } else if(target === 'scifi') {
    chosenCategory = scifiQuestions;
  } else if(target === 'horror') {
    chosenCategory = horrorQuestions;
  } else if(target === 'magic') {
    chosenCategory = magicQuestions;
  } else {
    chosenCategory = chevyQuestions;
  }
  console.log(chosenCategory);
  randomQuestion();

}

}

//Event listeners
categories.addEventListener('click', pickCategory);
answers.addEventListener('click', pickAnswer);







