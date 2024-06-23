// test/specs/image-resizer.spec.js
const assert = require('assert');

describe('Image Resizer App', () => {
    it('should open the app window', async () => {
        await browser.url('http://localhost:3000');
        const title = await browser.getTitle();
        assert.strictEqual(title, 'Image Resizer');
    });

    it('should allow selecting an image', async () => {
        const fileInput = await $('#file-input');
        await fileInput.setValue('/path/to/your/image.jpg');
        const fileName = await $('#file-name').getText();
        assert.strictEqual(fileName, 'image.jpg');
    });

    it('should resize the image', async () => {
        const widthInput = await $('#width-input');
        await widthInput.setValue('100');
        const heightInput = await $('#height-input');
        await heightInput.setValue('100');
        const resizeButton = await $('#resize-button');
        await resizeButton.click();
        const resultMessage = await $('#result-message').getText();
        assert.strictEqual(resultMessage, 'Image resized to 100x100');
    });
});
