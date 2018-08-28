import "../css/app.css"

const bigInt = require("big-integer");

//TODO: p should be a prime bigger than 2^64
const p = bigInt(2).pow(127).minus(1);

const App = {
  fragments: [],
  splitSecret: function() {
    try {
      var secret = bigInt(document.getElementById("secret").value);
    } catch (_) {
      alert("Please enter an integer as secret.");
      return;
    }

    try {
      var n = bigInt(document.getElementById("n").value);
    } catch (_) {
      alert("Please enter an integer as number of fragments.");
      return;
    }

    try {
      var k = bigInt(document.getElementById("k").value);
    } catch (_) {
      alert("Please enter an integer as threshold.");
      return;
    }


    // Obtain k-1 random numbers
    var randVals = new Uint32Array(k - 1);
    crypto.getRandomValues(randVals);
    var coefficients = [];
    for (var val of randVals) {
      coefficients.push(bigInt(val));
    }
    // a0 = secret, a1 = coefficients[0], a2 = coefficients[1]....

    // f(x) = a0 + (a1 * x) + (a2 * x^2) + (a3 * x^3)
    var points = [];
    for (var i = 1; i <= n; i++) {
      //TODO: calculate f(x) in another function
      var acc = secret; // f(x) = a0
      for (var j = 1; j < k; j++) {
        // f(x) = ... + aQ * (x^Q) + ...
        acc = acc.plus(coefficients[j - 1].times(bigInt(i).pow(j)));
      }
      points.push({ x: i, y: acc.mod(p) });
    }

    console.log(points);

    // Clear list first
    const ul = document.getElementById("output");
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }

    // Add points to list
    for (var point of points) {
      var li = document.createElement("li");
      li.appendChild(
        document.createTextNode(
          "(" +
          point.x.toString() +
          ", " +
          point.y.toString() +
          ")"
        )
      );
      ul.appendChild(li);
    }
  },

  addFragment: function() {
    var elem = document.getElementById("fragment");

    //TODO: add proper fragment parsing
    var value = parseInt(elem.value)
    if (isNaN(value)) {
      alert("Please enter an integer as fragment.");
      return;
    }
    //TODO: add to the HTML list
    this.fragments.push(value);
    elem.value = "";
  },

  calculateSecret: function() {

  }
};

window.App = App;
