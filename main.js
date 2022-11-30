canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    // taking color from input box
    // additional activity starts here:
    color = document.getElementById("color_input").value;
    // additional activity ends here

    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;

    console.log("X = " + mouseX + ", Y = " + mouseY);
    circle(mouseX, mouseY)
}

function circle(x, y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
