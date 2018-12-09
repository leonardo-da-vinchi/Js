let canvas = document.getElementsByTagName("canvas")[0];
    let ctx = canvas.getContext("2d");
    let blueColor, blackColor, redColor, yellowColor, greenColor;

    ctx.lineWidth = 12;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc(110,110,100,0,Math.PI*2, false);
    ctx.stroke();

    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(325,110,100,0,Math.PI*2, false);
    ctx.stroke();

    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(540,110,100,0,Math.PI*2, false);
    ctx.stroke();

    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.arc(217.5,217.5,100,0,Math.PI*2, false);
    ctx.stroke();

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc(432.5,217.5,100,0,Math.PI*2, false);
    ctx.stroke();


setTimeout(function() {
    let i = -2000;
    setTimeout(function(){
        canvas.width = canvas.width;
        ctx.lineWidth = 12;

        blueColor = "rgb(" + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ")"
        ctx.strokeStyle = blueColor;
        ctx.beginPath();
        ctx.arc(110,110,100,0,Math.PI*2, false);
        ctx.stroke();
        
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.arc(325,110,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.arc(540,110,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = "yellow";
        ctx.beginPath();
        ctx.arc(217.5,217.5,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.arc(432.5,217.5,100,0,Math.PI*2, false);
        ctx.stroke();

        }
        
        ,i+=2000);


    setTimeout(function(){
        canvas.width = canvas.width;
        ctx.lineWidth = 12;

        ctx.strokeStyle = blueColor;
        ctx.beginPath();
        ctx.arc(110,110,100,0,Math.PI*2, false);
        ctx.stroke();

        blackColor = "rgb(" + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ")"
        ctx.strokeStyle = blackColor;
        ctx.beginPath();
        ctx.arc(325,110,100,0,Math.PI*2, false);
        ctx.stroke();
        
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.arc(540,110,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = "yellow";
        ctx.beginPath();
        ctx.arc(217.5,217.5,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.arc(432.5,217.5,100,0,Math.PI*2, false);
        ctx.stroke();
        
        }
        
        , i+=2000);


    setTimeout(function(){
        canvas.width = canvas.width;
        ctx.lineWidth = 12;

        ctx.strokeStyle = blueColor;
        ctx.beginPath();
        ctx.arc(110,110,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = blackColor;
        ctx.beginPath();
        ctx.arc(325,110,100,0,Math.PI*2, false);
        ctx.stroke();

        redColor = "rgb(" + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ")"
        ctx.strokeStyle = redColor;
        ctx.beginPath();
        ctx.arc(540,110,100,0,Math.PI*2, false);
        ctx.stroke();
        
        ctx.strokeStyle = "yellow";
        ctx.beginPath();
        ctx.arc(217.5,217.5,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.arc(432.5,217.5,100,0,Math.PI*2, false);
        ctx.stroke();
        
        }
        
        , i+=2000);


    setTimeout(function(){
        canvas.width = canvas.width;
        ctx.lineWidth = 12;

        ctx.strokeStyle = blueColor;
        ctx.beginPath();
        ctx.arc(110,110,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = blackColor;
        ctx.beginPath();
        ctx.arc(325,110,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = redColor;
        ctx.beginPath();
        ctx.arc(540,110,100,0,Math.PI*2, false);
        ctx.stroke();

        yellowColor = "rgb(" + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ")"
        ctx.strokeStyle = yellowColor;
        ctx.beginPath();
        ctx.arc(217.5,217.5,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.arc(432.5,217.5,100,0,Math.PI*2, false);
        ctx.stroke();
               
        }
        
        , i+=2000);


    setTimeout(function(){
        canvas.width = canvas.width;
        ctx.lineWidth = 12;

        ctx.strokeStyle = blueColor;
        ctx.beginPath();
        ctx.arc(110,110,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = blackColor;
        ctx.beginPath();
        ctx.arc(325,110,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = redColor;
        ctx.beginPath();
        ctx.arc(540,110,100,0,Math.PI*2, false);
        ctx.stroke();

        ctx.strokeStyle = yellowColor;
        ctx.beginPath();
        ctx.arc(217.5,217.5,100,0,Math.PI*2, false);
        ctx.stroke();

        greenColor = "rgb(" + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ")"
        ctx.strokeStyle = greenColor;
        ctx.beginPath();
        ctx.arc(432.5,217.5,100,0,Math.PI*2, false);
        ctx.stroke();
          
        }
        
        , i+=2000);

}, 5000);

