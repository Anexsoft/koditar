const assert = require('assert');
const configHelper = require('./config.helper');

describe('Config.Helper', () => {
    it('default cfg', () => {
        const cfg = {};

        configHelper(cfg);

        assert.strictEqual(cfg.size, 300);
        assert.strictEqual(cfg.bgColor, '#eee');
        assert.strictEqual(cfg.color, '#222');
        assert.strictEqual(cfg.fontFamily, 'Calibri');
        assert.strictEqual(cfg.fontSize, 100);
    });

    it('some properties are defined', () => {
        const cfg = {};

        cfg.size = 200;
        cfg.bgColor = 'blue';

        configHelper(cfg);

        assert.strictEqual(cfg.size, 200);
        assert.strictEqual(cfg.bgColor, 'blue');
        assert.strictEqual(cfg.color, '#222');
        assert.strictEqual(cfg.fontFamily, 'Calibri');
        assert.strictEqual(cfg.fontSize, 100);
    });
});