console.log("it's work ?");


let game = document.querySelectorAll(".game");



let count = 0;

function clickEvent() {

    // let target = event.target;
    if (count % 2 === 0) {
        console.log("click x");
        this.classList += " x";
        this.removeEventListener('click', clickEvent)


    } else {
        console.log("click o");
        this.classList += " o";
        this.removeEventListener('click', clickEvent)


    }

    count++;

    winning();
}

const resetButton = document.querySelector('#imgReset')


function leaveEvent() {
    this.classList = "game";
  }

const reset = function () {

    count = 0;
    

    for(let i=0 ; i<game.length ; i++){
        game[i].addEventListener('click', clickEvent);
        game[i].classList = "game";
    }
}


resetButton.addEventListener('click', reset)



let arr = [
    ["r1c1", 'r1c2', 'r1c3'],
    ['r2c1', 'r2c2', 'r2c3'],
    ['r3c1', 'r3c2', 'r3c3'],
    ['r1c1', 'r2c1', 'r3c1'],
    ['r1c2', 'r2c2', 'r3c2'],
    ['r1c3', 'r2c3', 'r3c3'],
    ['r1c1', 'r2c2', 'r3c3'],
    ['r1c3', 'r2c2', 'r3c1']
];



for (let i = 0; i < game.length; i++){


    game[i].addEventListener('click', clickEvent);
}



let winning = function () {



    for (let x = 0; x < arr.length; x++) {

        const string1 = "#" + arr[x][0];
        const string2 = "#" + arr[x][1];
        const string3 = "#" + arr[x][2];
        if (document.querySelector(string1).classList.value.includes('x') &&
            document.querySelector(string2).classList.value.includes('x') &&
            document.querySelector(string3).classList.value.includes('x')) {
            console.log(string1 + " " + string2 + " " + string3)
            window.alert("X Win")
            reset();
        } else
        if (document.querySelector(string1).classList.value.includes('o') &&
            document.querySelector(string2).classList.value.includes('o') &&
            document.querySelector(string3).classList.value.includes('o')) {
            console.log(string1 + " " + string2 + " " + string3)
            window.alert("O Win")
            reset();
        } 
    }
    if (count == 9) {
        window.alert("Tie")
        reset();
    }
}