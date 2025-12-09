var btn = document.querySelector('button');
var main = document.querySelector('main');

btn.addEventListener('click',function(){
    var div = document.createElement('div');
    div.innerHTML = "";
    console.log(div);

    var x = Math.random()*100;
    var y = Math.random()*100;
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);

    div.style.height = '50px';
    div.style.width = '50px';
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    div.style.left = x + "%";
    div.style.top = y + "%";

    main.appendChild(div);
})

// setTimeout(function(){ //Delay
//     console.log("Hello")
// },2000);

// setInterval(function(){ //Controlled Loop
//     console.log("HI")
// },1000);
var a=0;
var int = setInterval(function(){
    a++;
    console.log(a);
},50);

setTimeout(function(){
    clearInterval(int)

},1000);

var grow = 0;
var btn = document.querySelector('button');
var inner = document.querySelector('.inner');

var num = 50 + Math.floor(Math.random()*50);

//For random timings we can use num
btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'
    setInterval(function(){
        grow++;
        h2.innerHTML = grow+ "%";
        inner.style.width = grow + '%';

    },500)
    setTimeout(function(){
        clearInterval(int);
        btn.innerHTML = 'downloaded';
        btn.style.opacity = 0.5
        btn.style.pointerEvents = 'none'//This disables the button to use
    },50000)
})