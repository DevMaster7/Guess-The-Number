let a = document.getElementById("heading")
let b = document.getElementById("btn")

function guessTheNumber() {
    let rand = (Math.floor(Math.random() * 100) + 1);
    console.log("Random Number is " + rand);
    alert("You Have 10 Tries To Guess Correct Number!\nBetween 1-100. All The Best!")
    let chance = 1;
    let x;
    let remain;
    do {
        b.style.display = "none"
        a.style.display = "flex"
        remain = chance++
        x = prompt("Enter Your Guess\nThis is Your " + (remain < 10 ? remain : remain == 10 ? "Last" : " Last") + (remain == 1 ? "st" : remain == 2 ? "nd" : remain == 3 ? "rd" : remain == 10 ? "" : "th") + " Try.")
        x = Number.parseInt(x)

        if (x < 1 || x > 100) {
            alert("Invalid Guess")
        }
        else if (x == rand) {
            a.innerHTML = (remain == 1 ? "Beacuse Of Your Luck🥳" : remain > 8 ? "Noob🤣" : "Great👏") + " You Guess The Correct Number In " + (remain < 10 ? remain : remain == 10 ? "Last" : " Last") + (remain == 1 ? "st" : remain == 2 ? "nd" : remain == 3 ? "rd" : remain == 10 ? "" : "th") + " Try.<br>Please Wait for 5 Seconds To Play Again!";
            setTimeout(() => {
                b.style.display = "flex"
                a.style.display = "none"
            }, 5000);

        }
        else if (remain > 9) {
            a.innerHTML = "Sorry You Failed The Challenge!<br>Please Wait for 5 Seconds To Play Again"
            setTimeout(() => {
                b.style.display = "flex"
                a.style.display = "none"
            }, 5000);
        }
        else if (x < rand) {
            alert("Your Guess Is Lower Than Actual Number")
        }
        else if (x > rand) {
            alert("Your Guess Is Greater Than Actual Number")
        }
        else {
            alert("Enter The Value Of Your Guess")
            remain = chance--
        }
    } while (x != rand && remain < 10);
}

b.addEventListener("click", function () {
    guessTheNumber()
})