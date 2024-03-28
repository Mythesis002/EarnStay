// functions/store-data.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    const { productUrl, phoneNumber, associateTag, timestamp } = JSON.parse(event.body);
    const data = `${productUrl}, ${phoneNumber}, ${associateTag}, ${timestamp}\n`;

    try {
        fs.appendFileSync(path.join(__dirname, '../data.csv'), data);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data stored successfully' }),
        };
    } catch (err) {
        console.error('Error writing to file:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to store data' }),
        };
    }
};
