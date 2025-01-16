let body = `
        <h1 id="h1heading">Tic Tac Toe</h1>
        <div id="turn-msg">it's the <span id="turn"></span> turn to start: </div>
<div id="container">
<table id="gameTable">
              <tr>
            <td id ="1" onclick="check(this)"></td>
            <td id ="2" onclick="check(this)"></td>
            <td id ="3" onclick="check(this)"></td>
        </tr>

        <tr>
            <td id ="4" onclick="check(this)"></td>
            <td id ="5" onclick="check(this)"></td>
            <td id ="6" onclick="check(this)"></td>
        </tr>

        <tr>
            <td id ="7" onclick="check(this)"></td>
            <td id ="8" onclick="check(this)"></td>
            <td id ="9" onclick="check(this)"></td>
        </tr>
        </tabel>
    

</div>
    `;

function addBody() {
  document.body.innerHTML = body;
  document.getElementById("turn").textContent = roundTurn;
}
