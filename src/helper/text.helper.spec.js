const assert = require('assert');
const textHelper = require('./text.helper');

describe('Text.Helper', () => {
    it('full name', () => {
        const text = textHelper.sanitize('Eduardo Rodríguez Patiño');
        assert.strictEqual(text, 'ER');
    });

    it('full name with 2 names', () => {
        const text = textHelper.sanitize('Juan Ricardo Gonzales Miranda');
        assert.strictEqual(text, 'JR');
    });

    it('full name with spaces', () => {
        const text = textHelper.sanitize(' Eduardo  Rodríguez   Patiño  ');
        assert.strictEqual(text, 'ER');
    });

    it('first name', () => {
        const text = textHelper.sanitize('Eduardo');
        assert.strictEqual(text, 'ED');
    });

    it('lowercase passed', () => {
        const text = textHelper.sanitize('eduardo rodriguez');
        assert.strictEqual(text, 'ER');
    });

    it('non-alphabetic character passed', () => {
        const text = textHelper.sanitize('1-');
        assert.strictEqual(text, '1-');
    });

    it('one letter passed', () => {
        const text = textHelper.sanitize('A');
        assert.strictEqual(text, 'A');
    });
});