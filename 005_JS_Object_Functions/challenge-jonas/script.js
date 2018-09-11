/*answer to 1 to 7*/
/*
(function () {
    // Quation constuctor
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuation = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + " " + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('Correct Answer!');
        } else {
            console.log('Wrong Answer. Try again!');
        }
    }

    var q1 = new Question('What is color of sky?', ['red', 'blue', 'white', 'black'], 1);
    var q2 = new Question('What is color of sea?', ['red', 'brown', 'blue', 'black'], 2);
    var q3 = new Question('What is color of trees?', ['yellow', 'orange', 'green', 'purple'], 2);
    var q4 = new Question('What is color of apple?', ['red', 'brown', 'blue', 'black'], 0);
    var q5 = new Question('What is color of hair?', ['red', 'brown', 'blue', 'black'], 3);
    var q6 = new Question('What is color of soil?', ['white', 'brown', 'green', 'black'], 1);

    var questions = [q1, q2, q3, q4, q5, q6];
    var n = Math.floor(Math.random() * questions.length)
    questions[n].displayQuation();
    var answer = parseInt(prompt('Please Select the correct answer .'));
    questions[n].checkAnswer(answer);

})();
*/

/*answer to 8 to 11 Exprt leval*/

(function () {
    // Quation constuctor
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuation = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + " " + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans,callback) {
        var sc;
        console.clear();
        if (ans === this.correct) {
            console.log('Correct Answer!');
            sc=callback(true);            
        } else {
            console.log('Wrong Answer. Try again!');
            sc=callback(false);
        }
        this.displayScore(sc); 
    }
    
    Question.prototype.displayScore=function(score){
        console.log('your current score is : '+score);
        console.log('\n------------+++-----------   \n');
    }

    var q1 = new Question('What is color of sky?', ['red', 'blue', 'white', 'black'], 1);
    var q2 = new Question('What is color of sea?', ['red', 'brown', 'blue', 'black'], 2);
    var q3 = new Question('What is color of trees?', ['yellow', 'orange', 'green', 'purple'], 2);
    var q4 = new Question('What is color of apple?', ['red', 'brown', 'blue', 'black'], 0);
    var q5 = new Question('What is color of hair?', ['red', 'brown', 'blue', 'black'], 3);
    var q6 = new Question('What is color of soil?', ['white', 'brown', 'green', 'black'], 1);

    var questions = [q1, q2, q3, q4, q5, q6];

    function score(){
        var sc=0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }
    var keepScore=score();
    
    function nextQuation() {
        var n = Math.floor(Math.random() * questions.length)
        questions[n].displayQuation();
        var answer = prompt('Please Select the correct answer.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer),keepScore);
            nextQuation();
        }
    }
    nextQuation();
})();
