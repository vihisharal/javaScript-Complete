function print(x) {
    console.log(x);
}

function topictitle(x) {
    console.log("\n\n>>>>>>>>>>" + x + "<<<<<<<<<<<\n\n");
}

function subtopictitle(x) {
    console.log("\n    >>>" + x + "<<<\n");
}

function end() {
    print('/*++++++++++++++++++++++++++++++++++++++++*/');
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/


var QuestionController = (function () {
    // to add shufle method to array in genral prototype
    Array.prototype.shufle = function () {
        for (var i = this.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        }
    }


    var data = {
        qset: {
            qmodel: '',
            set: [],
            currentIndex: -1,
            scoreSet: []
        }
    };

    var Qmodel = function (question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    };

    var ColorPuzzleSet = [
        ['What is color of sky?', ['red', 'blue', 'white', 'black'], 1],
        ['What is color of sea?', ['red', 'brown', 'blue', 'black'], 2],
        ['What is color of trees?', ['yellow', 'orange', 'green', 'purple'], 2],
        ['What is color of apple?', ['red', 'brown', 'blue', 'black'], 0],
        ['What is color of hair?', ['red', 'brown', 'blue', 'black'], 3],
        ['What is color of soil?', ['white', 'brown', 'green', 'black'], 1]
    ];

    var QSets = {
        color: ColorPuzzleSet
    }


    var createQuestionModel = function (sdata) {
        var newModel = new Qmodel(sdata[0], sdata[1], sdata[2]);
        return newModel;
    };

    return {
        createSet: function (settype, noOfQuestion) {
            console.log(settype);
            settype.shufle();
            console.log(settype);
            data.qset.set = settype.slice(0, noOfQuestion);
        },
        qSetType: function () {
            return QSets;
        },
        newQuestion: function () {
            var newq;
            if (data.qset.currentIndex < data.qset.set.length - 1) {
                index = ++data.qset.currentIndex;
                data.qset.qmodel = createQuestionModel(data.qset.set[index]);
                newq = data.qset.qmodel;
                return newq;
            } else {
                data.qset.qmodel = null;
                return null;
            }
        },
        answerCheck: function (answer) {
            var output = {
                score: null ,
                trueanswer: null            
            }
            if (data.qset.qmodel === null) {
                output.score=data.qset.scoreSet.filter(ans => ans === true).length;
            } else {
                truthvalue = (data.qset.qmodel.answer === Number(answer));
                data.qset.scoreSet.push(truthvalue);
                output.trueanswer=truthvalue;
            }
            return output;
        },
        testing: function () {
            return data.qset.set;
        }
    };


})();

var UIController = (function () {


})();

var Controller = (function (qCtr, uCtr) {
    var setupEventListners = function () {
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                //console.log('Enter Press...: for answer Checking');
                var answer = qCtr.answerCheck(userAnswer);
                if(answer.trueanswer===null){
                    console.log('Test Complete');
                    console.log('your Score: '+ (answer.score));
                }
                else{
                    console.log(answer.trueanswer);    
                }
                
            }

            if (event.keyCode === 32 || event.which === 32) {
                console.log('Space Press...:New Question');
                newQuestion();
            }
        });

    };
    var userAnswer;

    var newQuestion = function () {
        var newQuestion;
        newQuestion = qCtr.newQuestion();
        if (newQuestion != null) {
            console.log("Question : " + newQuestion.question);
            newQuestion.options.forEach(function (current, index, array) {
                console.log(index + ' . ' + current);
            });
            userAnswer = prompt('Choose your answer: ');
            console.log('Your answer: ' + userAnswer);
            console.log('Enter Press...: for answer Checking');
        } else {
            console.log('No further Question...');
        }
    };



    return {
        init: function () {
            console.log("App Start...!");
            setupEventListners();
            // 1. setup the set of questions
            var typeOfquestionSet = qCtr.qSetType();
            console.log(typeOfquestionSet);
            console.log(typeOfquestionSet.color);
            qCtr.createSet(typeOfquestionSet.color, 3);
        }
    }

})(QuestionController, UIController);

Controller.init();

/*
  <div id="quation-box">
        <div id="score">Score<input id='scoreI' type="text" readonly="readonly"/></div>
        <div id="quation-header">
            <div id="quation">Quation</div>
        </div>
        <div id="options">Options</div>
        <div id="quation-footer">
            <div id="skip">Skip</div>
            <div id="correctness">Correctness</div>
            <div id="exit">Exit</div>
        </div>
    </div>*/
