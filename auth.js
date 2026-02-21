function startGame() {
    let name = document.getElementById("username").value;

    if(name.trim() === ""){
        alert("Please enter your name");
        return;
    }

    // name save in browser
    localStorage.setItem("playerName", name);

    // go to game page
    window.location.href = "game.html";
}