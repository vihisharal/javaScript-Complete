function print(x){
    console.log(x);
}
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,maxScore,gameDecision,preScore;
//var dice;
initializingGame();

/*
// dice = Math.floor(Math.random()*6) + 1;

print(dice);
//document.querySelector('#current-'+activePlayer).textContent ='<em>' + dice + '</em>';

// if you are adding some additional html text then use innerHTML  
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>';

// if you are not using any html code then this ok 
document.querySelector('#current-'+activePlayer).textContent = dice;

// get score of player 
var x= document.querySelector('#score-'+activePlayer).textContent;
print(x);   
*/


// event listner with anonymous function call for dice 
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameDecision){
        // random number
        var dice = Math.floor(Math.random()*6) + 1;
        var dice2 = Math.floor(Math.random()*6) + 1;

        // 2 .display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display ='block';
        diceDOM.src ='dice-'+dice+'.png';
        
        var dice2DOM = document.querySelector('.dice2');
        dice2DOM.style.display ='block';
        dice2DOM.src ='dice-'+dice2+'.png';

        // 3. Update the round score if the rolled number not a 1 
        if( (dice === 1 || dice2 ===1)  || (dice ===6 && dice2 ===6)){
            nextPlayer();        
        }
        else {
            if( preScore ===6 && preScore === (dice+dice2) ){
                print('preScore : '+ preScore );
                print('dice : '+ dice );
                print('dice : '+ dice2 );
                print('activePlayer : '+activePlayer)
                nextPlayer();  
            } 
            else {
                    roundScore += (dice+dice2);
                    preScore =(dice+dice2);
                    document.getElementById('current-'+activePlayer).textContent=roundScore;                
            }
        }        
    }
});

// event listner with anonymous function call for dice 
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameDecision){        
        // update score of current player
        scores[activePlayer] +=roundScore;

        // update score of current player 
        document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];

        // check player won the game
        if(scores[activePlayer]>maxScore){
            document.getElementById('name-'+activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.dice2').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
            gameDecision=false;
        }
        else{
            nextPlayer();        
        }            
    }
});

// new game restart
document.querySelector('.btn-new').addEventListener('click',initializingGame);


// command activity next player
function nextPlayer(){
        // add/removed active from player  
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        // change to another player
        activePlayer ===0 ? activePlayer=1:activePlayer =0;
        roundScore =0;
        document.getElementById('current-0').textContent= '0';
        document.getElementById('current-1').textContent= '0';    
        document.querySelector('.dice').style.display='none';
        document.querySelector('.dice2').style.display='none';
}

function initializingGame(){
    scores = [0,0];
    roundScore=0;
    maxScore=50;
    gameDecision=true;
    preScore=0;
    // change the css property of having id dice
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice2').style.display='none';

    // initial adjustment
    document.getElementById('score-0').textContent= '0';
    document.getElementById('score-1').textContent= '0';
    document.getElementById('current-0').textContent= '0';
    document.getElementById('current-1').textContent= '0';
    document.getElementById('name-0').textContent = 'Player 0';
    document.getElementById('name-1').textContent = 'Player 1';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.btn-max').textContent= maxScore;
    // for new active player rondomly
    activePlayer =Math.floor(Math.random() *2);
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
}


// event listner with anonymous function call for set score 
document.querySelector('.btn-set').addEventListener('click',function(){
  var setScore;
    setScore=prompt("Set Max Score Winning Game");
    setScore =Number(setScore);
    if(setScore == NaN){
         document.querySelector('.btn-max').textContent= 100;
        maxScore =100;
    }
    else {
        document.querySelector('.btn-max').textContent= setScore;
        maxScore=setScore;
    }      
});

// challenge 
/*
1. Player loose hit ENTIRE score when he/she rolls two 6 in row.After that,it's the next player's turn
2. Add an input field to HTML where players can set the winning score,so that they can change predefined winning score.
3. Add another dice to the game.so there are two dice now.The player can his cuurent score when one of them is a 1.

*/