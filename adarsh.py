<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Affiliate Link Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        label {
            display: block;
            margin-bottom: 5px;
        }
        input[type="text"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
        .affiliate-link {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>Affiliate Link Generator</h1>
    <div class="container">
        <form id="affiliateForm">
            <label for="productUrl">Product URL:</label>
            <input type="text" id="productUrl" name="productUrl" placeholder="Enter product URL">

            <label for="associateTag">Associate Tag:</label>
            <input type="text" id="associateTag" name="associateTag" placeholder="Enter your Associate Tag">

            <input type="submit" value="Generate Affiliate Link">
        </form>

        <div id="affiliateLink" class="affiliate-link" style="display: none;">
            <label for="generatedLink">Generated Affiliate Link:</label>
            <input type="text" id="generatedLink" readonly>
        </div>
    </div>

    <script>
        document.getElementById('affiliateForm').addEventListener('submit', function(event) {
            event.preventDefault();
            generateAffiliateLink();
        });

        function generateAffiliateLink() {
            var productUrl = document.getElementById('productUrl').value;
            var associateTag = document.getElementById('associateTag').value;

            var affiliateLink = productUrl + '?tag=' + associateTag;

            document.getElementById('generatedLink').value = affiliateLink;
            document.getElementById('affiliateLink').style.display = 'block';
        }
    </script>
</body>
</html>
