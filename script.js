<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate Generator</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newake+DEMO:wght@700&display=swap">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
        }

        #certificateCanvas {
            max-width: 100%;
            margin-top: 20px;
        }

        #downloadButton {
            margin-top: 20px;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Certificate Generator</h1>
    <form id="certificateForm">
        <label for="name">Name:</label>
        <input type="text" id="name" required>

        <label for="class">Class:</label>
        <input type="text" id="class" required>

        <button type="button" onclick="generateCertificate()">Generate Certificate</button>
    </form>

    <canvas id="certificateCanvas" style="display: none;"></canvas>

    <button id="downloadButton" onclick="downloadCertificate()" disabled>Download Certificate</button>

    <script>
        function generateCertificate() {
            const name = document.getElementById('name').value;
            const className = document.getElementById('class').value;

            // Load certificate image
            const certificateImage = new Image();
            certificateImage.onload = function () {
                // Create a canvas to draw on
                const canvas = document.getElementById('certificateCanvas');
                const ctx = canvas.getContext('2d');

                // Set canvas size to match the image size
                canvas.width = certificateImage.width;
                canvas.height = certificateImage.height;

                // Draw the certificate image
                ctx.drawImage(certificateImage, 0, 0);

                // Customize certificate text
                ctx.font = 'bold 24px "Newake DEMO"';  // Customize font style and size
                ctx.fillStyle = '#d6d6ff';
                ctx.fillText(name, 750, 550);  // Adjust coordinates based on your certificate template
                ctx.fillText(className, 750, 700);  // Adjust coordinates based on your certificate template

                // Display the canvas
                canvas.style.display = 'block';

                // Enable download button
                document.getElementById('downloadButton').disabled = false;
            };

            // Set the source of the certificate image
            certificateImage.src = 'png.jpeg';  // Update with your certificate image URL
        }

        function downloadCertificate() {
            const canvas = document.getElementById('certificateCanvas');
            const downloadButton = document.getElementById('downloadButton');

            // Convert canvas to data URL and trigger download
            const dataUrl = canvas.toDataURL();
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'certificate_generated.png';
            link.click();

            // Hide canvas and disable download button
            canvas.style.display = 'none';
            downloadButton.disabled = true;
        }
    </script>
</body>
</html>
