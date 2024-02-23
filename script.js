function draw(event) {
    let canvas = document.getElementById("imgCanvas");
    let ctx = canvas.getContext("2d");
    let rect = canvas.getBoundingClientRect();

    let posX = event.clientX;
    let posY = event.clientY;

    ctx.fillStyle = "#eeaaaa"

    ctx.arc(posX, posY, 50, 0, 2 * Math.PI)
}