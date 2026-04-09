// rock paper scissor game logic

function rps(prsN1, prsN2){
    if(prsN1 === prsN2) return "drow";

    if(prsN1 === "rock" && prsN2 === "scissor") return "prsN1";
    if(prsN1 === "scissor" && prsN2 === "paper") return "prsN1";
    if(prsN1 === "paper" && prsN2 === "rock") return "prsN1";

    return "prsN2";

}

console.log(rps("rock", "paper"));