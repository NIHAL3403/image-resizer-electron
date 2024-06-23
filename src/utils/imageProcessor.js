// src/utils/imageProcessor.js
const sharp = require('sharp');

async function resizeImage(filePath, width, height) {
    try {
        const data = await sharp(filePath)
            .resize(width, height)
            .toBuffer();
        return { width, height, data };
    } catch (error) {
        throw new Error('Invalid dimensions or file path');
    }
}

module.exports = {
    resizeImage
};
