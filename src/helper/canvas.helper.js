const testHelper = require("./test.helper");

function initialize(cfg) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = cfg.size;
    canvas.height = cfg.size;

    // backgroundColor
    ctx.fillStyle = cfg.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (cfg.test) {
        testHelper.drawCross(ctx, cfg.size);
    }

    return { canvas, ctx };
}

module.exports = {
    initialize
};