
function greet (name, byeText){
    console.log("Hello  Good Morning "  + name + " "+ byeText );
}
setTimeout(greet, 3000, "Gayu" , "Take care");


function hello (name, byeText){
    console.log("Hello   "  + name + " "+ byeText );
}
timeOut= setTimeout(hello, 3000, "Raaz" , "how are you");
clearTimeout(timeOut);



//setInterval
function abc (name, byeText){
    console.log(" how are you bro  "  + name + " "+ byeText );
}
setInterval(abc, 2000 , "Sam" , "by see you soon");

function displayTime (){
    time = new Date ();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime,1000)