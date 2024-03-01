function draw(event) {
    // Get the canvas reference
    const canvas = document.getElementById("imgCanvas");
    const ctx = canvas.getContext("2d");

    // Get the click coordinates relative to the canvas
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;

    // Side length of the hexagon (adjust as needed)
    const sideLength = 50;

    // Start drawing path
    ctx.beginPath();

    // Move to the top point of the hexagon
    ctx.moveTo(x, y - sideLength);

    // Loop through each corner of the hexagon
    for (let i = 0; i < 6; i++) {
        // Calculate angle for each corner
        const angle = Math.PI * 2 * i / 6;
        // Calculate new X and Y coordinates based on angle and side length
        const newX = x + sideLength * Math.cos(angle);
        const newY = y + sideLength * Math.sin(angle);
        // Move to the next corner
        ctx.lineTo(newX, newY);
    }

    // Close the path and fill the hexagon with a color
    ctx.closePath();
    ctx.fillStyle = "red"; // Change color as desired
    ctx.fill();
  }