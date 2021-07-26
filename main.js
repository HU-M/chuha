canvas = document.getElementsById('myCanvas');
ctx = canvas.getContext("2d");

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
}

if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
{
    alphabetKey();
    document.getElementById("d1").innerHTML="You pressed alphabet key";
    console.log("alphabet key");
}

function alphabetKey()
{
     img_image="Alpkey.png";
     add();
}