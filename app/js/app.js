import "../css/app.css"

const App = {
  fragments: [],
  splitSecret: function() {
    var secret = parseInt(document.getElementById("secret").value);
    if (isNaN(secret)) {
      alert("Please enter an integer as secret.");
      return;
    }

    var n = parseInt(document.getElementById("n").value);
    if (isNaN(n)) {
      alert("Please enter an integer as number of fragments.");
      return;
    }

    var k = parseInt(document.getElementById("k").value);
    if (isNaN(k)) {
      alert("Please enter an integer as threshold.");
      return;
    }

    var coefficients = new Uint32Array(k - 1);
    crypto.getRandomValues(coefficients);
    console.log(coefficients);

    // var points = [];
    // for (var i = 1; i <= n; i++) {
    //   var acc = secret;
    //   for (var j = 1; j <= k; j++) {
    //     acc +=
    //   }
    //   points.push({ i, acc });
    // }
    //
    // console.log(points);
  },

  addFragment: function() {
    var elem = document.getElementById("fragment");

    var value = parseInt(elem.value)
    if (isNaN(value)) {
      alert("Please enter an integer as fragment.");
      return;
    }

    this.fragments.push(value);
    elem.value = "";
  },

  calculateSecret: function() {

  }
};

window.App = App;
