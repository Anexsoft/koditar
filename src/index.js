const configHelper = require("./helper/config.helper.js");
const canvasHelper = require("./helper/canvas.helper");
const textHelper = require("./helper/text.helper");

module.exports = {
    render(text, cfg) {
        if (!text || !text.length) {
            throw new Error('Empty text supplied');
        }

        cfg = cfg || {};

        // set default configuration
        configHelper(cfg);

        // prepare canvas config
        const { canvas, ctx } = canvasHelper.initialize(cfg);

        // set text
        textHelper.set(ctx, text, cfg);

        // render image
        const dataUrl = canvas.toDataURL('image/png');

        // destroy canvas
        canvas.remove();

        return dataUrl;
    }
};