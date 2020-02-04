console.log("it's work ?");




let box1 = document.querySelector('#r1c1');
let box2 = document.querySelector('#r1c2');
let box3 = document.querySelector('#r1c3');
let box4 = document.querySelector('#r2c1');
let box5 = document.querySelector('#r2c2');
let box6 = document.querySelector('#r2c3');
let box7 = document.querySelector('#r3c1');
let box8 = document.querySelector('#r3c2');
let box9 = document.querySelector('#r3c3');




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
if (count ==9){
    window.alert("Tie")

}
}

const resetButton = document.querySelector('#imgReset')

const reset = function () {

    document.querySelector('#imgReset')
    location.reload(true)
    count = 0;

};
resetButton.addEventListener('click', reset)






box1.addEventListener('click', clickEvent);
box2.addEventListener('click', clickEvent);
box3.addEventListener('click', clickEvent);
box4.addEventListener('click', clickEvent);
box5.addEventListener('click', clickEvent);
box6.addEventListener('click', clickEvent);
box7.addEventListener('click', clickEvent);
box8.addEventListener('click', clickEvent);
box9.addEventListener('click', clickEvent);








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



let winning = function () {



    for (let x = 0; x < arr.length; x++) {

        const string1 = "#"+arr[x][0];
        const string2 = "#"+arr[x][1];
        const string3 = "#"+arr[x][2];
        if (document.querySelector(string1).classList.value.includes('x') &&
            document.querySelector(string2).classList.value.includes('x') &&
            document.querySelector(string3).classList.value.includes('x')) {
            console.log(string1+" "+string2+" "+string3)
            window.alert("X Win")
            reset();
        } else
        if (document.querySelector(string1).classList.value.includes('o') &&
            document.querySelector(string2).classList.value.includes('o') &&
            document.querySelector(string3).classList.value.includes('o')) {
                console.log(string1+" "+string2+" "+string3)
            window.alert("O Win")
            reset();

        }


    }
}




