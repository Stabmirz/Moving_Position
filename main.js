
var button = document.querySelector('.start');
var print = document.querySelector('.matrix');
// var div = document.querySelector('.button');

var preX = 0;
var preY = 0;

var array= new Array(30);
for (var i = 0; i < 30; i++){
array[i] = new Array(30).fill( 0 );
}

function clickButton(){ 
    button.style.visibility='hidden';
    print.innerHTML = creatTable();
    
    // div.innerHTML = '<button id="refresh" style="padding: 0.5vw;color: white;font-weight: bold;background-image: linear-gradient(-225deg, #2B86C5 0%, #562B7C 52%, #FF3CAC 100%);">Refresh</button>';
    // div.style.visibility = 'visible';

    setTimeout(() => {
        var posX =  15;
        var posY = 15;
        array[preX][preY]= 0;
        posX +=Math.floor(Math.random()* 2);
        posY +=Math.floor(Math.random()* 2);
        array[posX][posY] = 'M';
        preX = posX;
        preY = posY;
        clickButton();
    }, 1000);
    
}
function creatTable() {
    var result = [];
    for (var j = 0; j < 30; j++) {
        result += array[j].join(" &nbsp; ") + '<br/>';
    }
    return result;
}

button.addEventListener('click',function(e){
    clickButton();
})

// function myFunction(){
//     clickButton();    
// }