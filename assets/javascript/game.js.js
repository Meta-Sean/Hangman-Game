
    // Global Variables
var winCounter = 0;
var lossCounter = 0;
var wrongLetters = [];
var guessesLeft = 9;
var wordLetters = [];
var unGuessed = 0;
var word = "";
var userGuess;
var answerArray = [];
var wordBank = ['brazil', 'germany', 'italy', 'argentina','spain','england','france','netherlands','urguguay','sweden'];

    //Pick a random word from the word bank
    var word = wordBank[Math.floor(Math.random() * wordBank.length)];
    //Seperate each letter and store in word letters array.
    wordLetters = word.split("");
    // Fill the unguessed variable with number of letters in word/word letters.
    console.log(wordLetters);
    console.log(word);
    // Loop through the length of seperate letters and add '_''s to the answer array 
    for ( var i = 0; i < wordLetters.length; i++){
        answerArray.push('_');
    }
    console.log(answerArray);
// Keypress triggers main game functionality
document.onkeyup = function(event){
      // Store the key press
    var userGuess = event.key;
    //See what key we pressed
    console.log('User pressed', userGuess);
     
    // Tried this for loop many ways, but could not get it to push the wrong letter the amount of the length of the word so created.
    // A false variable for the loop.
    var letterCheck = false;
    //Loop through for the number of length of wordletters array then see if the userGuess matches a letter in the word.
    for(var i = 0; i < wordLetters.length; i++){
        if(wordLetters[i] === userGuess){
            letterCheck = true;
        }    
    }
    console.log(letterCheck);
// Conditional if letterCheck is true we need to fill the answer array with chose letter.
    if(letterCheck){
        // Loops through the word if it letter = parameter then fill the index on anwserArray with letter parameter.
        for(var i = 0; i < wordLetters.length; i++){
            if(wordLetters[i] === userGuess){
                answerArray[i] = userGuess;    
            }
        }
    }
    // If conditional doesn't fire the wrong guess was chosen, we decrement guessesLeft and push the wrong letter to the wrong letters array.
    else {
        guessesLeft--;
        wrongLetters.push(userGuess);
    }
    //Win Condition and Reset
    if(wordLetters.join(" ") === answerArray.join(" ")){
        winCounter++;
        alert('You Win The Anwser was ' + word);
        document.getElementById('win-counter').innerHTML = '<p> Win Counter: ' + winCounter + '</p>';
         answerArray = [];
         guessesLeft = 9;
         wrongLetters = [];
         word = wordBank[Math.floor(Math.random() * wordBank.length)];
         wordLetters = word.split("");
         for ( var i = 0; i < wordLetters.length; i++){
            answerArray.push('_');
        }
        
    }
    // Loss Condition and Reset
    else if (guessesLeft === 0){
        lossCounter++;
        alert('You Lose The Anwser was ' + word);
        document.getElementById('loss-counter').innerHTML = '<p> Loss Counter: ' + lossCounter + '</p>';
         answerArray = [];
         guessesLeft = 9;
         wrongLetters = [];
         word = wordBank[Math.floor(Math.random() * wordBank.length)];
         wordLetters = word.split("");
         for ( var i = 0; i < wordLetters.length; i++){
            answerArray.push('_');
        }
        
    }

    // After a keypress use the DOM to update the HTML
    document.getElementById('word-bank').innerHTML = answerArray.join(" ");
    document.getElementById('guesses-left').innerHTML ='<p> Guesses left: ' + guessesLeft + '</p>';
    document.getElementById('wrong-letters').innerHTML = '<p> Already Guessed: '+ wrongLetters.join(",") + '</p>';


}