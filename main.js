
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
    print.innerHTML= array[0].join(" &nbsp; ")+'<br/>'+array[1].join(" &nbsp; ")+'<br/>'+array[2].join(" &nbsp; ")+'<br/>'+array[3].join(" &nbsp; ")+'<br/>'+array[4].join(" &nbsp; ")+'<br/>'+array[5].join(" &nbsp; ")+'<br/>'+array[6].join(" &nbsp; ")+'<br/>'+array[7].join(" &nbsp; ")+'<br/>'+array[8].join(" &nbsp; ")+'<br/>'+array[9].join(" &nbsp; ")+'<br/>'+array[10].join(" &nbsp; ")+'<br/>'+array[11].join(" &nbsp; ")+'<br/>'+array[12].join(" &nbsp; ")+'<br/>'+array[13].join(" &nbsp; ")+'<br/>'+array[14].join(" &nbsp; ")+'<br/>'+array[15].join(" &nbsp; ")+'<br/>'+array[16].join(" &nbsp; ")+'<br/>'+array[17].join(" &nbsp; ")+'<br/>'+array[18].join(" &nbsp; ")+'<br/>'+array[19].join(" &nbsp; ")+'<br/>'+array[20].join(" &nbsp; ")+'<br/>'+array[21].join(" &nbsp; ")+'<br/>'+array[22].join(" &nbsp; ")+'<br/>'+array[23].join(" &nbsp; ")+'<br/>'+array[24].join(" &nbsp; ")+'<br/>'+array[25].join(" &nbsp; ")+'<br/>'+array[26].join(" &nbsp; ")+'<br/>'+array[27].join(" &nbsp; ")+'<br/>'+array[28].join(" &nbsp; ")+'<br/>'+array[29].join(" &nbsp; ");

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


button.addEventListener('click',function(e){
    clickButton();
})

// function myFunction(){
//     clickButton();    
// }
