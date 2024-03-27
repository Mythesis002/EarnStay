const fs = require('fs');
const path = require('path');

// Define your serverless function
module.exports = async function (context, req) {
    // Parse request body
    const { productUrl, phoneNumber, associateTag, timestamp } = req.body;
    const data = `${productUrl}, ${phoneNumber}, ${associateTag}, ${timestamp}\n`;

    // Write data to file
    fs.appendFile(path.join(__dirname, '..', 'data.csv'), data, (err) => {
        if (err) {
            context.res = {
                status: 500,
                body: JSON.stringify({ error: 'Failed to store data' })
            };
        } else {
            context.res = {
                status: 200,
                body: JSON.stringify({ message: 'Data stored successfully' })
            };
        }
        context.done();
    });
};
