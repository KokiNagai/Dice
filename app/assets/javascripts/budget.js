// Controllerモジュール========================

let budgetController = (function() {
  let Expense  = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let Income  = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };
  return {
    addItem: function(type, des, val) {
      let NewItem, ID;
      // create new Id
      if (data.allItems[type].length > 0) {
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1
    } else {
      ID = 0;
    }
  // create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      // push it into our data structure
      data.allItems[type].push(newItem)

      // return the new element
       return newItem;
    },
    testing: function() {
      console.log(data);
    }
  }
})();

// ユーザーインタフェースモジュール==============
let UIController = (function() {
  let DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();

// APIモジュール===================================

let controller = (function(budgetCtrl, UICtrl) {

  let setupEventListeners = function() {
    let DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', ctrlAddItem);
  };

  let ctrlAddItem = function() {
    let input, newItem;
    input = UICtrl.getInput();
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
  }

  return {
    init: function() {
      console.log('Appliuc');
      setupEventListeners();
    }
  }
})(budgetController, UIController);

controller.init();
