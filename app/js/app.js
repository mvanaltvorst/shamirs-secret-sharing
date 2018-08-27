import "../css/app.css"

const App = {
  splitSecret: function() {
    try {
      console.log(document.getElementById("secret"));
      var secret = parseInt(document.getElementById("secret").value);
    } catch (_) {
      alert("Please enter an integer as secret.");
      return;
    }
    try {
      var n = parseInt(document.getElementById("n").value);
    } catch (_) {
      alert("Please enter an integer as number of fragments.");
      return;
    }
    try {
      var k = parseInt(document.getElementById("k").value);
    } catch (_) {
      alert("Please enter an integer as threshold.");
      return;
    }

    var coefficients = new Uint32Array(k - 1);
    crypto.getRandomValues(coefficients);
    console.log(coefficients);
  }
};

window.App = App;
