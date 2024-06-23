// test/unit/imageProcessor.spec.js
const assert = require('assert');
const { resizeImage } = require('../../src/utils/imageProcessor');

describe('Image Processor', () => {
    it('should resize the image to given dimensions', async () => {
        const result = await resizeImage('/path/to/your/image.jpg', 100, 100);
        assert.strictEqual(result.width, 100);
        assert.strictEqual(result.height, 100);
    });

    it('should throw an error for invalid dimensions', async () => {
        try {
            await resizeImage('/path/to/your/image.jpg', -100, 100);
        } catch (error) {
            assert.strictEqual(error.message, 'Invalid dimensions or file path');
        }
    });

    it('should throw an error for invalid file path', async () => {
        try {
            await resizeImage('/invalid/path/image.jpg', 100, 100);
        } catch (error) {
            assert.strictEqual(error.message, 'Invalid dimensions or file path');
        }
    });
});
