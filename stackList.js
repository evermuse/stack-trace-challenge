var stackListGenerator = (function() {

  var newInput = document.getElementById(newInput);
  var head = null;
  var tail = null;
  var stackList = null;

  function _add(item) {

    var newNode = {

      value : item,
      next : null

    };

    if (head === null) {

      head = newNode;
      tail = newNode;
      stackList = newNode;

    } else {

      tail.next = newNode;
      tail = newNode;

    }

    return newNode;

  }

  return {

    add : _add,
    get : _get

  };

  return stackList;

})();