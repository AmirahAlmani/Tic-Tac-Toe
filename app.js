console.log("it's work ?"); 


let game = document.querySelectorAll(".game"); //To call game class in html file

let soundClick = new Audio('clickB.mp3'); // To add sound whin user clike
let soundWin = new Audio('win.mp3'); // To add sound when X or O win
let soundLose=new Audio('lose.mp3'); //To add sound when lose or tie

let count = 0; //To let now clickEvent when number %2 =0 is x and when number 2% != 0 is o

function clickEvent() {

    
    if (count % 2 === 0) {
        soundClick.play(); //play sound when clikc x
        console.log("click x");
        this.classList += " x"; //to add value
        this.removeEventListener('click', clickEvent) //


    } else {
        soundClick.play(); //play sound when clikc o
        console.log("click o");
        this.classList += " o";
        this.removeEventListener('click', clickEvent)


    }

    count++; // add 1 to count to swich between x and o

    winning(); //call function
} 


for (let i = 0; i < game.length; i++){


    game[i].addEventListener('click', clickEvent);
} //To addEventListener for each element 




let arr = [
    ["#r1c1", '#r1c2', '#r1c3'],
    ['#r2c1', '#r2c2', '#r2c3'],
    ['#r3c1', '#r3c2', '#r3c3'],
    ['#r1c1', '#r2c1', '#r3c1'],
    ['#r1c2', '#r2c2', '#r3c2'],
    ['#r1c3', '#r2c3', '#r3c3'],
    ['#r1c1', '#r2c2', '#r3c3'],
    ['#r1c3', '#r2c2', '#r3c1']
];
//array condition of win





//function to define winner
let winning = function () {



    for (let x = 0; x < arr.length; x++) {

        const string1 =  arr[x][0]; // Two dimension array To select index [x] and index [0]
        const string2 =  arr[x][1]; // Two dimension array To select index [x] and index [1]
        const string3 =  arr[x][2]; // Two dimension array To select index [x] and index [2]
        if (document.querySelector(string1).classList.value.includes('x') &&
            document.querySelector(string2).classList.value.includes('x') &&
            document.querySelector(string3).classList.value.includes('x')) {
                soundWin.play();
            console.log(string1 + " " + string2 + " " + string3)

            soundWin.play();
            setTimeout(function(){ alert("X Win"); }, 200);
            
            reset();
        } else
        if (document.querySelector(string1).classList.value.includes('o') &&
            document.querySelector(string2).classList.value.includes('o') &&
            document.querySelector(string3).classList.value.includes('o')) {
                soundWin.play();
            console.log(string1 + " " + string2 + " " + string3)
            
            soundWin.play();
            setTimeout(function(){ alert("O Win"); }, 200);
         
            reset();
        } 
      }  // To compare the value of string1 and string2 and string3 if equals to x or o and alert the winner



    if (count == 9) {
        soundLose.play();
        setTimeout(function(){ alert("Tie"); }, 200);
        reset();
    } // If boxes all full end game and start agane
}




const resetButton = document.querySelector('#imgReset') //To select img reset



const reset = function () {
    count = 0;

    for(let i=0 ; i<game.length ; i++){
        game[i].addEventListener('click', clickEvent);
        game[i].classList = "game";
    }
} //To reset all values and start agane


resetButton.addEventListener('click', reset) 