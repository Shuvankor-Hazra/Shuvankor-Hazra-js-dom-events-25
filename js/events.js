// Option 1 directly set on the HTML function
// <button onclick="console.log(65)">Another Button</button>

// Option 2 add onclick function on the HTML element
// Important: We well use this
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option 3
// <button id="make-blue">Make Blue</button>
const makeBlueBtn = document.getElementById("make-blue");
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "Blue";
}

// Option 3 another 
// <button id="make-purple">Make Purple</button>
const makePurpleBtn = document.getElementById("make-purple");
makePurpleBtn.onclick = function makePurple() {
  document.body.style.backgroundColor = "Purple";
};

// Option 4
// <button id="make-pink">Make Pink</button>
const makePinkBtn = document.getElementById("make-pink");
makePinkBtn.addEventListener("click", makePink);
function makePink() {
    document.body.style.backgroundColor = "Pink";
}

// Option 4 another
// <button id="make-green">Make Green</button>
const makeGreenBtn = document.getElementById("make-green");
makeGreenBtn.addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "Green";
});

// Option 4 final
// Important [we well use this sometime]
// <button id="make-goldenrod">Make Goldenrod</button>
document.getElementById("make-goldenrod").addEventListener("click", function () {
    document.body.style.backgroundColor = "Goldenrod";
  });


// ! 25-3 finished --------