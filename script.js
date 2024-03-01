function draw(event) {
    // Get canvas and context
    const canvas = document.getElementById("imgCanvas");
    const ctx = canvas.getContext("2d");

    // Get click coordinates relative to canvas
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;

    // Define side length for hexagon
    const sideLength = 50;

    // Implement hexagon drawing logic (see explanation below)
    drawHexagon(ctx, x, y, sideLength);
}

// Function to draw hexagon (explained below)
function drawHexagon(ctx, x, y, sideLength) {
    // ... // Replace with the code provided in the previous response

    // Replace the "..." with the following code from the previous response:
    ctx.beginPath();
    ctx.moveTo(x, y - sideLength);

    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2) / 6 * i;
        const newX = x + sideLength * Math.cos(angle);
        const newY = y + sideLength * Math.sin(angle);
        ctx.lineTo(newX, newY);
    }

    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
}  