function drawCross(ctx, size) {
    ctx.beginPath();

    // vertical line
    ctx.moveTo(size / 2, 0);
    ctx.lineTo(size / 2, size);

    // horizontal line
    ctx.moveTo(0, size / 2);
    ctx.lineTo(size, size / 2);

    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
}

module.exports = {
    drawCross
};