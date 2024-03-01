function draw(event) {
    let canvas = document.getElementById("imgCanvas");
    let ctx = canvas.getContext("2d");
    let rect = canvas.getBoundingClientRect();

    let posX = event.clientX - rect.left;
    let posY = event.clientY - rect.top;

    ctx.fillStyle = "#ff22f8"

    ctx.beginPath();

    ctx.arc(posX, posY, 50, 0, 2 * Math.PI);

    ctx.fill();
}