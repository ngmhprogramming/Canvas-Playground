window.onload = function(){
    /*
    var myCanvas = document.getElementById("myCanvas"); //find the element
    var ctx = myCanvas.getContext("2d"); //drawing object
    
    ctx.fillStyle = "#FF0000"; //set the fillstyle to red
    ctx.fillRect(0,0,500,500); //draws and fills a rectangle on the canvas
    
    ctx.moveTo(0,0); //set original coords
    ctx.lineTo(500,500); //set end coords *BROKEN* it's working lesson learnt never to set canvas width and height in style.css
    ctx.stroke(); //draw the line
    
    ctx.beginPath(); //begin circle
    ctx.arc(250,250,80,0,2*Math.PI); //circle path
    ctx.stroke(); //draw the circle
    
    // Create gradient
    var grd = ctx.createLinearGradient(0,0,500,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,500,500);
    
    // Create radial gradient
    var radgrd = ctx.createRadialGradient(250,250,50,250,250,500);
    radgrd.addColorStop(0,"red");
    radgrd.addColorStop(1,"white");

    // Fill with radial gradient
    ctx.fillStyle = radgrd;
    ctx.fillRect(0,0,500,500);
    
    ctx.font = "64px Arial";
    ctx.fillText("Hello World",100,250);
    
    ctx.font = "64px Arial";
    ctx.strokeText("Hello World",100,250);
    
    ctx.font = "64px Comic Sans MS";
    ctx.fillStyle = "green";
    ctx.textAlign = "center";
    ctx.fillText("Hello World", 250, 250);
    
    var img = document.getElementById("canvasLogo");
    ctx.drawImage(img, 150, 110);
    */
    document.getElementById("canvasLogo").style.display = 'none';
    rubikscubes();
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rubikscubes(){
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    document.getElementById("rubiksCube").width = "100";
    var cube = document.getElementById("rubiksCube");
    var range = prompt("How many cubes do you want?");
    var option = prompt("Select mode by choosing option number:\n1) One-time\n2) Every 3 seconds\n3) Custom interval in seconds");
    function generate(){
        for(i = 0; i < range; i++){
            var xCoord = getRandomInt(-250,500);
            var yCoord = getRandomInt(-250,500);
            ctx.drawImage(cube, xCoord, yCoord);
        }
    }
    var regenerating;
    function regeneratingFunction(delay){
        regenerating = setInterval(generate, delay);
    }
    if(option == "1"){
        generate();
    } else if(option == "2"){
        regeneratingFunction(3000);
    } else if(option == "3"){
        var delay = parseInt(prompt("Enter delay in seconds."))*1000;
        regeneratingFunction(delay);
    }
}