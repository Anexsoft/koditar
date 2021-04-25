function sanitize(text) {
    text = text.trim().toUpperCase();

    // remove double space
    text = text.replace(/ +(?= )/g, '');

    if (text.length > 2) {
        const parts = text.split(' ');

        // when the text passed is the full name. Ex: Juan Perez
        if (parts.length >= 2) {
            // get the first letter of each part
            text = parts[0][0] + parts[1][0];
        }
        // when the text passed is the first name. Ex: Juan
        else if (parts) {
            text = parts[0][0];
        }
    }

    // remove accent mark
    text = text.replaceAll('Á', 'A')
        .replaceAll('É', 'E')
        .replaceAll('Í', 'I')
        .replaceAll('Ó', 'O')
        .replaceAll('Ú', 'U');

    return text.toUpperCase();
}

function set(ctx, text, cfg) {
    // sanitize text
    text = sanitize(text);

    ctx.font = `${cfg.fontSize} ${cfg.size / 2}px ${cfg.fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = cfg.color;

    // TODO: remove factor height hack (cfg.size * 0.037)
    // This is used to calculate the middle position of the axis Y but is not 100% correct
    ctx.fillText(text, cfg.size / 2, cfg.size / 2 + (cfg.size * 0.037), cfg.width);
}

module.exports = {
    sanitize,
    set
};