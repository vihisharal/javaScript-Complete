// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.persentage = -1;
    };

    Expense.prototype.calcPersentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.persentage = Math.round(this.value / totalIncome * 100);
        } else {
            this.persentage = -1;
        }
    }

    Expense.prototype.getPersentage = function () {
        return this.persentage;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (current) {
            sum += current.value;
        });
        data.totals[type] = sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }
    return {
        addItem: function (type, des, val) {
            var newItem;
            var Id;
            //[1,2,3,4,5], next Id=6;
            //[1,2,3,6,8], next Id=9;
            // Id =last Id +1; 

            // Create new Id
            if (data.allItems[type].length > 0) {
                Id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                Id = 0;
            }

            //create new item based on 'inc'/ 'exp'
            if (type === 'exp') {
                newItem = new Expense(Id, des, val);
            } else if (type === 'inc') {
                newItem = new Income(Id, des, val);
            }
            // push into data structure 
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;
        },

        deleteItem: function (type, id) {
            var ids, index
            // id =6 ,ids=[1,2,6,7,9]
            //  index =2
            ids = data.allItems[type].map(function (current) {
                return current.id;
            });

            index = ids.indexOf(id);
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
                // id =6 ,ids=[1,2,7,9]
            }
        },

        calculateBudget: function () {
            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate budget: income -expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round(data.totals.exp * 100 / data.totals.inc);
            } else {
                data.percentage = -1;
            }

        },

        calculatePersentages: function () {
            /*
            a=20
            b=40
            c=40
            income=100
            ap=20/100 *100=20%
            bp=40/100 *100=40%
            cp=40/100 *100=40%
            */
            data.allItems.exp.forEach(function (cur) {
                cur.calcPersentage(data.totals.inc);
            });
        },

        getPersentage: function () {
            var allPerc;
            allPerc = data.allItems.exp.map(function (cur) {
                return cur.getPersentage();
            });
            return allPerc;
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalexp: data.totals.exp,
                percentage: data.percentage
            };
        },
        testing: function () {
            console.log(data);
        }
    }

})();


// UI CONTROLLER
var UIController = (function () {

    var DOMString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'

    }
    var formatNumber = function (num, type) {
        var numSplit, int, des;
        /*
        + or - before number
        exactly 2 decimal points
        comma seperating thousands
            
        12323.324 -> + 12,323.324 
        2000 -> + 2,000.00
        */
        num = Math.abs(num);
        num = num.toFixed(2); //js convert this primitive to object

        numSplit = num.split('.');
        int = numSplit[0];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, int.length);
        }

        des = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + des;
    };

    var nodeListForEach = function (list, callbackFunc) {
        for (var i = 0; i < list.length; i++) {
            callbackFunc(list[i], i);
        }
    };
    return {
        getinput: function () {
            return {
                type: document.querySelector(DOMString.inputType).value, //will be either inc / exp
                description: document.querySelector(DOMString.inputDescription).value,
                value: parseFloat(document.querySelector(DOMString.inputValue).value)
            };
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;
            // create HTML String with placeholder text

            if (type === 'inc') {
                element = DOMString.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description" >%description%</div> <div class="right clearfix" ><div class = "item__value" >%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div> </div>'
            } else if (type === 'exp') {
                element = DOMString.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            //Replace the placeholder text some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));


            // Insert the HTML into the DOM 
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function (selectorId) {
            var el = document.getElementById(selectorId);
            el.parentNode.removeChild(el);
        },

        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMString.inputDescription + ',' + DOMString.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function (current, index, array) {
                current.value = "";
            });
            fieldsArr[0].focus();

        },
        displaybudget: function (obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMString.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMString.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMString.expensesLabel).textContent = formatNumber(obj.totalexp, 'exp');


            if (obj.percentage > 0) {
                document.querySelector(DOMString.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMString.percentageLabel).textContent = "---";
            }

        },

        displayPersentages: function (persentages) {

            var fields = document.querySelectorAll(DOMString.expensesPercLabel); // retuens a node list

            nodeListForEach(fields, function (current, index) {

                if (persentages[index] > 0) {
                    current.textContent = persentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },

        displayMonth: function () {
            var now, year, month, months;
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            now = new Date();

            month = now.getMonth();

            year = now.getFullYear();
            document.querySelector(DOMString.dateLabel).textContent = months[month] + ' ' + year;
        },

        changedType: function () {

            var fields = document.querySelectorAll(
                DOMString.inputType + ',' +
                DOMString.inputDescription + ','+
                DOMString.inputValue);
            
            nodeListForEach(fields,function(cur){
                cur.classList.toggle('red-focus');
            });
            
            document.querySelector(DOMString.inputBtn).classList.toggle('red');

        },

        getDOMString: function () {
            return DOMString;
        }
    }
})();


//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setUpEventListeners = function () {
        var DOM = UICtrl.getDOMString();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            // older browser used 'which' property 
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };

    var updateBudget = function () {

        // 1. calculate budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displaybudget(budget);
    };

    var updatePersentages = function () {

        // 1. calculate persentage
        budgetCtrl.calculatePersentages();

        // 2. Read persentages from the controller
        var persentages = budgetCtrl.getPersentage();

        // 3. Update the UI with the new persentages
        UICtrl.displayPersentages(persentages);
    };

    var ctrlAddItem = function () {
        var input, newItem
        // 1. get the filed input data
        input = UICtrl.getinput();
        //console.log(input);
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update budget
            updateBudget();

            // 6. Calculate and update persentages
            updatePersentages();
        }
    };

    var ctrlDeleteItem = function (event) {
        var itemId, splitId, type, Id;
        itemId = event.target.parentNode.parentNode.parentNode.id;
        if (itemId) {
            //inc-1
            splitId = itemId.split('-');

            console.log(splitId);
            type = splitId[0];
            Id = parseInt(splitId[1]);

            // 1. delete the item frmo data structure
            budgetCtrl.deleteItem(type, Id);

            // 2. delete the item frmo UI
            UICtrl.deleteListItem(itemId);

            // 3. Update and show new budget
            updateBudget();

            // 4. Calculate and update persentages
            updatePersentages();

        }
    };

    return {
        init: function () {
            console.log('Application Started');
            UICtrl.displayMonth();
            UICtrl.displaybudget({
                budget: 0,
                totalInc: 0,
                totalexp: 0,
                percentage: -1
            });
            setUpEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();
